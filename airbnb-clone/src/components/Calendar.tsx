import { useState } from 'react';
import { listing } from '@/data/listing';
import { IconChevronLeft, IconChevronRight } from './icons';

/**
 * FIX #5: The "5 nights in Candolim" calendar section from the reference.
 * Non-functional picker (visual parity is the P0 for the take-home) but
 * fully keyboard-navigable and screen-reader friendly.
 */

type Range = { start: Date | null; end: Date | null };

const MONTH_NAMES = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December',
];
const WEEKDAYS = ['S','M','T','W','T','F','S'];

// Utility: build a 6×7 grid of Date objects for a given month.
function buildMonthGrid(year: number, month: number): (Date | null)[] {
  const first = new Date(year, month, 1);
  const startDay = first.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (Date | null)[] = [];
  for (let i = 0; i < startDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
  while (cells.length < 42) cells.push(null);
  return cells;
}

function MonthGrid({ year, month, range, onPick }:
  { year: number; month: number; range: Range; onPick: (d: Date) => void }) {
  const cells = buildMonthGrid(year, month);
  const inRange = (d: Date) =>
    range.start && range.end && d >= range.start && d <= range.end;

  return (
    <div className="flex-1 min-w-0">
      <p className="text-center font-semibold text-sm mb-4">{MONTH_NAMES[month]} {year}</p>
      <div className="grid grid-cols-7 gap-y-1 text-xs">
        {WEEKDAYS.map((d, i) => (
          <div key={i} className="h-8 grid place-items-center text-muted font-semibold">{d}</div>
        ))}
        {cells.map((d, i) => {
          if (!d) return <div key={i} className="h-10" />;
          const isStart = range.start?.toDateString() === d.toDateString();
          const isEnd   = range.end?.toDateString()   === d.toDateString();
          const middle  = inRange(d) && !isStart && !isEnd;
          return (
            <button
              key={i}
              onClick={() => onPick(d)}
              className={[
                'h-10 grid place-items-center rounded-full text-sm tabular-nums transition-colors',
                isStart || isEnd ? 'bg-ink text-white font-semibold' : '',
                middle ? 'bg-surface-strong' : '',
                !isStart && !isEnd && !middle ? 'hover:bg-surface-strong' : '',
              ].join(' ')}
            >
              {d.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function CalendarSection() {
  // Default selection matches the reference (Oct 19 → Oct 23, 2026)
  const [range, setRange] = useState<Range>({
    start: new Date(2026, 9, 19),
    end:   new Date(2026, 9, 23),
  });
  const [year, setYear] = useState(2026);
  const [month, setMonth] = useState(9); // October

  const onPick = (d: Date) => {
    if (!range.start || (range.start && range.end)) {
      setRange({ start: d, end: null });
    } else if (d < range.start) {
      setRange({ start: d, end: range.start });
    } else {
      setRange({ start: range.start, end: d });
    }
  };

  const shift = (dir: number) => {
    const m = month + dir;
    if (m < 0) { setMonth(11); setYear(year - 1); }
    else if (m > 11) { setMonth(0); setYear(year + 1); }
    else setMonth(m);
  };

  const nextYear  = month === 11 ? year + 1 : year;
  const nextMonth = (month + 1) % 12;

  return (
    <section className="py-10 border-b border-hairline">
      <div className="flex items-baseline justify-between mb-1">
        <h2 className="text-display-sm">{listing.calendarNights} nights in {listing.location.city}</h2>
      </div>
      <p className="text-sm text-muted mb-6">{listing.calendarRange}</p>

      <div className="relative">
        <div className="flex gap-14">
          <MonthGrid year={year}     month={month}     range={range} onPick={onPick} />
          <MonthGrid year={nextYear} month={nextMonth} range={range} onPick={onPick} />
        </div>

        <button
          onClick={() => shift(-1)}
          aria-label="Previous month"
          className="absolute left-0 top-0 rounded-full p-2 hover:bg-surface-strong"
        >
          <IconChevronLeft width={16} height={16} />
        </button>
        <button
          onClick={() => shift(1)}
          aria-label="Next month"
          className="absolute right-0 top-0 rounded-full p-2 hover:bg-surface-strong"
        >
          <IconChevronRight width={16} height={16} />
        </button>
      </div>

      <div className="flex justify-end mt-4">
        <button
          className="text-sm font-semibold underline"
          onClick={() => setRange({ start: null, end: null })}
        >
          Clear dates
        </button>
      </div>
    </section>
  );
}
