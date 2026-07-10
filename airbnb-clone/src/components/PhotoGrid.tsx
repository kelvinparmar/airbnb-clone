import { IconGrid } from './icons';
import { photos } from '@/data/listing';

type Props = { onOpenTour: () => void; onOpenPhoto: (index: number) => void; };

export default function PhotoGrid({ onOpenTour, onOpenPhoto }: Props) {
  const [main, ...rest] = photos.slice(0, 5);
  return (
    <>
      <section id="photos" className="relative"></section>
      <section className="relative">
        <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[430px] rounded-card overflow-hidden">
          <button
            onClick={onOpenTour}
            className="col-span-2 row-span-2 relative group overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            aria-label={`Open photo tour — ${main.alt}`}
          >
            <img src={main.src} alt={main.alt} loading="eager" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] brightness-[0.98] group-hover:brightness-90" />
          </button>
          {rest.map((p, i) => (
            <button
              key={p.id}
              onClick={() => onOpenPhoto(i + 1)}
              className="relative group overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              aria-label={`Open photo tour — ${p.alt}`}
            >
              <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] brightness-[0.98] group-hover:brightness-90" />
            </button>
          ))}
        </div>
        <button
          onClick={onOpenTour}
          className="absolute bottom-6 right-6 inline-flex items-center gap-2 rounded-lg bg-white border border-ink px-4 py-2 text-sm font-semibold shadow-cta hover:bg-surface-strong transition-transform active:scale-[0.98]"
        >
          <IconGrid width={16} height={16} />
          Show all photos
        </button>
      </section>
    </>
  );
}
