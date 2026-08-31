# Texas Accelerate — Design System

The rules this site is built on. If you're adding a section or a page, take the
tokens and patterns from here rather than inventing new values.

Everything lives in `src/app/globals.css` under `@theme` (Tailwind v4) plus a
handful of semantic classes. There is no Figma-to-code sync — this file is the
contract.

---

## 1. Colour

| Token | Value | Used for |
|---|---|---|
| `bg` | `#08050f` | page background |
| `surface` | `#16141c` | every card and panel |
| `footer` | `#00050c` | footer band only |
| `accent` | `#60a5fa` | CTAs, the stats band, hover fills. Exactly Tailwind `blue-400` |
| `ink` | `#08050f` | text sitting **on** accent |
| `muted` | `rgba(255,255,255,.62)` | secondary text on dark |
| `muted-ink` | `rgba(8,5,15,.72)` | secondary text on accent |

Use as `bg-surface`, `text-muted`, `text-ink` etc.

**There are exactly three surfaces:** page, card, footer. Don't introduce a
fourth shade to separate things — use spacing, or the accent, instead.

### Rules

- **No borders as decoration.** Cards are distinguished by `bg-surface`, never by
  an outline. `border border-white/10` and friends are not part of this system.
- The only legitimate hairlines are `border-b border-white/12` inside the contact
  block and the footer's `border-t` divider. Both come from the Figma file.
- **Accent is a fill, not an outline.** Hover states fill with accent and invert
  the text to ink. They never add a ring or a glow.

---

## 2. Type

**Syne** (Google Fonts), weights 400/500/600/700/800, loaded via `next/font`.
Display type is SemiBold (600) at `-0.02em` tracking. Always.

### Semantic classes

Prefer these over raw sizes. Each is a `clamp()` sharing a `4vw` curve, so they
agree at desktop and diverge only at the phone floor.

| Class | Desktop @1600 | Phone @402 | Used for |
|---|---|---|---|
| `.h-hero` | 72px / 1.2 | 30px | the home h1, only |
| `.h-display` | 64px / 1.25 | 30px | every section heading |
| `.t-statement` | 64px / 1.3 | 20.8px | the opening statement paragraph |
| `.h-stat` | 64px / 1.25 | 20px | stat values in the blue band |
| `.t-body` | 18px / 1.55 | 13px | every supporting paragraph |
| `.t-card-title` | 30px / 1.2 | 22px | card titles (some cards override smaller) |

The phone floors differ deliberately. A long statement paragraph at the display
floor of 30px overwhelms a 402px screen, so `.t-statement` floors much lower
while remaining identical to `.h-display` above ~520px.

### Raw scale

`text-d2xl` … `text-txs` in `@theme` mirror the Figma spec sheet (96 / 72 / 48 /
36 / 30 / 24 / 20 / 18 / 16 / 14 / 12). Use them for one-offs; use the semantic
classes for anything structural.

---

## 3. Layout

### `.shell`

The page container. Caps at **1600px outer**, with padding stepping down:

| Viewport | Padding | Content width |
|---|---|---|
| 1600 | 100px | 1400 |
| 1280 | 60px | 1160 |
| 700 | 40px | 620 |
| 402 | 20px | 362 |

Measured off the reference build. The cap is the *outer* width, not the content
box — a common thing to get backwards.

### `.shell-x` and `.bleed-x`

- `.shell-x` — the same horizontal padding with no max-width. For the header, and
  for full-bleed scrollers.
- `.bleed-x` — cancels the shell padding so a child can run edge to edge.

Pair them (`bleed-x shell-x`) for a horizontally-scrolling row that bleeds off
both sides while its first item still lines up with the heading above.

`.shell-x` also sets `scroll-padding-inline`. This is load-bearing: with
scroll-snap, the first item snaps to the *scrollport* edge and ignores ordinary
padding, so without it a bleeding scroller starts hard against the viewport.

### Grid gaps

**32px** is the default between cards. 30px for the employer card row (matches
the reference). 10px for the phone 2×2 process grid.

---

## 4. Components

### Cards

```
rounded-[32px] bg-surface
```

That's it. No border, no shadow. Padding is `p-7` for content panels, `p-4`
(phone) / `p-6` (desktop) for cards with images.

**Exception:** Instagram feed tiles use `rounded-xl` — they're photo posts, and
should read differently to site chrome.

### Hover

One pattern across the whole site:

```
group transition-colors duration-300 hover:bg-accent
  → children: group-hover:text-ink / group-hover:text-muted-ink
```

Do not add lift, scale, ring, or shadow. Note that a `translate` lift breaks
inside horizontal scrollers anyway — setting `overflow-x` forces `overflow-y` to
compute as `auto`, so anything moving upward gets clipped.

### Buttons

`PillButton` (`components/ui.tsx`) — `size="md"` for hero CTAs, `size="sm"` for
footer and inline. Sizes are a **prop, not a className override**: Tailwind
resolves conflicting utilities by CSS source order, not by the order they appear
in the class attribute, so `className="px-5"` over a built-in `px-7` is not
reliably smaller.

`ArrowCircle` — the circular ↗. `size="sm"` scales down on phones.

### Cards with images

Everything above the image must be **fixed height** — reserve the lines with
`min-h-*` and clamp with `line-clamp-*`. The image is then `flex-1 min-h-0` and
resolves identically on every card in a row.

If you let the text size itself, cards with different copy lengths produce
different image heights, and the row stops lining up. This is the single most
common layout bug in this codebase.

Related: a card grid needs `content-start`. Grid's default `align-content:
stretch` hands leftover height to the rows, so the shorter card in a row pushes
its own title down.

---

## 5. Responsive

Breakpoints are Tailwind defaults plus `--breakpoint-nav: 1100px`, which drives
the `nav:` variant for the header. 1100 rather than a smaller value because the
links plus the pill need ~940px of content.

### Phone rules

- Sections use `pt-8` under the blue band, not the desktop `py-20`.
- Desktop-calibrated paddings (`pt-[207px]`, `pt-40`) must sit behind `lg:`.
- Card rows scroll horizontally rather than stacking, to keep sections short.
- The process grid is **2×2** on phone, 4-up at `lg`.
- The hero centres its content in the viewport (`min-h-svh` + `items-center`);
  at `lg` it switches to `lg:block` with a fixed 982px height and top padding.

### Verifying

Measure, don't eyeball. `getBoundingClientRect` and `getComputedStyle` in the
browser will tell you whether two things actually line up; screenshots at
different zoom levels will not.

---

## 6. Motion

- Colour transitions: **300ms**.
- Header morph: `700ms cubic-bezier(0.4, 0, 0.2, 1)`.
- Logo marquee: 38s linear, infinite, pauses on hover.
- `prefers-reduced-motion` is honoured globally in `globals.css`, and the marquee
  falls back to a centred static row.

---

## 7. Imagery

- **Process icons** (`public/icons/*.png`) are alpha masks applied via CSS
  `mask-image` with `background-color` for the fill. That's what lets them
  recolour on hover. Don't replace them with `<img>`.
- **Partner logos** (`public/logos/`) are keyed to transparent. Per-logo `size`
  in `data/site.ts` because square seals need to run taller than horizontal
  wordmarks to read at the same optical weight.
- **`PlaceholderArt`** stands in for photography. Every non-logo image on the
  site is currently a placeholder.
- Any image displayed far smaller than its source needs a `sizes` hint, or Next
  serves a multi-megabyte variant.
- **When an image's content changes, change its path.** `/_next/image` is keyed
  on the URL, so overwriting a file in place leaves stale copies in the browser
  and the CDN.
