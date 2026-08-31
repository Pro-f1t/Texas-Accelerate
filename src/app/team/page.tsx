import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { LinkedInIcon } from "@/components/Icons";
import { PlaceholderArt } from "@/components/ui";
import {
  FIELD_TEAM_LEADS,
  LEADERSHIP,
  MEMBERS,
  type Member,
} from "@/data/team";

export const metadata: Metadata = { title: "Team | Texas Accelerate" };

// Card width is capped rather than left to fill its column, so a card is never
// bigger than CARD regardless of layout. That matters most in the 2-up range
// (phone through half-screen desktop): a 2-column card in an 800px window would
// otherwise come out wider than the 4-up desktop card. The grid caps keep the
// gaps from stretching once the cards stop growing.
const GRID =
  "mt-10 grid grid-cols-2 justify-items-center gap-6 mx-auto max-w-[600px] lg:max-w-[1120px] lg:grid-cols-4 lg:gap-8";
// 256px is what a 4-up column works out to at the grid's cap, so using it as the
// max keeps a full-span card (a stranded last one) the same width as the rest.
const CARD = "w-full max-w-[256px]";

/**
 * A final row holding a single card looks stranded hard left, so let it span the
 * whole row and centre instead. The two layouts strand independently — 5 people
 * leave one over in both the 2-up and 4-up grids, 7 only in the 2-up.
 */
function orphanClass(count: number, i: number) {
  if (i !== count - 1) return "";
  return [
    count % 2 === 1 ? "col-span-2" : "",
    count % 4 === 1 ? "lg:col-span-4" : "lg:col-span-1",
  ]
    .filter(Boolean)
    .join(" ");
}

/**
 * Headshots live in `public/team/`. Checked against the directory on the server
 * so a `photo` naming a file that isn't there yet falls back to the gradient
 * placeholder instead of shipping a broken image.
 */
const PHOTO_DIR = path.join(process.cwd(), "public", "team");
const PHOTOS_ON_DISK = new Set(
  fs.existsSync(PHOTO_DIR) ? fs.readdirSync(PHOTO_DIR) : [],
);

function MemberCard({ m, className = "" }: { m: Member; className?: string }) {
  const photo = m.photo && PHOTOS_ON_DISK.has(m.photo) ? `/team/${m.photo}` : null;

  return (
    <article className={`rounded-2xl bg-surface p-4 ${CARD} ${className}`}>
      {photo ? (
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
          {/* Cards top out at 256px, so cap the request there rather than let
              next/image reach for a device width it will never display at. */}
          <Image
            src={photo}
            alt={`${m.first} ${m.last}`}
            fill
            sizes="256px"
            className="object-cover"
          />
        </div>
      ) : (
        <PlaceholderArt
          seed={m.seed}
          label={`${m.first} ${m.last}`}
          className="aspect-[4/5] w-full rounded-xl"
        />
      )}
      {/* Name/role on the left, LinkedIn pinned to the bottom-right. */}
      <div className="mt-4 flex items-end justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-txl leading-tight font-semibold">
            {m.first}
            <br />
            {m.last}
          </h3>
          <p className="mt-2 text-txs text-muted">
            {m.role}
            {m.major && (
              <>
                <br />
                {m.major}
              </>
            )}
          </p>
        </div>

        {m.linkedin && (
          <a
            href={m.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label={`${m.first} ${m.last} on LinkedIn`}
            className="shrink-0 text-white/70 transition-colors hover:text-accent"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
        )}
      </div>
    </article>
  );
}

export default function TeamPage() {
  return (
    <>
      <PageHeader title="Meet the Team" crumbs={[{ label: "Team" }]} />

      <section className="shell pt-8 pb-14 md:py-20">
        <h2 className="text-center text-[clamp(1.75rem,3.4vw,3rem)] leading-[1.26] font-semibold">
          Leadership
        </h2>
        {/* The Figma frames keep these 4-up even at 402px, which is unreadable on a
            phone, so they drop to 2-up below the lg breakpoint. */}
        <div className={GRID}>
          {LEADERSHIP.map((m, i) => (
            <MemberCard
              key={`${m.first}-${m.last}-${m.role}`}
              m={m}
              className={orphanClass(LEADERSHIP.length, i)}
            />
          ))}
        </div>

        {FIELD_TEAM_LEADS.length > 0 && (
          <>
            <h2 className="mt-20 text-center text-[clamp(1.75rem,3.4vw,3rem)] leading-[1.26] font-semibold">
              Field Team Leads
            </h2>
            <div className={GRID}>
              {FIELD_TEAM_LEADS.map((m, i) => (
                <MemberCard
                  key={`${m.first}-${m.last}-${m.role}`}
                  m={m}
                  className={orphanClass(FIELD_TEAM_LEADS.length, i)}
                />
              ))}
            </div>
          </>
        )}

        <h2 className="mt-20 text-center text-[clamp(1.75rem,3.4vw,3rem)] leading-[1.26] font-semibold">
          Fall 2026 Members
        </h2>
        {MEMBERS.length === 0 ? (
          <p className="t-body mt-8 text-center text-muted">
            Fall 2026 cohort coming soon&hellip;
          </p>
        ) : (
          <div className={GRID}>
            {MEMBERS.map((m, i) => (
              <MemberCard key={i} m={m} className={orphanClass(MEMBERS.length, i)} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
