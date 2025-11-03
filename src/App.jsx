import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="font-sans scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <Contact />
      </main>
    </div>
  );
}
