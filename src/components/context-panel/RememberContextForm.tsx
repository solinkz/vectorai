import { Save } from "lucide-react";
import type { RefObject } from "react";
import { Button } from "../ui/Button";

type RememberContextFormProps = {
  contractId: string;
  draft: string;
  textareaRef: RefObject<HTMLTextAreaElement>;
  onDraftChange: (contractId: string, value: string) => void;
  onSave: () => void;
};

export function RememberContextForm({
  contractId,
  draft,
  textareaRef,
  onDraftChange,
  onSave
}: RememberContextFormProps) {
  const disabled = draft.trim().length === 0;

  return (
    <div className="border-t border-white/10 bg-zinc-950 px-7 py-6">
      <label
        className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500"
        htmlFor="remember-context"
      >
        What should you remember?
      </label>
      <textarea
        className="mt-3 min-h-[96px] w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm leading-6 text-white placeholder:text-zinc-600 transition duration-150 ease-out focus:border-blue-500/60 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
        id="remember-context"
        onChange={(event) => onDraftChange(contractId, event.target.value)}
        placeholder="What should you remember about this contract?"
        ref={textareaRef}
        value={draft}
      />
      <div className="mt-2 flex h-5 items-center justify-between">
        <p className={`text-xs ${draft ? "text-emerald-400" : "text-zinc-600"}`}>
          {draft ? "Draft saved" : "Draft autosaves locally"}
        </p>
        <p className="text-xs text-zinc-600">Cmd/Ctrl + Enter</p>
      </div>
      <Button className="mt-4 w-full" disabled={disabled} onClick={onSave} variant="primary">
        <Save aria-hidden="true" className="h-4 w-4" />
        Remember
      </Button>
    </div>
  );
}
