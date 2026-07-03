import type { ContextDrafts, StoredContextEntries } from "../types/contract";

export const STORAGE_KEYS = {
  selectedContractId: "vectorai_selected_contract_id",
  contextEntries: "vectorai_context_entries",
  contextDrafts: "vectorai_context_drafts"
} as const;

export function readStorageValue<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch (error) {
    console.warn(`Unable to read localStorage key ${key}`, error);
    return fallback;
  }
}

export function writeStorageValue<T>(key: string, value: T) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn(`Unable to write localStorage key ${key}`, error);
  }
}

export function readSelectedContractId() {
  try {
    return window.localStorage.getItem(STORAGE_KEYS.selectedContractId);
  } catch (error) {
    console.warn("Unable to read selected contract", error);
    return null;
  }
}

export function writeSelectedContractId(contractId: string) {
  try {
    window.localStorage.setItem(STORAGE_KEYS.selectedContractId, contractId);
  } catch (error) {
    console.warn("Unable to store selected contract", error);
  }
}

export function readStoredContextEntries() {
  return readStorageValue<StoredContextEntries>(STORAGE_KEYS.contextEntries, {});
}

export function readStoredDrafts() {
  return readStorageValue<ContextDrafts>(STORAGE_KEYS.contextDrafts, {});
}
