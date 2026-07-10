import { useEffect, useState } from 'react';
import { listing } from '@/data/listing';
import { IconStar } from './icons';

const TABS = [
  { id: 'photos',    label: 'Photos' },
  { id: 'amenities', label: 'Amenities' },
  { id: 'reviews',   label: 'Reviews' },
  { id: 'location',  label: 'Location' },
];

export default function StickySubNav() {
  const [visible, setVisible] = useState(false);
  const [active, setActive]   = useState('photos');

  // Show the bar once user scrolls past the hero
  useEffect(() => {
    const hero = document.getElementById('photos');
    if (!hero) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { rootMargin: '-80px 0px 0px 0px' },
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  // Track active section
  useEffect(() => {
    const els = TABS
      .map((t) => document.getElementById(t.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (vis[0]) setActive(vis[0].target.id);
      },
      { rootMargin: '-100px 0px -60% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <div
      className={[
        'fixed top-0 inset-x-0 z-40 bg-white border-b border-hairline',
        'transition-transform duration-300',
        visible ? 'translate-y-0' : '-translate-y-full',
      ].join(' ')}
      aria-hidden={!visible}
    >
      <div className="mx-auto max-w-[1280px] px-10 h-[68px] flex items-center justify-between">
        {/* LEFT — 4 anchor tabs with active underline */}
        <nav className="flex items-center gap-6">
          {TABS.map((t) => {
            const isActive = active === t.id;
            return (
              <button
                key={t.id}
                onClick={() => scrollTo(t.id)}
                className={[
                  'relative py-5 text-sm transition-colors',
                  isActive ? 'font-semibold text-ink' : 'text-body hover:text-ink',
                ].join(' ')}
              >
                {t.label}
                <span
                  className={[
                    'absolute left-0 right-0 bottom-0 h-[2px] bg-ink transition-opacity',
                    isActive ? 'opacity-100' : 'opacity-0',
                  ].join(' ')}
                />
              </button>
            );
          })}
        </nav>

        {/* RIGHT — mini price + Reserve */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm">
              <span className="font-semibold">
                {listing.price.currency}{listing.price.total.toLocaleString()}
              </span>
              <span className="text-body"> for {listing.price.nights} nights</span>
            </p>
            <p className="text-xs flex items-center justify-end gap-1 text-body">
              <IconStar width={10} height={10} />
              <span className="font-semibold">{listing.rating.overall}</span>
              <span aria-hidden>·</span>
              <span className="underline">{listing.rating.reviewsCount} reviews</span>
            </p>
          </div>
          <button
            onClick={() => scrollTo('booking')}
            className="rounded-lg px-6 py-2.5 text-white font-semibold text-sm bg-gradient-to-r from-[#E61E4D] via-[#E31C5F] to-[#D70466] hover:brightness-105 transition-transform active:scale-[0.98]"
          >
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
}