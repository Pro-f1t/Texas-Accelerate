import DarkVeil from "@/components/DarkVeil";
import Faq from "@/components/Faq";
import LogoMarquee from "@/components/LogoMarquee";
import ProcessCard from "@/components/ProcessCard";
import { ArrowCircle, PillButton, PlaceholderArt } from "@/components/ui";
import {
  FAQS,
  HOW_WE_WORK_INTRO,
  PARTNER_LOGOS,
  PARTNER_TYPES,
  PROCESS,
  STATS,
} from "@/data/site";

export default function Home() {
  return (
    <>
      {/* ---------------- Hero: full-viewport veil, content anchored near the top ---------------- */}
      <section className="relative isolate min-h-[982px] overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <DarkVeil speed={2} />
        </div>

        <div className="shell pt-[183px] text-center">
          <h1 className="h-hero">
            Build real experience
            <br />
            with <span className="text-accent">Texas Accelerate</span>
          </h1>
          <p className="t-body mx-auto max-w-[420px] text-white">
            We connect UT students with real work at Austin startups, nonprofits, and
            campaigns.
          </p>
          <PillButton href="/apply" className="mt-11">
            Apply to Join
          </PillButton>
        </div>
      </section>

      {/* ---------------- Statement ---------------- */}
      <section className="shell pb-24">
        <p className="h-display max-w-[1054px]">
          Texas Accelerate is a student-run organization. We partner with{" "}
          <span className="text-accent">
            Austin businesses, nonprofits, campaigns, and startups,
          </span>{" "}
          then match them with UT students who are ready to contribute.
        </p>
        <div className="mt-10 flex items-start" aria-hidden>
          <span className="block h-5 w-5 bg-accent" />
          <span className="mt-5 -ml-1 block h-7 w-7 bg-accent" />
        </div>
      </section>

      {/* ---------------- Who we work with ---------------- */}
      <section className="shell pt-6">
        <h2 className="h-display">Who we work with</h2>
        <p className="t-body mt-4 text-white">
          We work across industries and organization types.
          <br />
          Every partnership starts with a real business need and ends with students who
          have something to show for it.
        </p>

        {/* Cards keep the live site's 447:634 ratio exactly. To shorten the
            section they get narrower, not squatter — the row is capped at
            1080px and centred. Below lg it scrolls horizontally. */}
        <div className="mt-14 -mx-5 flex snap-x snap-mandatory gap-[30px] overflow-x-auto px-5 pb-2 lg:mx-0 lg:grid lg:max-w-[1080px] lg:grid-cols-3 lg:overflow-visible lg:px-0 lg:pb-0">
          {PARTNER_TYPES.map((p) => (
            <article
              key={p.title}
              className="group flex aspect-[447/634] w-[76vw] max-w-[380px] shrink-0 snap-start flex-col rounded-[32px] bg-surface p-6 lg:w-auto lg:max-w-none lg:shrink"
            >
              <div className="flex items-start justify-between gap-4">
                {/* Fixed two-line box so a title that wraps doesn't push this
                    card's image out of line with its neighbours. */}
                <div className="flex min-h-[76px] flex-col">
                  <h3 className="t-card-title">{p.title}</h3>
                  <p className="mt-auto pt-2 text-tsm text-muted">{p.subtitle}</p>
                </div>
                <ArrowCircle size="sm" />
              </div>
              <PlaceholderArt
                seed={p.seed}
                label={p.title}
                className="mt-5 min-h-0 w-full flex-1 rounded-[20px]"
              />
            </article>
          ))}
        </div>
      </section>

      {/* ---------------- How we work ---------------- */}
      <section className="shell pt-[207px]">
        <h2 className="h-display">How We Work</h2>
        <p className="t-body mt-4 max-w-4xl whitespace-pre-line text-white">
          {HOW_WE_WORK_INTRO}
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p) => (
            <ProcessCard key={p.index} {...p} />
          ))}
        </div>
      </section>

      {/* ---------------- Stats + partner logos: full-bleed blue band ---------------- */}
      <section className="mt-[63px] rounded-[64px] bg-accent text-ink">
        {/* Live band padding is 60px top / 36px bottom — its height comes from
            content, not padding. */}
        <div className="shell pt-[60px] pb-9">
          <dl className="grid grid-cols-2 gap-10 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="h-display">{s.value}</dt>
                <dd className="t-body mt-1 text-muted-ink">{s.label}</dd>
              </div>
            ))}
          </dl>

          <h2 className="mt-14 text-[clamp(1.5rem,2.4vw,2.25rem)] leading-[1.25] font-semibold tracking-[-0.02em]">
            Our Members have interned at
          </h2>

          <LogoMarquee logos={PARTNER_LOGOS} />
        </div>
      </section>

      {/* ---------------- FAQ: inset 80px further than the rest ---------------- */}
      <section className="shell pt-40 pb-12">
        <h2 className="h-display">We Know What&rsquo;s On Your Mind</h2>
        <div className="mt-12 lg:px-20">
          <Faq items={FAQS} />
        </div>
      </section>
    </>
  );
}
