export type Project = {
  slug: string;
  name: string;
  term: string;
  teamSize: string;
  logo: string;
  blurb: string;
};

/**
 * The Projects page shows the "Coming Soon - Fall 2026" state whenever PROJECTS
 * is empty, and the two-column card grid as soon as it has entries.
 *
 * To go live with real projects: move the entries you want out of
 * PROJECTS_ARCHIVE and into PROJECTS. Nothing else needs to change.
 */
export const PROJECTS: Project[] = [];

/** Parked cards built from the Figma frames. Real logos live in public/projects/. */
export const PROJECTS_ARCHIVE: Project[] = [
  {
    slug: "santander",
    name: "Santander",
    term: "Fall 2026",
    teamSize: "10 - 20",
    logo: "/projects/santander.png",
    blurb:
      "Santander is a multinational bank founded in 1857, with a growing Austin presence.",
  },
  {
    slug: "wharton-people-analytics",
    name: "Wharton People Analytics",
    term: "Fall 2026",
    teamSize: "14 - 41",
    logo: "/projects/wharton.png",
    blurb:
      "Wharton People Analytics is a research initiative that uses data to advance how organizations make decisions about people.",
  },
  {
    slug: "firefly-aerospace",
    name: "Firefly Aerospace",
    term: "Fall 2026",
    teamSize: "10 - 20",
    logo: "/projects/firefly.png",
    blurb:
      "Firefly Aerospace is a Cedar Park, Texas-based space and defense company on a mission to launch, land, and operate space systems from Earth to the Moon.",
  },
  {
    slug: "longhorn-legal-coalition",
    name: "Longhorn Legal Coalition",
    term: "Fall 2026",
    teamSize: "11 - 22",
    logo: "/projects/longhorn.png",
    blurb:
      "A student-led coalition connecting UT undergraduates with legal advocacy work across Austin.",
  },
  {
    slug: "daves-hot-chicken",
    name: "Dave's Hot Chicken",
    term: "Fall 2026",
    teamSize: "3 - 5",
    logo: "/projects/daves.png",
    blurb:
      "Supporting the launch of Dave's Hot Chicken's new Austin Guadalupe Street location.",
  },
  {
    slug: "expedia",
    name: "Expedia",
    term: "Fall 2026",
    teamSize: "100 - 200",
    logo: "/projects/expedia.png",
    blurb:
      "Expedia is a leading online travel platform that allows consumers to search, compare, and book flights, hotels, car rentals, cruises, and vacation packages all in one place.",
  },
];
