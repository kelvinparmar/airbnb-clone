# Airbnb Clone — Project Memory

> Read on every session start. Single source of truth for rules + status.

## Mission
Recreate the desktop Airbnb listing page at
`https://airbnb-clone-umber-two.vercel.app` to pixel-perfect fidelity,
including the Photo Tour and Lightbox overlays. Desktop only.

## Non-negotiable rules
1. **No direct lift-and-shift.** Never copy JS/HTML/CSS from the reference site verbatim.
2. **Tokens only.** Every colour / radius / shadow comes from `tailwind.config.js`.
3. **Data lives in `src/data/listing.ts`.** Components are presentational.
4. **A11y and keyboard nav are P0.** Overlays must trap focus, restore focus, support ←/→/Esc, and lock body scroll.
5. **One typographic loud moment.** 64 px is reserved for the reviews rating.

## Sub-agents
| Agent | When to invoke |
| --- | --- |
| `react-component-architect` | Scaffolding or refactoring a component |
| `ui-fidelity-reviewer`      | After ANY component or CSS change |
| `accessibility-auditor`     | Before merging any interactive component |
| `performance-optimizer`     | Before deploying to Vercel |

## Skills (`.claude/skills/`)
- `airbnb-design-system` — Load first. All tokens and typography rules.
- `pixel-perfect-clone`  — Playbook for the diff-and-fix cycle.

## Directory conventions
```
src/
  data/listing.ts     ← ALL copy, prices, photos, reviews, cohosts, nearby
  hooks/              ← useFocusTrap, useKeyboardNav, useBodyScrollLock
  components/         ← One PascalCase.tsx per file, < 200 lines
  styles/index.css    ← Tailwind entry + overlay keyframes only
docs/
  architecture-diagram.svg
  reference/<section>.png ← reference screenshots (git-ignored)
.claude/
  agents/*.md         ← sub-agent configs
  skills/*/SKILL.md   ← reusable skills
```

## Status (v1.1 — post-fidelity-pass)
- [x] Design tokens wired into Tailwind (added `promo`, `promo-border`)
- [x] Header, TitleBar (no rating line under title), PhotoGrid
- [x] **Overview** (property type + compact Guest-favourite card + Promo card)
- [x] Highlights, Description (with translation notice), Sleeping
- [x] **Amenities with real SVG icons** (kitchen, wifi, pool, hot tub, …)
- [x] **Calendar section** (dual-month picker)
- [x] Reviews (big 4.95 + breakdown + **review category pills**)
- [x] **LocationMap** ("Where you'll be" + neighbourhood highlights)
- [x] **MeetYourHost** (host card + co-hosts + response info + Message host)
- [x] **ThingsToKnow** (3 columns: cancellation, house rules, safety)
- [x] **NearbyStays** carousel
- [x] BookingCard reworked ("₹28,499 for 5 nights", free-cancellation notice, no breakdown)
- [x] PhotoTour overlay
- [x] Lightbox overlay
- [ ] Sticky sub-nav (Photos / Amenities / Reviews / Location) — nice to have
- [ ] Pixel-diff pass against live reference — run `ui-fidelity-reviewer`
- [ ] Cereal VF font swap-in — drop `.woff2` into `public/fonts/`

## Local commands
```bash
npm install
npm run dev
npm run build
npm run preview
```
