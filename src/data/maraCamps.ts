// Maasai Mara Migration camp rates, per person.
// Taken from the Aug–Sep 2026 Family Sale flyer. Confirm 2027 rates with the camps.
export interface Camp {
  name: string;
  note?: string;
  residentKes: number;
  nonResidentUsd: number;
  validity: string;
  image: string;
}

export const maraCamps: Camp[] = [
  { name: 'Mara budget camp', note: 'Full package', residentKes: 19500, nonResidentUsd: 220, validity: '01 Aug – 30 Sep', image: 'images/wildebeest.jpg' },
  { name: "Orng'atuny Mara King Camp", residentKes: 29900, nonResidentUsd: 335, validity: '01 Aug – 30 Sep', image: 'images/tent.jpg' },
  { name: 'Olmoran Mara', residentKes: 30400, nonResidentUsd: 340, validity: '01 Aug – 30 Sep', image: 'images/camp.jpg' },
  { name: 'Flair Camp', residentKes: 37400, nonResidentUsd: 315, validity: '01 Aug – 30 Sep', image: 'images/tent.jpg' },
  { name: 'Elangata Olerai Luxury Camp', residentKes: 38200, nonResidentUsd: 440, validity: '01 Aug – 30 Sep', image: 'images/camp.jpg' },
  { name: 'Enkorok Mara Camp', residentKes: 46900, nonResidentUsd: 500, validity: '01 Aug – 30 Sep', image: 'images/tent.jpg' },
  { name: 'Osero Sopia River Camp', residentKes: 47200, nonResidentUsd: 600, validity: '01 Aug – 30 Sep', image: 'images/camp.jpg' },
  { name: 'Jambo Mara Lodge', note: 'Wooden cottage · August', residentKes: 48900, nonResidentUsd: 430, validity: '01 Aug – 31 Aug', image: 'images/pool.jpg' },
  { name: 'Mara Chui', note: 'Standard room · August', residentKes: 51500, nonResidentUsd: 465, validity: '01 Aug – 30 Aug', image: 'images/pool.jpg' },
  { name: 'Mara Sopa Lodge', residentKes: 53000, nonResidentUsd: 605, validity: '01 Aug – 31 Oct', image: 'images/pool.jpg' },
  { name: 'Enkorok Safari Camp', residentKes: 58200, nonResidentUsd: 620, validity: '01 Aug – 30 Sep', image: 'images/dinner.jpg' },
  { name: 'Alama Mara Camp', residentKes: 66400, nonResidentUsd: 760, validity: '01 Aug – 30 Sep', image: 'images/dinner.jpg' },
  { name: 'Emayian Camp', note: 'All inclusive · August', residentKes: 75700, nonResidentUsd: 825, validity: '01 Aug – 31 Aug', image: 'images/dinner.jpg' },
];

export function campTier(c: Camp): 'Budget' | 'Mid-range' | 'Luxury' {
  if (c.residentKes < 35000) return 'Budget';
  if (c.residentKes < 55000) return 'Mid-range';
  return 'Luxury';
}
