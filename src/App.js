import './App.css';
import Footersection from './components/Footersection';
import Headersection from './components/Headersection';
import Phoneslider from './components/Phoneslider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Studio from './components/Studio';
import Featureprojects from './components/Featureprojects';
import Impact from './components/Impact';
import Clients from './components/Clients';
import Faq from './components/Faq';
import ScrolltotopButton from './components/ScrollToTopButton'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <main className=' overflow-hidden max-w-[1920px] mx-auto'>
      <Headersection />
      <Phoneslider />
      <Studio />
      <Featureprojects />
      <Impact />
      <Clients />
      <Faq />
      <Footersection />
      <ScrolltotopButton />
    </main>
  );
}

export default App;
