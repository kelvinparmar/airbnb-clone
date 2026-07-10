import { useCallback, useState } from 'react';
import Amenities from './components/Amenities';
import BookingCard from './components/BookingCard';
import CalendarSection from './components/Calendar';
import Description from './components/Description';
import Header from './components/Header';
import Highlights from './components/Highlights';
import Lightbox from './components/Lightbox';
import LocationMap from './components/LocationMap';
import MeetYourHost from './components/MeetYourHost';
import NearbyStays from './components/NearbyStays';
import Overview from './components/Overview';
import PhotoGrid from './components/PhotoGrid';
import PhotoTour from './components/PhotoTour';
import PromoCard from './components/PromoCard';
import Reviews from './components/Reviews';
import Sleeping from './components/Sleeping';
import StickySubNav from './components/StickySubNav';
import ThingsToKnow from './components/ThingsToKnow';
import TitleBar from './components/TitleBar';

export default function App() {
  const [tourOpen, setTourOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const openTour = useCallback(() => setTourOpen(true), []);
  const closeTour = useCallback(() => setTourOpen(false), []);
  const openLightbox = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  return (
    <>
      <Header />


      {/* NEW — sticky sub-nav */}
      <StickySubNav />

      {/* FIX v1.3: max-w-[1280px] gives left column enough room to prevent text-wrap */}
      <main className="mx-auto max-w-[1280px] px-10 pb-16">
        <TitleBar />
        <PhotoGrid onOpenTour={openTour} onOpenPhoto={openLightbox} />

        <div className="grid grid-cols-[minmax(0,1fr)_380px] gap-12 mt-0">
          <div className="min-w-0">
            <Overview />
            <Highlights />
            <Description />
            <Sleeping />
            <Amenities />
            <CalendarSection />
          </div>
          <div id="booking" className="pt-6">
            <PromoCard />
            <BookingCard />
          </div>
        </div>

        <Reviews />
        <LocationMap />
        <MeetYourHost />
        <ThingsToKnow />
        <NearbyStays />
      </main>
      <PhotoTour open={tourOpen} onClose={closeTour} onOpenPhoto={openLightbox} />
      <Lightbox
        open={lightboxIndex !== null}
        index={lightboxIndex ?? 0}
        onClose={closeLightbox}
        onIndexChange={setLightboxIndex}
      />
    </>
  );
}