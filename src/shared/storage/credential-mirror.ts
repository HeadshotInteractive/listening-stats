import Dexie from "dexie";
import { EVENTS } from "../constants/events";
import { LS_KEYS } from "../constants/storage-keys";

/**
 * Provider connections live in localStorage, which some Spotify / Spicetify
 * updates reset while IndexedDB (play history) survives. These keys are
 * mirrored into IndexedDB so a reset no longer forces users to reconnect
 * stats.fm or re-enter their Last.fm API key.
 */
const MIRRORED_KEYS = [
	LS_KEYS.STATSFM_CONFIG,
	LS_KEYS.LASTFM_CONFIG,
	LS_KEYS.LASTFM_API_KEY,
	LS_KEYS.ACTIVE_PROVIDER,
] as const;

const MIRROR_DB_NAME = "listening-stats-credentials";

function openMirror(): Dexie {
	const mirror = new Dexie(MIRROR_DB_NAME);
	mirror.version(1).stores({ kv: "" });
	return mirror;
}

/** Copies the current values into the mirror, dropping keys the user removed (disconnect). */
export async function mirrorCredentials(): Promise<void> {
	const mirror = openMirror();
	try {
		const kv = mirror.table<string, string>("kv");
		await mirror.transaction("rw", kv, async () => {
			for (const key of MIRRORED_KEYS) {
				const value = localStorage.getItem(key);
				if (value === null) await kv.delete(key);
				else await kv.put(value, key);
			}
		});
	} finally {
		mirror.close();
	}
}

/**
 * Startup: puts back mirrored keys that localStorage lost and refreshes the
 * mirror from the keys still present. Never deletes mirror entries - a missing
 * key here means a reset, not a disconnect. Returns true when anything was restored.
 */
export async function restoreCredentials(): Promise<boolean> {
	const mirror = openMirror();
	let restored = false;
	try {
		const kv = mirror.table<string, string>("kv");
		await mirror.transaction("rw", kv, async () => {
			for (const key of MIRRORED_KEYS) {
				const value = localStorage.getItem(key);
				if (value !== null) {
					await kv.put(value, key);
					continue;
				}
				const saved = await kv.get(key);
				if (typeof saved === "string") {
					localStorage.setItem(key, saved);
					restored = true;
				}
			}
		});
	} finally {
		mirror.close();
	}
	return restored;
}

let listening = false;

/**
 * Restores lost provider keys, then keeps the mirror in sync: every connect,
 * disconnect and provider switch dispatches PROVIDER_CHANGED. Safe to call
 * from both bundles; failures only cost the safety net, never startup.
 */
export async function startCredentialMirror(): Promise<boolean> {
	if (!listening) {
		listening = true;
		window.addEventListener(EVENTS.PROVIDER_CHANGED, () => {
			mirrorCredentials().catch((err) => console.warn("[listening-stats] credential mirror failed:", err));
		});
	}
	try {
		return await restoreCredentials();
	} catch (err) {
		console.warn("[listening-stats] credential restore failed:", err);
		return false;
	}
}

/** Used by "wipe all data" so a wipe is not undone by the next startup. */
export async function deleteCredentialMirror(): Promise<void> {
	await Dexie.delete(MIRROR_DB_NAME);
}
