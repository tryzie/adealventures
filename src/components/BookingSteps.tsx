import { site } from '../data/site';

export default function BookingSteps() {
  return (
    <section className="section alt" id="book">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <div><p className="eyebrow">How booking works</p><h2>From message to game drive</h2></div>
          <p>No account and no checkout page. Group trips go ahead once enough seats are filled.</p>
        </div>
        <div className="steps">
          <div className="step" data-reveal><div className="n">1</div><h3>Choose a departure</h3><p>Pick a trip and date from the departures above, or ask us for a private trip.</p></div>
          <div className="step" data-reveal><div className="n">2</div><h3>Hold your seats</h3><p>WhatsApp or call {site.phoneDisplay} with your trip, dates and number of travellers.</p></div>
          <div className="step" data-reveal><div className="n">3</div><h3>Pay with M-Pesa</h3><p>Lipa na M-Pesa, Buy Goods till number:</p><span className="till">{site.mpesaTill}</span></div>
          <div className="step" data-reveal><div className="n">4</div><h3>Pack and go</h3><p>You get your itinerary, pickup point and your guide’s number before departure.</p></div>
        </div>
      </div>
    </section>
  );
}
