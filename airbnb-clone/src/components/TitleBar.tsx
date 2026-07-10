import { IconHeart, IconShare } from './icons';
import { listing } from '@/data/listing';

/**
 * FIX #1: The reference has ONLY title + Share/Save. It does NOT show a
 * rating/review/superhost/location line above the photos.
 */
export default function TitleBar() {
  return (
    <div className="flex items-end justify-between pt-8 pb-5">
      <h1 className="text-display-md font-semibold text-ink pr-6">{listing.title}</h1>
      <div className="flex items-center gap-1 shrink-0">
        <button className="btn-ghost underline decoration-1 underline-offset-2">
          <IconShare width={16} height={16} /><span>Share</span>
        </button>
        <button className="btn-ghost underline decoration-1 underline-offset-2">
          <IconHeart width={16} height={16} /><span>Save</span>
        </button>
      </div>
    </div>
  );
}
