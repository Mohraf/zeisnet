import type { ReactNode } from "react";
import { Eyebrow } from "./ui/eyebrow";

/**
 * Shared dark hero band used by all inner pages.
 * Keeps the fixed navbar readable (light-on-dark) before scroll.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-night-950 pb-20 pt-40">
      <div className="bg-grid-dark absolute inset-0" aria-hidden />
      <div
        className="absolute -top-32 right-[-10%] h-96 w-96 rounded-full bg-brand-600/25 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute bottom-[-30%] left-[-5%] h-96 w-96 rounded-full bg-accent-500/15 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-5 sm:px-8">
        <div data-reveal>
          <Eyebrow tone="dark">{eyebrow}</Eyebrow>
        </div>
        <h1
          className="max-w-3xl font-display text-4xl font-bold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl lg:leading-[1.05]"
          data-reveal
          style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
        >
          {title}
        </h1>
        <p
          className="max-w-2xl text-lg leading-relaxed text-slate-400"
          data-reveal
          style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
        >
          {description}
        </p>
        {children && (
          <div data-reveal style={{ "--reveal-delay": "240ms" } as React.CSSProperties}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
