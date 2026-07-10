import { listing } from '@/data/listing';

/**
 * FIX #12: Booking card matches the reference exactly.
 * - Header:  "{currency}{total} for N nights"  (no per-night line)
 * - Body:    Date picker + guests
 * - Notice:  "Free cancellation before ..."   (before the Reserve button)
 * - CTA:     Reserve
 * - Footer:  "You won't be charged yet"
 * - NO pricing breakdown table.
 */
export default function BookingCard() {
  const { price, policies } = listing;

  return (
    <aside className="sticky top-28">
      <div className="rounded-card border border-hairline p-6 shadow-booking bg-white">
        <div className="mb-4">
          <span className="text-[22px] font-semibold">{price.currency}{price.total.toLocaleString()}</span>
          <span className="text-body"> for {price.nights} nights</span>
        </div>

        {/* Date + guests */}
        <div className="rounded-lg border border-border-strong overflow-hidden">
          <div className="grid grid-cols-2 divide-x divide-border-strong">
            <label className="px-3 py-2 cursor-pointer">
              <span className="block text-[10px] font-bold uppercase tracking-wide">Check-in</span>
              <span className="block text-sm">10/19/2026</span>
            </label>
            <label className="px-3 py-2 cursor-pointer">
              <span className="block text-[10px] font-bold uppercase tracking-wide">Checkout</span>
              <span className="block text-sm">10/23/2026</span>
            </label>
          </div>
          <div className="px-3 py-2 border-t border-border-strong cursor-pointer">
            <span className="block text-[10px] font-bold uppercase tracking-wide">Guests</span>
            <span className="block text-sm">2 guests</span>
          </div>
        </div>

        <p className="text-center text-sm mt-4">
          {policies.freeCancellationDate}
        </p>

        <button className="btn-reserve mt-4">Reserve</button>
        <p className="text-center text-sm text-muted mt-3">You won't be charged yet</p>
      </div>

      <div className="text-center text-sm text-muted mt-4 underline">Report this listing</div>
    </aside>
  );
}
