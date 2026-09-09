import { CONTACT_EMAIL } from "./site";

/**
 * Copy for /partners. Content rules from the design handoff that must hold:
 * no dollar amounts or priced tiers, never the phrase "tax-deductible", and no
 * placement-rate or job-outcome claims.
 */

export const CONTACT_HREF = `mailto:${CONTACT_EMAIL}`;

/** Where "Request a project" goes. Still TBD in the handoff; falls back to email. */
export const PROJECT_CTA_HREF = CONTACT_HREF;

export const PARTNERS_HEADLINE = {
  before: "Meet UT students who have ",
  highlight: "already delivered",
  after: " for a client.",
  subline:
    "We match 100+ members across 6 Field Teams with real project work and connect them with employers before graduation.",
};

export const PARTNERS_STATS = [
  { value: "200+", label: "Applicants" },
  { value: "100+", label: "Members" },
  { value: "20+", label: "Majors and Minors" },
  { value: "6", label: "Field Teams" },
];

export const TWO_WAYS = {
  title: "Two Ways to Work With Us",
  intro:
    "Running a project is free. Sponsoring is a separate, optional layer that opens the full membership to you.",
};

export type WayCard = {
  eyebrow: string;
  title: string;
  bullets: string[];
};

export const WAY_PROJECT: WayCard = {
  eyebrow: "Option A",
  title: "Run a project",
  bullets: [
    "Pro bono.",
    "Scoped to your need; we recruit students against it.",
    "Flexible duration tailored to the company, ending at our end of year showcase.",
    "A student project lead runs the team and keeps you updated throughout.",
  ],
};

export const WAY_SPONSOR: WayCard = {
  eyebrow: "Option B",
  title: "Sponsor the org",
  bullets: [
    "Recruiting and brand access to the full membership, not just your project team.",
    "Ongoing, scoped around your recruiting goals.",
    "Host info sessions or workshops for all members.",
    "Resume book of every member.",
    "Branding on our site, socials, and member shirts.",
  ],
};

export const MENU = {
  title: "Partnership Menu",
  intro:
    "Partners usually combine a few of these. If you have something else in mind, we will scope it with you.",
  columns: ["Offering", "What it is", "Reach"],
};

/** Toggle off once the founding cohort closes. */
export const SHOW_FOUNDING_BANNER = true;

export const FOUNDING_PARTNER = {
  title: "Founding Partner",
  tag: "Fall 2026",
  body: "Everything below, plus permanent Founding Partner credit on our site and materials.",
};

export const MENU_ROWS = [
  {
    offering: "Host events",
    what: "Info sessions or workshops; we handle logistics",
    reach: "100+ members",
  },
  { offering: "Resume book", what: "Resumes of every member", reach: "100+ members" },
  {
    offering: "Showcase sponsor",
    what: "Present at the end of year showcase",
    reach: "Members and clients",
  },
  { offering: "Branding", what: "Site, socials, member shirts", reach: "Members and public" },
  {
    offering: "Flexible partnership",
    what: "Open to scoping any event or collaboration with you",
    reach: "Varies",
  },
];
