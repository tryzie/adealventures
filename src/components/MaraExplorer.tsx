import { useState } from 'react';
import { maraCamps, campTier, type Camp } from '../data/maraCamps';
import { whatsappLink } from '../data/site';
import WhatsAppIcon from './WhatsAppIcon';

type Rate = 'res' | 'non';
const price = (c: Camp, r: Rate) => (r === 'res' ? `KES ${c.residentKes.toLocaleString('en-KE')}` : `USD ${c.nonResidentUsd}`);

export default function MaraExplorer() {
  const [rate, setRate] = useState<Rate>('res');
  const [sel, setSel] = useState(0);
  const camp = maraCamps[sel];
  return (
    <section className="section alt" id="mara">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <div><p className="eyebrow">Family Sale · Maasai Mara Migration</p><h2>Pick your camp, see your price</h2></div>
          <p>Same 3-day trip, {maraCamps.length} places to sleep. Every option includes game drives, full-board meals, a safari vehicle and a professional guide.</p>
        </div>
        <div className="explorer">
          <div>
            <div className="seg" role="group" aria-label="Rate type">
              <button aria-pressed={rate === 'res'} onClick={() => setRate('res')}>Residents · KES</button>
              <button aria-pressed={rate === 'non'} onClick={() => setRate('non')}>Non-residents · USD</button>
            </div>
            <ul className="camps" aria-label="Camps and lodges">
              {maraCamps.map((c, i) => (
                <li key={c.name}>
                  <button aria-pressed={i === sel} onClick={() => setSel(i)}>
                    <span className="nm">{c.name}{c.note && <small>{c.note}</small>}</span>
                    <span className="pr">{price(c, rate)}</span>
                  </button>
                </li>
              ))}
            </ul>
            <p className="src">Rates per person for 3 days / 2 nights, based on the 2026 Family Sale. Confirm current rates on WhatsApp.</p>
          </div>
          <div className="panel" aria-live="polite">
            <div className="ph"><img key={camp.image} src={camp.image} alt="" /></div>
            <div className="body">
              <span className="tier">{campTier(camp)}</span>
              <h3>{camp.name}</h3>
              <div className="big">{price(camp, rate)}<small>per person</small></div>
              <p className="valid">Valid {camp.validity} · {rate === 'res' ? 'East African residents' : 'Non-residents'}</p>
              <div className="incl">
                <div><h4>Included</h4><ul><li>2 nights accommodation</li><li>Game drives</li><li>Safari vehicle transport</li><li>Full-board meals</li><li>Professional guide</li></ul></div>
                <div><h4>Not included</h4><ul><li>Park fees</li><li>Tips</li></ul></div>
              </div>
              <a className="btn btn-ember" target="_blank" rel="noopener"
                href={whatsappLink(`Hi Adealventure, I'm interested in the Maasai Mara Migration trip at ${camp.name} (${price(camp, rate)}).`)}>
                <WhatsAppIcon />Ask about this camp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
