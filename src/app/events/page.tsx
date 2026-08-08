import Image from "next/image";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { ArrowCircle, PlaceholderArt } from "@/components/ui";
import {
  GOOGLE_CALENDAR_URL,
  INSTAGRAM_POSTS,
  UPCOMING_EVENTS,
} from "@/data/events";
import { SOCIALS } from "@/data/site";

export const metadata: Metadata = { title: "Events | Texas Accelerate" };

// Two posts read better as two large tiles than as two thirds of an empty row,
// so the grid only opens up to three columns once there's enough to fill it.
const feedCols =
  INSTAGRAM_POSTS.length > 2 ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-2";

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
          {/* self-start, or the 1fr row stretches this card to match the taller
              Instagram column and leaves dead space under the last event. */}
          <div className="order-1 rounded-[32px] bg-surface p-7 lg:order-none lg:col-start-2 lg:row-start-2 lg:self-start">
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

          {/* Instagram feed. Tiles are empty for now; each links to the profile. */}
          <div className="order-2 lg:order-none lg:col-start-1 lg:row-start-1 lg:row-span-2">
            <h2 className="text-dxs font-semibold">From Instagram</h2>
            <a
              href={SOCIALS.instagram}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-tsm text-muted transition-colors hover:text-accent"
            >
              @texasaccelerate
            </a>

            <div className={`mt-6 grid gap-4 lg:gap-5 ${feedCols}`}>
              {INSTAGRAM_POSTS.map((post) => (
                <a
                  key={post.shortcode}
                  href={`https://www.instagram.com/p/${post.shortcode}/`}
                  target="_blank"
                  rel="noreferrer"
                  className="relative block aspect-square overflow-hidden rounded-xl bg-surface transition-opacity hover:opacity-80"
                >
                  <Image
                    src={`/instagram/${post.shortcode}.jpg`}
                    alt={post.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 45vw"
                    className="object-cover"
                  />
                </a>
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
