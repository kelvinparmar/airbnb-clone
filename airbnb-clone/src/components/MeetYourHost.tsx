import { listing } from '@/data/listing';
import { IconMedal, IconStar } from './icons';

/**
 * FIX #9: "Meet your host" section from the reference.
 *  - Big rounded card for the primary host (avatar + rating + years hosting)
 *  - Co-Hosts grid on the right
 *  - Host details (response rate / response time)
 *  - Message host CTA
 */
export default function MeetYourHost() {
  const { host } = listing;

  return (
    <section className="py-10 border-b border-hairline">
      <h2 className="text-display-sm mb-6">Meet your host</h2>

      <div className="grid grid-cols-[280px_1fr] gap-10">
        {/* Host card */}
        <article className="relative rounded-[20px] bg-white shadow-card p-6 text-center">
          <img
            src={host.avatar}
            alt={host.name}
            className="mx-auto h-24 w-24 rounded-full object-cover"
          />
          <div className="absolute top-6 right-6 bg-ink text-white rounded-full w-6 h-6 grid place-items-center" title="Superhost">
            <IconMedal width={14} height={14} />
          </div>
          <h3 className="mt-4 font-semibold text-lg">{host.name}</h3>
          <p className="text-xs text-muted">Host</p>

          <div className="grid grid-cols-2 divide-x divide-hairline mt-5 text-left">
            <div className="pr-4">
              <p className="text-base font-semibold">{host.reviewsCount.toLocaleString()}</p>
              <p className="text-[10px] uppercase tracking-wide text-muted">Reviews</p>
            </div>
            <div className="pl-4">
              <p className="text-base font-semibold flex items-center gap-1">
                {host.rating} <IconStar width={12} height={12} />
              </p>
              <p className="text-[10px] uppercase tracking-wide text-muted">Rating</p>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-hairline text-left">
            <p className="text-base font-semibold">{host.yearsHosting}</p>
            <p className="text-[10px] uppercase tracking-wide text-muted">Years hosting</p>
          </div>
        </article>

        {/* Right column: Co-Hosts, host bio, message */}
        <div>
          <h3 className="font-semibold mb-4">Co-Hosts</h3>
          <div className="grid grid-cols-3 gap-y-3 gap-x-6 mb-8">
            {host.coHosts.map((c) => (
              <div key={c.name} className="flex items-center gap-2">
                <img src={c.avatar} alt="" className="h-8 w-8 rounded-full object-cover" />
                <span className="text-sm">{c.name}</span>
              </div>
            ))}
          </div>

          <h3 className="font-semibold mb-2">Host details</h3>
          <ul className="text-sm text-body space-y-1 mb-4">
            <li>Response rate: {host.responseRate}%</li>
            <li>Responds {host.responseTime}</li>
          </ul>

          <ul className="text-sm text-body space-y-1 mb-6">
            <li>💫 Born in {host.livesIn}</li>
            <li>🎓 Where I went to school: {host.schoolAttended}</li>
          </ul>

          <button className="btn-primary">Message host</button>

          <p className="text-xs text-muted mt-4 max-w-[52ch]">
            To help protect your payment, always use Airbnb to send money and communicate with hosts.
          </p>
        </div>
      </div>
    </section>
  );
}
