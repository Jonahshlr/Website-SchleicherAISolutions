import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

type LegalType = 'impressum' | 'datenschutz' | 'agb';

interface LegalProps {
  type: LegalType;
  onBack: () => void;
}

export const Legal: React.FC<LegalProps> = ({ type, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  const content = {
    impressum: (
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-white mb-8">Impressum</h1>
        
        <section>
          <h2 className="text-xl font-semibold text-white mb-2">Angaben gemäß § 5 TMG</h2>
          <p className="text-zinc-400">
            <strong>SchleicherAiSolutions</strong><br />
            Inhaber: Luca Schleicher<br />
            Dorfstraße 19<br />
            36124 Eichenzell<br />
            Deutschland
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">Kontakt</h2>
          <p className="text-zinc-400">
            Telefon: +49 176 55564345<br />
            E-Mail: info@SchleicherAiSolutions.de
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">Umsatzsteuer-ID</h2>
          <p className="text-zinc-400">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            <span className="italic text-zinc-500">Wird nachgetragen</span>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">Redaktionell verantwortlich</h2>
          <p className="text-zinc-400">
            Luca Schleicher<br />
            Johannesstraße 9<br />
            36145 Hofbieber
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">EU-Streitschlichtung</h2>
          <p className="text-zinc-400">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-brand-400 hover:underline ml-1">https://ec.europa.eu/consumers/odr/</a>.<br />
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>
      </div>
    ),
    datenschutz: (
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-white mb-8">Datenschutzerklärung</h1>
        
        <section>
          <h2 className="text-xl font-semibold text-white mb-2">1. Datenschutz auf einen Blick</h2>
          <h3 className="text-lg text-white mt-4 mb-2">Allgemeine Hinweise</h3>
          <p className="text-zinc-400">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>
          <h3 className="text-lg text-white mt-4 mb-2">Datenerfassung auf dieser Website</h3>
          <p className="text-zinc-400">
            <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">2. Hosting</h2>
          <p className="text-zinc-400">
            Wir hosten die Inhalte unserer Website bei einem externen Anbieter (Hoster). Personenbezogene Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Die Verwendung erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">3. KI-Dienstleistungen & Auftragsverarbeitung</h2>
          <p className="text-zinc-400 mb-4">
            Im Rahmen unserer Dienstleistung setzen wir Technologien der Künstlichen Intelligenz (z.B. OpenAI, Anthropic, Google Gemini) ein.
          </p>
          <h3 className="text-lg text-white mt-4 mb-2">Datenübermittlung in Drittstaaten (USA)</h3>
          <p className="text-zinc-400">
            Wir weisen darauf hin, dass bei der Nutzung von US-basierten KI-Anbietern Daten in die USA übermittelt werden können. Die USA werden vom EuGH teilweise als Land mit unzureichendem Datenschutzniveau bewertet. Wir setzen bei der Auswahl unserer Subunternehmer auf Anbieter, die nach dem <strong>EU-US Data Privacy Framework</strong> zertifiziert sind oder mit denen <strong>Standardvertragsklauseln (SCC)</strong> der EU-Kommission abgeschlossen wurden, um ein angemessenes Datenschutzniveau zu gewährleisten.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">4. Ihre Rechte als Betroffener</h2>
          <p className="text-zinc-400">
            Sie haben jederzeit das Recht:
          </p>
          <ul className="list-disc list-inside text-zinc-400 ml-4 mt-2 space-y-1">
            <li>Unentgeltlich <strong>Auskunft</strong> über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten.</li>
            <li>Die <strong>Berichtigung</strong> oder <strong>Löschung</strong> dieser Daten zu verlangen.</li>
            <li>Die <strong>Einschränkung der Verarbeitung</strong> Ihrer personenbezogenen Daten zu verlangen.</li>
            <li>Gegen die Verarbeitung Ihrer Daten <strong>Widerspruch</strong> einzulegen.</li>
            <li>Auf <strong>Datenübertragbarkeit</strong>.</li>
          </ul>
          <p className="text-zinc-400 mt-4">
            Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">5. Datenerfassung auf dieser Website</h2>
          <h3 className="text-lg text-white mt-4 mb-2">Kontaktformular / E-Mail Kontakt</h3>
          <p className="text-zinc-400">
            Wenn Sie uns per E-Mail Anfragen zukommen lassen, werden Ihre Angaben inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
          </p>
        </section>
      </div>
    ),
    agb: (
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-white mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>
        
        <section>
          <h2 className="text-xl font-semibold text-white mb-2">1. Geltungsbereich</h2>
          <p className="text-zinc-400">
            Für alle Geschäftsbeziehungen zwischen <strong>SchleicherAiSolutions</strong> (Inh. Luca Schleicher) (nachfolgend "Anbieter") und dem Kunden (nachfolgend "Auftraggeber") gelten ausschließlich diese Allgemeinen Geschäftsbedingungen in ihrer zum Zeitpunkt der Beauftragung gültigen Fassung. Abweichende Bedingungen des Auftraggebers werden nicht anerkannt, es sei denn, der Anbieter stimmt ihrer Geltung ausdrücklich schriftlich zu.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">2. Vertragsgegenstand & Leistungsumfang</h2>
          <p className="text-zinc-400">
            Gegenstand des Vertrages ist die Beratung, Konzeption und Implementierung von Automatisierungs- und KI-Lösungen. Soweit nicht ausdrücklich anders vereinbart (z.B. als Werkvertrag mit Abnahmeprotokoll), handelt es sich um einen <strong>Dienstvertrag</strong> gemäß § 611 BGB. Der Anbieter schuldet die fachgerechte Erbringung der Dienstleistung, nicht einen spezifischen wirtschaftlichen Erfolg.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">3. Besonderheiten bei KI-Dienstleistungen</h2>
          <p className="text-zinc-400">
            Der Kunde erkennt an, dass Software, die auf generativer KI basiert (z.B. LLMs), stochastischer Natur ist.
            <br /><br />
            <strong>3.1 Fehleranfälligkeit (Halluzinationen):</strong> Der Anbieter erstellt die Automatisierungen nach aktuellem Stand der Technik. Dennoch kann nicht ausgeschlossen werden, dass KI-Modelle in seltenen Fällen falsche oder unangemessene Inhalte generieren.
            <br /><br />
            <strong>3.2 Rechtliche Prüfung:</strong> Der Auftraggeber ist allein dafür verantwortlich, die von der KI generierten Inhalte (Texte, Bilder, Code) vor der geschäftlichen Nutzung auf ihre rechtliche Zulässigkeit (insb. Urheber-, Wettbewerbs- und Datenschutzrecht) zu prüfen.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">4. Nutzungsrechte & Geistiges Eigentum</h2>
          <p className="text-zinc-400">
            <strong>4.1 Arbeitsergebnisse:</strong> Mit vollständiger Bezahlung erhält der Auftraggeber ein einfaches, nicht ausschließliches, zeitlich unbeschränktes Nutzungsrecht an den für ihn individuell erstellten Automatisierungs-Workflows.
            <br /><br />
            <strong>4.2 Vorbehalt:</strong> Der Anbieter behält sich das Recht vor, allgemeine Bestandteile, Skripte, Methoden und Know-how, die im Rahmen des Projekts entwickelt wurden, auch für andere Kunden zu nutzen, sofern dabei keine vertraulichen Daten des Auftraggebers verwendet werden.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">5. Geheimhaltung</h2>
          <p className="text-zinc-400">
            Beide Parteien verpflichten sich, alle im Rahmen der Zusammenarbeit bekannt gewordenen Geschäftsgeheimnisse der jeweils anderen Partei zeitlich unbegrenzt vertraulich zu behandeln. Dies gilt insbesondere für Kundendaten und interne Prozessabläufe, die dem Anbieter zur Automatisierung offengelegt werden.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">6. Haftung</h2>
          <p className="text-zinc-400">
            Der Anbieter haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit. Bei leichter Fahrlässigkeit haftet der Anbieter nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten). Die Haftung ist in diesem Fall auf den vertragstypischen, vorhersehbaren Schaden begrenzt. Für mittelbare Schäden, insbesondere entgangenen Gewinn oder Datenverlust, wird keine Haftung übernommen, soweit gesetzlich zulässig.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">7. Schlussbestimmungen</h2>
          <p className="text-zinc-400">
            Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist der Sitz des Anbieters (sofern der Kunde Kaufmann ist). Sollte eine Bestimmung dieser AGB unwirksam sein, bleibt der Vertrag im Übrigen wirksam.
          </p>
        </section>
      </div>
    )
  };

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-zinc-400 hover:text-white mb-12 transition-colors"
        >
          <div className="p-2 rounded-full border border-white/10 group-hover:border-white/30 bg-white/5 transition-all">
            <ArrowLeft className="w-4 h-4" />
          </div>
          Zurück zur Übersicht
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          {content[type]}
        </motion.div>
      </div>
    </div>
  );
};