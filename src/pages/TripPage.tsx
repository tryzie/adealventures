import { useEffect } from 'react';
import { findTrip, categoryLabel, upcomingTrips } from '../data/trips';
import { site, whatsappLink } from '../data/site';
import { dateRange, formatPrice } from '../lib/format';
import WhatsAppIcon from '../components/WhatsAppIcon';
import MaraExplorer from '../components/MaraExplorer';
import DepartureCard from '../components/DepartureCard';

export default function TripPage({ slug }: { slug: string }) {
  const trip = findTrip(slug);

  useEffect(() => {
    document.title = trip ? `${trip.title} · ${site.name}` : `Trip not found · ${site.name}`;
    return () => { document.title = `${site.name} ${site.tagline}`; };
  }, [trip]);

  if (!trip) {
    return (
      <section className="section"><div className="wrap">
        <h1 style={{ fontSize: '2.6rem' }}>We couldn’t find that trip</h1>
        <p className="muted" style={{ marginTop: '1rem' }}>It may have already departed. <a href="#departures">See upcoming departures</a>.</p>
      </div></section>
    );
  }

  const left = trip.seats.total - trip.seats.taken;
  const msg = `Hi Adealventure, I'd like to book the ${trip.title} (${dateRange(trip.startDate, trip.endDate)}). We are __ travellers.`;
  const more = upcomingTrips().filter((t) => t.slug !== trip.slug).slice(0, 3);

  return (
    <>
      <div className="trip-hero">
        <img src={trip.image} alt={trip.imageAlt} />
        <div className="wrap">
          <a className="back" href="#departures">← All departures</a>
          <p className="eyebrow">{categoryLabel[trip.category]} · {trip.region}{trip.sample ? ' · sample trip' : ''}</p>
          <h1>{trip.title}</h1>
          <p className="coords" style={{ marginTop: '.8rem' }}>{trip.destination} · {trip.coords}</p>
        </div>
      </div>

      <section className="section">
        <div className="wrap trip-body">
          <div>
            <p className="summary">{trip.summary}</p>
            <dl className="facts">
              <div><dt>Dates</dt><dd>{dateRange(trip.startDate, trip.endDate)}</dd></div>
              <div><dt>Duration</dt><dd>{trip.duration}</dd></div>
              <div><dt>Group size</dt><dd>{trip.seats.total} seats · {left} left</dd></div>
            </dl>
            <h2 style={{ fontSize: '2rem' }}>Itinerary</h2>
            <ol className="itinerary">
              {trip.itinerary.map((d, i) => (
                <li key={i}><span className="d">Day {i + 1}</span><div><h3>{d.title}</h3><p>{d.text}</p></div></li>
              ))}
            </ol>
            <div className="incl" style={{ marginTop: '2rem' }}>
              <div><h4>Included</h4><ul>{trip.includes.map((x) => <li key={x}>{x}</li>)}</ul></div>
              <div><h4>Not included</h4><ul>{trip.excludes.map((x) => <li key={x}>{x}</li>)}</ul></div>
            </div>
          </div>

          <aside className="book-card">
            <p className="eyebrow">From</p>
            <div className="big">{formatPrice(trip.priceFrom)}</div>
            <p className="muted" style={{ fontSize: '.9rem', marginTop: '.3rem' }}>{trip.priceNote}</p>
            <a className="btn btn-ember" href={whatsappLink(msg)} target="_blank" rel="noopener"><WhatsAppIcon />Book on WhatsApp</a>
            <a className="btn btn-ghost" style={{ width: '100%', marginTop: '.6rem' }} href={`tel:${site.phoneIntl.replace(/\s/g, '')}`}>Call {site.phoneDisplay}</a>
            <hr />
            <p className="eyebrow" style={{ color: 'var(--muted)' }}>Pay with M-Pesa · Buy Goods</p>
            <span className="till">{site.mpesaTill}</span>
          </aside>
        </div>
      </section>

      {trip.hasCampChoice && <MaraExplorer />}

      {more.length > 0 && (
        <section className="section">
          <div className="wrap">
            <div className="sec-head"><div><p className="eyebrow">Also departing soon</p><h2>More trips</h2></div></div>
            <div className="deps">{more.map((t) => <DepartureCard key={t.slug} trip={t} />)}</div>
          </div>
        </section>
      )}
    </>
  );
}
