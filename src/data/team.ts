export type Member = {
  first: string;
  last: string;
  /** Title line, e.g. "Director of Operations". */
  role: string;
  /** Second line under the title, e.g. the person's major. */
  major?: string;
  /** Optional profile URL — renders a LinkedIn link on the card when present. */
  linkedin?: string;
  seed: number;
};

export const LEADERSHIP: Member[] = [
  {
    first: "Jamie",
    last: "Hao",
    role: "Founder; Director of Operations",
    major: "Biomedical Engineering",
    linkedin: "https://www.linkedin.com/in/jamie-hao/",
    seed: 0,
  },
  {
    first: "Arrman",
    last: "Kapoor",
    role: "Founder; Director of Acquisition",
    major: "IRG & Econ",
    linkedin: "https://www.linkedin.com/in/arrman-kapoor/",
    seed: 1,
  },
  {
    first: "Darcy",
    last: "Yin",
    role: "Founder; Director of Management",
    major: "Government & Econ",
    linkedin: "https://www.linkedin.com/in/darcy-yin/",
    seed: 2,
  },
  {
    first: "Jackson",
    last: "Lawrence",
    role: "Founder; Director of Engagement",
    major: "Government",
    linkedin: "https://www.linkedin.com/in/jackson--lawrence/",
    seed: 3,
  },
];

/** Empty until the cohort is announced — the page shows a placeholder instead. */
export const MEMBERS: Member[] = [];
