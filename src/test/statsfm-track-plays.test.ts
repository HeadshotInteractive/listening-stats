import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
	_clearStatsFmTrackIdCache,
	fetchStatsFmLifetimeTrackStreams,
	fetchStatsFmPeriodTrackStreams,
	readStatsFmUsername,
} from "../shared/api/statsfm-track-plays";
import { LS_KEYS } from "../shared/constants/storage-keys";

const TRACK = { uri: "spotify:track:xyz", name: "Song", artistName: "Band" };

function searchHit(id: number, name: string, artist: string, spotifyIds: string[] = []) {
	return { id, name, artists: [{ name: artist }], externalIds: { spotify: spotifyIds } };
}

function searchResponse(...tracks: unknown[]) {
	return jsonResponse({ items: { tracks, artists: [], albums: [] } });
}

function jsonResponse(body: unknown, ok = true): Response {
	return { ok, json: async () => body } as unknown as Response;
}

describe("statsfm-track-plays", () => {
	const fetchMock = vi.fn();

	beforeEach(() => {
		fetchMock.mockReset();
		vi.stubGlobal("fetch", fetchMock);
		localStorage.clear();
		_clearStatsFmTrackIdCache();
	});

	afterEach(() => {
		vi.unstubAllGlobals();
	});

	describe("readStatsFmUsername", () => {
		it("returns the username from stored config", () => {
			localStorage.setItem(LS_KEYS.STATSFM_CONFIG, JSON.stringify({ username: "alice" }));
			expect(readStatsFmUsername()).toBe("alice");
		});

		it("returns null when config is missing", () => {
			expect(readStatsFmUsername()).toBeNull();
		});

		it("returns null on malformed JSON", () => {
			localStorage.setItem(LS_KEYS.STATSFM_CONFIG, "{nope");
			expect(readStatsFmUsername()).toBeNull();
		});

		it("returns null when username is not a string", () => {
			localStorage.setItem(LS_KEYS.STATSFM_CONFIG, JSON.stringify({ username: 42 }));
			expect(readStatsFmUsername()).toBeNull();
		});
	});

	describe("fetchStatsFmLifetimeTrackStreams", () => {
		it("resolves the track by title search, then reads per-track lifetime stats", async () => {
			fetchMock
				.mockResolvedValueOnce(searchResponse(searchHit(11, "Song", "Band", ["xyz"])))
				.mockResolvedValueOnce(jsonResponse({ items: { "11": { count: 37, durationMs: 1 } } }));
			await expect(fetchStatsFmLifetimeTrackStreams("alice", TRACK)).resolves.toBe(37);
			const searchUrl = String(fetchMock.mock.calls[0][0]);
			expect(searchUrl).toContain("/search/elastic");
			expect(searchUrl).toContain("query=Song");
			const statsUrl = String(fetchMock.mock.calls[1][0]);
			expect(statsUrl).toContain("/users/alice/streams/tracks/list/stats");
			expect(statsUrl).toContain("ids=11");
			expect(statsUrl).toContain("range=lifetime");
		});

		it("sums streams across every stats.fm id of the same song and ignores other artists", async () => {
			fetchMock
				.mockResolvedValueOnce(
					searchResponse(
						searchHit(1, "Song", "Band", ["xyz"]),
						searchHit(2, "song", "band", []),
						searchHit(3, "Song", "Someone Else", ["other"]),
					),
				)
				.mockResolvedValueOnce(jsonResponse({ items: { "1": { count: 5 }, "2": { count: 4 } } }));
			await expect(fetchStatsFmLifetimeTrackStreams("alice", TRACK)).resolves.toBe(9);
			expect(String(fetchMock.mock.calls[1][0])).toContain("ids=1%2C2");
		});

		it("matches on the Spotify id even when the artist name is localized differently", async () => {
			fetchMock
				.mockResolvedValueOnce(searchResponse(searchHit(7, "Song", "Translated Name", ["xyz"])))
				.mockResolvedValueOnce(jsonResponse({ items: { "7": { count: 2 } } }));
			await expect(fetchStatsFmLifetimeTrackStreams("alice", TRACK)).resolves.toBe(2);
		});

		it("returns 0 when stats.fm knows the track but the user has no streams", async () => {
			fetchMock
				.mockResolvedValueOnce(searchResponse(searchHit(11, "Song", "Band")))
				.mockResolvedValueOnce(jsonResponse({ items: {} }));
			await expect(fetchStatsFmLifetimeTrackStreams("alice", TRACK)).resolves.toBe(0);
		});

		it("returns null when no search hit matches the track", async () => {
			fetchMock.mockResolvedValueOnce(searchResponse(searchHit(3, "Other", "Band", ["nope"])));
			await expect(fetchStatsFmLifetimeTrackStreams("alice", TRACK)).resolves.toBeNull();
			expect(fetchMock).toHaveBeenCalledTimes(1);
		});

		it("caches the resolved ids per track", async () => {
			fetchMock
				.mockResolvedValueOnce(searchResponse(searchHit(11, "Song", "Band")))
				.mockResolvedValueOnce(jsonResponse({ items: { "11": { count: 1 } } }))
				.mockResolvedValueOnce(jsonResponse({ items: { "11": { count: 2 } } }));
			await fetchStatsFmLifetimeTrackStreams("alice", TRACK);
			await expect(fetchStatsFmLifetimeTrackStreams("alice", TRACK)).resolves.toBe(2);
			expect(fetchMock).toHaveBeenCalledTimes(3);
		});

		it("returns null without fetching for a non-track URI", async () => {
			await expect(
				fetchStatsFmLifetimeTrackStreams("alice", { ...TRACK, uri: "spotify:episode:xyz" }),
			).resolves.toBeNull();
			expect(fetchMock).not.toHaveBeenCalled();
		});

		it("returns null without fetching for a blank username", async () => {
			await expect(fetchStatsFmLifetimeTrackStreams("  ", TRACK)).resolves.toBeNull();
			expect(fetchMock).not.toHaveBeenCalled();
		});

		it("returns null when fetch rejects", async () => {
			fetchMock.mockRejectedValueOnce(new Error("offline"));
			await expect(fetchStatsFmLifetimeTrackStreams("alice", TRACK)).resolves.toBeNull();
		});

		it("returns null on a non-2xx stats response", async () => {
			fetchMock
				.mockResolvedValueOnce(searchResponse(searchHit(11, "Song", "Band")))
				.mockResolvedValueOnce(jsonResponse({}, false));
			await expect(fetchStatsFmLifetimeTrackStreams("alice", TRACK)).resolves.toBeNull();
		});

		it("percent-encodes the username in the request path", async () => {
			fetchMock
				.mockResolvedValueOnce(searchResponse(searchHit(11, "Song", "Band")))
				.mockResolvedValueOnce(jsonResponse({ items: {} }));
			await fetchStatsFmLifetimeTrackStreams("a/b?c", TRACK);
			expect(String(fetchMock.mock.calls[1][0])).toContain("/users/a%2Fb%3Fc/streams/");
		});
	});

	describe("fetchStatsFmPeriodTrackStreams", () => {
		it("maps dashboard period ids to stats.fm ranges", async () => {
			fetchMock
				.mockResolvedValueOnce(searchResponse(searchHit(11, "Song", "Band")))
				.mockResolvedValueOnce(jsonResponse({ items: { "11": { count: 9 } } }));
			await expect(fetchStatsFmPeriodTrackStreams("alice", TRACK, "sfm-weeks")).resolves.toBe(9);
			expect(String(fetchMock.mock.calls[1][0])).toContain("range=weeks");
		});

		it("returns null without fetching for unknown period ids", async () => {
			await expect(fetchStatsFmPeriodTrackStreams("alice", TRACK, "local-week")).resolves.toBeNull();
			expect(fetchMock).not.toHaveBeenCalled();
		});
	});
});
