import { useState } from 'react';
import { upcomingTrips, categoryLabel, type Category } from '../data/trips';
import DepartureCard from './DepartureCard';

type Filter = 'all' | Category;
const filters: Filter[] = ['all', 'safari', 'beach', 'group'];

export default function Departures() {
  const [filter, setFilter] = useState<Filter>('all');
  const list = upcomingTrips().filter((t) => filter === 'all' || t.category === filter);
  return (
    <section className="section" id="departures">
      <div className="wrap">
        <div className="sec-head">
          <div><p className="eyebrow">Scheduled group trips</p><h2>Upcoming departures</h2></div>
          <div className="chips" role="group" aria-label="Filter trips">
            {filters.map((f) => (
              <button key={f} className="chip" aria-pressed={filter === f} onClick={() => setFilter(f)}>
                {f === 'all' ? 'All' : categoryLabel[f]}
              </button>
            ))}
          </div>
        </div>
        <div className="deps">
          {list.map((t) => <DepartureCard key={t.slug} trip={t} />)}
          {list.length === 0 && <p className="muted">No departures in this category right now. Message us and we’ll plan one.</p>}
        </div>
      </div>
    </section>
  );
}
