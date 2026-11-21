import Hero from '../components/Hero';
import Departures from '../components/Departures';
import MaraExplorer from '../components/MaraExplorer';
import Ways from '../components/Ways';
import BookingSteps from '../components/BookingSteps';
import InstagramStrip from '../components/InstagramStrip';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Departures />
      <MaraExplorer />
      <Ways />
      <BookingSteps />
      <InstagramStrip />
    </>
  );
}
