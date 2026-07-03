import type { ContractRecord } from "../../types/contract";
import { RiskBadge } from "../ui/Badge";

export function ContractFacts({ contract }: { contract: ContractRecord }) {
  const facts = [
    ["Vendor", contract.vendor],
    ["Contract Type", contract.type],
    ["Effective Date", contract.effectiveDate],
    ["Risk", contract.risk],
    ["Last Reviewed", contract.lastReviewed],
    ["Previous Reviews", String(contract.previousReviews)]
  ];

  return (
    <section className="space-y-3">
      <h3 className="text-[10px] font-semibold uppercase tracking-[0.08em] text-zinc-500">
        Contract Facts
      </h3>
      <div className="rounded-xl border border-white/[0.07] bg-white/[0.03]">
        {facts.map(([label, value]) => (
          <div
            className="flex items-center justify-between gap-5 border-b border-white/[0.07] px-4 py-3 last:border-b-0"
            key={label}
          >
            <span className="text-sm text-zinc-500">{label}</span>
            {label === "Risk" ? (
              <RiskBadge risk={contract.risk} />
            ) : (
              <span className="text-right text-sm font-medium text-zinc-100">{value}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
