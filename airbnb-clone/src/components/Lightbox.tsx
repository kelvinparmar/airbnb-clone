import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { photos } from '@/data/listing';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import { useFocusTrap } from '@/hooks/useFocusTrap';
import { useKeyboardNav } from '@/hooks/useKeyboardNav';
import { IconChevronLeft, IconChevronRight, IconClose, IconHeart, IconShare } from './icons';

type Props = { open: boolean; index: number; onClose: () => void; onIndexChange: (i: number) => void; };

export default function Lightbox({ open, index, onClose, onIndexChange }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [dir, setDir] = useState<'left' | 'right' | null>(null);

  const prev = useCallback(() => { setDir('left');  onIndexChange((index - 1 + photos.length) % photos.length); }, [index, onIndexChange]);
  const next = useCallback(() => { setDir('right'); onIndexChange((index + 1) % photos.length); }, [index, onIndexChange]);

  useBodyScrollLock(open);
  useFocusTrap(ref, open);
  useKeyboardNav(open, { onEscape: onClose, onLeft: prev, onRight: next });

  useEffect(() => {
    if (!open) return;
    [-1, 1].forEach((d) => {
      const src = photos[(index + d + photos.length) % photos.length].src;
      const img = new Image();
      img.src = src;
    });
  }, [open, index]);

  if (!open) return null;
  const photo = photos[index];

  return createPortal(
    <div ref={ref} role="dialog" aria-modal="true" aria-label={`Photo ${index + 1} of ${photos.length}`}
         className="fixed inset-0 z-[60] bg-black text-white animate-overlay-fade">
      <div className="absolute top-0 inset-x-0 z-10 flex items-center justify-between px-6 h-16 bg-gradient-to-b from-black/60 to-transparent">
        <button onClick={onClose} className="rounded-full p-2 hover:bg-white/10 transition" aria-label="Close photo">
          <IconClose width={20} height={20} />
        </button>
        <div className="text-sm font-medium tabular-nums" aria-live="polite">{index + 1} / {photos.length}</div>
        <div className="flex items-center gap-1">
          <button className="btn-ghost text-white hover:bg-white/10 underline decoration-1 underline-offset-2"><IconShare width={16} height={16} />Share</button>
          <button className="btn-ghost text-white hover:bg-white/10 underline decoration-1 underline-offset-2"><IconHeart width={16} height={16} />Save</button>
        </div>
      </div>

      <button onClick={prev} aria-label="Previous photo"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/95 text-ink p-3 shadow hover:scale-105 active:scale-95 transition-transform">
        <IconChevronLeft width={20} height={20} />
      </button>
      <button onClick={next} aria-label="Next photo"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/95 text-ink p-3 shadow hover:scale-105 active:scale-95 transition-transform">
        <IconChevronRight width={20} height={20} />
      </button>

      <figure key={photo.id + dir} className="absolute inset-0 flex items-center justify-center p-16 animate-lightbox">
        <img src={photo.src} alt={photo.alt} className="max-h-full max-w-full object-contain select-none" draggable={false} />
        {photo.caption && (
          <figcaption className="absolute bottom-6 inset-x-0 text-center text-sm text-white/80">{photo.caption}</figcaption>
        )}
      </figure>
    </div>,
    document.body,
  );
}
