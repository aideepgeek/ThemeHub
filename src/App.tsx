import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { ThemeGallery } from './sections/ThemeGallery';
import { Features } from './sections/Features';
import { About } from './sections/About';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ThemeGallery />
        <Features />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
