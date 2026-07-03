import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ children, className = "", variant = "secondary", ...props }: ButtonProps) {
  const variants = {
    primary:
      "bg-brand-blue text-white hover:bg-blue-400 active:bg-blue-600 disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-zinc-500",
    secondary:
      "border border-white/10 bg-white/[0.04] text-zinc-100 hover:bg-white/[0.08] active:bg-white/[0.12]",
    ghost: "text-zinc-300 hover:bg-white/[0.06] active:bg-white/[0.1]"
  };

  return (
    <button
      className={`inline-flex h-11 items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold transition duration-150 ease-out-expo focus:outline-none focus:ring-2 focus:ring-blue-500/60 active:scale-[0.98] ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
