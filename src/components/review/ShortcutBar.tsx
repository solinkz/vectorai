import { Kbd } from "../ui/Kbd";

const shortcuts = [
  ["↑ ↓", "Navigate"],
  ["J / K", "Next / previous"],
  ["Enter", "Open contract"],
  ["R", "Add context"],
  ["Esc", "Focus list"],
  ["⌘ / Ctrl + Enter", "Save context"]
];

export function ShortcutBar() {
  return (
    <div className="mt-5 flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs text-zinc-400">
      {shortcuts.map(([key, label]) => (
        <span className="flex items-center gap-2" key={key}>
          <Kbd>{key}</Kbd>
          {label}
        </span>
      ))}
    </div>
  );
}
