/**
 * Trust bar with an infinite marquee of client/partner wordmarks.
 * Real client organisations — swap wordmarks for logo SVGs when available.
 */
const clients = [
  "New Forest Company",
  "Gasmeth Energy Global",
  "Rwanda Revenue Authority",
  "Gardens For Health International",
  "Pioneer Education",
  "Lakeside Fish Farm",
  "Bridges To Prosperity",
  "FIKA",
  "Fitness Point Ltd",
  "MACE Consulting (UK) Ltd",
  "SORAS VIE PLC",
  "SN Power AS",
];

export function LogoMarquee() {
  const row = [...clients, ...clients];
  return (
    <section aria-label="Trusted by leading organisations" className="border-b border-slate-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-slate-400" data-reveal>
          Trusted by leading organisations
        </p>
        <div
          className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
          data-reveal
        >
          <ul className="flex w-max animate-marquee items-center gap-16 hover:[animation-play-state:paused]">
            {row.map((name, i) => (
              <li
                key={`${name}-${i}`}
                aria-hidden={i >= clients.length}
                className="whitespace-nowrap font-display text-lg font-semibold tracking-tight text-slate-400 transition-colors duration-300 hover:text-brand-600"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
