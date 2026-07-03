export function ContextDots({ count }: { count: number }) {
  const filled = Math.min(count, 3);

  return (
    <span
      className="flex items-center gap-1.5"
      aria-label={`${count} reviewer context ${count === 1 ? "entry" : "entries"}`}
    >
      {Array.from({ length: 3 }).map((_, index) => (
        <span
          key={index}
          className={`h-2.5 w-2.5 rounded-full ${
            index < filled ? "bg-emerald-400" : "bg-zinc-700"
          }`}
        />
      ))}
    </span>
  );
}
