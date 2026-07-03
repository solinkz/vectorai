import { useCallback, useEffect, useMemo, useState } from "react";
import { INITIAL_CONTRACTS } from "../data/contracts";
import type {
  ContextDrafts,
  ContractRecord,
  KnowledgeEntry,
  StoredContextEntries
} from "../types/contract";
import { filterContracts } from "../utils/contractFilters";
import {
  readSelectedContractId,
  readStoredContextEntries,
  readStoredDrafts,
  STORAGE_KEYS,
  writeSelectedContractId,
  writeStorageValue
} from "../utils/storage";

function hydrateContracts(seedContracts: ContractRecord[], storedEntries: StoredContextEntries) {
  return seedContracts.map((contract) => ({
    ...contract,
    contextEntries: [...contract.contextEntries, ...(storedEntries[contract.id] ?? [])]
  }));
}

export function useActiveReview() {
  const [contracts, setContracts] = useState<ContractRecord[]>(() =>
    hydrateContracts(INITIAL_CONTRACTS, readStoredContextEntries())
  );
  const [drafts, setDrafts] = useState<ContextDrafts>(() => readStoredDrafts());
  const [selectedIndex, setSelectedIndex] = useState(() => {
    const storedId = readSelectedContractId();
    if (!storedId) return 0;
    return Math.max(
      0,
      INITIAL_CONTRACTS.findIndex((contract) => contract.id === storedId)
    );
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [openedContractId, setOpenedContractId] = useState<string | null>(null);
  const [prefetchedIds, setPrefetchedIds] = useState<string[]>([]);

  const filteredContracts = useMemo(
    () => filterContracts(contracts, searchQuery),
    [contracts, searchQuery]
  );

  const selectedContract = filteredContracts[selectedIndex] ?? filteredContracts[0] ?? null;

  const selectContract = useCallback(
    (index: number) => {
      const bounded = Math.max(0, Math.min(index, filteredContracts.length - 1));
      setSelectedIndex(bounded);
      const contract = filteredContracts[bounded];
      if (contract) {
        setOpenedContractId(null);
        writeSelectedContractId(contract.id);
      }
    },
    [filteredContracts]
  );

  const moveNext = useCallback(() => {
    setSelectedIndex((current) => {
      const next = Math.min(current + 1, filteredContracts.length - 1);
      const contract = filteredContracts[next];
      if (contract) writeSelectedContractId(contract.id);
      setOpenedContractId(null);
      return next;
    });
  }, [filteredContracts]);

  const movePrevious = useCallback(() => {
    setSelectedIndex((current) => {
      const previous = Math.max(current - 1, 0);
      const contract = filteredContracts[previous];
      if (contract) writeSelectedContractId(contract.id);
      setOpenedContractId(null);
      return previous;
    });
  }, [filteredContracts]);

  const updateSearchQuery = useCallback((query: string) => {
    setSearchQuery(query);
    setSelectedIndex(0);
    setOpenedContractId(null);
  }, []);

  const updateDraft = useCallback((contractId: string, value: string) => {
    setDrafts((current) => ({ ...current, [contractId]: value }));
  }, []);

  const saveContext = useCallback(
    (contractId: string) => {
      const text = drafts[contractId]?.trim();
      if (!text) return false;

      const newEntry: KnowledgeEntry = {
        id: `user-ctx-${Date.now()}`,
        contractId,
        author: "You",
        role: "Reviewer",
        updatedAt: "Just now",
        text,
        tag: "Operational",
        createdAtISO: new Date().toISOString()
      };

      setContracts((current) =>
        current.map((contract) =>
          contract.id === contractId
            ? {
                ...contract,
                contextEntries: [...contract.contextEntries, newEntry],
                lastReviewed: "Just now",
                previousReviews: contract.previousReviews + 1
              }
            : contract
        )
      );

      const storedEntries = readStoredContextEntries();
      writeStorageValue<StoredContextEntries>(STORAGE_KEYS.contextEntries, {
        ...storedEntries,
        [contractId]: [...(storedEntries[contractId] ?? []), newEntry]
      });

      setDrafts((current) => {
        const next = { ...current, [contractId]: "" };
        writeStorageValue<ContextDrafts>(STORAGE_KEYS.contextDrafts, next);
        return next;
      });

      return true;
    },
    [drafts]
  );

  const openSelected = useCallback(() => {
    if (!selectedContract) return;
    setOpenedContractId(selectedContract.id);
    window.setTimeout(() => setOpenedContractId(null), 1000);
  }, [selectedContract]);

  useEffect(() => {
    writeStorageValue<ContextDrafts>(STORAGE_KEYS.contextDrafts, drafts);
  }, [drafts]);

  useEffect(() => {
    if (selectedIndex > filteredContracts.length - 1) {
      setSelectedIndex(0);
    }
  }, [filteredContracts.length, selectedIndex]);

  useEffect(() => {
    if (!selectedContract) return;
    writeSelectedContractId(selectedContract.id);
    const start = Math.max(0, selectedIndex - 3);
    const end = Math.min(filteredContracts.length, selectedIndex + 4);
    setPrefetchedIds(filteredContracts.slice(start, end).map((contract) => contract.id));
  }, [filteredContracts, selectedContract, selectedIndex]);

  return {
    contracts,
    drafts,
    filteredContracts,
    openedContractId,
    prefetchedIds,
    searchQuery,
    selectedContract,
    selectedIndex,
    moveNext,
    movePrevious,
    openSelected,
    saveContext,
    selectContract,
    updateDraft,
    updateSearchQuery
  };
}
