import { listing } from '@/data/listing';
import { IconMapPin } from './icons';

/**
 * FIX v1.2: Cleaner Google-Maps-like surface (soft green + light street grid).
 */
export default function LocationMap() {
  return (
    <>
      <section id="location" className="py-10 border-b border-hairline"></section>
      <section className="py-10 border-b border-hairline">
        <h2 className="text-display-sm mb-2">Where you'll be</h2>
        <p className="text-body mb-6">{listing.location_details.heading}</p>

        <div
          className="relative rounded-card overflow-hidden border border-hairline aspect-[16/7]"
          style={{ background: '#E8F1E1' }}
        >
          {/* Street grid + park circles + coastline */}
          <svg viewBox="0 0 800 350" className="absolute inset-0 w-full h-full">
            <g stroke="#F7FAF4" strokeWidth="2" fill="none">
              <path d="M0 90 L800 90" />
              <path d="M0 180 L800 180" />
              <path d="M0 270 L800 270" />
              <path d="M180 0 L180 350" />
              <path d="M400 0 L400 350" />
              <path d="M620 0 L620 350" />
            </g>
            <circle cx="220" cy="200" r="55" fill="#D2E7C8" opacity="0.9" />
            <circle cx="560" cy="150" r="70" fill="#D2E7C8" opacity="0.8" />
            <path d="M0 40 L800 320" stroke="#B7D5E8" strokeWidth="30" fill="none" opacity="0.35" />
          </svg>

          {/* Centred pin */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="rounded-full bg-white shadow-card p-3">
              <IconMapPin width={22} height={22} />
            </div>
          </div>

          {/* Zoom controls */}
          <div className="absolute top-4 right-4 flex flex-col rounded-md border border-hairline bg-white shadow-cta overflow-hidden">
            <button
              className="w-8 h-8 grid place-items-center hover:bg-surface-strong text-lg leading-none"
              aria-label="Zoom in"
            >+</button>
            <button
              className="w-8 h-8 grid place-items-center hover:bg-surface-strong border-t border-hairline text-lg leading-none"
              aria-label="Zoom out"
            >−</button>
          </div>
        </div>

        <p className="text-xs text-muted mt-3">Exact location will be provided after booking.</p>

        <h3 className="mt-8 mb-2 font-semibold text-base">Neighbourhood highlights</h3>
        <p className="text-body text-sm leading-relaxed">{listing.location_details.neighborhoodHighlights}</p>
        <button className="mt-3 text-sm font-semibold underline">Show more &gt;</button>
      </section>
    </>
  );
}