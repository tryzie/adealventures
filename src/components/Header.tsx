import { useState } from 'react';
import { site, whatsappLink } from '../data/site';
import WhatsAppIcon from './WhatsAppIcon';

const links = [
  ['#departures', 'Departures'],
  ['#mara', 'Maasai Mara'],
  ['#ways', 'Ways to travel'],
  ['#book', 'How to book'],
  ['#contact', 'Contact'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="wrap">
        <a className="brand" href="#top" aria-label={`${site.name} home`}>
          <img src="images/logo-emblem.png" alt="" width={46} height={46} />
          <span><b>{site.name}</b><small>{site.tagline}</small></span>
        </a>
        <nav className={`main-nav${open ? ' open' : ''}`} aria-label="Main">
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>
        <a className="btn btn-ember" href={whatsappLink()} target="_blank" rel="noopener">
          <WhatsAppIcon /><span>Book on WhatsApp</span>
        </a>
        <button className="menu-btn" aria-expanded={open} aria-label="Menu" onClick={() => setOpen((o) => !o)}>
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            {open
              ? <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              : <path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />}
          </svg>
        </button>
      </div>
    </header>
  );
}
