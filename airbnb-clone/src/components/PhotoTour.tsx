import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { listing } from '@/data/listing';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import { useFocusTrap } from '@/hooks/useFocusTrap';
import { useKeyboardNav } from '@/hooks/useKeyboardNav';
import { IconClose, IconHeart, IconShare } from './icons';

type Props = {
  open: boolean;
  onClose: () => void;
  onOpenPhoto: (index: number) => void;
};

/**
 * FIX v1.3 — Photo tour now matches reference:
 *  - Top navigation strip with category thumbnails + labels
 *  - Each section: left sidebar (title + amenities), right photo grid
 *  - Photo grid mixes full-width `wide` photos with 2-col pairs
 *  - Sticky top chrome; smooth-scroll to sections when a thumbnail is clicked
 */
export default function PhotoTour({ open, onClose, onOpenPhoto }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState(listing.photoTour[0].id);

  useBodyScrollLock(open);
  useFocusTrap(ref, open);
  useKeyboardNav(open, { onEscape: onClose });

  // Track active section on scroll for the thumbnail bar highlight
  useEffect(() => {
    if (!open) return;
    const container = ref.current;
    if (!container) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id.replace('sec-', ''));
        });
      },
      { root: container, rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    );
    listing.photoTour.forEach((s) => {
      const el = container.querySelector(`#sec-${s.id}`);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [open]);

  if (!open) return null;

  // Flat index into `photos` for the Lightbox handoff
  let flatIdx = 0;
  const withFlatIndex = listing.photoTour.map((section) => ({
    ...section,
    photos: section.photos.map((p) => ({ ...p, flatIdx: flatIdx++ })),
  }));

  const scrollTo = (id: string) => {
    ref.current?.querySelector(`#sec-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return createPortal(
    <div
      ref={ref}
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour"
      className="fixed inset-0 z-50 bg-white animate-overlay-up overflow-y-auto"
    >
      {/* Top chrome — Close · "Photo tour" title · Share / Save */}
      <div className="sticky top-0 z-20 bg-white/95 backdrop-blur border-b border-hairline-soft">
        <div className="mx-auto max-w-[900px] flex items-center justify-between h-14 px-4">
          <button
            onClick={onClose}
            aria-label="Close photo tour"
            className="rounded-full p-2 hover:bg-surface-strong transition"
          >
            <IconClose width={18} height={18} />
          </button>
          <p className="text-sm font-semibold">Photo tour</p>
          <div className="flex items-center gap-1">
            <button className="btn-ghost underline decoration-1 underline-offset-2">
              <IconShare width={14} height={14} />Share
            </button>
            <button className="btn-ghost underline decoration-1 underline-offset-2">
              <IconHeart width={14} height={14} />Save
            </button>
          </div>
        </div>

        {/* Category thumbnail nav */}
        <div className="mx-auto max-w-[900px] px-4 pb-3">
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {withFlatIndex.map((s) => {
              const active = activeId === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`flex flex-col items-center gap-1 shrink-0 pb-2 border-b-2 transition-colors ${
                    active ? 'border-ink' : 'border-transparent hover:border-hairline'
                  }`}
                >
                  <img
                    src={s.photos[0].src}
                    alt={s.photos[0].alt}
                    className="w-14 h-14 rounded-md object-cover"
                  />
                  <span className={`text-[11px] whitespace-nowrap ${active ? 'font-semibold text-ink' : 'text-muted'}`}>
                    {s.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Body — sections */}
      <div className="mx-auto max-w-[900px] px-4 pt-8 pb-24 space-y-14">
        {withFlatIndex.map((section) => (
          <section
            key={section.id}
            id={`sec-${section.id}`}
            className="grid grid-cols-[240px_1fr] gap-6 scroll-mt-40"
          >
            {/* LEFT — title + amenities */}
            <div className="pt-1">
              <h2 className="text-display-sm">{section.label}</h2>
              {section.amenities && (
                <p className="text-xs text-muted mt-2 leading-relaxed">{section.amenities}</p>
              )}
            </div>

            {/* RIGHT — photo grid (wide photos span both cols) */}
            <div className="grid grid-cols-2 gap-2">
              {section.photos.map((p, i) => (
                <button
                  key={i}
                  onClick={() => onOpenPhoto(p.flatIdx)}
                  className={`relative overflow-hidden rounded-card group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${
                    p.size === 'wide' ? 'col-span-2 aspect-[16/10]' : 'aspect-[4/3]'
                  }`}
                  aria-label={`Open ${p.alt}`}
                >
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>,
    document.body,
  );
}