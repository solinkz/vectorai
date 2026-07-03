import type { RefObject } from "react";
import type { ContractRecord } from "../../types/contract";
import { ContractRow } from "./ContractRow";

type ContractTableProps = {
  contracts: ContractRecord[];
  selectedIndex: number;
  openedContractId: string | null;
  hasMore: boolean;
  loadingMore: boolean;
  listRef: RefObject<HTMLDivElement>;
  onLoadMore: () => void;
  onSelect: (index: number) => void;
};

const columns = [
  "ID",
  "Contract",
  "Vendor",
  "Type",
  "Effective Date",
  "Risk",
  "Context",
  "Last Reviewed"
];

export function ContractTable({
  contracts,
  selectedIndex,
  openedContractId,
  hasMore,
  loadingMore,
  listRef,
  onLoadMore,
  onSelect
}: ContractTableProps) {
  function handleScroll(event: React.UIEvent<HTMLDivElement>) {
    const target = event.currentTarget;
    const nearBottom = target.scrollTop + target.clientHeight >= target.scrollHeight - 160;
    if (nearBottom && hasMore && !loadingMore) {
      onLoadMore();
    }
  }

  return (
    <section className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
      <div className="overflow-x-auto thin-scrollbar">
        <div className="grid min-w-[1040px] grid-cols-[56px_1.5fr_1fr_1fr_130px_90px_110px_130px] px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">
          {columns.map((column) => (
            <span key={column}>{column}</span>
          ))}
        </div>
        <div
          aria-label="Contract review queue"
          className="max-h-[calc(100vh-19rem)] min-h-[520px] overflow-y-auto thin-scrollbar focus:outline-none focus:ring-2 focus:ring-blue-500/60"
          onScroll={handleScroll}
          ref={listRef}
          role="listbox"
          tabIndex={-1}
        >
          {contracts.length > 0 ? (
            contracts.map((contract, index) => (
              <ContractRow
                contract={contract}
                index={index}
                key={contract.id}
                onSelect={() => onSelect(index)}
                opened={openedContractId === contract.id}
                selected={selectedIndex === index}
              />
            ))
          ) : (
            <div className="border-t border-white/10 px-5 py-14 text-center">
              <p className="text-sm font-semibold text-white">No contracts match your search.</p>
              <p className="mt-2 text-sm text-zinc-500">Try a vendor, contract type, or risk level.</p>
            </div>
          )}
          {hasMore ? (
            <div className="border-t border-white/10 px-5 py-4 text-center text-xs font-medium text-zinc-500">
              {loadingMore ? "Loading more contracts..." : "Scroll for more contracts"}
            </div>
          ) : contracts.length > 0 ? (
            <div className="border-t border-white/10 px-5 py-4 text-center text-xs font-medium text-zinc-600">
              End of review queue
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
