import { Download, Filter } from "lucide-react";
import { Button } from "../ui/Button";

export function ReviewHeader({ totalCount }: { totalCount: number }) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-5">
      <div>
        <div className="flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(82,210,115,0.45)]" />
          <h1 className="text-4xl font-bold tracking-tight text-white">Active Review</h1>
        </div>
        <p className="mt-2 text-sm text-zinc-400">
          Review contracts quickly. Use ↑ ↓ to navigate, Enter to open, R to add context.
        </p>
        <p className="mt-3 text-xs font-medium uppercase tracking-[0.14em] text-zinc-600">
          {totalCount} contracts in current queue
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Button type="button">
          <Filter aria-hidden="true" className="h-4 w-4" />
          Filter
        </Button>
        <Button type="button">
          <Download aria-hidden="true" className="h-4 w-4" />
          Export
        </Button>
      </div>
    </div>
  );
}
