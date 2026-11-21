import SavannaScene from './SavannaScene';
import { upcomingTrips } from '../data/trips';
import { tripHref } from '../lib/useHashRoute';
import { formatPrice, dateRange } from '../lib/format';

export default function Hero() {
  const next = upcomingTrips()[0];
  return (
    <div className="hero">
      <SavannaScene />
      <div className="wrap">
        <p className="eyebrow">Kenya &amp; East Africa · Small-group departures</p>
        <h1>The wild, <em>at a fair deal.</em></h1>
        <p className="lede">
          Safaris, beach escapes and group adventures, planned by a family team in Nairobi.
          Join a scheduled departure, share the safari van, and split the cost.
        </p>
        <div className="ctas">
          <a className="btn btn-ember" href="#departures">See upcoming trips</a>
          <a className="btn btn-ghost" href="#mara">Compare Mara camps</a>
        </div>
      </div>
      {next && (
        <a className="fieldnote" href={tripHref(next.slug)} aria-label={`Next departure: ${next.title}`}>
          <div className="row"><span className="eyebrow live">Next departure</span><span className="coords">{next.coords}</span></div>
          <h3>{next.title}</h3>
          <div className="row">
            <span className="coords">{next.duration} · {dateRange(next.startDate, next.endDate)}</span>
            <span className="price"><small>from </small>{formatPrice(next.priceFrom)}</span>
          </div>
        </a>
      )}
    </div>
  );
}
