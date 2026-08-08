export type EventPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  seed: number;
  body: string[];
  pullQuote?: string;
};

export type UpcomingEvent = { title: string; date: string; seed: number };

export type InstagramPost = {
  /** Code from the post URL: instagram.com/p/<shortcode>/ */
  shortcode: string;
  alt: string;
};

/**
 * The Instagram grid on /events. Hand-maintained, newest first — there is no
 * API call, so the site never breaks when Instagram changes something.
 *
 * To add a post:
 *   1. Save its cover image to `public/instagram/<shortcode>.jpg`
 *   2. Prepend an entry here
 *
 * Name the file after the shortcode. `/_next/image` caches on path, so a fresh
 * shortcode is a fresh path and never serves a stale thumbnail.
 */
export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    shortcode: "DbrAgAjlZBA",
    alt: "New partnership: Texas Accelerate x OpenTrade",
  },
  {
    shortcode: "Dbn7SZyEUX1",
    alt: "Resume experience, starting now. First cohort Fall 2026",
  },
];

/** Sidebar list on /events. Separate from EVENTS, which is the posted archive. */
export const UPCOMING_EVENTS: UpcomingEvent[] = [
  { title: "Info Session #1", date: "Date TBA", seed: 0 },
  { title: "Info Session #2", date: "Date TBA", seed: 1 },
  { title: "Coffee Chat #1", date: "Date TBA", seed: 2 },
];

export const GOOGLE_CALENDAR_URL =
  "https://calendar.google.com/calendar/u/0?cid=NGYzOGFkYzc3NzYyYzc3ZmEzODgxMDI1NDQ4YTk2YjJiODlkNDk1MzgzYzMxYTI2MzgzMzgzYjkzNWI2ODMwOUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t";

/**
 * Placeholder posts. Copy is generic on purpose — swap the strings, keep the
 * shape. This is what a CMS would fill.
 */
export const EVENTS: EventPost[] = [
  {
    slug: "place-holder-title",
    title: "PLACE HOLDER TITLE PLACE HOLDER TITLE",
    date: "April 8, 2026",
    excerpt:
      "This is a Short Description This is a Short Description This is a Short Description This is a Short Description",
    seed: 0,
    body: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    ],
    pullQuote:
      "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    slug: "fall-kickoff-mixer",
    title: "Fall Kickoff Mixer",
    date: "April 1, 2026",
    excerpt: "This is a Short Description",
    seed: 1,
    body: [
      "This is a placeholder for the event recap. Replace it with a short write-up of what happened, who came, and what comes next.",
    ],
  },
  {
    slug: "client-partner-night",
    title: "Client Partner Night",
    date: "April 1, 2026",
    excerpt: "This is a Short Description",
    seed: 2,
    body: [
      "This is a placeholder for the event recap. Replace it with a short write-up of what happened, who came, and what comes next.",
    ],
  },
  {
    slug: "end-of-semester-showcase",
    title: "End of Semester Showcase",
    date: "April 1, 2026",
    excerpt: "This is a short description",
    seed: 3,
    body: [
      "This is a placeholder for the event recap. Replace it with a short write-up of what happened, who came, and what comes next.",
    ],
  },
];
