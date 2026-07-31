import DarkVeil from "./DarkVeil";
import Logo from "./Logo";
import { PillButton } from "./ui";

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-footer">
      {/*
        Replaces the blue swirl from the Figma file. Same shader as the hero but
        a deliberately different composition: over-sized and anchored off the
        bottom-right corner, hue-shifted cooler and warped harder, so the footer
        doesn't read as a repeat of the hero. DarkVeil sizes itself from this
        wrapper, so the wrapper needs real dimensions rather than inset-0.
      */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[25%] -bottom-[40%] -z-10 h-[185%] w-[125%] opacity-60"
      >
        <DarkVeil speed={0.6} hueShift={28} warpAmount={1.2} resolutionScale={0.6} />
      </div>

      <div className="shell pt-24 pb-12 md:pt-32 md:pb-14">
        <h2 className="h-display max-w-3xl">Accelerate your Career</h2>
        <p className="t-body mt-4 max-w-lg text-muted">
          Bridging the gap between students and work that actually matters.
        </p>

        <PillButton href="/contact-us" className="mt-10">
          Contact Us
        </PillButton>

        <div className="mt-20 flex flex-col gap-4 border-t border-white/10 pt-8 md:mt-28 md:flex-row md:items-center md:justify-between">
          <Logo heightClass="h-8 md:h-10" />
          <p className="text-txs text-white/60">
            © 2026 Texas Accelerate, All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
