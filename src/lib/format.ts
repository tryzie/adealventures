import type { Price } from '../data/trips';

export function formatPrice(p: Price): string {
  return `${p.currency} ${p.amount.toLocaleString('en-KE')}`;
}

const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

function parse(iso: string): Date {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d);
}

/** Short badge text, e.g. ["23 DEC", "WED"] or ["AUG", "2027"] for long-running trips. */
export function dateBadge(start: string, end: string): [string, string] {
  const s = parse(start);
  const e = parse(end);
  const spanDays = (e.getTime() - s.getTime()) / 86400000;
  if (spanDays > 14) return [months[s.getMonth()], String(s.getFullYear())];
  return [`${s.getDate()} ${months[s.getMonth()]}`, days[s.getDay()]];
}

/** Long range text, e.g. "23 – 26 Dec 2026". */
export function dateRange(start: string, end: string): string {
  const s = parse(start);
  const e = parse(end);
  const opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' };
  if (start === end) return s.toLocaleDateString('en-GB', opts);
  if (s.getFullYear() === e.getFullYear() && s.getMonth() === e.getMonth())
    return `${s.getDate()} – ${e.toLocaleDateString('en-GB', opts)}`;
  return `${s.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })} – ${e.toLocaleDateString('en-GB', opts)}`;
}
