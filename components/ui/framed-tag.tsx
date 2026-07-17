import type { ReactNode } from "react";

/**
 * Hero "reticle" tag — a translucent label framed by four corner brackets,
 * evoking a targeting/HUD frame. Used for the home hero context tag.
 */
export function FramedTag({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-flex items-center rounded-md border border-accent-400/20 bg-accent-500/[0.06] px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300 backdrop-blur-sm">
      <span
        className="pointer-events-none absolute -left-px -top-px h-3 w-3 rounded-tl-md border-l-2 border-t-2 border-accent-400"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute -right-px -top-px h-3 w-3 rounded-tr-md border-r-2 border-t-2 border-accent-400"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute -bottom-px -left-px h-3 w-3 rounded-bl-md border-b-2 border-l-2 border-accent-400"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute -bottom-px -right-px h-3 w-3 rounded-br-md border-b-2 border-r-2 border-accent-400"
        aria-hidden
      />
      {children}
    </span>
  );
}
