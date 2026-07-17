import Image from "next/image";
import Link from "next/link";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-2.5" aria-label="Zeisnet — home">
      <Image
        src="/zeisnet-mark.png"
        alt="Zeisnet logo"
        width={36}
        height={36}
        priority
        className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-105"
      />
      <span
        className={`font-display text-xl font-bold tracking-tight ${
          tone === "light" ? "text-white" : "text-night-900"
        }`}
      >
        Zeisnet
      </span>
    </Link>
  );
}
