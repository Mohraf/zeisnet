import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import { Logo } from "./logo";
import { LinkedinIcon, XIcon, FacebookIcon, InstagramIcon } from "./social-icons";

const serviceLinks = [
  { label: "IT Consulting", href: "/services#consulting" },
  { label: "Cloud Services", href: "/services#cloud" },
  { label: "Cybersecurity", href: "/services#cybersecurity" },
  { label: "Networking Solutions", href: "/services#networking" },
  { label: "Software Development", href: "/services#software" },
  { label: "Technical Support", href: "/services#support" },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mack-otieno-82680769", Icon: LinkedinIcon },
  { label: "X (Twitter)", href: "https://x.com/zeisnetrw", Icon: XIcon },
  { label: "Facebook", href: "https://www.facebook.com/zeisnet", Icon: FacebookIcon },
  { label: "Instagram", href: "https://www.instagram.com/zeisnetrwanda", Icon: InstagramIcon },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-night-950 text-slate-400">
      <div
        className="absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-brand-600/15 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand column */}
          <div className="space-y-5">
            <Logo tone="light" />
            <p className="max-w-xs text-sm leading-relaxed">
              Your trusted technology partner — headquartered in Kigali, delivering software, IT, cloud
              and cybersecurity to organisations across Africa and beyond.
            </p>
            <ul className="flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-400 transition-all duration-300 hover:border-accent-400/60 hover:bg-accent-400/10 hover:text-accent-300"
                  >
                    <Icon className="h-4.5 w-4.5" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <nav aria-label="Company">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-white">Company</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-accent-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-white">Services</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="transition-colors hover:text-accent-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-white">Get in touch</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-accent-400" aria-hidden />
                <span>
                  {site.address}
                  <br />
                  {site.city}
                </span>
              </li>
              <li>
                <a href={site.phoneHref} className="flex items-center gap-3 transition-colors hover:text-accent-300">
                  <Phone className="h-4.5 w-4.5 shrink-0 text-accent-400" aria-hidden />
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={site.emailHref} className="flex items-center gap-3 transition-colors hover:text-accent-300">
                  <Mail className="h-4.5 w-4.5 shrink-0 text-accent-400" aria-hidden />
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p className="text-slate-500">
            Built in Kigali · Serving clients across Africa &amp; beyond
          </p>
        </div>
      </div>
    </footer>
  );
}
