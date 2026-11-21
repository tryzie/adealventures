import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import HomePage from './pages/HomePage';
import TripPage from './pages/TripPage';
import { useHashRoute } from './lib/useHashRoute';
import { useReveal } from './lib/useReveal';

export default function App() {
  const route = useHashRoute();
  useReveal(route.key);

  useEffect(() => {
    if (route.page === 'trip') window.scrollTo(0, 0);
    else if (route.anchor) document.getElementById(route.anchor)?.scrollIntoView();
  }, [route.key]);

  return (
    <>
      <Header />
      <main id="top">{route.page === 'trip' ? <TripPage slug={route.slug} /> : <HomePage />}</main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
