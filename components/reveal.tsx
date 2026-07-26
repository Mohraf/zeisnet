"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Activates scroll-reveal for every element carrying `data-reveal`.
 * Elements transition in once when they enter the viewport
 * (styles live in globals.css; respects prefers-reduced-motion).
 * Re-scans on every route change.
 *
 * If the hero intro is running (html[data-intro="running"]), it waits for the
 * "zeisnet:reveal" signal so the homepage cascades in as the intro hands off
 * rather than revealing behind the intro's backdrop.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let started = false;

    const start = () => {
      if (started) return;
      started = true;

      const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

      if (!("IntersectionObserver" in window)) {
        elements.forEach((el) => el.classList.add("is-visible"));
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer?.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
      );

      elements.forEach((el) => observer?.observe(el));
    };

    const introRunning = document.documentElement.dataset.intro === "running";
    let fallback: number | undefined;

    if (introRunning) {
      window.addEventListener("zeisnet:reveal", start, { once: true });
      // Safety net in case the intro never signals.
      fallback = window.setTimeout(start, 4000);
    } else {
      start();
    }

    return () => {
      window.removeEventListener("zeisnet:reveal", start);
      if (fallback) clearTimeout(fallback);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
