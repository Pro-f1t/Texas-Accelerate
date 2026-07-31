import { ProcessIcon } from "./Icons";

/**
 * "How We Work" card — 326x424, 32px radius.
 *
 * The ghost number is 155px SemiBold in the *page background* colour, not a
 * translucent white, and it sits 16px left of and 81px above the card's top-left
 * corner (measured off the live site). That's what gives it the cut-out look:
 * invisible against the page, darker than the card where it overlaps.
 */
export default function ProcessCard({
  index,
  name,
  title,
  body,
}: {
  index: string;
  name: "outreach" | "vetting" | "matching" | "development";
  title: string;
  body: string;
}) {
  return (
    <article className="group relative flex min-h-[360px] flex-col justify-end rounded-[32px] bg-surface p-6 transition-colors duration-300 hover:bg-accent lg:min-h-[424px]">
      <span
        aria-hidden
        // Stays page-background coloured in both states: invisible where it
        // overhangs the page, darker than the card, and black on the blue hover.
        className="pointer-events-none absolute -top-[81px] -left-4 text-[155px] leading-none font-semibold text-bg select-none"
      >
        {index}
      </span>

      <ProcessIcon
        name={name}
        className="mb-9 h-20 w-20 bg-accent transition-colors duration-300 group-hover:bg-ink"
      />

      <h3 className="t-card-title transition-colors duration-300 group-hover:text-ink">
        {title}
      </h3>
      <p className="mt-2 text-tsm text-muted transition-colors duration-300 group-hover:text-muted-ink">
        {body}
      </p>
    </article>
  );
}
