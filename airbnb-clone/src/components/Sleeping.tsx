import { listing } from '@/data/listing';

export default function Sleeping() {
  return (
    <section className="py-8 border-b border-hairline">
      <h2 className="text-display-sm mb-6">Where you'll sleep</h2>
      <div className="grid grid-cols-2 gap-4">
        {listing.sleeping.map((s) => (
          <article
            key={s.room}
            className="rounded-card border border-hairline p-4 hover:shadow-card transition-shadow"
          >
            <img
              src={s.image}
              alt={s.bed}
              className="rounded-md aspect-[4/3] object-cover w-full mb-4"
            />
            <h3 className="font-semibold">{s.room}</h3>
            <p className="text-sm text-muted">{s.bed}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
