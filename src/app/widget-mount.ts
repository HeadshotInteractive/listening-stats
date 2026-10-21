import { ErrorBoundary } from "./components/ErrorBoundary";
import { PlaybarWidget } from "./components/PlaybarWidget";
import { injectStyles } from "./styles";

const WIDGET_ROOT_ID = "listening-stats-widget-root";

// Preferred first: the now-playing widget itself (class name, then the test id
// newer clients keep). The left playbar region is only a last resort - it also
// holds the cover art, so a pill placed there can overlap the artwork.
const PLAYBAR_SELECTORS = [
	".main-nowPlayingWidget-nowPlaying",
	'[data-testid="now-playing-widget"]',
	".main-nowPlayingBar-left",
];
const PREFERRED_MOUNT = PLAYBAR_SELECTORS.slice(0, 2).join(", ");

export function findPlaybarMount(): HTMLElement | null {
	for (const sel of PLAYBAR_SELECTORS) {
		const el = document.querySelector<HTMLElement>(sel);
		if (el) return el;
	}
	return null;
}

function startAttachLoop(container: HTMLElement): void {
	let observer: MutationObserver | null = null;
	let interval: ReturnType<typeof setInterval> | null = null;

	const tryAttach = () => {
		// A newer root took over (e.g. ours was detached and the other bundle
		// mounted again). Retire instead of fighting it for the last-child slot.
		const owner = document.getElementById(WIDGET_ROOT_ID);
		if (owner && owner !== container) {
			observer?.disconnect();
			if (interval !== null) clearInterval(interval);
			container.remove();
			return;
		}

		const parent = container.parentElement;
		// Cheap steady-state check: skip the selector queries while the widget
		// sits in the now-playing widget proper.
		if (container.isConnected && parent?.matches(PREFERRED_MOUNT)) {
			// Spotify re-renders the cover art / track info and can insert those
			// nodes after ours, which pushes the pill in front of the artwork.
			// Keep it the last child so it stays after the track info.
			if (container.nextElementSibling) parent.appendChild(container);
			return;
		}
		// Detached, parked on <body>, or in the fallback region: (re)attach to
		// the best mount available now.
		const playbar = findPlaybarMount();
		if (!playbar) return;
		if (parent === playbar && !container.nextElementSibling) return;
		playbar.appendChild(container);
	};
	tryAttach();

	observer = new MutationObserver(tryAttach);
	observer.observe(document.body, { childList: true, subtree: true });
	interval = setInterval(tryAttach, 2000);
}

/**
 * Mount the playbar widget. Idempotent across bundles: the extension and the
 * app bundle each carry their own copy of this module, so the guard is the
 * DOM id, not module state. The extension mounts at startup; the app's
 * render() call is a fallback for setups where the extension did not load.
 */
export function mountPlaybarWidget(): void {
	if (document.getElementById(WIDGET_ROOT_ID)) return;

	injectStyles();

	const container = document.createElement("div");
	container.id = WIDGET_ROOT_ID;
	container.style.display = "contents";
	document.body.appendChild(container);
	startAttachLoop(container);

	const element = Spicetify.React.createElement(
		ErrorBoundary,
		{ silent: true },
		Spicetify.React.createElement(PlaybarWidget),
	);

	// React 19 removes ReactDOM.render; prefer createRoot when the client
	// exposes it and keep the legacy call as fallback for React 18 builds.
	const reactDom = Spicetify.ReactDOM as unknown as {
		render?: (el: unknown, target: Element) => void;
		createRoot?: (target: Element) => { render(el: unknown): void };
	};
	if (typeof reactDom.createRoot === "function") {
		reactDom.createRoot(container).render(element);
	} else {
		reactDom.render?.(element, container);
	}
}
