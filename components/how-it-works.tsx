"use client";

import { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  SearchCheck,
  Map,
  Hammer,
  LifeBuoy,
  ClipboardList,
  Puzzle,
  Presentation,
  BadgeCheck,
  CheckCircle2,
} from "lucide-react";
import { SectionHeading } from "./ui/section-heading";

/**
 * Icons are referenced by string key (not component) so step data can be
 * passed from Server Components — React forbids passing function components
 * across the server/client boundary.
 */
const iconRegistry: Record<string, LucideIcon> = {
  consult: SearchCheck,
  plan: Map,
  deploy: Hammer,
  support: LifeBuoy,
  assess: ClipboardList,
  curriculum: Puzzle,
  train: Presentation,
  certify: BadgeCheck,
};

export type HowItWorksStep = {
  n: string;
  icon: keyof typeof iconRegistry | string;
  title: string;
  description: string;
  points?: string[];
};

const defaultSteps: HowItWorksStep[] = [
  {
    n: "01",
    icon: "consult",
    title: "Consult",
    description:
      "We listen first, auditing your systems, goals and pain points before proposing anything. No jargon, no pressure.",
    points: ["Free assessment", "Honest advice"],
  },
  {
    n: "02",
    icon: "plan",
    title: "Plan",
    description:
      "You get a clear scope, realistic timeline and a fixed quote so you always know exactly what happens next and what it costs.",
    points: ["Fixed quote", "Clear roadmap"],
  },
  {
    n: "03",
    icon: "deploy",
    title: "Deploy",
    description:
      "Certified engineers implement with minimal disruption to your day-to-day. On-site in Kigali or remotely, whatever suits you.",
    points: ["Certified engineers", "Minimal downtime"],
  },
  {
    n: "04",
    icon: "support",
    title: "Support",
    description:
      "We stay with you long after go-live. Monitoring, maintaining and improving, with 24/7 help when you need it most.",
    points: ["24/7 monitoring", "Ongoing care"],
  },
];

export function HowItWorks({
  eyebrow = "How it works",
  title = "From first call to long-term care",
  description = "Every engagement follows the same four clear steps so you always know exactly where things stand.",
  steps = defaultSteps,
  background = "bg-slate-50",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  steps?: HowItWorksStep[];
  background?: string;
} = {}) {
  const [active, setActive] = useState(0);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.index);
            setActive(idx);
          }
        }
      },
      // Fire when a step passes through the vertical middle of the viewport.
      { rootMargin: "-48% 0px -48% 0px", threshold: 0 },
    );
    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`${background} py-24 lg:py-32`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-16">
          {/* Sticky visual (desktop) */}
          <div className="hidden lg:block">
            <div className="sticky top-28">
              <div className="soft-card relative aspect-[4/3] overflow-hidden rounded-3xl">
                {steps.map((step, i) => {
                  const StepIcon = iconRegistry[step.icon] ?? SearchCheck;
                  return (
                    <div
                      key={step.n}
                      className={`absolute inset-0 flex flex-col justify-between p-8 transition-all duration-500 ${
                        active === i ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-2"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-600 text-white shadow-lg shadow-brand-600/25">
                          <StepIcon className="h-7 w-7" aria-hidden />
                        </span>
                        <span className="font-display text-6xl font-bold text-slate-100">{step.n}</span>
                      </div>

                      <div>
                        <h3 className="font-display text-2xl font-bold text-night-900">{step.title}</h3>
                        <p className="mt-3 leading-relaxed text-slate-600">{step.description}</p>
                      </div>

                      {/* Progress rail */}
                      <div className="flex items-center gap-2">
                        {steps.map((_, d) => (
                          <span
                            key={d}
                            className={`h-1.5 rounded-full transition-all duration-500 ${
                              d === i ? "w-8 bg-brand-600" : "w-4 bg-slate-200"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Scrolling steps */}
          <ol className="relative lg:pl-2">
            {/* vertical rail */}
            <span className="absolute left-[15px] top-2 bottom-2 hidden w-px bg-slate-200 lg:block" aria-hidden />
            {steps.map((step, i) => {
              const RowIcon = iconRegistry[step.icon] ?? SearchCheck;
              return (
                <li
                  key={step.n}
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  data-index={i}
                  className="relative flex min-h-[42vh] flex-col justify-center py-8 lg:min-h-[64vh] lg:pl-12"
                >
                  {/* rail dot (desktop) */}
                  <span
                    className={`absolute left-2 top-1/2 hidden h-3 w-3 -translate-y-1/2 rounded-full ring-4 ring-slate-50 transition-colors duration-300 lg:block ${
                      active === i ? "bg-brand-600" : "bg-slate-300"
                    }`}
                    aria-hidden
                  />
                  <div
                    className={`transition-all duration-500 ${
                      active === i ? "opacity-100" : "opacity-45 lg:opacity-40"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
                        <RowIcon className="h-5 w-5" aria-hidden />
                      </span>
                      <span className="font-display text-sm font-bold tracking-widest text-brand-600">
                        STEP {step.n}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-bold text-night-900 sm:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-md text-lg leading-relaxed text-slate-600">{step.description}</p>
                    {step.points && step.points.length > 0 && (
                      <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                        {step.points.map((point) => (
                          <li key={point} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-500" aria-hidden />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
