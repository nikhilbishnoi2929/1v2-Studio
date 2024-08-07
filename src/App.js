import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import PhoneSlider from './components/PhoneSlider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Studio from './components/Studio';
import Feature from './components/Feature';
import Impact from './components/Impact';
import Clients from './components/Clients';
import Faq from './components/Faq';
import TopButton from './components/TopButton'
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
      <Header />
      <PhoneSlider />
      <Studio />
      <Feature />
      <Impact />
      <Clients />
      <Faq />
      <Footer />
      <TopButton />
    </main>
  );
}

export default App;
