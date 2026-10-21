import { LS_KEYS } from "../constants/storage-keys";

const BASE = "https://api.stats.fm/api/v1";

/** Search results to scan for the playing track; generic titles ("Intro") need a deep page. */
const SEARCH_LIMIT = 50;

export interface NowPlayingTrack {
	uri: string;
	name: string;
	artistName: string;
}

interface SfmSearchTrack {
	id: number;
	name: string;
	artists?: Array<{ name: string }>;
	externalIds?: { spotify?: string[] };
}

function spotifyIdFromTrackUri(uri: string): string | null {
	const m = uri.match(/^spotify:track:(.+)$/i);
	return m ? m[1] : null;
}

function statsFmRangeForDashboardPeriod(periodId: string): string | null {
	const map: Record<string, string> = {
		"sfm-today": "today",
		"sfm-weeks": "weeks",
		"sfm-months": "months",
		"sfm-all-time": "lifetime",
	};
	return map[periodId] ?? null;
}

async function getJson<T>(url: URL): Promise<T | null> {
	try {
		const res = await fetch(url.toString(), { headers: { Accept: "application/json" } });
		if (!res.ok) return null;
		return (await res.json()) as T;
	} catch {
		return null;
	}
}

const norm = (s: string) => s.trim().toLowerCase();

/** Spotify URI -> stats.fm track ids. Failed requests are not cached. */
const trackIdCache = new Map<string, number[]>();

/**
 * stats.fm has no lookup by Spotify id (`/tracks/{id}?type=spotify` now rejects
 * non-numeric ids), and its Spotify ids are incomplete, so the track is found
 * by title search: a hit carrying our Spotify id, or the same title by one of
 * the same artists. One song can exist under several stats.fm ids (single vs
 * album release); all matches are kept so their streams can be summed.
 */
async function resolveStatsFmTrackIds(track: NowPlayingTrack): Promise<number[] | null> {
	const cached = trackIdCache.get(track.uri);
	if (cached) return cached;

	const spotifyId = spotifyIdFromTrackUri(track.uri);
	if (!spotifyId || !track.name.trim()) return null;

	const url = new URL(`${BASE}/search/elastic`);
	url.searchParams.set("query", track.name.trim());
	url.searchParams.set("type", "track");
	url.searchParams.set("limit", String(SEARCH_LIMIT));
	const json = await getJson<{ items?: { tracks?: SfmSearchTrack[] } }>(url);
	const results = json?.items?.tracks;
	if (!Array.isArray(results)) return null;

	const title = norm(track.name);
	const artist = norm(track.artistName);
	const ids = new Set<number>();
	for (const t of results) {
		const sameSpotifyTrack = t.externalIds?.spotify?.includes(spotifyId) ?? false;
		const sameSong = norm(t.name) === title && !!artist && (t.artists ?? []).some((a) => norm(a.name) === artist);
		if ((sameSpotifyTrack || sameSong) && Number.isInteger(t.id)) ids.add(t.id);
	}
	const resolved = [...ids];
	trackIdCache.set(track.uri, resolved);
	return resolved;
}

/**
 * The user's stream count for the track in a stats.fm range. Uses the per-track
 * stream stats endpoint (available on free accounts too). Returns null when
 * the track is unknown to stats.fm or a request fails, so callers can fall back
 * to local history; 0 means stats.fm knows the track but has no streams.
 */
async function fetchStatsFmTrackStreams(
	username: string,
	track: NowPlayingTrack,
	range: string,
): Promise<number | null> {
	const user = username.trim();
	if (!user) return null;
	const ids = await resolveStatsFmTrackIds(track);
	if (!ids || ids.length === 0) return null;

	const url = new URL(`${BASE}/users/${encodeURIComponent(user)}/streams/tracks/list/stats`);
	url.searchParams.set("ids", ids.join(","));
	url.searchParams.set("range", range);
	const json = await getJson<{ items?: Record<string, { count?: number }> }>(url);
	if (!json?.items || typeof json.items !== "object") return null;
	// Ids with no streams in the range are omitted from the response.
	return Object.values(json.items).reduce((sum, s) => sum + (Number(s?.count) || 0), 0);
}

export async function fetchStatsFmLifetimeTrackStreams(
	username: string,
	track: NowPlayingTrack,
): Promise<number | null> {
	return fetchStatsFmTrackStreams(username, track, "lifetime");
}

export async function fetchStatsFmPeriodTrackStreams(
	username: string,
	track: NowPlayingTrack,
	dashboardPeriodId: string,
): Promise<number | null> {
	const range = statsFmRangeForDashboardPeriod(dashboardPeriodId);
	if (!range) return null;
	return fetchStatsFmTrackStreams(username, track, range);
}

export function readStatsFmAccount(): { username: string; isPlus: boolean } | null {
	try {
		const raw = localStorage.getItem(LS_KEYS.STATSFM_CONFIG);
		if (!raw) return null;
		const parsed = JSON.parse(raw) as { username?: string; isPlus?: boolean };
		return typeof parsed.username === "string" ? { username: parsed.username, isPlus: parsed.isPlus === true } : null;
	} catch {
		return null;
	}
}

export function readStatsFmUsername(): string | null {
	return readStatsFmAccount()?.username ?? null;
}

/** Test-only: forget resolved stats.fm track ids. */
export function _clearStatsFmTrackIdCache(): void {
	trackIdCache.clear();
}
