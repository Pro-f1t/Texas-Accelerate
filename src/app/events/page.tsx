import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { ArrowCircle, PlaceholderArt } from "@/components/ui";
import { EVENTS, GOOGLE_CALENDAR_URL, UPCOMING_EVENTS } from "@/data/events";

export const metadata: Metadata = { title: "Events | Texas Accelerate" };

export default function EventsPage() {
  return (
    <>
      <PageHeader title="Events" crumbs={[{ label: "Events" }]} />

      <section className="shell py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:gap-14">
          {/* --------- Post list. Two-up grid on phones, single stacked column
              from lg. Ordered after the sidebar on phones. --------- */}
          <div className="order-2 grid grid-cols-2 gap-4 lg:order-1 lg:flex lg:flex-col lg:gap-12">
            {EVENTS.map((e) => (
              <article
                key={e.slug}
                // content-start stops the grid handing leftover height to the
                // rows: without it, the shorter card in a row stretches and
                // pushes its own title down out of line with its neighbour.
                className="group grid content-start gap-3 sm:gap-8 lg:grid-cols-[minmax(0,300px)_1fr]"
              >
                <Link href={`/events/${e.slug}`} className="block">
                  <PlaceholderArt
                    seed={e.seed}
                    label={e.title}
                    className="aspect-[16/10] w-full rounded-2xl"
                  />
                </Link>

                <div>
                  <h2 className="text-[13px] leading-snug font-semibold lg:text-dxs lg:leading-tight">
                    <Link href={`/events/${e.slug}`} className="hover:text-accent">
                      {e.title}
                    </Link>
                  </h2>
                  <p className="mt-2 line-clamp-3 text-[11px] leading-[1.45] text-muted lg:mt-3 lg:line-clamp-none lg:text-tsm">
                    {e.excerpt}
                  </p>
                  <Link
                    href={`/events/${e.slug}`}
                    aria-label={`Read ${e.title}`}
                    className="mt-3 inline-block lg:mt-6"
                  >
                    <ArrowCircle size="sm" className="lg:h-12 lg:w-12" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* --------- Sidebar --------- */}
          <aside className="order-1 flex flex-col gap-6 lg:order-2 lg:gap-10">
            <a
              href={GOOGLE_CALENDAR_URL}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-4 rounded-[32px] bg-surface p-7 transition-colors hover:bg-surface/70"
            >
              <span className="text-dxs leading-tight font-semibold">
                Join our Google Calendar
              </span>
              <ArrowCircle tone="blue" size="sm" />
            </a>

            {/* Sits in its own panel so it reads as a separate list from the
                posted events on the left. */}
            <div className="rounded-[32px] border border-white/10 bg-surface/60 p-7">
              <h2 className="text-dxs font-semibold">Upcoming Events</h2>
              <ul className="mt-5">
                {UPCOMING_EVENTS.map((e) => (
                  <li
                    key={e.title}
                    className="flex gap-4 border-b border-white/12 py-5 first:pt-0 last:border-b-0 last:pb-0"
                  >
                    <PlaceholderArt
                      seed={e.seed}
                      className="h-16 w-20 shrink-0 rounded-lg"
                    />
                    <span>
                      <span className="block text-tsm leading-snug font-semibold">
                        {e.title}
                      </span>
                      <span className="mt-1.5 block text-txs text-muted">
                        {e.date}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
