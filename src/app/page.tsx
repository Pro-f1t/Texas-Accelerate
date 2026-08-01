import DarkVeil from "@/components/DarkVeil";
import ContactDetails from "@/components/ContactDetails";
import LogoMarquee from "@/components/LogoMarquee";
import ProcessCard from "@/components/ProcessCard";
import { PillButton, PlaceholderArt } from "@/components/ui";
import {
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
      <section className="relative isolate flex min-h-svh items-center overflow-hidden lg:block lg:min-h-[982px]">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <DarkVeil speed={2} />
        </div>

        <div className="shell w-full text-center lg:pt-[183px]">
          <h1 className="h-hero">
            Build real experience
            <br />
            with <span className="text-accent">Texas Accelerate</span>
          </h1>
          <p className="t-body mx-auto mt-3 max-w-[540px] text-white lg:mt-0">
            We connect UT students with vetted employers for internships, project
            work, and semester-long opportunities.
          </p>
          <PillButton href="/apply" className="mt-8 lg:mt-11">
            Apply Now
          </PillButton>
        </div>
      </section>

      {/* ---------------- Statement ---------------- */}
      <section className="shell pt-10 pb-12 lg:pt-0 lg:pb-24">
        <p className="t-statement">
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
      <section className="shell pt-10 lg:pt-6">
        <h2 className="h-display">Our Employer Network</h2>
        <p className="t-body mt-4 text-white">
          Our employer network spans startups, nonprofits, businesses, and
          campaigns.
          <br />
          Every partnership starts with a real business need and ends with students who
          have something to show for it.
        </p>

        {/* One horizontally-scrolling row at every breakpoint. `bleed-x` cancels
            the shell padding so cards can run off both edges; `shell-x` puts the
            same padding back inside so the first card still lines up with the
            heading. Cards keep the 447:634 ratio. */}
        <div className="bleed-x shell-x mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 lg:mt-14 lg:gap-[30px]">
          {PARTNER_TYPES.map((p) => (
            <article
              key={p.title}
              className="group flex aspect-[447/634] w-[219px] shrink-0 snap-start flex-col rounded-[32px] bg-surface p-4 transition-colors duration-300 hover:bg-accent sm:w-[300px] sm:p-6 lg:w-[340px]"
            >
              {/* Title and subtitle each reserve exactly two lines and clamp to
                  two. That makes everything above the image a fixed height, so
                  the image — which takes the remaining space — is identical on
                  every card regardless of how long the copy is. */}
              <h3 className="line-clamp-2 min-h-[36px] whitespace-pre-line text-[15px] leading-[1.2] font-bold tracking-[-0.02em] transition-colors duration-300 group-hover:text-ink lg:min-h-[63px] lg:text-[26px]">
                {p.title}
              </h3>
              <p className="mt-1.5 line-clamp-2 min-h-[31px] text-[11px] leading-[1.4] text-muted transition-colors duration-300 group-hover:text-muted-ink lg:mt-2 lg:min-h-[40px] lg:text-tsm">
                {p.subtitle}
              </p>
              <PlaceholderArt
                seed={p.seed}
                label={p.title}
                className="mt-3 min-h-0 w-full flex-1 rounded-[16px] lg:mt-5 lg:rounded-[20px]"
              />
            </article>
          ))}
        </div>
      </section>

      {/* ---------------- How we work ---------------- */}
      <section className="shell pt-16 lg:pt-[207px]">
        <h2 className="h-display">How Texas Accelerate Works</h2>
        <p className="t-body mt-4 max-w-4xl whitespace-pre-line text-white">
          {HOW_WE_WORK_INTRO}
        </p>

        <div className="mt-8 grid grid-cols-2 gap-2.5 lg:mt-14 lg:grid-cols-4 lg:gap-8">
          {PROCESS.map((p) => (
            <ProcessCard key={p.index} {...p} />
          ))}
        </div>
      </section>

      {/* ---------------- Stats + partner logos: full-bleed blue band ---------------- */}
      <section className="mt-10 rounded-[32px] bg-accent text-ink lg:mt-[63px] lg:rounded-[64px]">
        {/* Live band padding is 60px top / 36px bottom — its height comes from
            content, not padding. */}
        <div className="shell pt-5 pb-6 lg:pt-[60px] lg:pb-9">
          {/* One row of four on phones, matching the reference band. */}
          <dl className="grid grid-cols-4 gap-3 lg:gap-10">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="h-stat">{s.value}</dt>
                <dd className="mt-1 text-[10px] leading-[1.5] text-muted-ink lg:text-tlg">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>

          <h2 className="mt-6 text-[clamp(1.25rem,2.4vw,2.25rem)] leading-[1.25] font-semibold tracking-[-0.02em] lg:mt-14">
            Our Members Have Worked At
          </h2>

          <LogoMarquee logos={PARTNER_LOGOS} />
        </div>
      </section>

      {/* ---------------- Contact ---------------- */}
      <section className="shell pt-16 pb-12 lg:pt-40">
        <ContactDetails />
      </section>
    </>
  );
}
