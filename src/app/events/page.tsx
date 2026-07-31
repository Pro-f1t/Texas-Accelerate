import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { ArrowCircle, PlaceholderArt } from "@/components/ui";
import { EVENTS, GOOGLE_CALENDAR_URL } from "@/data/events";

export const metadata: Metadata = { title: "Events | Texas Accelerate" };

export default function EventsPage() {
  return (
    <>
      <PageHeader title="Events" crumbs={[{ label: "Events" }]} />

      <section className="shell py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:gap-14">
          {/* --------- Post list --------- */}
          <div className="flex flex-col gap-12">
            {EVENTS.map((e) => (
              <article
                key={e.slug}
                className="group grid gap-6 sm:grid-cols-[minmax(0,300px)_1fr] sm:gap-8"
              >
                <Link href={`/events/${e.slug}`} className="block">
                  <PlaceholderArt
                    seed={e.seed}
                    label={e.title}
                    className="aspect-[16/10] w-full rounded-2xl"
                  />
                </Link>

                <div>
                  <h2 className="text-dxs leading-tight font-semibold">
                    <Link href={`/events/${e.slug}`} className="hover:text-accent">
                      {e.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-tsm text-muted">{e.excerpt}</p>
                  <Link
                    href={`/events/${e.slug}`}
                    aria-label={`Read ${e.title}`}
                    className="mt-6 inline-block"
                  >
                    <ArrowCircle />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* --------- Sidebar --------- */}
          <aside className="flex flex-col gap-10">
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

            <div>
              <h2 className="text-dxs font-semibold">Latest Post</h2>
              <ul className="mt-5">
                {EVENTS.slice(0, 3).map((e) => (
                  <li key={e.slug} className="border-b border-white/12 py-5 first:pt-0">
                    <Link href={`/events/${e.slug}`} className="flex gap-4">
                      <PlaceholderArt
                        seed={e.seed}
                        className="h-16 w-20 shrink-0 rounded-lg"
                      />
                      <span>
                        <span className="block text-tsm leading-snug font-semibold hover:text-accent">
                          {e.title}
                        </span>
                        <span className="mt-1.5 block text-txs text-muted">
                          {e.date}
                        </span>
                      </span>
                    </Link>
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
