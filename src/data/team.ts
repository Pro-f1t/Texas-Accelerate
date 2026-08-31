export type Member = {
  first: string;
  last: string;
  /** Title line, e.g. "Director of Operations". */
  role: string;
  /** Second line under the title. Majors only — minors are deliberately omitted. */
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

/**
 * Directors first, then coordinators by department. One grid — the team page
 * renders this as a single "Leadership" section.
 *
 * Dhruv Alamuri is listed without a photo until his new headshot arrives.
 */
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
    linkedin: "https://www.linkedin.com/in/sofia-velasquez-66a100399/",
    photo: "sofia-velasquez.jpg",
    seed: 4,
  },
  {
    first: "Trisha",
    last: "Gorusu",
    role: "Management Coordinator",
    major: "Computer Science & Math",
    linkedin: "https://www.linkedin.com/in/trishagorusu/",
    photo: "trisha-gorusu.jpg",
    seed: 5,
  },
  {
    first: "Cylee",
    last: "Dhond",
    role: "Acquisition Coordinator",
    major: "Finance",
    linkedin: "https://www.linkedin.com/in/cyleedhond/",
    photo: "cylee-dhond.jpg",
    seed: 6,
  },
  {
    // No `photo` yet — awaiting his new headshot, so this card renders the
    // gradient placeholder. Drop `dhruv-alamuri.jpg` into public/team/ and add
    // the field to swap it in.
    first: "Dhruv",
    last: "Alamuri",
    role: "Acquisition Coordinator",
    major: "Computer Science",
    linkedin: "https://www.linkedin.com/in/dhruvalamuri/",
    seed: 7,
  },
  {
    first: "Sarada",
    last: "Sivasailam",
    role: "Acquisition Coordinator",
    major: "Behavioral & Social Data Science",
    linkedin: "https://www.linkedin.com/in/saradavarshinisivasailam/",
    photo: "sarada-sivasailam-3.jpg",
    seed: 8,
  },
  {
    first: "Tanvi",
    last: "Vadavala",
    role: "Acquisition Coordinator",
    major: "Public Affairs",
    linkedin: "https://www.linkedin.com/in/tanvi-reddy-vadavala-a703b0320/",
    photo: "tanvi-vadavala.jpg",
    seed: 9,
  },
  {
    first: "Grant",
    last: "Parris",
    role: "Engagement Coordinator",
    major: "Government",
    linkedin: "https://www.linkedin.com/in/grantparris2/",
    photo: "grant-parris.jpg",
    seed: 10,
  },
];

/**
 * Field team leads own a single employer vertical. Rendered as their own
 * section on /team, between Leadership and the cohort.
 */
export const FIELD_TEAM_LEADS: Member[] = [
  {
    first: "Sahana",
    last: "Thasma",
    role: "Government, Law & Public Affairs",
    major: "Finance",
    linkedin: "https://www.linkedin.com/in/sahanathasma/",
    photo: "sahana-thasma-3.jpg",
    seed: 0,
  },
];

/** Empty until the cohort is announced — the page shows a placeholder instead. */
export const MEMBERS: Member[] = [];
