import { useEffect } from 'react';

// Fades elements marked data-reveal in as they scroll into view.
// Content stays visible when motion is reduced or IntersectionObserver is missing.
// A MutationObserver picks up elements added later (e.g. after filtering trips).
export function useReveal(routeKey: string) {
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    document.documentElement.classList.add('reveal-ready');
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      }),
      { rootMargin: '0px 0px -8% 0px' },
    );
    const scan = () => document.querySelectorAll('[data-reveal]:not(.in)').forEach((el) => io.observe(el));
    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => { io.disconnect(); mo.disconnect(); };
  }, [routeKey]);
}
