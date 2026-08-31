export type EventPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  seed: number;
  body: string[];
  pullQuote?: string;
};

export type UpcomingEvent = {
  title: string;
  /** Weekday, date and time on one line. */
  date: string;
  /** Room, venue or "Virtual" — renders as a third line when present. */
  location?: string;
  seed: number;
};

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
    shortcode: "DcY_YvLMJMP",
    alt: "Fall 2026 recruitment calendar for September, updated with locations for info sessions and coffee chats",
  },
  {
    shortcode: "DcUbp72FQuD",
    alt: "Meet the Execs — swipe to meet the team behind Fall 2026",
  },
  {
    shortcode: "Db0i8l1sFgC",
    alt: "Fall 2026 recruitment schedule: info sessions and coffee chats, Sept 1-12",
  },
  {
    shortcode: "DbrAgAjlZBA",
    alt: "New partnership: Texas Accelerate x OpenTrade",
  },
  {
    shortcode: "Dbn7SZyEUX1",
    alt: "Resume experience, starting now. First cohort Fall 2026",
  },
];

/**
 * Sidebar list on /events. Separate from EVENTS, which is the posted archive.
 *
 * Transcribed from the Fall '26 recruitment calendar (the Sep 2026 post,
 * shortcode DcY_YvLMJMP). Attendance at one info session is required to apply;
 * one coffee chat is highly encouraged.
 */
export const UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    title: "Info Session #1",
    date: "Tue, Sep 1 \u00b7 7:00 \u2013 8:00 PM",
    location: "PAI 2.48",
    seed: 0,
  },
  {
    title: "Coffee Chat #1",
    date: "Wed, Sep 2 \u00b7 5:00 \u2013 6:30 PM",
    location: "Gong Cha",
    seed: 1,
  },
  {
    title: "Info Session #2",
    date: "Mon, Sep 7 \u00b7 6:00 \u2013 7:00 PM",
    location: "CAL 100",
    seed: 2,
  },
  {
    title: "Coffee Chat #2",
    date: "Tue, Sep 8 \u00b7 5:00 \u2013 6:30 PM",
    location: "Lucky Lab",
    seed: 3,
  },
  {
    title: "Info Session #3",
    date: "Thu, Sep 10 \u00b7 7:00 \u2013 8:00 PM",
    location: "Virtual",
    seed: 0,
  },
  {
    title: "Application Closes",
    date: "Sat, Sep 12 \u00b7 11:59 PM",
    location: "Online",
    seed: 1,
  },
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
