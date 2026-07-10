# Skill: Airbnb Design System

**Purpose**: Load this skill FIRST when working on any Airbnb clone component or style. Defines the complete design token system, typography, spacing, colors, shadows, and motion curves that must be used across the entire application.

**When to use**: Before building any new component, before styling changes, or when reviewing component fidelity.

---

## Color Palette

All colors must come from `tailwind.config.js`. **No hardcoded hex values.**

### Brand & Actions
- **Rausch** (Primary CTA): `#FF385C`
  - Default: `#FF385C`
  - Hover/Active: `#E00B41`
  - Disabled: `#FFD1DA`
  - Error state: `#C13515`

### Text Hierarchy
- **Ink** (Headlines, emphasis): `#222222`
- **Body** (Primary text): `#3F3F3F`
- **Muted** (Secondary text): `#6A6A6A`
- **Muted-soft** (Tertiary, disabled): `#929292`

### Surfaces & Borders
- **Canvas**: `#FFFFFF` (page background)
- **Surface-soft**: `#F7F7F7` (subtle card backgrounds)
- **Surface-strong**: `#F2F2F2` (stronger surface contrast)
- **Hairline**: `#DDDDDD` (standard borders)
- **Hairline-soft**: `#EBEBEB` (light dividers)
- **Border-strong**: `#C1C1C1` (emphasized borders)

### Special Purpose
- **Promo**: `#FEF7F1` (soft peach background for promo cards)
- **Promo-border**: `#F4D9BF` (light border for promo cards)

---

## Typography

### Font Family
**Primary**: `Cereal` (`"Airbnb Cereal VF"`)
- Fallback chain: `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `Roboto`, `Helvetica`, `Arial`, `sans-serif`
- **Note**: To use the Airbnb Cereal VF font, download the `.woff2` file and place it in `public/fonts/`, then uncomment the `@font-face` block in `src/styles/index.css`.

### Font Sizes (Display)
These are used for major headings and emphasis moments:

```
display-xl:   64px / 68px line height  (letterSpacing: -0.02em, weight: 600)
             └─ Reserved for review rating only (e.g., "4.95")

display-lg:   32px / 36px line height  (letterSpacing: -0.01em, weight: 600)
             └─ Section headings (e.g., "Where you'll be")

display-md:   26px / 30px line height  (weight: 600)
             └─ Subsection titles (e.g., "Amenities")

display-sm:   22px / 26px line height  (weight: 600)
             └─ Card titles, prominent text
```

### Body Text
- **Default**: 16px / Tailwind default line height
- **Small**: 14px (descriptions, secondary information)
- **Extra small**: 12px (captions, badges, secondary labels)

**Weight convention**:
- Headings: `font-semibold` (600)
- Body: `font-normal` (400)
- Emphasis within body: `font-semibold` (600)

---

## Spacing & Layout

### Grid & Columns
- **Main container**: `max-w-[1280px]` (1280px max-width)
- **Horizontal padding**: `px-10` (40px left/right on desktop)
- **Layout**: `grid-cols-[minmax(0,1fr)_380px]` with `gap-12` (3rem)
  - Left column: flexible content
  - Right column: 380px booking card (fixed)

### Vertical Spacing
- **Section spacing**: `mb-12` or `mt-12` (3rem between major sections)
- **Component spacing**: `mb-8` or `mt-8` (2rem between related components)
- **Internal padding**: `p-6` (1.5rem) standard component padding

### Border Radius
- **Cards & images**: `rounded-card` = 12px
- **Buttons & pills**: `rounded-pill` = 9999px (fully rounded)

---

## Shadows

All shadows use a two-layer depth model:

```
shadow-card:      0 6px 20px rgba(0,0,0,0.08)
                  └─ Medium-depth card shadows

shadow-pill:      0 1px 2px rgba(0,0,0,0.08), 
                  0 4px 12px rgba(0,0,0,0.05)
                  └─ Subtle elevation for buttons, pills

shadow-pillHover: 0 2px 4px rgba(0,0,0,0.12), 
                  0 8px 24px rgba(0,0,0,0.10)
                  └─ Hover state for buttons & pills

shadow-cta:       0 1px 2px rgba(0,0,0,0.10)
                  └─ Primary CTA button (minimal shadow)

shadow-booking:   0 6px 16px rgba(0,0,0,0.12)
                  └─ Booking card elevation

shadow-soft:      0 2px 8px rgba(0,0,0,0.06)
                  └─ Light shadows for subtle elevation
```

**Rule**: Never use Tailwind's `shadow-lg`, `shadow-xl`, etc. Always use the custom shadows above.

---

## Motion & Transitions

### Timing Function
**Easing curve**: `cubic-bezier(0.2, 0, 0, 1)` (custom Airbnb curve)
- Used for: Overlay animations, transitions, hover states
- Name in Tailwind: `transition-airbnb`
- Duration: 200–260ms

### Motion Accessibility
**For users with `prefers-reduced-motion: reduce`:**
- Shorten overlay animations to 1ms
- Keep interactions instant but visible
- Maintain focus management

Example:
```tsx
<div className={`transition-opacity ${
  window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'duration-[1ms]' : 'duration-250'
} transition-airbnb`}>
  {/* content */}
</div>
```

---

## Component Patterns

### Button Sizes & Styles

**Primary CTA**:
- Rausch background + hover shadow
- `rounded-pill`
- Padding: `py-3 px-6`
- Font: `font-semibold text-base`

**Secondary Button**:
- Border: 1px `border-hairline`
- Hover: `bg-surface-soft`
- `rounded-pill`

**Icon Button**:
- No background
- `p-2` or `p-3`
- Hover: `bg-surface-soft`
- Must have `aria-label`

### Card Styles

**Standard Card**:
- `bg-canvas border border-hairline rounded-card`
- `shadow-soft`
- Padding: `p-6`

**Promo Card**:
- `bg-promo border border-promo-border rounded-card`
- `p-6`
- Text-center alignment

### Image Handling

**Photo grids**:
- `rounded-card` (12px)
- Use `object-cover` for aspect-ratio preservation
- Lazy loading: `loading="lazy"`

**Thumbnails** (gallery):
- `rounded-card`
- Hover: slight scale or opacity change
- Accessible: `aria-label` with description

---

## Accessibility Requirements

### WCAG 2.1 Level AA Compliance

1. **Focus Indicators**: All interactive elements must have `:focus-visible`
   ```css
   :focus-visible { outline: 2px solid #222222; outline-offset: 2px; }
   ```

2. **Color Contrast**: Minimum 4.5:1 for text, 3:1 for UI components

3. **Semantic HTML**:
   - Headings: Use `<h1>`, `<h2>`, etc. in order
   - Links: `<a>` or `role="button"` with `aria-label`
   - Buttons: Native `<button>` when possible

4. **Overlays**:
   - `role="dialog" aria-modal="true"`
   - Focus trap: Can't tab outside overlay
   - Focus restore: Return to trigger element on close
   - Body scroll lock: Prevent page scroll when overlay open

5. **Keyboard Navigation**:
   - All buttons/links keyboard accessible
   - ←/→ arrows for Lightbox navigation
   - Esc to close overlays
   - Tab order sensible

6. **ARIA Live Regions**:
   - Lightbox counter: `aria-live="polite"`
   - Error messages: `role="alert"`

---

## Reference Implementation Notes

- **Single source of truth**: `src/data/listing.ts` contains all copy, prices, photos, reviews, hosts
- **Component size**: Target < 200 lines per component
- **No hardcoded values**: All sizes, colors, spacing come from Tailwind config or design tokens
- **Testing**: Verify against reference at https://airbnb-clone-umber-two.vercel.app at 1440×900 viewport

---

## Quick Checklist

Before submitting any component:
- [ ] All colors from Tailwind config (no `#hex`)
- [ ] Typography uses `display-*` or `text-*` classes
- [ ] Spacing uses Tailwind scale (`px-*, py-*, gap-*, mb-*, etc.`)
- [ ] Shadows use custom shadow classes (not `shadow-lg`)
- [ ] Transitions use `transition-airbnb` with 200–260ms duration
- [ ] Focus indicators present (`:focus-visible`)
- [ ] Overlays have focus trap + scroll lock
- [ ] Keyboard navigation tested (←/→/Esc)
- [ ] Visually matches reference screenshot at 1440×900

