import { listing } from '@/data/listing';
import { IconOutdoor, IconStayCool, IconSelfCheckin } from './icons';
import type { ReactNode } from 'react';

const iconMap: Record<string, ReactNode> = {
  outdoor:     <IconOutdoor width={28} height={28} />,
  staycool:    <IconStayCool width={28} height={28} />,
  selfcheckin: <IconSelfCheckin width={28} height={28} />,
};

export default function Highlights() {
  return (
    <section className="py-8 border-b border-hairline space-y-6">
      {listing.highlights.map((h) => (
        <div key={h.title} className="flex gap-4">
          <div className="text-ink shrink-0 mt-0.5">{iconMap[h.icon]}</div>
          <div>
            <h3 className="font-semibold text-base">{h.title}</h3>
            <p className="text-sm text-muted">{h.subtitle}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
