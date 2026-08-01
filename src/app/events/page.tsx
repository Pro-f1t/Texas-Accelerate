import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { ArrowCircle, PlaceholderArt } from "@/components/ui";
import { GOOGLE_CALENDAR_URL, UPCOMING_EVENTS } from "@/data/events";

export const metadata: Metadata = { title: "Events | Texas Accelerate" };

/** Placeholder tiles until the Instagram feed is wired up. */
const FEED_TILES = 6;

export default function EventsPage() {
  return (
    <>
      <PageHeader title="Events" crumbs={[{ label: "Events" }]} />

      <section className="shell pt-8 pb-14 md:py-20">
        {/*
          Three independent blocks so the phone can reorder them freely:
          Upcoming → Instagram → Calendar. At lg they're placed back into two
          columns, with Instagram spanning both rows on the left.
        */}
        <div className="grid gap-6 lg:grid-cols-[1fr_360px] lg:grid-rows-[auto_1fr] lg:gap-x-14 lg:gap-y-10">
          <div className="order-1 rounded-[32px] bg-surface p-7 lg:order-none lg:col-start-2 lg:row-start-2">
            <h2 className="text-dxs font-semibold">Upcoming Events</h2>
            <ul className="mt-5 flex flex-col gap-5">
              {UPCOMING_EVENTS.map((e) => (
                <li key={e.title} className="flex items-center gap-4">
                  <PlaceholderArt
                    seed={e.seed}
                    className="h-14 w-14 shrink-0 rounded-2xl"
                  />
                  <span>
                    <span className="block text-tsm leading-snug font-semibold">
                      {e.title}
                    </span>
                    <span className="mt-1 block text-txs text-muted">
                      {e.date}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instagram feed. Tiles are empty for now; each becomes a post link. */}
          <div className="order-2 lg:order-none lg:col-start-1 lg:row-start-1 lg:row-span-2">
            <h2 className="text-dxs font-semibold">From Instagram</h2>
            <p className="mt-3 text-tsm text-muted">Coming soon</p>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-5">
              {Array.from({ length: FEED_TILES }).map((_, i) => (
                <div
                  key={i}
                  aria-hidden
                  className="aspect-square rounded-xl bg-surface"
                />
              ))}
            </div>
          </div>

          <a
            href={GOOGLE_CALENDAR_URL}
            target="_blank"
            rel="noreferrer"
            className="group order-3 flex items-center justify-between gap-4 rounded-[32px] bg-surface p-7 transition-colors hover:bg-accent lg:order-none lg:col-start-2 lg:row-start-1 lg:self-start"
          >
            <span className="text-dxs leading-tight font-semibold transition-colors group-hover:text-ink">
              Join our Google Calendar
            </span>
            <ArrowCircle tone="blue" size="sm" />
          </a>
        </div>
      </section>
    </>
  );
}
