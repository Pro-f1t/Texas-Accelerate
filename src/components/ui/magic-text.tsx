"use client";

import * as React from "react";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "motion/react";

/**
 * Scroll-driven word reveal. Adapted from the upstream component in three ways:
 *
 * 1. `highlight` — upstream takes a flat string and splits on spaces, which would
 *    drop the accent-coloured phrase in the statement copy. Naming the substring
 *    keeps the colour while still animating word by word.
 * 2. Typography comes from `className` (here `.t-statement`) instead of a
 *    hardcoded `text-3xl`. Upstream also fakes line spacing with
 *    `leading-[0.5]` + a per-word `mt-[12px]`; that fights the site's fluid
 *    clamp scale, so words stay in normal inline flow and wrap naturally.
 * 3. Reduced motion renders every word at full opacity — a scroll-linked fade is
 *    exactly what that preference is asking us to drop.
 */
export interface MagicTextProps {
  text: string;
  /** Substring of `text` to render in the accent colour. */
  highlight?: string;
  className?: string;
}

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  accent?: boolean;
  /** Skips the scroll binding entirely when motion is reduced. */
  still?: boolean;
}

const Word: React.FC<WordProps> = ({
  children,
  progress,
  range,
  accent,
  still,
}) => {
  // Upstream stacks a dimmed copy under an animated one, which puts every word
  // in the DOM twice — this is the home page's headline copy, so it would be
  // extracted as "TexasTexas AccelerateAccelerate". One layer ramping from the
  // same 0.2 to 1 looks the same and keeps the text readable.
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <motion.span
      className={`inline-block whitespace-nowrap ${accent ? "text-accent" : ""}`}
      style={still ? undefined : { opacity }}
    >
      {children}
    </motion.span>
  );
};

/** Splits into words, tagging the ones inside `highlight`. */
function splitWords(text: string, highlight?: string) {
  const at = highlight ? text.indexOf(highlight) : -1;

  const chunks =
    at === -1 || !highlight
      ? [{ text, accent: false }]
      : [
          { text: text.slice(0, at), accent: false },
          { text: highlight, accent: true },
          { text: text.slice(at + highlight.length), accent: false },
        ];

  return chunks.flatMap((c) =>
    c.text
      .split(/\s+/)
      .filter(Boolean)
      .map((word) => ({ word, accent: c.accent })),
  );
}

export const MagicText: React.FC<MagicTextProps> = ({
  text,
  highlight,
  className = "",
}) => {
  const container = useRef<HTMLParagraphElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = splitWords(text, highlight);

  return (
    <p ref={container} className={className}>
      {words.map(({ word, accent }, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;

        return (
          <React.Fragment key={i}>
            <Word
              progress={scrollYProgress}
              range={[start, end]}
              accent={accent}
              still={reduced ?? false}
            >
              {word}
            </Word>{" "}
          </React.Fragment>
        );
      })}
    </p>
  );
};
