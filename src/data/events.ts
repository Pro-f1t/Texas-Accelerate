export type EventPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  seed: number;
  body: string[];
  pullQuote?: string;
};

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
