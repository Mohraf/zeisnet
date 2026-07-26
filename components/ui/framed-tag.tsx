import type { ReactNode } from "react";

/**
 * Hero kicker — bold, uppercase, wide-tracked overlay text (no pill chrome),
 * echoing the "POWER YOU CONTROL" treatment. `tone="light"` switches to a
 * cyan tint for dark bands (e.g. the motherboard hero).
 */
export function FramedTag({
  children,
  tone = "ink",
}: {
  children: ReactNode;
  tone?: "ink" | "light";
}) {
  const color = tone === "light" ? "text-cyan-300" : "text-night-900";
  return (
    <span
      className={`block font-display text-xs font-bold uppercase tracking-[0.22em] sm:text-sm sm:tracking-[0.28em] ${color}`}
    >
      {children}
    </span>
  );
}
