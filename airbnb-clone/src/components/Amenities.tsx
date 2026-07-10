import { listing, type AmenityIcon } from '@/data/listing';
import type { ReactNode } from 'react';
import {
  IconCameras,
  IconCarbonAlarm,
  IconHotTub,
  IconKitchen,
  IconParking,
  IconPetsAllowed,
  IconPool,
  IconSmokeAlarm,
  IconWifi,
  IconWorkspace,
} from './icons';

/**
 * FIX #4: Every amenity gets a real SVG icon instead of a bullet point.
 */
const iconMap: Record<AmenityIcon, ReactNode> = {
  kitchen: <IconKitchen width={22} height={22} />,
  wifi: <IconWifi width={22} height={22} />,
  pool: <IconPool width={22} height={22} />,
  hottub: <IconHotTub width={22} height={22} />,
  workspace: <IconWorkspace width={22} height={22} />,
  parking: <IconParking width={22} height={22} />,
  cameras: <IconCameras width={22} height={22} />,
  petsAllowed: <IconPetsAllowed width={22} height={22} />,
  carbonAlarm: <IconCarbonAlarm width={22} height={22} />,
  smokeAlarm: <IconSmokeAlarm width={22} height={22} />,
};

export default function Amenities() {
  return (
    <>
      <section id="amenities" className="py-8 border-b border-hairline"></section>
      <section className="py-8 border-b border-hairline">
        <h2 className="text-display-sm mb-6">What this place offers</h2>
        <div className="grid grid-cols-2 gap-x-6 gap-y-3">
          {listing.amenities.map((a) => (
            <div
              key={a.label}
              className={`flex items-center gap-4 py-2 ${a.unavailable ? 'line-through text-muted-soft' : 'text-body'}`}
            >
              <span className="text-ink shrink-0">{iconMap[a.icon]}</span>
              <span>{a.label}</span>
            </div>
          ))}
        </div>
        <button className="btn-primary mt-6">Show all {listing.totalAmenities} amenities</button>
      </section>
    </>
  );
}
