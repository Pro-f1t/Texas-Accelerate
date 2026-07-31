# Texas Accelerate

Marketing site for Texas Accelerate, a UT student-run organization that places
students on real projects with Austin startups, nonprofits, and campaigns.

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind v4 · `ogl` for the
WebGL hero background. Fully static, no backend or database.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
```

```bash
npm run build   # production build
npm run lint
```

## Deploying

Import the repo on Vercel. The framework preset is detected automatically and no
build configuration is needed.

Optional environment variable:

| Variable | When to set it |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Once a custom domain is attached, e.g. `https://texasaccelerate.org`. Used as the absolute base for Open Graph images. Without it the app falls back to `VERCEL_URL`, which is correct for both preview and production deploys. |

## Editing content

All copy lives in `src/data/` — no CMS is wired up yet.

| File | Contents |
|---|---|
| `data/site.ts` | Contact email, socials, process steps, partner types, stats, partner logos, FAQs |
| `data/projects.ts` | Project cards. `PROJECTS` is empty, so `/projects` shows "Coming Soon". Move entries out of `PROJECTS_ARCHIVE` to publish them. |
| `data/events.ts` | Event posts and the Google Calendar link |
| `data/team.ts` | Leadership and members. `MEMBERS` is empty, so that section shows a placeholder. |

Both `/projects` and the Fall members section switch from placeholder to grid
automatically as soon as their arrays have entries.

## Design system

| Token | Value |
|---|---|
| Background | `#08050f` |
| Card surface | `#16141c` |
| Footer | `#00050c` |
| Accent | `#60a5fa` |

Type is [Syne](https://fonts.google.com/specimen/Syne): hero 72/86.4, section
headings 64/80, body 18/27.9, card titles 30/36 — all at `-0.02em`. Cards use a
32px radius, the stats band 64px. Content caps at 1400px with side padding
stepping 100 / 60 / 40 / 20px across breakpoints. The header switches to a
mobile menu below 1100px.

## Notes for future work

- Process icons in `public/icons/` are alpha masks applied via CSS `mask-image`,
  so they recolour on the card hover state. Don't swap them for plain `<img>`.
- Images displayed far smaller than their source need a `sizes` hint, otherwise
  Next serves a multi-megabyte variant.
- When an image's *content* changes, change its **path** too. `/_next/image` is
  keyed on the URL, so overwriting a file in place leaves stale copies in the
  browser and CDN caches.
- The Figma exports and raw brand assets are deliberately not in this repo. They
  live alongside it locally and aren't needed to build or deploy.
