import { listing } from '@/data/listing';
import { IconCalendarX, IconClock, IconShield } from './icons';
import type { ReactNode } from 'react';

/**
 * FIX #10: 3-column "Things to know" section.
 */
type Col = { title: string; body: string[]; icon: ReactNode };

export default function ThingsToKnow() {
  const cols: Col[] = [
    { title: listing.policies.cancellation.title, body: listing.policies.cancellation.body, icon: <IconCalendarX width={22} height={22} /> },
    { title: listing.policies.houseRules.title,   body: listing.policies.houseRules.body,   icon: <IconClock width={22} height={22} /> },
    { title: listing.policies.safety.title,       body: listing.policies.safety.body,       icon: <IconShield width={22} height={22} /> },
  ];

  return (
    <section className="py-10 border-b border-hairline">
      <h2 className="text-display-sm mb-6">Things to know</h2>
      <div className="grid grid-cols-3 gap-8">
        {cols.map((c) => (
          <div key={c.title}>
            <div className="mb-3 text-ink">{c.icon}</div>
            <h3 className="font-semibold mb-3">{c.title}</h3>
            <ul className="space-y-2 text-sm text-body">
              {c.body.map((line) => <li key={line}>{line}</li>)}
            </ul>
            <button className="mt-3 text-sm font-semibold underline">Learn more</button>
          </div>
        ))}
      </div>
    </section>
  );
}
