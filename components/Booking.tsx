import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingDown, AlertCircle, ArrowRight } from 'lucide-react';

export const Booking: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="booking" className="py-32 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-900/10 blur-[100px] rounded-full -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-6 border border-brand-500/20">
              Kostenloses Erstgespräch
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 leading-tight">
              Wo verlieren Sie <br />
              <span className="text-brand-400">aktuell am meisten Geld?</span>
            </h2>
            <p className="text-zinc-400 text-lg font-light mb-8 leading-relaxed">
              Oft sind es nicht die großen Strategien, die scheitern, sondern die kleinen, täglichen Ineffizienzen, die sich summieren. Wir finden diese und schalten sie ab.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Versteckte Personalkosten durch manuelle Aufgaben",
                "Umsatzverlust durch langsame Reaktionszeiten",
                "Fehleranfälligkeit bei Datenübertragungen"
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="flex items-center gap-3 text-zinc-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>

            <motion.a 
              href="#contact" 
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold text-sm transition-colors duration-300 hover:bg-zinc-200"
            >
              Analyse anfragen <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.95, rotate: 1 }}
             whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
             className="relative"
          >
             {/* Abstract Analysis Visualization Card */}
             <div className="glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden bg-zinc-900/40 backdrop-blur-xl">
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-500/10 blur-[60px] rounded-full pointer-events-none"></div>
                
                <div className="mb-8 flex items-center justify-between border-b border-white/5 pb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white">Potenzial-Analyse</h3>
                    <p className="text-zinc-500 text-xs mt-1">Beispielhafte Auswertung</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center shadow-lg">
                    <TrendingDown className="w-5 h-5 text-brand-400" />
                  </div>
                </div>

                <div className="space-y-5">
                  {/* Item 1 */}
                  <div className="group p-4 rounded-xl bg-zinc-900/40 border border-white/5 hover:border-red-500/30 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-red-400" />
                        <span className="text-sm font-medium text-zinc-200">Manuelle Datenerfassung</span>
                      </div>
                      <span className="text-xs text-red-400 bg-red-500/10 px-2 py-1 rounded border border-red-500/20">Hoher Impact</span>
                    </div>
                    <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden mb-2">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                        className="bg-red-500/60 h-full rounded-full"
                      ></motion.div>
                    </div>
                    <p className="text-xs text-zinc-500">Verlust: ca. 12h / Woche pro Mitarbeiter</p>
                  </div>

                  {/* Item 2 */}
                  <div className="group p-4 rounded-xl bg-zinc-900/40 border border-white/5 hover:border-orange-500/30 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-2">
                         <AlertCircle className="w-4 h-4 text-orange-400" />
                        <span className="text-sm font-medium text-zinc-200">Reaktionszeit Kundenanfragen</span>
                      </div>
                      <span className="text-xs text-orange-400 bg-orange-500/10 px-2 py-1 rounded border border-orange-500/20">Medium Impact</span>
                    </div>
                    <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden mb-2">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "60%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                        className="bg-orange-500/60 h-full rounded-full"
                      ></motion.div>
                    </div>
                    <p className="text-xs text-zinc-500">Verzögerung: Ø 4.5 Stunden</p>
                  </div>

                  {/* Summary / Solution */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2 }}
                    className="pt-4 mt-2"
                  >
                     <div className="p-4 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-between hover:bg-brand-500/20 transition-colors cursor-default">
                        <div>
                           <span className="block text-brand-400 text-xs font-semibold uppercase tracking-wider mb-1">Identifiziertes Sparpotenzial</span>
                           <span className="text-2xl font-bold text-white">~ 42.000 € <span className="text-sm font-normal text-zinc-400">/ Jahr</span></span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-brand-400" />
                     </div>
                  </motion.div>
                </div>

             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};