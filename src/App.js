import './App.css';
import Footersection from './components/Footersection';
import Headersection from './components/Headersection';
import Phoneslider from './components/Phoneslider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Studio from './components/Studio';
import Featured from './components/Featureprojects';
import Featureprojects from './components/Featureprojects';
import Impact from './components/Impact';

function App() {
  return (
    <main className=' overflow-hidden'>
    <Headersection/>
    <Phoneslider/>
    <Studio/>
    <Featureprojects/>
    <Impact/>
    <Footersection/>
    </main>
  );
}

export default App;
