import { useRef, useState } from 'react';
import { listing } from '@/data/listing';
import { IconChevronLeft, IconChevronRight, IconStar } from './icons';

/**
 * FIX #11: "More stays nearby" horizontal carousel.
 */
export default function NearbyStays() {
  const ref = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(1);
  const totalPages = 2; // enough for the 5 sample stays

  const scroll = (dir: -1 | 1) => {
    if (!ref.current) return;
    const w = ref.current.clientWidth;
    ref.current.scrollBy({ left: dir * w * 0.9, behavior: 'smooth' });
    setPage((p: number) => Math.min(totalPages, Math.max(1, p + dir)));
  };

  return (
    <section className="py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-display-sm">More stays nearby</h2>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted tabular-nums">{page}/{totalPages}</span>
          <button
            className="rounded-full border border-hairline p-2 hover:bg-surface-strong disabled:opacity-40"
            aria-label="Previous stays"
            onClick={() => scroll(-1)}
            disabled={page === 1}
          >
            <IconChevronLeft width={14} height={14} />
          </button>
          <button
            className="rounded-full border border-hairline p-2 hover:bg-surface-strong disabled:opacity-40"
            aria-label="Next stays"
            onClick={() => scroll(1)}
            disabled={page === totalPages}
          >
            <IconChevronRight width={14} height={14} />
          </button>
        </div>
      </div>

      <div ref={ref} className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth">
        {listing.nearbyStays.map((n) => (
          <article key={n.id} className="w-[calc((100%-72px)/4)] shrink-0 snap-start group">
            <img
              src={n.image}
              alt={n.title}
              className="rounded-card aspect-square object-cover w-full mb-3 transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <h3 className="font-semibold text-sm line-clamp-1">{n.title}</h3>
            <p className="text-xs text-muted mt-0.5">₹{n.price.toLocaleString()}/night</p>
            <p className="text-xs mt-0.5 flex items-center gap-1">
              <IconStar width={10} height={10} />
              <span className="font-semibold">{n.rating}</span>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
