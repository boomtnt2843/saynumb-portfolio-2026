import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Events from './components/Events';
import MiniProjects from './components/MiniProjects';
import Goals from './components/Goals';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Events />
        <MiniProjects />
        <Goals />
      </main>
      <Footer />
    </>
  );
}

export default App;
