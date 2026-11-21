const ways = [
  { title: 'Safaris', text: 'Maasai Mara, Amboseli, Tsavo and Nakuru. Game drives from budget camps to luxury lodges.', img: 'images/elephants.jpg', alt: 'Elephant family in the Maasai Mara' },
  { title: 'Beach holidays', text: 'Diani, Watamu, Mombasa and Zanzibar. Sand, reef and slow mornings.', img: 'images/beach-diani.svg', alt: 'Palm trees over a turquoise sea' },
  { title: 'Group & team building', text: 'Jungle challenges, family outings and company retreats, planned end to end.', img: 'images/jungle.jpg', alt: 'Mud volleyball at the Jungle Fitness Challenge' },
];

export default function Ways() {
  return (
    <section className="section" id="ways">
      <div className="wrap">
        <div className="sec-head" data-reveal><div><p className="eyebrow">Ways to travel</p><h2>Three ways to get out there</h2></div></div>
        <div className="ways">
          {ways.map((w) => (
            <a className="way" href="#departures" key={w.title} data-reveal>
              <img src={w.img} alt={w.alt} loading="lazy" />
              <div><h3>{w.title}</h3><p>{w.text}</p></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
