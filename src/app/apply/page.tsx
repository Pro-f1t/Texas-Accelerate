import Image from "next/image";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { ArrowCircle } from "@/components/ui";
import { RECRUITMENT_CALENDAR_SRC } from "@/data/site";

export const metadata: Metadata = {
  title: "Apply | Texas Accelerate",
  description:
    "Recruitment timeline and application details for Texas Accelerate.",
};

export default function ApplyPage() {
  return (
    <>
      <PageHeader title="Apply" crumbs={[{ label: "Apply" }]} />

      <section className="shell py-16 md:py-20">
        {/*
          Two explicit rows at lg: the heading occupies row 1 of the left column
          only, and the calendar and the application card share row 2. That keeps
          the card's top edge level with the calendar's at any width. A fixed
          top margin would drift, because the heading uses clamp() type that
          grows with the viewport.
        */}
        <div className="grid gap-y-8 lg:grid-cols-[1fr_380px] lg:grid-rows-[auto_1fr] lg:gap-x-16">
          {/* --------- Timeline heading: row 1, left --------- */}
          <div className="lg:col-start-1 lg:row-start-1">
            <h2 className="h-display">Recruitment Timeline</h2>
            <p className="t-body mt-4 max-w-xl text-muted">
              Key dates for the 2026&ndash;2027 cycle.
            </p>
          </div>

          {/* --------- Calendar: row 2, left. The embed ships at a fixed
              800x600, so this wrapper makes it fluid — aspect box on small
              screens, definite height on desktop, since a pure aspect ratio
              clips the embed's own footer. --------- */}
          <div className="aspect-[3/4] w-full overflow-hidden rounded-[32px] bg-surface sm:aspect-[4/3] lg:col-start-1 lg:row-start-2 lg:aspect-auto lg:h-[700px]">
            <iframe
              src={RECRUITMENT_CALENDAR_SRC}
              title="2026-2027 Recruitment Timeline"
              loading="lazy"
              className="h-full w-full border-0"
            />
          </div>

          {/* --------- Application form card: row 2, right --------- */}
          <aside className="lg:col-start-2 lg:row-start-2">
            {/* Brand card on the same surface as every other card. */}
            <div className="overflow-hidden rounded-[32px] bg-surface">
              <Image
                src="/og.png"
                alt="Texas Accelerate"
                width={4800}
                height={2520}
                sizes="(min-width: 1024px) 380px, 100vw"
                className="h-auto w-full"
              />
            </div>

            {/* Same treatment as the Join our Google Calendar button: surface
                card, arrow, blue fill on hover. Both are placeholders for now,
                so they're buttons rather than links. */}
            <ul className="mt-6 flex flex-col gap-5">
              {[
                { title: "2026 Fall Application Form", note: "Coming Soon!" },
                { title: "2026 Recruiting GroupMe", note: "Coming Soon!" },
              ].map((item) => (
                <li key={item.title}>
                  <div className="group flex cursor-pointer items-center justify-between gap-4 rounded-[32px] bg-surface p-7 transition-colors duration-300 hover:bg-accent">
                    <span>
                      <span className="block text-dxs leading-tight font-semibold transition-colors duration-300 group-hover:text-ink">
                        {item.title}
                      </span>
                      <span className="mt-2 block text-tsm text-muted transition-colors duration-300 group-hover:text-muted-ink">
                        {item.note}
                      </span>
                    </span>
                    <ArrowCircle tone="blue" size="sm" />
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
