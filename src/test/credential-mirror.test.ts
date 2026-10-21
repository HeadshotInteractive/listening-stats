import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { EVENTS } from "../shared/constants/events";
import { LS_KEYS } from "../shared/constants/storage-keys";
import {
	deleteCredentialMirror,
	mirrorCredentials,
	restoreCredentials,
	startCredentialMirror,
} from "../shared/storage/credential-mirror";

const SFM = JSON.stringify({ username: "alice", isPlus: true, connectedAt: 1, lastValidated: 1 });
const LFM = JSON.stringify({ apiKey: "k", username: "bob" });

describe("credential mirror", () => {
	beforeEach(async () => {
		localStorage.clear();
		await deleteCredentialMirror();
	});

	afterEach(() => {
		localStorage.clear();
	});

	it("restores provider keys after localStorage is reset", async () => {
		localStorage.setItem(LS_KEYS.STATSFM_CONFIG, SFM);
		localStorage.setItem(LS_KEYS.LASTFM_CONFIG, LFM);
		localStorage.setItem(LS_KEYS.LASTFM_API_KEY, "k");
		localStorage.setItem(LS_KEYS.ACTIVE_PROVIDER, "statsfm");
		await expect(restoreCredentials()).resolves.toBe(false); // nothing missing, mirror refreshed

		localStorage.clear(); // client update wiped localStorage

		await expect(restoreCredentials()).resolves.toBe(true);
		expect(localStorage.getItem(LS_KEYS.STATSFM_CONFIG)).toBe(SFM);
		expect(localStorage.getItem(LS_KEYS.LASTFM_CONFIG)).toBe(LFM);
		expect(localStorage.getItem(LS_KEYS.LASTFM_API_KEY)).toBe("k");
		expect(localStorage.getItem(LS_KEYS.ACTIVE_PROVIDER)).toBe("statsfm");
	});

	it("does not bring back a provider the user disconnected", async () => {
		localStorage.setItem(LS_KEYS.STATSFM_CONFIG, SFM);
		await mirrorCredentials();

		localStorage.removeItem(LS_KEYS.STATSFM_CONFIG); // disconnect
		await mirrorCredentials();

		await expect(restoreCredentials()).resolves.toBe(false);
		expect(localStorage.getItem(LS_KEYS.STATSFM_CONFIG)).toBeNull();
	});

	it("mirrors on PROVIDER_CHANGED once started", async () => {
		await startCredentialMirror();
		localStorage.setItem(LS_KEYS.LASTFM_CONFIG, LFM);
		window.dispatchEvent(new CustomEvent(EVENTS.PROVIDER_CHANGED));
		await new Promise((r) => setTimeout(r, 20));

		localStorage.clear();
		await expect(restoreCredentials()).resolves.toBe(true);
		expect(localStorage.getItem(LS_KEYS.LASTFM_CONFIG)).toBe(LFM);
	});

	it("deleteCredentialMirror makes a wipe stick", async () => {
		localStorage.setItem(LS_KEYS.STATSFM_CONFIG, SFM);
		await mirrorCredentials();
		await deleteCredentialMirror();
		localStorage.clear();
		await expect(restoreCredentials()).resolves.toBe(false);
	});
});
