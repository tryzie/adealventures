import { site } from '../data/site';

// Hand-picked photos from @adealventures. Swap the files in public/images to update.
const photos = [
  ['images/cheetah.jpg', 'Cheetah on a termite mound'],
  ['images/camp.jpg', 'Safari tent at dusk'],
  ['images/giraffe.jpg', 'Giraffe beside a safari van'],
  ['images/pool.jpg', 'Lodge pool in the Mara'],
  ['images/tent.jpg', 'Tented room interior'],
  ['images/dinner.jpg', 'Bush dinner setting'],
];

export default function InstagramStrip() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <div><p className="eyebrow">On Instagram</p><h2>{site.instagramHandle}</h2></div>
          <a className="btn btn-ghost" href={site.instagram} target="_blank" rel="noopener">Follow on Instagram</a>
        </div>
        <div className="ig">
          {photos.map(([src, alt]) => (
            <a key={src} href={site.instagram} target="_blank" rel="noopener"><img src={src} alt={alt} /></a>
          ))}
        </div>
      </div>
    </section>
  );
}
