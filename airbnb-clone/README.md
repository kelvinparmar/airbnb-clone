# Airbnb Listing Page — Clone (v1.1)

A desktop-only clone of the Airbnb listing page + Photo Tour + Lightbox
overlays.

**Reference:** https://airbnb-clone-umber-two.vercel.app
**Stack:** Vite · React 18 · TypeScript · Tailwind CSS
**Deploy:** Vercel (auto-detects Vite)

## Quick start
```bash
npm install
npm run dev        # http://localhost:5173
npm run build
```

## v1.1 — What changed after the fidelity pass

The reference has 6 sections my v1 was missing and several structural
differences in the header block. All of these are now implemented:

| Fix | Section | Change |
|---|---|---|
| 1 | Title bar | Removed the rating/reviews/superhost line under the title (reference doesn't have it) |
| 2 | Below hero | New `Overview.tsx`: property-type on left, compact Guest-favourite card + "Get 10% off" promo on right |
| 3 | Host row | Slimmed to avatar + "Hosted by X" + "N years hosting" |
| 4 | Amenities | Proper SVG icons instead of bullet dots |
| 5 | **Calendar** | Full dual-month picker |
| 6 | Reviews | Added review category pills (Comfort / Hot tub / Hospitality …) |
| 7 | **Location** | New "Where you'll be" section with map + neighbourhood highlights |
| 8 | **Meet your host** | Host card + Co-Hosts grid + response rate/time + Message host |
| 9 | **Things to know** | 3-column: cancellation, house rules, safety |
| 10 | **More stays nearby** | Horizontal carousel |
| 11 | Booking card | "₹28,499 for 5 nights", free-cancellation notice, no breakdown |
| 12 | Description | Translation notice banner |

## Directory
```
airbnb-clone/
├── CLAUDE.md · PROMPTS.md · README.md
├── docs/
│   ├── architecture-diagram.svg
│   └── architecture-notes.md
├── .claude/
│   ├── agents/{react-component-architect,ui-fidelity-reviewer,accessibility-auditor,performance-optimizer}.md
│   └── skills/{airbnb-design-system,pixel-perfect-clone}/SKILL.md
├── src/
│   ├── App.tsx
│   ├── data/listing.ts              ← single source of truth
│   ├── hooks/{useFocusTrap,useKeyboardNav,useBodyScrollLock}.ts
│   ├── components/
│   │   ├── Header · Footer · TitleBar · PhotoGrid
│   │   ├── Overview        ← NEW: property type + guest-fav card + promo
│   │   ├── Highlights · Description · Sleeping · Amenities
│   │   ├── Calendar        ← NEW: dual-month picker
│   │   ├── BookingCard     ← reworked
│   │   ├── Reviews         ← + review category pills
│   │   ├── LocationMap     ← NEW
│   │   ├── MeetYourHost    ← NEW
│   │   ├── ThingsToKnow    ← NEW
│   │   ├── NearbyStays     ← NEW
│   │   ├── PhotoTour · Lightbox · icons
│   └── styles/index.css
├── tailwind.config.js
└── package.json
```

## Design tokens

Full palette + typography in
[`.claude/skills/airbnb-design-system/SKILL.md`](./.claude/skills/airbnb-design-system/SKILL.md).

- Brand accent: `#FF385C` (Rausch), used only for Reserve CTA gradient.
- Radii: `12 px` on media, `14 px` on chrome.
- Motion curve: `cubic-bezier(0.2, 0, 0, 1)` @ 200–260 ms for overlays.
- Font: Airbnb Cereal VF (drop `.woff2` into `public/fonts/` and uncomment
  the `@font-face` block).

## Accessibility

- Overlays: `role="dialog" aria-modal="true"`, focus trapped, focus restored
  on close, body scroll locked.
- Lightbox: ←/→ nav, `aria-live="polite"` counter.
- Esc closes any overlay.
- Icon-only buttons have `aria-label`; every interactive element has
  `:focus-visible`.
- `prefers-reduced-motion: reduce` shortens overlay animations to 1 ms.

## AI workflow

Built using Claude Code with 4 sub-agents (`.claude/agents/`) and 2 skills
(`.claude/skills/`). Full prompt log in [`PROMPTS.md`](./PROMPTS.md).
