import { Download, Filter } from "lucide-react";
import { Button } from "../ui/Button";

export function ReviewHeader({ totalCount }: { totalCount: number }) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-5">
      <div>
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-bold tracking-tight text-white">Active Review</h1>
          <span className="translate-y-1 rounded-md border border-white/[0.07] bg-white/[0.03] px-2 py-0.5 text-[11px] font-semibold text-zinc-500">
            {totalCount}
          </span>
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(82,210,115,0.45)]" />
        </div>
        <p className="mt-2 text-sm text-zinc-400">
          Review contracts quickly while the context panel stays in sync.
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
