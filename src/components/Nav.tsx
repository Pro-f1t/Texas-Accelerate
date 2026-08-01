"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "./Icons";
import Logo from "./Logo";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/employers", label: "Employers" },
  { href: "/events", label: "Events" },
  { href: "/team", label: "Team" },
];

/** The standalone pill CTA, kept out of LINKS so it renders separately. */
const CTA = { href: "/apply", label: "Apply Now" };

const EASE = "700ms cubic-bezier(0.4, 0, 0.2, 1)";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [seenPath, setSeenPath] = useState(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation. Adjusting state during render is the
  // documented pattern for reacting to a changed value; doing this in an effect
  // instead causes a cascading re-render.
  if (pathname !== seenPath) {
    setSeenPath(pathname);
    setOpen(false);
  }

  // Inner pages start over the blue band, so links are black there. Once
  // scrolled, the bar sits over dark page content and they flip to white — same
  // as the home page, which is dark from the top.
  const onBlue = pathname !== "/" && !scrolled;

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center">
      <div
        // Unscrolled geometry matches the live site exactly: 80px tall, 16px
        // vertical padding, shell horizontal padding, fully transparent.
        className={scrolled ? "w-full" : "shell-x w-full"}
        style={{
          maxWidth: scrolled ? 1100 : "100%",
          marginTop: scrolled ? 12 : 0,
          paddingInline: scrolled ? 24 : undefined,
          paddingBlock: scrolled ? 6 : 15,
          transition: `all ${EASE}`,
          ...(scrolled
            ? {
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(20px) saturate(180%)",
                WebkitBackdropFilter: "blur(20px) saturate(180%)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: 999,
                boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.1)",
              }
            : {
                background: "transparent",
                border: "1px solid transparent",
                borderRadius: 999,
                boxShadow: "none",
              }),
        }}
      >
        <div className="flex items-center justify-between gap-6">
          <Link href="/" aria-label="Texas Accelerate home" className="shrink-0">
            <Logo
              priority
              height={scrolled ? 28 : 36}
              style={{ transition: `all ${EASE}` }}
            />
          </Link>

          {/* -------- Desktop links: 16px, 8/16 padding, 30px gap -------- */}
          <nav
            className="hidden items-center nav:flex"
            style={{ gap: 30, transition: `all ${EASE}` }}
            aria-label="Main"
          >
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={pathname === l.href ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-[16px] leading-[1.5] font-normal transition-colors ${
                  onBlue
                    ? "text-ink hover:bg-white/40"
                    : "text-white hover:bg-white/15"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Link
            href={CTA.href}
            className="hidden shrink-0 text-[16px] leading-[1.5] whitespace-nowrap nav:inline-flex"
            style={{
              paddingInline: 20,
              paddingBlock: 12,
              borderRadius: 999,
              // Black over the blue band, blue over dark backgrounds.
              background: onBlue ? "#000" : "#60a5fa",
              color: onBlue ? "#fff" : "#08050f",
              transition: `all ${EASE}`,
            }}
          >
            {CTA.label}
          </Link>

          {/* -------- Mobile trigger -------- */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center text-white nav:hidden"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              borderRadius: 999,
              transition: `all ${EASE}`,
            }}
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>

        {/* -------- Mobile dropdown -------- */}
        {open && (
          <div
            className="absolute right-5 z-50 min-w-[220px] p-2 nav:hidden"
            style={{
              top: "calc(100% + 12px)",
              background: "rgba(20, 20, 30, 0.85)",
              backdropFilter: "blur(80px) saturate(180%)",
              WebkitBackdropFilter: "blur(80px) saturate(180%)",
              borderRadius: 24,
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.4)",
              willChange: "transform",
              isolation: "isolate",
            }}
          >
            <nav aria-label="Mobile" className="flex flex-col">
              {[...LINKS, CTA].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-2xl px-4 py-3 text-[16px] leading-[1.5] text-white transition-colors hover:bg-white/10"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
