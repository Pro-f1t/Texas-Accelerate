import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { PlaceholderArt } from "@/components/ui";
import { LEADERSHIP, MEMBERS, type Member } from "@/data/team";

export const metadata: Metadata = { title: "Team | Texas Accelerate" };

function MemberCard({ m }: { m: Member }) {
  return (
    <article className="rounded-2xl bg-surface p-4">
      <PlaceholderArt
        seed={m.seed}
        label={`${m.first} ${m.last}`}
        className="aspect-[4/5] w-full rounded-xl"
      />
      <h3 className="mt-4 text-txl leading-tight font-semibold">
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
    </article>
  );
}

export default function TeamPage() {
  return (
    <>
      <PageHeader title="Our Team" crumbs={[{ label: "Team" }]} />

      <section className="shell py-16 md:py-20">
        <h2 className="text-center text-[clamp(1.75rem,3.4vw,3rem)] leading-[1.26] font-semibold">
          Leadership &amp; Executive Team
        </h2>
        {/* The Figma frames keep these 4-up even at 402px, which is unreadable on a
            phone, so they drop to 2-up below the lg breakpoint. */}
        <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {LEADERSHIP.map((m) => (
            <MemberCard key={`${m.first}-${m.last}-${m.role}`} m={m} />
          ))}
        </div>

        <h2 className="mt-20 text-center text-[clamp(1.75rem,3.4vw,3rem)] leading-[1.26] font-semibold">
          Fall 2026 Members
        </h2>
        {MEMBERS.length === 0 ? (
          <p className="t-body mt-8 text-center text-muted">
            Fall 2026 cohort coming soon&hellip;
          </p>
        ) : (
          <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
            {MEMBERS.map((m, i) => (
              <MemberCard key={i} m={m} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
