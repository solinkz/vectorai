import type { ReactNode } from "react";

export function Kbd({ children }: { children: ReactNode }) {
  return (
    <kbd className="rounded-md border border-white/10 bg-black px-2 py-1 text-xs font-semibold text-zinc-200 shadow-row">
      {children}
    </kbd>
  );
}
