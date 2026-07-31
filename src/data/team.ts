export type Member = {
  first: string;
  last: string;
  /** Title line, e.g. "Director of Operations". */
  role: string;
  /** Second line under the title, e.g. the person's major. */
  major?: string;
  seed: number;
};

export const LEADERSHIP: Member[] = [
  {
    first: "Jamie",
    last: "Hao",
    role: "Founder, Director of Operations",
    major: "Biomedical Engineering",
    seed: 0,
  },
  {
    first: "Arrman",
    last: "Kapoor",
    role: "Director of Acquisition",
    major: "IRG + Econ",
    seed: 1,
  },
  {
    first: "Darcy",
    last: "Yin",
    role: "Director of Management",
    major: "Government",
    seed: 2,
  },
  {
    first: "Jackson",
    last: "Lawrence",
    role: "Director of Engagement",
    major: "Government",
    seed: 3,
  },
];

/** Empty until the cohort is announced — the page shows a placeholder instead. */
export const MEMBERS: Member[] = [];
