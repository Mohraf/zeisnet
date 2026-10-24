"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { navLinks } from "@/lib/site";
import { Logo } from "./logo";
import { Button } from "./ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:pt-4">
      {/* Floating frosted pill */}
      <nav
        className={`relative mx-auto flex h-14 max-w-6xl items-center gap-4 rounded-full border px-4 pl-5 transition-all duration-300 sm:h-16 sm:px-5 ${
          scrolled
            ? "border-slate-200/80 bg-white/80 shadow-lg shadow-slate-900/5 backdrop-blur-xl"
            : "border-slate-200/70 bg-white/70 shadow-md shadow-slate-900/5 backdrop-blur-xl"
        }`}
        aria-label="Main"
      >
        <Logo tone="dark" />

        {/* Desktop nav — centered */}
        <ul className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200 xl:px-4 ${
                    active ? "text-brand-700" : "text-slate-600 hover:text-night-900"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span
                      className="absolute inset-x-3 -bottom-1 h-0.5 rounded-full bg-brand-500 xl:inset-x-4"
                      aria-hidden
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Button href="/contact" size="sm">
            Get started
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="ml-auto grid h-10 w-10 place-items-center rounded-full text-night-900 transition-colors hover:bg-slate-100 lg:hidden"
        >
          {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </nav>

      {/* Mobile menu — rounded panel below the pill */}
      <div
        className={`mx-auto max-w-6xl overflow-hidden transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? "mt-2 max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-1 rounded-3xl border border-slate-200/80 bg-white/95 p-3 shadow-lg shadow-slate-900/5 backdrop-blur-xl">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block rounded-2xl px-4 py-3 text-base font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-brand-50 text-brand-700"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-1">
            <Button href="/contact" className="w-full">
              Get started
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
