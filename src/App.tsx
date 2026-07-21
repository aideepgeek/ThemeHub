import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { ThemeGallery } from './sections/ThemeGallery';
import { Features } from './sections/Features';
import { About } from './sections/About';
import { Footer } from './sections/Footer';
import { ThemeDetail } from './pages/ThemeDetail';

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ThemeGallery />
        <Features />
        <About />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/theme/:themeId" element={<ThemeDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
