import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline-dark";
type Size = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 active:scale-[0.98]";

const variants: Record<Variant, string> = {
  // Solid brand pill with a soft blue shadow — the main CTA
  primary:
    "bg-brand-600 text-white shadow-lg shadow-brand-600/20 hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-600/25 hover:-translate-y-0.5",
  // White pill with a hairline border — secondary on light backgrounds
  secondary:
    "border border-slate-200 bg-white text-night-900 shadow-sm hover:border-slate-300 hover:bg-slate-50 hover:-translate-y-0.5",
  // Text-only, subtle tint on hover
  ghost:
    "text-slate-700 hover:bg-slate-100 hover:text-night-900",
  // For dark bands (final CTA, footer): translucent white outline
  "outline-dark":
    "border border-white/25 text-white backdrop-blur-sm hover:border-white/60 hover:bg-white/10 hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  href?: string;
  newTab?: boolean;
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<"button">, "className">;

export function Button({
  variant = "primary",
  size = "md",
  href,
  newTab = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
