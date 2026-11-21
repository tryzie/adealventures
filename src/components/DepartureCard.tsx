import type { Trip } from '../data/trips';
import { categoryLabel } from '../data/trips';
import { tripHref } from '../lib/useHashRoute';
import { dateBadge, formatPrice } from '../lib/format';

export default function DepartureCard({ trip }: { trip: Trip }) {
  const [top, bottom] = dateBadge(trip.startDate, trip.endDate);
  const pct = Math.round((100 * trip.seats.taken) / trip.seats.total);
  return (
    <a className="dep" href={tripHref(trip.slug)} data-reveal>
      <div className="ph">
        <img src={trip.image} alt={trip.imageAlt} loading="lazy" />
        <span className="tag">{categoryLabel[trip.category]}{trip.sample && <span className="sample"> · sample</span>}</span>
        <span className="date-badge"><b>{top}</b>{bottom}</span>
      </div>
      <h3>{trip.title}</h3>
      <p className="meta">{trip.duration} · {trip.destination}</p>
      <div className="foot">
        <div>
          <div className="from">from · {trip.priceNote}</div>
          <div className="amt">{formatPrice(trip.priceFrom)}</div>
        </div>
        <div className="seats">
          {trip.seats.total - trip.seats.taken} seats left
          <span className="bar"><i style={{ width: `${pct}%` }} /></span>
        </div>
      </div>
    </a>
  );
}
