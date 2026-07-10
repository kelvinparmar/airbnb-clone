import { listing } from '@/data/listing';
import { IconLaurelLeft, IconLaurelRight, IconStar } from './icons';

/**
 * v1.4 — Overview matches reference exactly:
 *  - Property type + stats on top (left column)
 *  - Guest favourite card = FULL-WIDTH row underneath (single row, all 3 columns)
 *  - Host row = below with a divider
 *  - Promo card moved OUT of Overview → sits at top of right column
 */
export default function Overview() {
  const { propertyType, stats, host, rating } = listing;

  return (
    <section className="pt-6 pb-6 border-b border-hairline">
      {/* Property type + stats */}
      <h2 className="text-display-sm">{propertyType}</h2>
      <p className="text-body mt-1">
        {stats.guests} guests · {stats.bedrooms} bedroom · {stats.beds} bed · {stats.baths} bathroom
      </p>

      {/* Guest favourite card — full-width row */}
      <div className="mt-6 rounded-card border border-hairline shadow-soft bg-white overflow-hidden">
        <div className="grid grid-cols-[1fr_auto_auto] items-stretch">
          {/* Badge + description column */}
          <div className="flex items-center gap-3 px-5 py-4">
            <IconLaurelLeft width={20} height={44} />
            <span className="text-sm font-semibold">Guest favourite</span>
            <IconLaurelRight width={20} height={44} />
            <p className="text-sm text-body ml-4">
              One of the most loved homes on Airbnb, according to guests
            </p>
          </div>

          {/* Rating column */}
          <div className="px-6 py-4 text-center border-l border-hairline flex flex-col justify-center">
            <p className="text-lg font-semibold leading-none">{rating.overall}</p>
            <div className="flex justify-center gap-0.5 mt-1 text-ink">
              {Array.from({ length: 5 }).map((_, i) => (
                <IconStar key={i} width={10} height={10} />
              ))}
            </div>
          </div>

          {/* Reviews column */}
          <div className="px-6 py-4 text-center border-l border-hairline flex flex-col justify-center">
            <p className="text-lg font-semibold leading-none">{rating.reviewsCount}</p>
            Reviews
          </div>
        </div>
      </div>

      {/* Host row — with proper <img> tag (NOT {host.avatar} as text) */}
      <div className="flex items-center gap-3 pt-6">
        <img
          src={host.avatar}
          alt={host.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold">Hosted by {host.name}</p>
          <p className="text-xs text-muted">{host.yearsHosting} years hosting</p>
        </div>
      </div>
    </section>
  );
}