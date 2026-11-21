import { useState } from 'react';
import { site } from '../data/site';

function CopyButton({ value }: { value: string }) {
  const [label, setLabel] = useState('Copy');
  const copy = () => {
    navigator.clipboard?.writeText(value).then(
      () => { setLabel('Copied'); setTimeout(() => setLabel('Copy'), 1500); },
      () => setLabel(value),
    );
  };
  return <button className="copy" onClick={copy}>{label}</button>;
}

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="wrap">
        <div>
          <h2>Where are we <em>going next?</em></h2>
          <p className="fm" style={{ marginTop: '.8rem', maxWidth: '36ch' }}>
            Tell us your dates and how many of you are travelling. We reply on WhatsApp.
          </p>
        </div>
        <div>
          <h4>Bookings</h4>
          <div className="phone"><a href={`tel:${site.phoneIntl.replace(/\s/g, '')}`} style={{ textDecoration: 'none' }}>{site.phoneDisplay}</a> <CopyButton value={site.phoneDisplay.replace(/\s/g, '')} /></div>
          <p className="fm">Call or WhatsApp · {site.phoneIntl}</p>
          <h4 style={{ marginTop: '1.2rem' }}>Lipa na M-Pesa · Buy Goods</h4>
          <div className="phone">{site.mpesaTill} <CopyButton value={site.mpesaTill} /></div>
        </div>
        <div>
          <h4>Find us</h4>
          <p>{site.location}</p>
          <p className="fm" style={{ marginTop: '.4rem' }}>
            <a href={site.instagram} target="_blank" rel="noopener">Instagram {site.instagramHandle}</a>
          </p>
          <p className="fm">Facebook, X and YouTube: {site.socialName}</p>
          <p className="fm" style={{ marginTop: '.6rem' }}>{site.domain}</p>
        </div>
        <div className="legal">
          <span>© {new Date().getFullYear()} {site.name} {site.tagline}</span>
          <span>Safaris · Beach holidays · Group trips</span>
        </div>
      </div>
    </footer>
  );
}
