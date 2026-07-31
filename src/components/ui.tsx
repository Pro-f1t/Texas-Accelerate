import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "./Icons";

/** Pill CTA. `blue` = blue fill + dark label, `dark` = black fill + white label. */
export function PillButton({
  href,
  children,
  tone = "blue",
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: "blue" | "dark";
  className?: string;
}) {
  const tones = {
    blue: "bg-accent text-ink hover:bg-white",
    dark: "bg-black text-white hover:bg-neutral-800",
  };
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2.5 rounded-full px-7 py-4 text-[16px] leading-[1.5] font-normal transition-colors ${tones[tone]} ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

/** Circular ↗ button used on every card. */
export function ArrowCircle({
  tone = "dark",
  className = "",
  size = "md",
}: {
  tone?: "dark" | "blue";
  className?: string;
  size?: "sm" | "md";
}) {
  const tones = {
    dark: "bg-white/8 text-white group-hover:bg-accent group-hover:text-ink",
    blue: "bg-accent text-ink",
  };
  const sizes = { sm: "h-11 w-11", md: "h-12 w-12" };
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full transition-colors ${tones[tone]} ${sizes[size]} ${className}`}
    >
      <ArrowUpRight className="h-5 w-5" />
    </span>
  );
}

/**
 * Stand-in art for the stock photography in the Figma file. Jamie confirmed the
 * photos are placeholders, so these are on-brand blocks rather than fake stock.
 */
export function PlaceholderArt({
  seed = 0,
  className = "",
  label,
}: {
  seed?: number;
  className?: string;
  label?: string;
}) {
  const gradients = [
    "linear-gradient(135deg,#60a5fa 0%,#1e3a8a 55%,#0b1020 100%)",
    "linear-gradient(140deg,#1e3a8a 0%,#60a5fa 60%,#c7ddff 100%)",
    "linear-gradient(120deg,#0b1020 0%,#3b82f6 50%,#60a5fa 100%)",
    "linear-gradient(160deg,#60a5fa 0%,#0b1020 100%)",
  ];
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: gradients[seed % gradients.length] }}
      role="img"
      aria-label={label ?? "Placeholder image"}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 25%, rgba(255,255,255,.5), transparent 45%), radial-gradient(circle at 75% 80%, rgba(255,255,255,.28), transparent 40%)",
        }}
      />
    </div>
  );
}
