import { useEffect, useState } from 'react';

// Hash routing keeps the site fully static: it works on any host with no server rewrites.
//   #/trip/<slug>  → trip page
//   #<section-id>  → home page, scrolled to that section
export type Route =
  | { page: 'home'; anchor: string | null; key: string }
  | { page: 'trip'; slug: string; key: string };

function parse(hash: string): Route {
  const h = hash.replace(/^#/, '');
  const m = h.match(/^\/trip\/([\w-]+)/);
  if (m) return { page: 'trip', slug: m[1], key: h };
  return { page: 'home', anchor: h || null, key: h };
}

export function useHashRoute(): Route {
  const [route, setRoute] = useState(() => parse(window.location.hash));
  useEffect(() => {
    const on = () => setRoute(parse(window.location.hash));
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  return route;
}

export const tripHref = (slug: string) => `#/trip/${slug}`;
