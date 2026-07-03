import type { KnowledgeEntry } from "../../types/contract";
import { TagBadge } from "../ui/Badge";

export function ReviewerKnowledgeList({ entries }: { entries: KnowledgeEntry[] }) {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-[10px] font-semibold uppercase tracking-[0.08em] text-zinc-500">
          What Reviewers Know
        </h3>
        <span className="text-xs font-medium text-zinc-500">
          {entries.length} {entries.length === 1 ? "entry" : "entries"}
        </span>
      </div>

      {entries.length > 0 ? (
        <div className="space-y-3">
          {entries.map((entry) => (
            <article
              className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-4 shadow-panel"
              key={entry.id}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-white">{entry.author}</p>
                  {entry.role ? (
                    <p className="mt-0.5 text-xs text-zinc-500">{entry.role}</p>
                  ) : null}
                </div>
                <span className="shrink-0 text-xs text-zinc-500">{entry.updatedAt}</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-zinc-300">{entry.text}</p>
              {entry.tag ? <TagBadge tag={entry.tag} /> : null}
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-white/[0.07] bg-white/[0.02] px-5 py-8 text-center">
          <p className="text-sm font-semibold text-white">Nothing recorded yet.</p>
          <p className="mt-2 text-sm leading-6 text-zinc-500">
            What would help you understand this contract if you returned to it next month?
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {[
              "What business initiative does this support?",
              "Any risks to remember?",
              "What should the next reviewer know?"
            ].map((prompt) => (
              <span
                className="rounded-lg bg-white/[0.04] px-3 py-2 text-xs text-zinc-300"
                key={prompt}
              >
                {prompt}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
