import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const questions = [
  {
    question: "Wie läuft die Zusammenarbeit ab?",
    answer: "Wir starten nicht mit Software, sondern mit Ihren Prozessen. In einer kostenlosen Analyse identifizieren wir die kritischen Punkte, die Sie am meisten Zeit oder Geld kosten. Erst dann entwickeln wir die passende KI-Lösung, um dieses spezifische Problem zu beheben."
  },
  {
    question: "Ist mein Unternehmen zu klein für KI-Automatisierung?",
    answer: "Nein. Gerade für den Mittelstand in Hessen ist Effizienz entscheidend, um wettbewerbsfähig zu bleiben. Einfache Automatisierungen im Büroalltag oder Kundenservice haben oft den größten Hebel bei kleineren Teams."
  },
  {
    question: "Wie steht es um den Datenschutz (DSGVO)?",
    answer: "Datenschutz hat für uns oberste Priorität. Unsere Server werden primär in Deutschland gehostet. Generell befindet sich unsere gesamte Infrastruktur in Europa, wobei der Großteil direkt in Deutschland liegt. Wir arbeiten streng nach DSGVO und schließen entsprechende AVV-Verträge ab."
  },
  {
    question: "Mit welchen Kosten muss ich rechnen?",
    answer: "Wir bieten keine Pauschalpreise, da wir individuelle Probleme lösen. Unsere Lösungen sind jedoch so konzipiert, dass sie sich durch eingesparte Arbeitszeit und Fehlerreduktion oft in durchschnittlich 2 Monaten amortisieren."
  },
  {
    question: "Brauche ich technisches Vorwissen?",
    answer: "Überhaupt nicht. Wir sind Ihre Problemlöser. Wir kümmern uns um die technische Umsetzung, die Integration in Ihre bestehenden Systeme und die Wartung. Sie sehen nur das Ergebnis: Reibungslose Prozesse."
  }
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggle }) => (
  <div className="border-b border-white/5 last:border-b-0">
    <button 
      onClick={toggle}
      className="w-full py-6 flex items-center justify-between text-left group"
    >
      <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-white' : 'text-zinc-400 group-hover:text-white'}`}>
        {question}
      </span>
      <div className={`p-2 rounded-full border transition-all duration-300 ${isOpen ? 'bg-white text-black border-white' : 'border-white/10 text-white group-hover:border-white/30'}`}>
        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
      </div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="pb-6 text-zinc-500 font-light leading-relaxed pr-8">
            {answer}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-zinc-950 border-t border-white/5">
      <div className="max-w-[800px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-medium text-white mb-4">Häufige Fragen</h2>
          <p className="text-zinc-400">Alles zur Zusammenarbeit und Prozessoptimierung.</p>
        </motion.div>

        <div className="glass-panel rounded-3xl p-8 md:p-12">
          {questions.map((q, i) => (
            <FAQItem 
              key={i} 
              {...q} 
              isOpen={openIndex === i} 
              toggle={() => setOpenIndex(openIndex === i ? null : i)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};