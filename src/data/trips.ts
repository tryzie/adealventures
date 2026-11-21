// Every trip on the site lives in this file.
// To add a departure, copy one entry, change the fields and save.
// Trips whose endDate has passed are hidden automatically.
// `sample: true` shows a small "Sample" tag: remove it once the trip is confirmed.

export type Category = 'safari' | 'beach' | 'group';

export interface Price {
  amount: number;
  currency: 'KES' | 'USD';
}

export interface ItineraryDay {
  title: string;
  text: string;
}

export interface Trip {
  slug: string;
  title: string;
  category: Category;
  destination: string;
  region: 'Kenya' | 'East Africa';
  coords: string;
  duration: string;
  startDate: string; // YYYY-MM-DD
  endDate: string;
  priceFrom: Price;
  priceNote?: string;
  seats: { taken: number; total: number };
  image: string;
  imageAlt: string;
  summary: string;
  itinerary: ItineraryDay[];
  includes: string[];
  excludes: string[];
  hasCampChoice?: boolean;
  sample?: boolean;
}

export const categoryLabel: Record<Category, string> = {
  safari: 'Safari',
  beach: 'Beach',
  group: 'Group & team building',
};

export const trips: Trip[] = [
  {
    slug: 'diani-christmas-escape',
    title: 'Diani Beach Christmas Escape',
    category: 'beach',
    destination: 'Diani, Kwale County',
    region: 'Kenya',
    coords: '4.32° S · 39.58° E',
    duration: '4 days · 3 nights',
    startDate: '2026-12-23',
    endDate: '2026-12-26',
    priceFrom: { amount: 24500, currency: 'KES' },
    priceNote: 'per person sharing',
    seats: { taken: 11, total: 14 },
    image: 'images/beach-diani.svg',
    imageAlt: 'Palm trees over a white-sand beach and turquoise sea',
    summary:
      'Spend Christmas on one of Africa’s best beaches. White sand, a calm reef lagoon and plenty of time to do nothing at all.',
    itinerary: [
      { title: 'Nairobi to Diani', text: 'Morning SGR train to Mombasa, transfer across the Likoni ferry to Diani. Check in and sunset on the beach.' },
      { title: 'Kisite marine park', text: 'Optional dhow trip to Kisite-Mpunguti for snorkelling and dolphins, with a seafood lunch on Wasini Island.' },
      { title: 'Christmas Day', text: 'A free day at the hotel with a Christmas dinner by the pool.' },
      { title: 'Back to Nairobi', text: 'Breakfast, check out and afternoon train back to Nairobi.' },
    ],
    includes: ['SGR economy tickets', '3 nights beach hotel', 'Breakfast and dinner', 'Transfers', 'Christmas dinner'],
    excludes: ['Lunches', 'Kisite dhow trip', 'Drinks', 'Tips'],
    sample: true,
  },
  {
    slug: 'maasai-mara-new-year',
    title: 'Maasai Mara New Year Safari',
    category: 'safari',
    destination: 'Maasai Mara National Reserve',
    region: 'Kenya',
    coords: '1.49° S · 35.14° E',
    duration: '3 days · 2 nights',
    startDate: '2027-01-01',
    endDate: '2027-01-03',
    priceFrom: { amount: 18000, currency: 'KES' },
    priceNote: 'adult · child KES 15,000',
    seats: { taken: 4, total: 7 },
    image: 'images/elephants.jpg',
    imageAlt: 'Elephant family grazing in the Maasai Mara',
    summary:
      'Start the year in the Mara. Three days of game drives looking for lions, elephants, cheetahs and the big herds, with nights at a tented camp.',
    itinerary: [
      { title: 'Nairobi to the Mara', text: 'Early pickup in Nairobi, drive down the Rift Valley escarpment, lunch at camp and an evening game drive.' },
      { title: 'Full day in the reserve', text: 'Full-day game drive with a picnic lunch. Optional visit to a Maasai village.' },
      { title: 'Morning drive and home', text: 'Sunrise game drive, breakfast, then drive back to Nairobi by evening.' },
    ],
    includes: ['Game drives', 'Accommodation', 'Full-board meals', 'Transport in a 4×4 safari van'],
    excludes: ['Park fees', 'Anything not mentioned'],
  },
  {
    slug: 'amboseli-weekend',
    title: 'Amboseli Kilimanjaro Weekend',
    category: 'safari',
    destination: 'Amboseli National Park',
    region: 'Kenya',
    coords: '2.65° S · 37.26° E',
    duration: '2 days · 1 night',
    startDate: '2027-01-23',
    endDate: '2027-01-24',
    priceFrom: { amount: 16500, currency: 'KES' },
    priceNote: 'per person sharing',
    seats: { taken: 6, total: 14 },
    image: 'images/giraffe.jpg',
    imageAlt: 'Giraffe beside a safari van',
    summary:
      'A short weekend under Kilimanjaro. Big elephant herds, open plains and the mountain at sunrise if the clouds clear.',
    itinerary: [
      { title: 'Nairobi to Amboseli', text: 'Morning departure, lunch at the lodge and an afternoon game drive.' },
      { title: 'Sunrise and return', text: 'Early drive for the best view of Kilimanjaro, breakfast, and back to Nairobi.' },
    ],
    includes: ['Game drives', '1 night accommodation', 'Full-board meals', 'Safari van transport'],
    excludes: ['Park fees', 'Tips'],
    sample: true,
  },
  {
    slug: 'jungle-fitness-challenge-3',
    title: 'Jungle Fitness Challenge · 3rd edition',
    category: 'group',
    destination: 'Rowallan Scouts Camp, Jamhuri',
    region: 'Kenya',
    coords: '1.30° S · 36.76° E',
    duration: '1 day · 9am–3pm',
    startDate: '2027-02-13',
    endDate: '2027-02-13',
    priceFrom: { amount: 1800, currency: 'KES' },
    priceNote: 'per person · early bird KES 1,600',
    seats: { taken: 38, total: 80 },
    image: 'images/jungle.jpg',
    imageAlt: 'Mud volleyball at the Jungle Fitness Challenge',
    summary:
      'A day of mud and laughter in the forest. Bring friends, family or the whole office team.',
    itinerary: [
      { title: 'Challenge day', text: '5 km jungle obstacle race, mud volleyball, zumba and tug of war, followed by lunch.' },
    ],
    includes: ['All activities', 'Lunch', 'Event crew'],
    excludes: ['Transport to Jamhuri', 'Change of clothes'],
    sample: true,
  },
  {
    slug: 'watamu-easter',
    title: 'Watamu & Malindi Easter Break',
    category: 'beach',
    destination: 'Watamu, Kilifi County',
    region: 'Kenya',
    coords: '3.35° S · 40.02° E',
    duration: '4 days · 3 nights',
    startDate: '2027-03-26',
    endDate: '2027-03-29',
    priceFrom: { amount: 27000, currency: 'KES' },
    priceNote: 'per person sharing',
    seats: { taken: 3, total: 14 },
    image: 'images/beach-watamu.svg',
    imageAlt: 'Sunset over the Watamu coast',
    summary:
      'Easter on the quieter north coast. Turtle bay, Gede ruins, Malindi old town and long sunset walks.',
    itinerary: [
      { title: 'Nairobi to Watamu', text: 'SGR to Mombasa and road transfer north to Watamu.' },
      { title: 'Marine park', text: 'Glass-bottom boat and snorkelling in Watamu Marine National Park.' },
      { title: 'Gede and Malindi', text: 'Morning at the Gede ruins and an afternoon in Malindi old town.' },
      { title: 'Back to Nairobi', text: 'Breakfast and return by SGR.' },
    ],
    includes: ['SGR economy tickets', '3 nights beach hotel', 'Breakfast and dinner', 'Transfers'],
    excludes: ['Marine park fees', 'Lunches', 'Tips'],
    sample: true,
  },
  {
    slug: 'zanzibar-getaway',
    title: 'Zanzibar Island Getaway',
    category: 'beach',
    destination: 'Zanzibar, Tanzania',
    region: 'East Africa',
    coords: '6.16° S · 39.20° E',
    duration: '5 days · 4 nights',
    startDate: '2027-04-21',
    endDate: '2027-04-25',
    priceFrom: { amount: 650, currency: 'USD' },
    priceNote: 'per person sharing, flights included',
    seats: { taken: 5, total: 12 },
    image: 'images/beach-zanzibar.svg',
    imageAlt: 'A dhow sailing off Zanzibar',
    summary:
      'Stone Town alleys, spice farms and the white beaches of Nungwi. Our first trip beyond Kenya.',
    itinerary: [
      { title: 'Fly to Zanzibar', text: 'Morning flight from Nairobi, transfer to Stone Town and an evening at Forodhani food market.' },
      { title: 'Stone Town and spices', text: 'Guided walk through Stone Town and a spice farm tour.' },
      { title: 'To Nungwi', text: 'Transfer to the north coast beaches.' },
      { title: 'Sunset dhow cruise', text: 'Free beach day, sunset cruise on a traditional dhow.' },
      { title: 'Fly home', text: 'Breakfast and transfer for the flight back to Nairobi.' },
    ],
    includes: ['Return flights from Nairobi', '4 nights accommodation', 'Breakfast daily', 'Transfers', 'Spice tour', 'Sunset cruise'],
    excludes: ['Visa or entry fees', 'Lunches and dinners', 'Tips'],
    sample: true,
  },
  {
    slug: 'maasai-mara-migration-2027',
    title: 'Maasai Mara Migration · Family Sale',
    category: 'safari',
    destination: 'Maasai Mara National Reserve',
    region: 'Kenya',
    coords: '1.49° S · 35.14° E',
    duration: '3 days · 2 nights',
    startDate: '2027-08-01',
    endDate: '2027-09-30',
    priceFrom: { amount: 19500, currency: 'KES' },
    priceNote: 'per person · choose from 13 camps',
    seats: { taken: 9, total: 14 },
    image: 'images/wildebeest.jpg',
    imageAlt: 'Wildebeest leaping during the great migration',
    summary:
      'The great migration, from a budget camp to an all-inclusive lodge. Same trip, same guides, 13 places to sleep. Departures every weekend from August to September.',
    itinerary: [
      { title: 'Into the Mara', text: 'Pickup in Nairobi, drive to the Mara, check in at your camp and an evening game drive.' },
      { title: 'River crossings', text: 'Full day following the herds to the Mara River crossing points, with a picnic lunch.' },
      { title: 'Last drive', text: 'Early game drive, breakfast and return to Nairobi.' },
    ],
    includes: ['2 nights accommodation', 'Game drives', 'Transport in a safari vehicle', 'Meals on full board', 'Professional tour guide'],
    excludes: ['Park fees', 'Tips'],
    hasCampChoice: true,
  },
];

const today = () => new Date(new Date().toDateString());

export function upcomingTrips(): Trip[] {
  return trips
    .filter((t) => new Date(t.endDate) >= today())
    .sort((a, b) => a.startDate.localeCompare(b.startDate));
}

export function findTrip(slug: string): Trip | undefined {
  return trips.find((t) => t.slug === slug);
}
