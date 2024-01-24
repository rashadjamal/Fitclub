import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Plans from './components/Reasons/Plans/Plans';
import Reasons from './components/Reasons/Reasons';
import Testimonials from './components/Testimonials/Testimonials';
import Program from './components/program/Program';
function App() {
  return (
    <div className="App">
       <Hero/>
       <Program/>
       <Reasons/>
       <Plans />
       <Testimonials />
       <Join />
       <Footer/>
    </div>
  );
}

export default App;
