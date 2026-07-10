# Skill: Pixel-Perfect Clone Methodology

**Purpose**: A systematic playbook for achieving pixel-perfect visual and behavioral fidelity with the reference Airbnb listing page.

**When to use**: When reviewing a component's visual accuracy, when implementing CSS changes, or when debugging layout/alignment issues.

---

## Phase 1: Visual Audit

### Setup
1. Open reference in one viewport: `https://airbnb-clone-umber-two.vercel.app`
2. Open clone in another viewport (both at **1440×900**)
3. Use browser DevTools to inspect element positioning, sizing, colors, fonts

### Checklist: Layout & Spacing
- [ ] Container max-width: 1280px
- [ ] Horizontal padding: 40px (px-10)
- [ ] Two-column grid: content (flex) + booking card (380px fixed)
- [ ] Gap between columns: 48px (gap-12)
- [ ] Section margins: 48px vertical (mt-12/mb-12)

### Checklist: Typography
- [ ] Headings use correct `display-*` size
- [ ] Line heights match (no overflows or underflows)
- [ ] Font weight correct (600 for headings, 400 for body)
- [ ] Text color matches palette (no gray mismatches)

### Checklist: Colors
- [ ] Brand accent (CTAs) is exact Rausch (#FF385C)
- [ ] Text hierarchy: Ink → Body → Muted → Muted-soft
- [ ] Surface colors correct (canvas, surface-soft, surface-strong)
- [ ] Border colors exact (hairline, hairline-soft, border-strong)
- [ ] No RGB/HSLA approximations—use Tailwind classes only

### Checklist: Images & Media
- [ ] Photo grid aspect ratio correct
- [ ] Rounded corners: 12px on images, 9999px on buttons
- [ ] Image spacing and alignment in grid
- [ ] Hero photo size matches (width spans full container width - padding)

### Checklist: Component Depth
- [ ] Shadow styles match (card, pill, booking, soft)
- [ ] Hover states present and subtle
- [ ] No over-sharpening (shadows should be soft)

---

## Phase 2: Behavioral Fidelity

### Interactions to Test

#### 1. Photo Grid & Hero
- [ ] Hero image clickable → opens Lightbox at index 0
- [ ] "Show all photos" button → opens PhotoTour
- [ ] Gallery thumbnails clickable → each opens Lightbox at that index
- [ ] Hover state: slight scale or opacity change

#### 2. PhotoTour Overlay
- [ ] Modal opens full-screen with photos in grid (3 cols suggested)
- [ ] Close button (×) top-right
- [ ] Esc key closes
- [ ] Body scroll locked while open
- [ ] Photo counter displayed
- [ ] Opening animation: smooth fade-in (200ms)
- [ ] Closing animation: smooth fade-out (200ms)

#### 3. Lightbox Overlay
- [ ] Single image displayed large (centered, max-height constraints)
- [ ] Previous/Next arrows visible
- [ ] ← / → keyboard arrows navigate between photos
- [ ] Photo counter at bottom or overlaid
- [ ] Close button (×) top-right
- [ ] Esc key closes
- [ ] Body scroll locked
- [ ] Opening animation: quick appear (150ms)
- [ ] Closing animation: quick fade-out (150ms)

#### 4. Sticky Sub-Nav
- [ ] Nav appears below hero, sticks on scroll
- [ ] Tabs: Photos / Amenities / Reviews / Location
- [ ] Clicking tab smooth-scrolls to section
- [ ] Active tab highlighted (border-bottom or background)

#### 5. Booking Card
- [ ] "Reserve" CTA button: Rausch background, hover shadow effect
- [ ] Price display: "₹28,499 for 5 nights"
- [ ] Free cancellation notice visible
- [ ] Click handler (can be no-op or placeholder modal)

#### 6. Calendar
- [ ] Dual-month picker displays
- [ ] Date selection interactive
- [ ] Visual feedback on hover/select
- [ ] Month navigation (prev/next buttons)

### Animation Verification
- [ ] All transitions use `cubic-bezier(0.2, 0, 0, 1)` (Airbnb easing)
- [ ] Duration: 200–260ms for overlays
- [ ] Reduced-motion: animations < 1ms when `prefers-reduced-motion: reduce`
- [ ] No jarring movements or flashes

---

## Phase 3: Accessibility Audit

### Focus Management
- [ ] Tab through page: focus visible on all interactive elements
- [ ] Focus outline color: `#222222`, offset: 2px
- [ ] Focus order logical (left-to-right, top-to-bottom)

### Overlay Focus Trapping
- [ ] PhotoTour open: Tab cycles only within overlay
- [ ] Tab + Shift+Tab: cycles correctly
- [ ] Esc closes and returns focus to trigger (Show all photos button)
- [ ] Lightbox open: Tab cycles only within lightbox
- [ ] Lightbox close restores focus to thumbnail that was clicked

### Keyboard Navigation
- [ ] All buttons/links keyboard accessible (Enter/Space)
- [ ] Lightbox ←/→ navigation works
- [ ] Calendar date selection keyboard accessible
- [ ] Esc closes any open overlay

### ARIA & Semantic HTML
- [ ] Overlays have `role="dialog" aria-modal="true"`
- [ ] Lightbox counter has `aria-live="polite"`
- [ ] Close buttons have `aria-label="Close"`
- [ ] Image buttons have descriptive `aria-label` (not just "photo")
- [ ] Headings use correct `<h1>`, `<h2>` hierarchy

### Screen Reader Testing
- [ ] Page title announced correctly
- [ ] Sections announced with headings
- [ ] Image alt text descriptive (captions)
- [ ] Interactive elements announced with role + label
- [ ] Navigation links announced clearly

---

## Phase 4: Diff & Fix Cycle

### Systematic Approach

1. **Screenshot comparison**:
   ```bash
   # Take side-by-side crops of each section
   # Reference (left) vs Clone (right)
   # Check: alignment, spacing, colors, text wrapping
   ```

2. **DevTools inspection**:
   - Compare computed styles (F12 → Inspect)
   - Check actual pixel values vs expected
   - Look for CSS conflicts or overrides

3. **Measure key dimensions**:
   - Container widths and heights
   - Padding and margins
   - Font sizes (should match `display-*` or `text-*`)
   - Line heights (should be >= text-size × 1.4)

4. **Fix priority**:
   - **P0**: Layout (container, columns, sections)
   - **P1**: Typography (font sizes, weights, colors)
   - **P2**: Spacing (margins, padding, gaps)
   - **P3**: Visual refinements (shadows, hover states, animations)

### Common Issues & Fixes

| Issue | Root Cause | Fix |
|-------|-----------|-----|
| Text wrapping incorrectly | Container too narrow or padding wrong | Check `max-w-[1280px]`, `px-10`, or grid column width |
| Colors mismatch | Using hardcoded hex or wrong Tailwind color | Use only `tailwind.config.js` colors |
| Shadows too harsh | Using `shadow-lg` instead of custom | Replace with `shadow-card`, `shadow-pill`, etc. |
| Focus outline missing | No `:focus-visible` in CSS | Add `focus:outline-2 focus:outline-offset-2 focus:outline-ink` |
| Overlay animations janky | Timing function or duration wrong | Use `transition-airbnb duration-250` |
| Lightbox arrow nav not working | Missing or incorrect event handler | Check `useKeyboardNav` hook implementation |
| Body scroll visible behind overlay | Body not locked | Verify `useBodyScrollLock` is called on overlay open |

---

## Phase 5: Reference-Aligned Testing

### Viewport & Device
- **Desktop only**: Test at 1440×900 (standard laptop)
- **Browser consistency**: Chrome, Firefox, Safari (latest)
- **Responsiveness**: No mobile—ensure desktop-only CSS

### Regression Testing
After each fix:
1. Reload page (Cmd/Ctrl + Shift + R for hard refresh)
2. Compare against reference screenshot
3. Run keyboard navigation test
4. Check overlay animations
5. Verify focus management

---

## Quick Checklist: Before Merge

- [ ] All colors from Tailwind (no hardcoded hex)
- [ ] Typography matches design system
- [ ] Spacing consistent with Tailwind scale
- [ ] Shadows use custom classes
- [ ] Animations smooth (200–260ms, Airbnb easing)
- [ ] Focus indicators visible (`:focus-visible`)
- [ ] Overlays trap focus and lock body scroll
- [ ] ←/→/Esc keyboard nav tested
- [ ] ARIA labels present
- [ ] No console errors or warnings
- [ ] Visually matches reference at 1440×900

---

## Tools & Resources

- **DevTools**: Inspect computed styles, colors, shadows, font metrics
- **Lighthouse**: Audit accessibility (A11y tab)
- **WAVE**: Browser extension for accessibility testing
- **ScreenReader**: VoiceOver (Mac), NVDA (Windows)
- **Reference**: https://airbnb-clone-umber-two.vercel.app

