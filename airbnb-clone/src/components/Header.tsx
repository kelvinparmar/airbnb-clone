import { IconAirbnb, IconGlobe, IconMenu, IconSearch, IconUser } from './icons';

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-canvas border-b border-hairline-soft">
      <div className="mx-auto flex max-w-[1760px] items-center justify-between px-10 h-20">
        <a href="/" aria-label="Airbnb home" className="flex items-center gap-1.5 text-rausch">
          <IconAirbnb width={32} height={32} />
          <span className="text-[22px] font-bold leading-none">airbnb</span>
        </a>

        <button type="button" className="pill h-12 px-2 gap-0 text-sm" aria-label="Search">
          <span className="px-4 font-semibold">Anywhere</span>
          <span className="border-l border-hairline h-6" />
          <span className="px-4 font-semibold">Any week</span>
          <span className="border-l border-hairline h-6" />
          <span className="px-4 text-muted">Add guests</span>
          <span className="ml-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#E61E4D] to-[#D70466] text-white">
            <IconSearch width={16} height={16} />
          </span>
        </button>

        <div className="flex items-center gap-1">
          <a href="#" className="hidden lg:inline-block rounded-pill px-3 py-2.5 text-sm font-semibold hover:bg-surface-strong transition">Become a host</a>
          <button className="rounded-pill p-3 hover:bg-surface-strong transition" aria-label="Choose a language and region">
            <IconGlobe width={16} height={16} />
          </button>
          <button className="flex items-center gap-2 rounded-pill border border-hairline px-2 py-1.5 pl-3 hover:shadow-pillHover transition-shadow" aria-label="Main menu">
            <IconMenu width={16} height={16} />
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink text-white">
              <IconUser width={16} height={16} />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
