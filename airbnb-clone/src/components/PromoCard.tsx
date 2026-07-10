import { listing } from '@/data/listing';

/**
 * "Get 10% off" promo — sits at the top of the right column, above BookingCard.
 */
export default function PromoCard() {
  const { promo } = listing;
  return (
    <div className="rounded-card border border-promo-border bg-promo px-4 py-3 flex items-center gap-3 mb-4">
      {/* Small tag icon */}
      <div className="shrink-0 text-lg" aria-hidden>🏷️</div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold leading-tight">{promo.title}</p>
        <p className="text-xs text-body mt-0.5 underline">{promo.subtitle}</p>
      </div>
      <button className="text-sm font-semibold underline whitespace-nowrap">
        {promo.cta}
      </button>
    </div>
  );
}