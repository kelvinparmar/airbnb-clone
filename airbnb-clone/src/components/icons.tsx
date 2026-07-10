/**
 * Stroke-based icons matching Airbnb's linework.
 * All 24×24, stroke-width 2, currentColor.
 */
import type { SVGProps } from 'react';

type P = SVGProps<SVGSVGElement>;
const base: P = {
  width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none',
  stroke: 'currentColor', strokeWidth: 2,
  strokeLinecap: 'round', strokeLinejoin: 'round',
  'aria-hidden': true,
};

/* -------------------- Chrome / brand -------------------- */
export const IconAirbnb = (p: P) => (
  <svg {...base} {...p} viewBox="0 0 32 32" fill="currentColor" stroke="none">
    <path d="M16 1c-3.3 0-6 2.6-6 6 0 1 .2 2.1.7 3.1.7 1.6 1.7 3.3 2.7 5l1.5 2.5c1.5 2.5 2.5 4.4 2.5 6 0 1.7-1.3 3-3 3s-3-1.3-3-3c0-.8.3-1.5.8-2.1.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0-.9.9-1.4 2.2-1.4 3.5 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.2-1.2-4.5-2.8-7.1l-1.5-2.5c-1-1.7-2-3.3-2.6-4.7-.4-.8-.5-1.5-.5-2.3 0-2.2 1.8-4 4-4s4 1.8 4 4c0 .7-.1 1.4-.5 2.2-.3.6-.1 1.3.5 1.6.5.3 1.2.1 1.5-.4.5-1 .7-2.1.7-3.1.1-3.4-2.6-6.3-5.9-6.3z" />
  </svg>
);
export const IconSearch = (p: P) => (<svg {...base} {...p}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>);
export const IconMenu = (p: P) => (<svg {...base} {...p}><path d="M4 6h16M4 12h16M4 18h16" /></svg>);
export const IconUser = (p: P) => (<svg {...base} {...p}><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg>);
export const IconGlobe = (p: P) => (<svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" /></svg>);
export const IconShare = (p: P) => (<svg {...base} {...p}><path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7" /><path d="M16 6l-4-4-4 4" /><path d="M12 2v14" /></svg>);
export const IconHeart = (p: P) => (<svg {...base} {...p}><path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6C19 16.5 12 21 12 21z" /></svg>);
export const IconStar = (p: P) => (<svg {...base} {...p} fill="currentColor" stroke="none"><path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.6L6 22l1.5-7.2L2 10l7.1-1.1L12 2z" /></svg>);
export const IconGrid = (p: P) => (<svg {...base} {...p}><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>);
export const IconClose = (p: P) => (<svg {...base} {...p}><path d="M18 6 6 18M6 6l12 12" /></svg>);
export const IconChevronLeft = (p: P) => (<svg {...base} {...p}><path d="M15 6l-6 6 6 6" /></svg>);
export const IconChevronRight = (p: P) => (<svg {...base} {...p}><path d="M9 6l6 6-6 6" /></svg>);
export const IconChevronDown = (p: P) => (<svg {...base} {...p}><path d="M6 9l6 6 6-6" /></svg>);
export const IconCheck = (p: P) => (<svg {...base} {...p}><path d="M4 12l6 6 10-12" /></svg>);
export const IconInfo = (p: P) => (<svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 8v.01M11 12h1v5h1" /></svg>);
export const IconMedal = (p: P) => (<svg {...base} {...p}><circle cx="12" cy="9" r="6" /><path d="M8 14l-2 8 6-4 6 4-2-8" /></svg>);
export const IconMapPin = (p: P) => (<svg {...base} {...p}><path d="M12 22s-8-8-8-13a8 8 0 0 1 16 0c0 5-8 13-8 13z" /><circle cx="12" cy="9" r="2.5" /></svg>);

/* -------------------- Laurels (rating hero) -------------------- */
export const IconLaurelLeft = (p: P) => (
  <svg {...base} {...p} viewBox="0 0 24 40" width={24} height={40} fill="none">
    <path d="M17 2c-6 4-11 12-11 20s5 12 11 16" />
    <path d="M13 10c-2 0-4 1-5 2M12 16c-2 0-4 1-5 2M12 22c-2 0-4 1-5 2M12 28c-2 0-4 1-5 2M13 34c-2 0-4 1-5 2" />
  </svg>
);
export const IconLaurelRight = (p: P) => (
  <svg {...base} {...p} viewBox="0 0 24 40" width={24} height={40} fill="none">
    <path d="M7 2c6 4 11 12 11 20s-5 12-11 16" />
    <path d="M11 10c2 0 4 1 5 2M12 16c2 0 4 1 5 2M12 22c2 0 4 1 5 2M12 28c2 0 4 1 5 2M11 34c2 0 4 1 5 2" />
  </svg>
);

/* -------------------- Highlight icons -------------------- */
export const IconOutdoor = (p: P) => (
  <svg {...base} {...p}><path d="M3 20h18M6 20V10l6-4 6 4v10M9 20v-5h6v5" /></svg>
);
export const IconStayCool = (p: P) => (
  // Ceiling fan / pinwheel
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    <path d="M12 10.5c-2 -4 -6 -5 -8 -3 2 2 5 3 8 3z" />
    <path d="M13.5 12c4 -2 5 -6 3 -8 -2 2 -3 5 -3 8z" />
    <path d="M12 13.5c2 4 6 5 8 3 -2 -2 -5 -3 -8 -3z" />
    <path d="M10.5 12c-4 2 -5 6 -3 8 2 -2 3 -5 3 -8z" />
  </svg>
);
export const IconSelfCheckin = (p: P) => (
  // Key + door
  <svg {...base} {...p}><circle cx="8" cy="14" r="4" /><path d="M11 12l10-10M17 6l2 2" /></svg>
);

/* -------------------- Amenity icons -------------------- */
export const IconKitchen = (p: P) => (
  <svg {...base} {...p}><rect x="4" y="5" width="16" height="14" rx="1.5" /><path d="M4 10h16M8 5v5M16 5v5" /></svg>
);
export const IconWifi = (p: P) => (
  <svg {...base} {...p}><path d="M2 9a15 15 0 0 1 20 0M5 13a10 10 0 0 1 14 0M8.5 16.5a5 5 0 0 1 7 0" /><circle cx="12" cy="20" r="1" fill="currentColor" /></svg>
);
export const IconPool = (p: P) => (
  <svg {...base} {...p}><path d="M2 17c2-1 3 1 5 1s3-2 5-2 3 2 5 2 3-1 5-1M2 21c2-1 3 1 5 1s3-2 5-2 3 2 5 2 3-1 5-1M7 15V5a2 2 0 0 1 4 0M13 15V5a2 2 0 0 1 4 0" /></svg>
);
export const IconHotTub = (p: P) => (
  <svg {...base} {...p}><path d="M4 20V11h16v9M4 20a2 2 0 0 1-2-2v-3h20v3a2 2 0 0 1-2 2M8 11V6a2 2 0 0 1 2-2h1M13 8h3M13 5h3" /></svg>
);
export const IconWorkspace = (p: P) => (
  <svg {...base} {...p}><rect x="3" y="4" width="18" height="12" rx="1" /><path d="M8 20h8M12 16v4" /></svg>
);
export const IconParking = (p: P) => (
  <svg {...base} {...p}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 17V7h4a3 3 0 0 1 0 6H9" /></svg>
);
export const IconCameras = (p: P) => (
  <svg {...base} {...p}><rect x="2" y="8" width="14" height="8" rx="1" /><path d="M16 10l6-3v10l-6-3" /></svg>
);
export const IconPetsAllowed = (p: P) => (
  <svg {...base} {...p}><circle cx="6" cy="10" r="2" /><circle cx="10" cy="6" r="2" /><circle cx="14" cy="6" r="2" /><circle cx="18" cy="10" r="2" /><path d="M8 20c0-3 2-6 4-6s4 3 4 6c0 1-1 2-2 2h-4c-1 0-2-1-2-2z" /></svg>
);
export const IconCarbonAlarm = (p: P) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M8 12h8M12 8v8" /></svg>
);
export const IconSmokeAlarm = (p: P) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3" fill="currentColor" /></svg>
);

/* -------------------- ThingsToKnow -------------------- */
export const IconCalendarX = (p: P) => (
  <svg {...base} {...p}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4M9 15l6 0M12 12v6" /></svg>
);
export const IconClock = (p: P) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>
);
export const IconShield = (p: P) => (
  <svg {...base} {...p}><path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5l8-3z" /></svg>
);
