import { ArrowRight, PhoneCall } from "lucide-react";
import { Button } from "./ui/button";
import { site } from "@/lib/site";

export function CtaSection({
  title = "Ready to build a smarter, more secure business?",
  description = "Talk to our team today. We'll assess your current setup and map out a clear, practical technology roadmap — free of charge.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-night-950 py-24">
      <div className="bg-grid-dark absolute inset-0" aria-hidden />
      <div
        className="absolute left-1/2 top-1/2 h-[30rem] w-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/25 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8" data-reveal>
        <h2 className="font-display text-3xl font-bold tracking-tight text-balance text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">{description}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/contact" size="lg">
            Start your project
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
          </Button>
          <Button href={site.phoneHref} variant="outline-dark" size="lg">
            <PhoneCall className="h-4 w-4" aria-hidden />
            {site.phone}
          </Button>
        </div>
      </div>
    </section>
  );
}
