import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import {
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  ShareIcon,
} from "@/components/Icons";
import { CONTACT_EMAIL, SOCIALS } from "@/data/site";

export const metadata: Metadata = { title: "Contact Us | Texas Accelerate" };

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Get in Touch" crumbs={[{ label: "Contact Us" }]} />

      {/* Single column now that the brand card is gone and the application block
          lives on /apply. Capped so the rules don't stretch the full 1400px. */}
      <section className="shell py-16 md:py-20">
        <div className="max-w-2xl">
          <h2 className="text-[clamp(1.75rem,3.4vw,3rem)] leading-[1.26] font-semibold">
            Have Questions?
            <br />
            Get in Touch
          </h2>
          <p className="mt-6 text-tsm text-muted">
            Contact us with any questions you have about the organization
          </p>

          {/* Whole row is the link, with a prefilled subject so it opens a
              ready-to-send draft rather than a blank compose window. */}
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
              "Question about Texas Accelerate",
            )}`}
            className="group mt-10 flex items-center gap-5 border-b border-white/12 pb-7"
          >
            <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent text-ink transition-transform group-hover:scale-105">
              <MailIcon className="h-6 w-6" />
            </span>
            <span>
              <span className="block text-tsm text-muted">Email</span>
              <span className="block text-txl font-medium transition-colors group-hover:text-accent">
                {CONTACT_EMAIL}
              </span>
            </span>
          </a>

          <div className="flex items-center gap-5 border-b border-white/12 py-7">
            <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent text-ink">
              <ShareIcon className="h-6 w-6" />
            </span>
            <div>
              <p className="text-tsm text-muted">Follow Us</p>
              <div className="mt-2 flex items-center gap-3">
                <a
                  href={SOCIALS.linkedin}
                  aria-label="Texas Accelerate on LinkedIn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon className="h-6 w-6 hover:text-accent" />
                </a>
                <a
                  href={SOCIALS.instagram}
                  aria-label="Texas Accelerate on Instagram"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon className="h-6 w-6 hover:text-accent" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
