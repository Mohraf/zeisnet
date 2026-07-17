import type { ReactNode } from "react";
import { Eyebrow } from "./eyebrow";

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  tone?: "light" | "dark";
  align?: "center" | "left";
}) {
  return (
    <div
      className={`flex max-w-2xl flex-col gap-5 ${
        align === "center" ? "mx-auto items-center text-center" : "items-start text-left"
      }`}
      data-reveal
    >
      {eyebrow && (
        <Eyebrow tone={tone} align={align}>
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        className={`font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] ${
          tone === "dark" ? "text-white" : "text-night-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-lg leading-relaxed ${tone === "dark" ? "text-slate-400" : "text-slate-600"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
