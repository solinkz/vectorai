import type { RiskLevel } from "../../types/contract";

type RiskBadgeProps = {
  risk: RiskLevel;
  compact?: boolean;
};

export function RiskBadge({ risk, compact = false }: RiskBadgeProps) {
  const classes = {
    High: "border-red-500/30 bg-red-500/15 text-red-400",
    Medium: "border-amber-500/30 bg-amber-500/15 text-amber-300",
    Low: "border-emerald-500/30 bg-emerald-500/15 text-emerald-400"
  } satisfies Record<RiskLevel, string>;

  return (
    <span
      className={`inline-flex items-center justify-center rounded-md border font-semibold ${classes[risk]} ${
        compact ? "h-7 w-[62px] px-1 text-[11px]" : "px-2 py-1 text-xs"
      }`}
    >
      {risk}
    </span>
  );
}

export function TagBadge({ tag }: { tag: string }) {
  const classes: Record<string, string> = {
    Strategic: "border-sky-400/20 bg-sky-400/10 text-sky-300",
    "Risk Alert": "border-red-400/20 bg-red-400/10 text-red-300",
    Operational: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
    Legal: "border-indigo-400/20 bg-indigo-400/10 text-indigo-300",
    Compliance: "border-amber-400/20 bg-amber-400/10 text-amber-300"
  };

  return (
    <span
      className={`mt-3 inline-flex rounded-md border px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] ${
        classes[tag] ?? "border-white/[0.07] bg-white/[0.035] text-zinc-300"
      }`}
    >
      {tag}
    </span>
  );
}
