import { ProcessIcon } from "./Icons";

/**
 * "How We Work" card — 326x424 at desktop, 176x282 in the phone 2x2 grid, both
 * with a 32px radius.
 *
 * The ghost number is Syne SemiBold in the *page background* colour, not a
 * translucent white, and it sits left of and above the card's top-left corner
 * (measured off the live site). That's what gives it the cut-out look:
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
    // overflow-hidden clips the ghost number to the card. On desktop that
    // changes nothing visible — the overhang is page-background coloured, so
    // it's invisible there anyway — but in the phone 2x2 grid the card above is
    // right there and the number would paint on top of it.
    <article className="group relative flex min-h-[282px] flex-col justify-end overflow-hidden rounded-[32px] bg-surface p-4 transition-colors duration-300 hover:bg-accent lg:min-h-[424px] lg:p-6">
      <span
        aria-hidden
        // Stays page-background coloured in both states: invisible where it
        // overhangs the page, darker than the card, and black on the blue hover.
        className="pointer-events-none absolute -top-[52px] -left-2.5 text-[96px] leading-none font-semibold text-bg select-none lg:-top-[81px] lg:-left-4 lg:text-[155px]"
      >
        {index}
      </span>

      <ProcessIcon
        name={name}
        className="mb-5 h-12 w-12 bg-accent transition-colors duration-300 group-hover:bg-ink lg:mb-9 lg:h-20 lg:w-20"
      />

      <h3 className="text-[17px] leading-[1.2] font-bold tracking-[-0.02em] transition-colors duration-300 group-hover:text-ink lg:text-[30px]">
        {title}
      </h3>
      <p className="mt-1.5 text-[11px] leading-[1.45] text-muted transition-colors duration-300 group-hover:text-muted-ink lg:mt-2 lg:text-tsm">
        {body}
      </p>
    </article>
  );
}
