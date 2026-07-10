import { listing } from '@/data/listing';
import { IconInfo } from './icons';

/**
 * FIX #12: Includes the "translated" notice banner from the reference.
 */
export default function Description() {
  return (
    <section className="py-8 border-b border-hairline">
      {/* Translation notice */}
      <div className="flex items-start gap-2 rounded-card border border-hairline bg-surface-soft px-4 py-3 mb-6">
        <IconInfo width={16} height={16} />
        <p className="text-xs text-body">
          Some info has been automatically translated.{' '}
          <button className="underline font-semibold">Show original</button>
        </p>
      </div>

      <div className="space-y-4 text-body leading-relaxed">
        {listing.description.map((p, i) => <p key={i}>{p}</p>)}
      </div>
      <button className="mt-4 font-semibold underline">Show more &gt;</button>
    </section>
  );
}
