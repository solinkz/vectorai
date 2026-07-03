import type { RefObject } from "react";
import type { ContractRecord } from "../../types/contract";
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
        className="flex h-[calc(100vh-4rem)] flex-col border-l border-white/10 bg-zinc-950/95"
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
      className="flex h-[calc(100vh-4rem)] flex-col border-l border-white/10 bg-zinc-950/95"
    >
      <div className="flex-1 overflow-y-auto px-7 py-7 thin-scrollbar">
        <div className="space-y-8">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">
              Known Context
            </p>
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
