import { listing } from '@/data/listing';
import { IconLaurelLeft, IconLaurelRight, IconStar } from './icons';

/**
 * FIX v1.2:
 *  - Rating hero uses subtle "( 4.95 )" parentheses, not big wreaths.
 *  - Rating breakdown = clean 6-column row.
 *  - Overall-rating bars moved above the breakdown as their own row.
 *  - Review card avatars reduced 48 → 36 px.
 */
export default function Reviews() {
  const { rating, reviews } = listing;
  return (
    <section id="reviews" className="py-16 border-b border-hairline">
      <div className="flex items-center justify-center gap-3 mb-2">
        <IconLaurelLeft width={20} height={70} />
        <div className="text-display-xl leading-none">{rating.overall.toFixed(2)}</div>
        <IconLaurelRight width={20} height={70} />
      </div>
      <p className="text-center text-sm font-semibold mt-1">Guest favourite</p>
      <p className="text-center text-xs text-muted mt-1 max-w-[36ch] mx-auto">
        This home is a guest favourite based on ratings, reviews, and reliability
      </p>
      <div className="text-center mt-3">
        <button className="text-[11px] font-semibold underline uppercase tracking-wide">
          More statistics available
        </button>
      </div>

      {/* Overall rating bars — own row */}
      <div className="mt-10 mb-8">
        <h3 className="font-semibold mb-3 text-sm">Overall rating</h3>
        <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 max-w-[420px] text-xs">
          {[5, 4, 3, 2, 1].map((n) => (
            <div key={n} className="contents">
              <span className="w-3 text-right">{n}</span>
              <div className="flex-1 h-1 rounded bg-hairline overflow-hidden self-center">
                <div
                  className="h-full bg-ink"
                  style={{ width: n === 5 ? '92%' : n === 4 ? '6%' : '1%' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6-column category breakdown */}
      <div className="grid grid-cols-6 gap-6 pb-8 border-b border-hairline">
        {Object.entries(rating.breakdown).map(([k, v]) => (
          <div key={k}>
            <p className="text-sm font-semibold">{k}</p>
            <p className="text-lg font-medium mt-2">{v.toFixed(1)}</p>
          </div>
        ))}
      </div>

      {/* Review category pills */}
      <div className="flex flex-wrap gap-2 py-6 border-b border-hairline">
        {rating.categories.map((c) => (
          <button key={c.label} className="review-pill">
            <span>{c.label}</span>
            <span className="text-muted">{c.count}</span>
          </button>
        ))}
      </div>

      {/* Reviews grid — 36px avatars */}
      <div className="grid grid-cols-2 gap-x-16 gap-y-10 pt-8">
        {reviews.map((r) => (
          <article key={r.id}>
            <header className="flex items-center gap-3 mb-3">
              <img src={r.avatar} alt="" className="h-9 w-9 rounded-full" />
              <div>
                <p className="font-semibold text-sm">{r.name}</p>
                <p className="text-xs text-muted">{r.timeOnAirbnb}</p>
              </div>
            </header>
            <div className="flex items-center gap-2 text-xs mb-2">
              <div className="flex text-ink">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <IconStar key={i} width={10} height={10} />
                ))}
              </div>
              <span aria-hidden>·</span>
              <span>{r.date}</span>
            </div>
            <p className="text-body text-sm leading-relaxed line-clamp-4">{r.body}</p>
            <button className="mt-2 text-sm font-semibold underline">Show more</button>
          </article>
        ))}
      </div>

      <button className="btn-primary mt-8">Show all {rating.reviewsCount} reviews</button>
    </section>
  );
}