import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  currentPage: string;
  onNavigateHome: (targetId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigateHome }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    onNavigateHome(id);
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onNavigateHome();
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || currentPage !== 'home'
          ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/5'
          : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <a 
          href="#" 
          onClick={handleLogoClick}
          className="z-50 opacity-90 hover:opacity-100 transition-opacity"
        >
          <Logo />
        </a>

        {/* Desktop Nav - Centered like reference */}
        <div className="hidden md:flex items-center gap-10 absolute left-1/2 transform -translate-x-1/2">
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Über uns</a>
          <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Lösungen</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Kontakt</a>
          <a href="#faq" onClick={(e) => handleNavClick(e, 'faq')} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">FAQ</a>
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all duration-300"
          >
            Analyse buchen
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center gap-8 md:hidden border-b border-white/10"
            >
              <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-2xl font-medium text-zinc-300 hover:text-white">Lösungen</a>
              <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-2xl font-medium text-zinc-300 hover:text-white">Über uns</a>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-2xl font-medium text-zinc-300 hover:text-white">Kontakt</a>
              <a href="#faq" onClick={(e) => handleNavClick(e, 'faq')} className="text-2xl font-medium text-zinc-300 hover:text-white">FAQ</a>
              
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="mt-4 px-8 py-3 rounded-full bg-white text-black font-bold text-lg"
              >
                Analyse buchen
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};