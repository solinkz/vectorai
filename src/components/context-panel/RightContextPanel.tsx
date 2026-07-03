import type { RefObject } from "react";
import type { ContractRecord } from "../../types/contract";
import { Kbd } from "../ui/Kbd";
import { ContractFacts } from "./ContractFacts";
import { RememberContextForm } from "./RememberContextForm";
import { ReviewerKnowledgeList } from "./ReviewerKnowledgeList";

type RightContextPanelProps = {
  contract: ContractRecord | null;
  draft: string;
  textareaRef: RefObject<HTMLTextAreaElement>;
  onDraftChange: (contractId: string, value: string) => void;
  onSave: () => void;
};

export function RightContextPanel({
  contract,
  draft,
  textareaRef,
  onDraftChange,
  onSave
}: RightContextPanelProps) {
  if (!contract) {
    return (
      <aside
        aria-label="Known context panel"
        className="flex h-[calc(100vh-4rem)] flex-col border-l border-white/[0.07] bg-zinc-950/95"
      >
        <div className="flex flex-1 items-center justify-center px-7 text-center text-sm text-zinc-500">
          Select a contract to review context.
        </div>
      </aside>
    );
  }

  return (
    <aside
      aria-label="Known context panel"
      className="flex h-[calc(100vh-4rem)] flex-col border-l border-white/[0.07] bg-zinc-950/95"
    >
      <div className="flex-1 overflow-y-auto px-7 py-7 thin-scrollbar">
        <div className="space-y-8">
          <div>
            <div className="flex items-center justify-between gap-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-zinc-500">
                Known Context
              </p>
              <div className="flex items-center gap-2 text-[11px] text-zinc-500" aria-hidden="true">
                <span className="flex items-center gap-1">
                  <Kbd>K</Kbd>
                  Prev
                </span>
                <span className="flex items-center gap-1">
                  <Kbd>J</Kbd>
                  Next
                </span>
              </div>
            </div>
            <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-white">
              {contract.contractName}
            </h2>
            <p className="mt-2 text-sm text-zinc-500">{contract.vendor}</p>
          </div>

          <ContractFacts contract={contract} />
          <ReviewerKnowledgeList entries={contract.contextEntries} />
        </div>
      </div>
      <RememberContextForm
        contractId={contract.id}
        draft={draft}
        onDraftChange={onDraftChange}
        onSave={onSave}
        textareaRef={textareaRef}
      />
    </aside>
  );
}
