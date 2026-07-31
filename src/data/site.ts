export const CONTACT_EMAIL = "texas.accelerate@gmail.com";

/** Public embed for the 2026-2027 Recruitment Timeline calendar. */
export const RECRUITMENT_CALENDAR_SRC =
  "https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FChicago&showPrint=0&title=2026-2027%20Recruitment%20Timeline&src=NmIzYmJiOTgyMjY4ODY4MzMxMWMwNzM5YTRjY2JkZjQ2MWM1ZDQ5YWNiMzJmYTBiMzZmMjdiNWNiM2ZlOTY3YUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23c0ca33";

export const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/texas-accelerate/?viewAsMember=true",
  instagram: "https://www.instagram.com/texasaccelerate/?hl=en",
};

export const PROCESS = [
  {
    index: "01",
    name: "outreach" as const,
    title: "Outreach",
    body: "Outreach to students and companies to build our network.",
  },
  {
    index: "02",
    name: "vetting" as const,
    title: "Vetting",
    body: "Applicants are screened and assessed for potential, availability, and interests.",
  },
  {
    index: "03",
    name: "matching" as const,
    title: "Matching",
    body: "Matching students with companies based on skills and interests.",
  },
  {
    index: "04",
    name: "development" as const,
    title: "Development",
    body: "Students gain hands-on experience, mentorship, and grow through real work",
  },
];

// Draft copy — written to fit the card layout at ~2 lines. Edit freely.
export const HOW_WE_WORK_INTRO =
  "We source partners across Austin, screen every applicant, and match students to the work that actually fits them.\nEvery team runs a real project on a real timeline, with mentorship the whole way through.";

export const PARTNER_TYPES = [
  {
    title: "Start-up Companies",
    subtitle:
      "Early-stage Austin teams that need real capacity for research, growth, and go-to-market work.",
    seed: 0,
  },
  {
    title: "Non-Profit Orgs",
    subtitle:
      "Local organizations stretching small budgets across fundraising, outreach, and program analysis.",
    seed: 1,
  },
  {
    title: "Campaigns",
    subtitle:
      "Political and advocacy campaigns that need voter research, field organizing, and comms support.",
    seed: 2,
  },
];

export const STATS = [
  { value: "Fall 2026", label: "First Cohort" },
  { value: "0", label: "Experience Required" },
  { value: "7", label: "Field Teams" },
  { value: "$0", label: "To partner organizations" },
];

/**
 * Entries with `src` use a real logo cropped from the Figma export. Entries with
 * only `label` render as a wordmark placeholder — drop a file into
 * public/logos/ and add `src` to swap one in.
 */
export type PartnerLogo = {
  alt: string;
  src?: string;
  w?: number;
  h?: number;
  label?: string;
  /**
   * Rendered height in px, default 64. Bump it for lockups where the wordmark
   * only occupies a slice of a tall image, so the text reads at a similar size
   * to the other marks.
   */
  size?: number;
};

export const PARTNER_LOGOS: PartnerLogo[] = [
  { src: "/logos/pwc.png", alt: "PwC", w: 158, h: 79 },
  { src: "/logos/porsche.png", alt: "Porsche", w: 271, h: 139 },
  { src: "/logos/lockheed.png", alt: "Lockheed Martin", w: 398, h: 98 },
  { src: "/logos/kpmg.png", alt: "KPMG", w: 221, h: 91 },
  { src: "/logos/worldbank.png", alt: "The World Bank", w: 242, h: 53 },
  { src: "/logos/airtel.png", alt: "Airtel", w: 736, h: 275 },
  // Near-square lockup: the swoosh takes most of the height, so it needs to run
  // taller than the rest for the wordmark to read at a comparable size.
  { src: "/logos/lanier.png", alt: "The Lanier Law Firm", w: 495, h: 460, size: 130 },
  { src: "/logos/wharton.png", alt: "Wharton Lab", w: 864, h: 218 },
];

// TODO(jamie): these answers are still the template filler that shipped with the
// Figma file — they describe a design agency, not Texas Accelerate. Replace.
export const FAQS = [
  {
    q: "How does the matching process work?",
    a: "We specialize in UI/UX design, web development, branding, digital marketing, and software solutions tailored to your business needs.",
  },
  {
    q: "How to join as an organization?",
    a: "We specialize in UI/UX design, web development, branding, digital marketing, and software solutions tailored to your business needs.",
  },
  {
    q: "What does project management look like?",
    a: "We specialize in UI/UX design, web development, branding, digital marketing, and software solutions tailored to your business needs.",
  },
  {
    q: "How long does a typical project take?",
    a: "We specialize in UI/UX design, web development, branding, digital marketing, and software solutions tailored to your business needs.",
  },
];
