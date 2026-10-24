"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "./ui/button";

const inputClasses =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-night-900 placeholder:text-slate-400 transition-all duration-200 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/15";

const topics = [
  "IT Consulting",
  "Cloud Services",
  "Cybersecurity",
  "Networking Solutions",
  "Software Development",
  "Capacity Building / Training",
  "Support Packages",
  "Other",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const form = e.currentTarget;
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/contact.php", {
        method: "POST",
        // urlencoded keeps it a "simple" request (no CORS preflight) and
        // maps straight to PHP's $_POST on cPanel.
        body: new URLSearchParams(new FormData(form) as unknown as Record<string, string>),
      });
      const data = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;

      if (res.ok && data?.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
        setError(data?.error ?? "Something went wrong. Please email support@zeisnet.co.ke directly.");
      }
    } catch {
      setStatus("error");
      setError(
        "We couldn't reach the server. Please check your connection or email support@zeisnet.co.ke directly.",
      );
    }
  }

  if (status === "sent") {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-4 rounded-3xl border border-emerald-200 bg-emerald-50 p-12 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-emerald-100">
          <CheckCircle2 className="h-8 w-8 text-emerald-600" aria-hidden />
        </span>
        <h3 className="font-display text-2xl font-bold text-night-900">Message sent!</h3>
        <p className="max-w-sm text-slate-600">
          Thank you for reaching out. Our team will get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" aria-label="Contact form">
      {/* Honeypot: hidden from users, bots fill it and get silently dropped. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-1.5 block text-sm font-medium text-night-900">
            First name
          </label>
          <input id="firstName" name="firstName" required autoComplete="given-name" placeholder="John" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="lastName" className="mb-1.5 block text-sm font-medium text-night-900">
            Last name
          </label>
          <input id="lastName" name="lastName" required autoComplete="family-name" placeholder="Doe" className={inputClasses} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-night-900">
            Work email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-night-900">
            Phone <span className="font-normal text-slate-400">(optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+254 7XX XXX XXX" className={inputClasses} />
        </div>
      </div>

      <div>
        <label htmlFor="topic" className="mb-1.5 block text-sm font-medium text-night-900">
          What can we help with?
        </label>
        <select id="topic" name="topic" required defaultValue="" className={inputClasses}>
          <option value="" disabled>
            Select a topic
          </option>
          {topics.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-night-900">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us a little about your project or challenge…"
          className={`${inputClasses} resize-y`}
        />
      </div>

      {status === "error" && error && (
        <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === "sending"}>
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          <>
            Send message
            <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
          </>
        )}
      </Button>
      <p className="text-xs text-slate-400">
        We respond within one business day. Your details stay private, no spam, ever.
      </p>
    </form>
  );
}
