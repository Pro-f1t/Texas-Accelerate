import Image from "next/image";
import type { PartnerLogo } from "@/data/site";

/** Times the list is repeated per half-track. 3 keeps a half wider than ~3300px. */
const REPEATS = 3;

function LogoItem({ logo }: { logo: PartnerLogo }) {
  if (logo.src) {
    return (
      <Image
        src={logo.src}
        alt={logo.alt}
        width={logo.w ?? 240}
        height={logo.h ?? 100}
        sizes="320px"
        // A *definite* height (not max-h-*) lets the browser reserve the right
        // width from the intrinsic ratio before the file loads; with max-height
        // an unloaded image collapses to 0 and the track measures wrong. Eager
        // because the marquee is far below the fold but must be laid out
        // correctly from the start — it's only 8 unique URLs, all cached.
        loading="eager"
        style={{ height: logo.size ?? 64 }}
        className="w-auto object-contain"
      />
    );
  }

  // Wordmark stand-in until a real file lands in public/partners/.
  return (
    <span className="text-[clamp(1.25rem,2vw,1.75rem)] leading-none font-bold tracking-[-0.02em] whitespace-nowrap text-ink/85">
      {logo.label ?? logo.alt}
    </span>
  );
}

export default function LogoMarquee({ logos }: { logos: PartnerLogo[] }) {
  return (
    <div className="marquee bleed-x mt-8">
      <ul className="marquee-track items-center gap-x-16">
        {/*
          The animation translates by -50%, so the track must be exactly two
          identical halves. Each half repeats the list REPEATS times, because a
          single pass (~1120px) is narrower than a desktop viewport and would
          leave a visible gap at the wrap point. Only the first pass is exposed
          to assistive tech.
        */}
        {Array.from({ length: REPEATS * 2 }).map((_, pass) =>
          logos.map((logo) => (
            <li
              key={`${pass}-${logo.alt}`}
              className="flex shrink-0 items-center justify-center px-2"
              aria-hidden={pass > 0 || undefined}
            >
              <LogoItem logo={logo} />
            </li>
          )),
        )}
      </ul>
    </div>
  );
}
