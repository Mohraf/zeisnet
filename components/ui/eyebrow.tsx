import type { ReactNode } from "react";

/**
 * Section eyebrow / kicker.
 * A restrained, corporate label — a short accent rule followed by
 * uppercase, tightly-tracked text. Replaces the older pill-bubble badge
 * for a more professional, enterprise feel.
 */
export function Eyebrow({
  children,
  tone = "light",
  align = "left",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  align?: "center" | "left";
}) {
  return (
    <span
      className={`inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] ${
        tone === "dark" ? "text-accent-300" : "text-brand-700"
      }`}
    >
      <span
        className={`h-px w-8 rounded-full ${tone === "dark" ? "bg-accent-400" : "bg-brand-600"}`}
        aria-hidden
      />
      {children}
      {align === "center" && (
        <span
          className={`h-px w-8 rounded-full ${tone === "dark" ? "bg-accent-400" : "bg-brand-600"}`}
          aria-hidden
        />
      )}
    </span>
  );
}
