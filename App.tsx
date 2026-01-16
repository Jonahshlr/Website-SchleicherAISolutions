import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { Booking } from './components/Booking';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Legal } from './components/Legal';

function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const navigateToHome = (targetId?: string) => {
    setCurrentPage('home');
    if (targetId) {
      // Small timeout to ensure the DOM is rendered before scrolling
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
       window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 antialiased selection:bg-brand-500/30 selection:text-brand-200">
      <Navbar currentPage={currentPage} onNavigateHome={navigateToHome} />
      
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero />
            <Stats />
            <Services />
            <About />
            <FAQ />
            <Booking />
            <Contact />
          </>
        ) : (
          <Legal type={currentPage as 'impressum' | 'datenschutz' | 'agb'} onBack={() => navigateToHome()} />
        )}
      </main>

      <Footer onNavigate={(page) => setCurrentPage(page)} />
    </div>
  );
}

export default App;