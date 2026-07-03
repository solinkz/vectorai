import type { ContractRecord } from "../../types/contract";
import { RiskBadge } from "../ui/Badge";
import { ContextDots } from "./ContextDots";

type ContractRowProps = {
  contract: ContractRecord;
  index: number;
  selected: boolean;
  opened: boolean;
  onSelect: () => void;
};

export function ContractRow({ contract, index, selected, opened, onSelect }: ContractRowProps) {
  return (
    <button
      aria-selected={selected}
      className={`relative grid h-16 w-full min-w-[1000px] grid-cols-[52px_1.5fr_1fr_1fr_126px_74px_102px_126px] items-center border-t border-white/[0.07] px-4 text-left text-sm text-zinc-200 transition duration-150 ease-out focus:outline-none focus:ring-2 focus:ring-blue-500/70 ${
        selected
          ? "bg-white/[0.055] shadow-glow"
          : "bg-transparent hover:bg-white/[0.04] active:bg-white/[0.06]"
      } ${opened ? "ring-2 ring-emerald-400/50" : ""}`}
      onClick={onSelect}
      role="option"
      type="button"
    >
      {selected ? (
        <span className="absolute left-0 top-0 h-full w-1 rounded-r-full bg-brand-blue" />
      ) : null}
      <span className="font-medium text-zinc-500">{String(index + 1).padStart(2, "0")}</span>
      <span className="min-w-0 pr-5">
        <span className="block truncate font-semibold text-white">{contract.contractName}</span>
        <span className="mt-1 block truncate text-xs text-zinc-500">{contract.shortName}</span>
      </span>
      <span className="truncate pr-5 text-zinc-300">{contract.vendor}</span>
      <span className="truncate pr-5 text-zinc-400">{contract.type}</span>
      <span className="text-zinc-400">{contract.effectiveDate}</span>
      <span className="min-w-0 overflow-hidden">
        <RiskBadge compact risk={contract.risk} />
      </span>
      <span className="min-w-0">
        <ContextDots count={contract.contextEntries.length} />
      </span>
      <span className="text-zinc-500">{contract.lastReviewed}</span>
    </button>
  );
}
