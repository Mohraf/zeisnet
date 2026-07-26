"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

/**
 * Full-screen hero intro (Daylight-style preloader):
 *  - On load the screen is a plain white background with ONLY the Zeisnet logo
 *    centred; the rest of the homepage is hidden behind it AND held paused.
 *  - After a hold the logo eases + shrinks toward its resting place at the
 *    centre of the orbit visual, and at that same moment the backdrop fades and
 *    the homepage CASCADES in (scroll-reveals + orbit assembly begin here).
 *  - A FLIP animation lands the logo exactly on the real orbit logo, then the
 *    overlay is removed.
 *
 * Server-rendered so it covers the page on the first paint (no flash). On
 * mobile / reduced-motion it does a short fade. Plays once per full page load.
 */

// Timing (ms)
const HOLD = 1300; // logo held alone on the blank screen
const FLY = 1450; // logo travel + shrink
const TOTAL = HOLD + FLY;
const HOLD_OFFSET = HOLD / TOTAL; // ~0.473
const FADE_END_OFFSET = (HOLD + 700) / TOTAL; // backdrop fully gone ~0.71

// Persists across client-side navigations within a page session; resets on reload.
let introPlayed = false;

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function HeroIntro() {
  const [visible, setVisible] = useState(!introPlayed);
  const rootRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  useIso(() => {
    if (!visible) return;
    introPlayed = true;

    const root = rootRef.current;
    const bg = bgRef.current;
    const box = boxRef.current;
    if (!root) return;

    const html = document.documentElement;
    html.dataset.intro = "running"; // pause homepage reveals + orbit assembly

    let signaled = false;
    const signalReveal = () => {
      if (signaled) return;
      signaled = true;
      html.dataset.intro = "done"; // resume orbit assembly...
      window.dispatchEvent(new Event("zeisnet:reveal")); // ...and cascade the reveals
    };

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const desktop = window.matchMedia("(min-width: 1024px)").matches;
    const core = document.querySelector<HTMLElement>("[data-orbit-core]");

    const done = () => setVisible(false);

    let revealTimer: number;

    // Fallback (mobile / reduced-motion / no target): brief fade of the overlay.
    if (!desktop || reduce || !core || !bg || !box) {
      const dur = reduce ? 400 : 1300;
      revealTimer = window.setTimeout(signalReveal, reduce ? 150 : 650);
      const a = root.animate(
        [
          { opacity: 1, offset: 0 },
          { opacity: 1, offset: 0.5 },
          { opacity: 0, offset: 1 },
        ],
        { duration: dur, fill: "forwards" },
      );
      a.onfinish = done;
      a.oncancel = done;
      return () => {
        clearTimeout(revealTimer);
        signalReveal();
      };
    }

    // Desktop: hide resting logo, fly the intro logo to it, fade the backdrop,
    // and cascade the homepage in as the shrink begins.
    core.classList.add("intro-hidden");

    const target = core.getBoundingClientRect();
    const dx = target.left + target.width / 2 - window.innerWidth / 2;
    const dy = target.top + target.height / 2 - window.innerHeight / 2;
    const endScale = target.width / box.offsetWidth || 1;

    const opts = { duration: TOTAL, fill: "forwards" as const };

    bg.animate(
      [
        { opacity: 1, offset: 0 },
        { opacity: 1, offset: HOLD_OFFSET },
        { opacity: 0, offset: FADE_END_OFFSET },
        { opacity: 0, offset: 1 },
      ],
      opts,
    );

    const logoAnim = box.animate(
      [
        { transform: "translate(0px, 0px) scale(1.95)", offset: 0, easing: "linear" },
        { transform: "translate(0px, 0px) scale(1.95)", offset: HOLD_OFFSET, easing: "cubic-bezier(0.65, 0, 0.2, 1)" },
        { transform: `translate(${dx}px, ${dy}px) scale(${endScale})`, offset: 1 },
      ],
      opts,
    );

    // Reveal the homepage exactly as the logo begins to shrink / backdrop fades.
    revealTimer = window.setTimeout(signalReveal, HOLD);

    const finish = () => {
      core.classList.remove("intro-hidden");
      done();
    };
    logoAnim.onfinish = finish;
    logoAnim.oncancel = finish;

    return () => {
      clearTimeout(revealTimer);
      signalReveal();
      core.classList.remove("intro-hidden");
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      <noscript>
        {/* No JS: never trap the page behind the overlay */}
        <style>{`.hero-intro-overlay{display:none!important}`}</style>
      </noscript>
      <div ref={rootRef} className="hero-intro-overlay pointer-events-none fixed inset-0 z-[100]" aria-hidden>
        <div ref={bgRef} className="absolute inset-0 bg-white" />
        <div className="absolute inset-0 grid place-items-center">
          <div
            ref={boxRef}
            style={{ transform: "scale(1.95)" }}
            className="relative grid h-24 w-24 place-items-center rounded-3xl bg-white shadow-2xl shadow-brand-600/25 ring-1 ring-slate-100 sm:h-28 sm:w-28"
          >
            <div className="absolute inset-0 -z-10 rounded-3xl bg-brand-500/25 blur-xl" />
            <Image
              src="/zeisnet-mark.png"
              alt=""
              width={80}
              height={80}
              priority
              className="h-14 w-14 object-contain sm:h-16 sm:w-16"
            />
          </div>
        </div>
      </div>
    </>
  );
}
