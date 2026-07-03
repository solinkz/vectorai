import { useCallback, useEffect, useRef } from "react";
import { TopNav } from "../layout/TopNav";
import { RightContextPanel } from "../context-panel/RightContextPanel";
import { useActiveReview } from "../../hooks/useActiveReview";
import { useKeyboardShortcuts } from "../../hooks/useKeyboardShortcuts";
import { useLazyContracts } from "../../hooks/useLazyContracts";
import { ContractTable } from "./ContractTable";
import { ReviewHeader } from "./ReviewHeader";
import { ShortcutBar } from "./ShortcutBar";

export function ActiveReviewPage() {
  const {
    filteredContracts,
    openedContractId,
    prefetchedIds,
    drafts,
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
  } = useActiveReview();

  const { visibleCount, hasMore, loadingMore, loadMore, resetVisibleCount } =
    useLazyContracts(filteredContracts.length);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const rememberTextareaRef = useRef<HTMLTextAreaElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const visibleContracts = filteredContracts.slice(0, visibleCount);
  const currentDraft = selectedContract ? drafts[selectedContract.id] ?? "" : "";

  const focusList = useCallback(() => {
    listRef.current?.focus();
  }, []);

  const focusRemember = useCallback(() => {
    rememberTextareaRef.current?.focus();
  }, []);

  const focusSearch = useCallback(() => {
    searchInputRef.current?.focus();
  }, []);

  const saveSelectedContext = useCallback(() => {
    if (!selectedContract) return;
    const saved = saveContext(selectedContract.id);
    if (saved) focusList();
  }, [focusList, saveContext, selectedContract]);

  useKeyboardShortcuts({
    onNext: moveNext,
    onPrevious: movePrevious,
    onFocusRemember: focusRemember,
    onFocusSearch: focusSearch,
    onReturnToList: focusList,
    onSaveContext: saveSelectedContext,
    onOpenSelected: openSelected
  });

  useEffect(() => {
    resetVisibleCount();
  }, [resetVisibleCount, searchQuery]);

  useEffect(() => {
    if (selectedIndex >= visibleCount - 2 && hasMore) {
      loadMore();
    }
  }, [hasMore, loadMore, selectedIndex, visibleCount]);

  useEffect(() => {
    const selectedRow = listRef.current?.querySelector<HTMLElement>(
      `[aria-selected="true"]`
    );
    selectedRow?.scrollIntoView({ block: "nearest" });
  }, [selectedIndex, visibleCount]);

  return (
    <div className="min-h-screen bg-surface-950 font-sans text-zinc-50">
      <TopNav
        onSearchChange={updateSearchQuery}
        searchInputRef={searchInputRef}
        searchQuery={searchQuery}
      />
      <div className="grid min-h-[calc(100vh-4rem)] grid-cols-1 xl:grid-cols-[minmax(0,1fr)_440px]">
        <main className="min-w-0 px-8 py-7">
          <div className="space-y-8">
            <ReviewHeader totalCount={filteredContracts.length} />
            <ContractTable
              contracts={visibleContracts}
              hasMore={hasMore}
              listRef={listRef}
              loadingMore={loadingMore}
              onLoadMore={loadMore}
              onSelect={selectContract}
              openedContractId={openedContractId}
              selectedIndex={selectedIndex}
            />
            <ShortcutBar />
            <div className="sr-only" aria-live="polite">
              Prefetched adjacent contracts: {prefetchedIds.join(", ")}
            </div>
          </div>
        </main>
        <RightContextPanel
          contract={selectedContract}
          draft={currentDraft}
          onDraftChange={updateDraft}
          onSave={saveSelectedContext}
          textareaRef={rememberTextareaRef}
        />
      </div>
    </div>
  );
}
