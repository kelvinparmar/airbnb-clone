# Prompt Log — AI-assisted build sequence (v1.1)

Ordered list of prompts used in Claude Code to produce this repository.
Each prompt notes which sub-agent(s) or skill(s) it invoked.

---

## Phase 0 — Setup

**1. Session bootstrap (main agent):**
> Read `.claude/skills/airbnb-design-system/SKILL.md` and
> `.claude/skills/pixel-perfect-clone/SKILL.md` before doing anything else.
> Then scan `CLAUDE.md` and tell me which of the "Status" items are done.

**2. Reference audit (main agent):**
> Open the reference at https://airbnb-clone-umber-two.vercel.app in a
> 1440×900 viewport. Capture full-page screenshots into `docs/reference/` for:
> `01-hero.png`, `02-overview.png`, `03-highlights.png`, `04-description.png`,
> `05-sleeping.png`, `06-amenities.png`, `07-calendar.png`, `08-reviews.png`,
> `09-location.png`, `10-host.png`, `11-things-to-know.png`, `12-nearby.png`,
> `13-photo-tour.png`, `14-lightbox.png`. Do NOT copy any HTML/JS/CSS.

---

## Phase 1 — Foundation

**3. `react-component-architect`:**
> Scaffold Vite + React + TypeScript + Tailwind with the Airbnb design tokens
> wired into `tailwind.config.js`. Add the three shared hooks: `useFocusTrap`,
> `useKeyboardNav`, `useBodyScrollLock`. Add the icon set in
> `components/icons.tsx`.

**4. `react-component-architect`:**
> Populate `src/data/listing.ts`. Mirror the reference's structure —
> title, propertyType, stats, host (with coHosts + response info),
> promo, highlights, description, sleeping, amenities, calendar range,
> reviews, price (total + nights), policies, location_details, nearbyStays.

---

## Phase 2 — Above-the-fold

**5. `react-component-architect`:**
> Build `Header.tsx` (compact PDP variant), `Footer.tsx`,
> `TitleBar.tsx` (title + Share/Save only, NO rating/superhost/location
> row under the title — the reference doesn't have that on PDP),
> `PhotoGrid.tsx`.

**6. `ui-fidelity-reviewer`:**
> Review the hero section against `docs/reference/01-hero.png`. Table format,
> Critical/Major/Minor severity, concrete measurements only.

**7. `react-component-architect` — Overview:**
> Build `Overview.tsx`. Layout: `grid-cols-[1fr_auto]`. Left column has the
> property type headline + guest/bedroom/bed/bathroom stats + a slim host
> row (avatar + "Hosted by X" + "N years hosting"). Right column has two
> cards side by side: (a) the compact Guest-favourite card (laurel-badge +
> 4.95 rating + 19 reviews), (b) the "Get 10% off your next stay" promo
> card using `bg-promo` / `border-promo-border`. This replaces the wide
> full-width laurel banner I had in v1.

---

## Phase 3 — Body

**8. `react-component-architect`:**
> Build `Highlights.tsx` with 3 items (outdoor, staycool, selfcheckin)
> using the highlight-icon set.

**9. `react-component-architect`:**
> Build `Description.tsx`. Include the "Some info has been automatically
> translated. Show original" notice banner above the paragraphs.

**10. `react-component-architect`:**
> Build `Sleeping.tsx` (2 cards) and `Amenities.tsx`. For amenities, every
> row MUST use a real SVG icon (kitchen, wifi, pool, hot tub, workspace,
> parking, cameras, pets-allowed, carbon-alarm, smoke-alarm) — never
> bullet dots.

**11. `react-component-architect` — Calendar:**
> Build `Calendar.tsx` — a dual-month calendar picker.
> Left month = current picker month, right month = next month.
> Prev/next controls in top corners, range selection stateful with
> the pattern (start, end) using `useState`. Default range = Oct 19 →
> Oct 23, 2026 to match the reference default.
> Include the heading "5 nights in Candolim" + subtitle date range +
> a "Clear dates" underline button at the bottom.

**12. `react-component-architect` — BookingCard:**
> Rework `BookingCard.tsx` to match the reference:
>  - Header: "₹28,499 for 5 nights" (no per-night line, no rating on right)
>  - Body: dates (Check-in / Checkout) + Guests
>  - Notice: "Free cancellation before 15 October" above Reserve
>  - CTA: Reserve gradient
>  - Footer: "You won't be charged yet"
>  - NO pricing breakdown table.

---

## Phase 4 — Reviews and beyond

**13. `react-component-architect` — Reviews:**
> Update `Reviews.tsx`:
>  - Big 4.95 with laurels as the ONE loud typographic moment (64 px).
>  - Below: "Guest favourite" + a small "MORE STATISTICS AVAILABLE" link.
>  - Then the 6-column rating breakdown row.
>  - Then a NEW row of review category pills (Comfort, Accuracy, Hot tub,
>    Condition, Hospitality, Cleanliness, Amenities). Each pill uses the
>    `.review-pill` component class.
>  - Then the 2-col review grid.

**14. `react-component-architect` — LocationMap:**
> Build `LocationMap.tsx` ("Where you'll be"). Static-map placeholder using
> a CSS gradient + centred pin icon (swap in Mapbox / Google static in
> production). Below the map: "Neighbourhood highlights" heading + body.

**15. `react-component-architect` — MeetYourHost:**
> Build `MeetYourHost.tsx`. Layout: 280px host card on the left, right
> column has Co-Hosts (3-col grid), Host details (response rate,
> response time), a few bio bullets (born in, school), a "Message host"
> btn-primary, and a small disclaimer.

**16. `react-component-architect` — ThingsToKnow:**
> Build `ThingsToKnow.tsx` — 3 columns (Cancellation policy, House rules,
> Safety & property). Each column has an icon + heading + short bullet list
> + a "Learn more" underline link.

**17. `react-component-architect` — NearbyStays:**
> Build `NearbyStays.tsx` — horizontal carousel with prev/next buttons and
> a "1/2" page indicator. Each card = square image + title + price/night
> + star rating. Uses `snap-x snap-mandatory` for smooth pagination.

---

## Phase 5 — Overlays (unchanged from v1)

**18. `react-component-architect`:**
> Build `PhotoTour.tsx`. Portal to `document.body`. Uses all three hooks.
> Opening animation = 260 ms slide-up + fade. Every tile opens the
> Lightbox at that index.

**19. `react-component-architect`:**
> Build `Lightbox.tsx`. ArrowLeft/Right navigates. Escape closes.
> Preload neighbours on index change. Counter uses `aria-live="polite"`.
> Opening animation = 200 ms zoom-in + fade.

**20. `accessibility-auditor`:**
> Audit BOTH overlays. Confirm: focus moves in on open, is trapped, is
> restored to trigger on close; escape closes; body scroll locked;
> aria-live announces counter changes.

---

## Phase 6 — Diff pass (v1 → v1.1)

**21. Main agent (user provides two screenshots):**
> First image is the reference and second is my current clone. Compare
> systematically. Return a severity-graded diff table. Then plan the fixes
> in order.

**22. `react-component-architect`:**
> Apply the 12 fixes from Prompt 21 in one batch — restructure Overview,
> replace amenity bullets with icons, add Calendar / LocationMap /
> MeetYourHost / ThingsToKnow / NearbyStays sections, rework
> BookingCard, add review category pills, add Description translation
> notice, remove the rating line under the title.

**23. `ui-fidelity-reviewer` + `accessibility-auditor`:**
> Re-review the touched components. All Critical + Major diffs must be
> resolved before we ship.

---

## Phase 7 — Polish & ship

**24. `performance-optimizer`:**
> Run a perf audit. Lazy-load `PhotoTour` and `Lightbox` with `React.lazy`.
> Confirm LCP < 2.0 s on 4G throttling.

**25. Main agent:**
> Write `docs/architecture-diagram.svg` for a production-scale rental
> marketplace. Also write `docs/architecture-notes.md`.

**26. Main agent:**
> Update `CLAUDE.md` status checkboxes and the README changelog.

---

## Tips for the reviewer

- Every prompt in phases 2–6 was preceded by a fresh screenshot of the
  reference at 1440×900. Stored in `docs/reference/` (git-ignored if > 2 MB).
- We never asked Claude to "look at the reference source code" — the
  `pixel-perfect-clone` skill forbids it.
- Sub-agent reports with > 10 fixes were split across two follow-up
  prompts to keep diffs small and reviewable.
