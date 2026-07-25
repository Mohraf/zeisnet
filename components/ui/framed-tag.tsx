import type { ReactNode } from "react";

/**
 * Hero announcement pill — a clean, light rounded chip with a small live dot.
 */
export function FramedTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-600 shadow-sm">
      <span className="relative flex h-1.5 w-1.5" aria-hidden>
        <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-brand-500" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-600" />
      </span>
      {children}
    </span>
  );
}
