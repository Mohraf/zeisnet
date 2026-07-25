import type { ReactNode } from "react";
import { Eyebrow } from "./ui/eyebrow";

/**
 * Shared light hero band used by all inner pages.
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
    <section className="relative overflow-hidden bg-white pb-20 pt-40">
      <div
        className="absolute -top-24 right-[-10%] h-96 w-96 rounded-full bg-brand-200/40 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute bottom-[-30%] left-[-5%] h-96 w-96 rounded-full bg-cyan-200/35 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-5 sm:px-8">
        <div data-reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
        <div
          className="max-w-3xl"
          data-reveal="mask"
          style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
        >
          <h1 className="font-display text-4xl font-bold tracking-tight text-balance text-night-900 sm:text-5xl lg:text-6xl lg:leading-[1.03]">
            {title}
          </h1>
        </div>
        <p
          className="max-w-2xl text-lg leading-relaxed text-slate-600"
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
