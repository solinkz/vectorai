import type { FocusEvent, RefObject } from "react";
import { useState } from "react";
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
  const [focused, setFocused] = useState(false);
  const disabled = draft.trim().length === 0;
  const expanded = focused || !disabled;

  function handleBlur(event: FocusEvent<HTMLDivElement>) {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null) && disabled) {
      setFocused(false);
    }
  }

  return (
    <div
      className="border-t border-white/[0.07] bg-zinc-950 px-7 py-5"
      onBlur={handleBlur}
      onFocus={() => setFocused(true)}
    >
      <div
        className={`grid transition-[grid-template-rows,opacity,transform] duration-300 ease-out-expo ${
          expanded ? "grid-rows-[1fr] opacity-100 translate-y-0" : "grid-rows-[0fr] opacity-0 -translate-y-1"
        }`}
      >
        <div className="overflow-hidden">
          <label
            className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.08em] text-zinc-500"
            htmlFor="remember-context"
          >
            What should you remember?
          </label>
        </div>
      </div>

      <textarea
        className={`w-full resize-none rounded-xl border border-white/[0.07] bg-white/[0.035] px-4 text-sm leading-6 text-white placeholder:text-zinc-600 transition-[height,min-height,border-color,box-shadow,background-color] duration-300 ease-out-expo focus:border-blue-500/60 focus:bg-white/[0.045] focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
          expanded ? "min-h-[104px] py-3" : "h-11 min-h-11 overflow-hidden py-2.5"
        }`}
        id="remember-context"
        onChange={(event) => onDraftChange(contractId, event.target.value)}
        placeholder="What should you remember about this contract?"
        ref={textareaRef}
        rows={expanded ? 4 : 1}
        value={draft}
      />

      <div
        className={`grid transition-[grid-template-rows,opacity,transform] duration-300 ease-out-expo ${
          expanded ? "grid-rows-[1fr] opacity-100 translate-y-0" : "grid-rows-[0fr] opacity-0 translate-y-1"
        }`}
      >
        <div className="overflow-hidden">
          <div className="mt-2 flex h-5 items-center justify-between">
            <p className={`text-xs ${draft ? "text-emerald-400" : "text-zinc-600"}`}>
              {draft ? "Draft saved" : "Draft autosaves locally"}
            </p>
          </div>
          <Button className="mt-4 w-full justify-between px-4" disabled={disabled} onClick={onSave} variant="primary">
            <span>Remember</span>
            <span className="rounded-md border border-white/20 bg-black/15 px-2 py-1 text-[11px] font-semibold text-blue-100/80">
              Cmd/Ctrl + Enter
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
