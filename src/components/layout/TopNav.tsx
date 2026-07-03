import { Search } from "lucide-react";
import type { RefObject } from "react";

type TopNavProps = {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  searchInputRef: RefObject<HTMLInputElement>;
};

const navItems = ["Overview", "Contracts", "Memory Bank", "Audit Log"];

export function TopNav({ searchQuery, onSearchChange, searchInputRef }: TopNavProps) {
  return (
    <header className="grid h-16 grid-cols-[260px_minmax(0,1fr)_288px] items-center border-b border-white/[0.07] bg-black/80 px-7 backdrop-blur">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-blue-400/25 bg-blue-500/15 text-sm font-bold text-blue-300">
            V
          </div>
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-white">VectorAI</p>
        </div>
      </div>

      <nav className="hidden items-center justify-center gap-6 lg:flex" aria-label="Main navigation">
        {navItems.map((item, index) => {
          const active = item === "Contracts";
          return (
            <a
              href="#"
              key={item}
              className={`h-16 border-b-2 pt-[26px] text-[10px] font-semibold uppercase tracking-[0.08em] transition duration-150 ease-out ${
                active
                  ? "border-white/80 text-white"
                  : "border-transparent text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {String(index + 1).padStart(2, "0")} {item}
            </a>
          );
        })}
      </nav>

      <div className="flex justify-end">
        <label className="flex h-10 w-72 items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.035] px-4 text-sm text-zinc-400 transition duration-150 ease-out focus-within:border-blue-500/60 focus-within:ring-2 focus-within:ring-blue-500/20">
          <Search aria-hidden="true" className="h-4 w-4" />
          <span className="sr-only">Search contracts</span>
          <input
            ref={searchInputRef}
            value={searchQuery}
            onChange={(event) => onSearchChange(event.target.value)}
            className="w-full bg-transparent text-sm text-white placeholder:text-zinc-600 focus:outline-none"
            placeholder="Search contracts"
            type="search"
          />
          <kbd className="rounded border border-white/[0.07] bg-black/70 px-1.5 py-0.5 text-[10px] font-semibold text-zinc-500">
            /
          </kbd>
        </label>
      </div>
    </header>
  );
}
