import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { PillButton } from "@/components/ui";
import { CONTACT_EMAIL } from "@/data/site";
import {
  CONTACT_HREF,
  FOUNDING_PARTNER,
  MENU,
  MENU_ROWS,
  PARTNERS_HEADLINE,
  PARTNERS_STATS,
  PROJECT_CTA_HREF,
  SHOW_FOUNDING_BANNER,
  TWO_WAYS,
  WAY_PROJECT,
  WAY_SPONSOR,
  type WayCard,
} from "@/data/partners";

export const metadata: Metadata = {
  title: "Partners | Texas Accelerate",
  description:
    "Run a pro bono project with UT students, or sponsor Texas Accelerate for recruiting and brand access to the full membership.",
};

/** "Contact us" pill + the plain email beside it. Appears three times on the page. */
function ContactRow({
  size = "sm",
  className = "",
}: {
  size?: "sm" | "md";
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-center gap-5 md:gap-6 ${className}`}>
      <PillButton href={CONTACT_HREF} size={size}>
        Contact us
      </PillButton>
      <a
        href={CONTACT_HREF}
        className="text-tmd text-muted transition-colors hover:text-accent"
      >
        {CONTACT_EMAIL}
      </a>
    </div>
  );
}

function WayCardView({ card, children }: { card: WayCard; children: React.ReactNode }) {
  return (
    <article className="flex flex-col rounded-[32px] bg-surface p-6 md:p-10 lg:min-h-[420px]">
      <span className="text-tsm text-muted">{card.eyebrow}</span>
      <h3 className="t-card-title mt-3">{card.title}</h3>
      <ul className="t-body mt-6 flex flex-col gap-3.5">
        {card.bullets.map((b) => (
          <li key={b} className="flex gap-3.5">
            <span
              aria-hidden
              className="mt-[7px] h-2.5 w-2.5 shrink-0 rounded-full bg-accent lg:mt-[9px]"
            />
            {b}
          </li>
        ))}
      </ul>
      {/* CTA row pinned to the bottom so both cards' buttons line up. */}
      <div className="mt-auto pt-8 md:pt-10">{children}</div>
    </article>
  );
}

// Shared grid for the menu's column header and its rows. Below md the rows
// stack (offering, description, reach) and the header is hidden.
const MENU_GRID = "md:grid md:grid-cols-[1.1fr_2fr_1fr] md:items-center md:gap-8";

export default function PartnersPage() {
  return (
    <>
      <PageHeader title="Partners" crumbs={[{ label: "Partners" }]} />

      {/* ---------------- Headline ---------------- */}
      <section className="shell pt-8 md:pt-20">
        <h1 className="h-hero max-w-[1000px]">
          {PARTNERS_HEADLINE.before}
          <span className="text-accent">{PARTNERS_HEADLINE.highlight}</span>
          {PARTNERS_HEADLINE.after}
        </h1>
        <p className="t-body mt-4 max-w-[640px] text-muted md:mt-5">
          {PARTNERS_HEADLINE.subline}
        </p>
      </section>

      {/* ---------------- Stats: blue band, inset to the shell ----------------
          Unlike the home band this one sits inside the shell padding (Jamie:
          "same cushion on the left and right as the other things") and runs
          shallower. */}
      <section className="shell mt-10 lg:mt-20">
        <div className="rounded-[24px] bg-accent px-5 py-5 text-ink lg:rounded-[40px] lg:px-12 lg:py-10">
          {/* One row of four on phones, same as the home band. */}
          <dl className="grid grid-cols-4 gap-3 lg:gap-10">
            {PARTNERS_STATS.map((s) => (
              <div key={s.label}>
                <dt className="h-stat">{s.value}</dt>
                <dd className="mt-1 text-[10px] leading-[1.5] text-muted-ink lg:text-tlg">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------------- Two ways to work with us ---------------- */}
      <section className="shell pt-20 lg:pt-44">
        <h2 className="h-display">{TWO_WAYS.title}</h2>
        <p className="t-body mt-4 max-w-[720px]">{TWO_WAYS.intro}</p>

        <div className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-2 lg:gap-8">
          <WayCardView card={WAY_PROJECT}>
            <PillButton href={PROJECT_CTA_HREF} size="md">
              Request a project
            </PillButton>
          </WayCardView>

          <WayCardView card={WAY_SPONSOR}>
            <ContactRow size="md" className="gap-5" />
          </WayCardView>
        </div>
      </section>

      {/* ---------------- Partnership menu ---------------- */}
      <section className="shell pt-16 pb-16 lg:pt-32 lg:pb-32">
        <h2 className="h-display">{MENU.title}</h2>
        <p className="t-body mt-4 max-w-[720px] text-muted">{MENU.intro}</p>

        {SHOW_FOUNDING_BANNER && (
          <div className="mt-10 rounded-[32px] bg-accent px-6 py-6 text-ink md:px-10 md:py-8 lg:mt-14">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-[clamp(1.375rem,1.9vw,1.875rem)] leading-[1.2] font-semibold tracking-[-0.02em]">
                {FOUNDING_PARTNER.title}
              </h3>
              <span className="rounded-full bg-ink px-3.5 py-1.5 text-tsm leading-[1.4] text-white">
                {FOUNDING_PARTNER.tag}
              </span>
            </div>
            <p className="t-body mt-3 max-w-[760px] text-muted-ink">
              {FOUNDING_PARTNER.body}
            </p>
          </div>
        )}

        <div className={`mt-8 hidden px-8 pb-4 text-tsm text-muted ${MENU_GRID}`}>
          {MENU.columns.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>

        <ul className="mt-6 flex flex-col gap-2 md:mt-0">
          {MENU_ROWS.map((row) => (
            <li
              key={row.offering}
              className={`rounded-2xl bg-surface px-6 py-5 text-[clamp(0.9375rem,1.125vw,1.125rem)] leading-[1.5] tracking-[-0.02em] md:px-8 md:py-6 ${MENU_GRID}`}
            >
              <span className="block font-semibold">{row.offering}</span>
              <span className="mt-1 block text-muted md:mt-0">{row.what}</span>
              <span className="mt-1 block text-tsm text-white/80 md:mt-0 md:text-[inherit] md:text-white">
                {row.reach}
              </span>
            </li>
          ))}
        </ul>

        <ContactRow className="mt-8 md:mt-10" />
      </section>
    </>
  );
}
