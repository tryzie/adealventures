// Business details used across the site. Change them here only.
export const site = {
  name: 'Adealventure',
  tagline: 'Tours & Travel',
  phoneDisplay: '0111 789 783',
  phoneIntl: '+254 111 789 783',
  whatsappNumber: '254111789783',
  mpesaTill: '5342133',
  domain: 'adeaventuretoursandtravel.com',
  location: 'Nairobi, Kenya',
  instagram: 'https://www.instagram.com/adealventures/',
  instagramHandle: '@adealventures',
  socialName: 'Adealventure Tour and Travel',
};

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
