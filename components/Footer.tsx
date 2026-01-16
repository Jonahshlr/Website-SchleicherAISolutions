import React from 'react';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (page: 'impressum' | 'datenschutz' | 'agb') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-black py-12 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="opacity-70">
          <Logo className="scale-90 origin-left" />
        </div>
        
        <div className="flex gap-8 text-sm text-zinc-600 font-medium">
          <button onClick={() => onNavigate('impressum')} className="hover:text-white transition-colors">Impressum</button>
          <button onClick={() => onNavigate('datenschutz')} className="hover:text-white transition-colors">Datenschutz</button>
          <button onClick={() => onNavigate('agb')} className="hover:text-white transition-colors">AGB</button>
        </div>

        <div className="text-zinc-700 text-sm">
          © {new Date().getFullYear()} SchleicherAiSolutions
        </div>
      </div>
    </footer>
  );
};