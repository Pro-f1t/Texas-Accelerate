export type Member = {
  first: string;
  last: string;
  /** Title line, e.g. "Director of Operations". */
  role: string;
  /** Second line under the title, e.g. the person's major. */
  major?: string;
  /** Optional profile URL — renders a LinkedIn link on the card when present. */
  linkedin?: string;
  /**
   * Filename inside `public/team/`. The card falls back to the gradient
   * placeholder when the file isn't on disk, so listing one early is safe.
   */
  photo?: string;
  seed: number;
};

export const LEADERSHIP: Member[] = [
  {
    first: "Jamie",
    last: "Hao",
    role: "Founder; Director of Operations",
    major: "Biomedical Engineering",
    linkedin: "https://www.linkedin.com/in/jamie-hao/",
    photo: "jamie-hao.jpg",
    seed: 0,
  },
  {
    first: "Arrman",
    last: "Kapoor",
    role: "Founder; Director of Acquisition",
    major: "IRG & Econ",
    linkedin: "https://www.linkedin.com/in/arrman-kapoor/",
    photo: "arrman-kapoor.jpg",
    seed: 1,
  },
  {
    first: "Darcy",
    last: "Yin",
    role: "Founder; Director of Management",
    major: "Government & Econ",
    linkedin: "https://www.linkedin.com/in/darcy-yin/",
    photo: "darcy-yin.jpg",
    seed: 2,
  },
  {
    first: "Jackson",
    last: "Lawrence",
    role: "Founder; Director of Engagement",
    major: "Government",
    linkedin: "https://www.linkedin.com/in/jackson--lawrence/",
    photo: "jackson-lawrence.jpg",
    seed: 3,
  },
  {
    first: "Sofia",
    last: "Velasquez",
    role: "Social Media Manager",
    major: "Economics",
    photo: "sofia-velasquez.jpg",
    seed: 4,
  },
];

/** Empty until the cohort is announced — the page shows a placeholder instead. */
export const MEMBERS: Member[] = [];
