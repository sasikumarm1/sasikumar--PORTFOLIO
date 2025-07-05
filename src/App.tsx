import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Hackathons from './components/Hackathons';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-gray-900 dark:bg-gray-900 text-white dark:text-white bg-white light:bg-white text-gray-900 light:text-gray-900 transition-colors duration-300">
        <Header />
        <main>
          <section id="hero">
            <Hero />
          </section>
          <About />
          <Projects />
          <Skills />
          <Certifications />
          <Education />
          <Hackathons />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;