"use client";

import { useInView } from "@/hooks/useInView";

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12,6 12,12 16,14"/>
      </svg>
    ),
    title: "Gestione Scadenze e Rinnovi",
    description:
      "Sistema automatico di promemoria e follow-up a più touchpoint. Il ciclo di rinnovo viene gestito senza intervento manuale.",
    result:
      "Recupero del 10–15% delle provvigioni che andavano perse per dimenticanza.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14,2 14,8 20,8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    title: "Estrazione Dati da Documenti",
    description:
      "I PDF delle compagnie vengono letti automaticamente. Premi, clausole, scadenze e dati cliente finiscono nel gestionale senza data entry.",
    result: "Riduzione dell'80% del tempo di inserimento dati per addetto.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Documentazione IVASS Automatica",
    description:
      "Allegati 3 e 4 pre-compilati con i dati già presenti nel sistema. Generazione in un clic, senza errori.",
    result: "Da 20–30 minuti per documento a meno di 1 minuto.",
  },
];

export default function ServicesSection() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="soluzioni" className="bg-white py-20 px-4">
      <div
        ref={ref}
        className={`max-w-[1100px] mx-auto transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#2563eb] block mb-3">
            Soluzioni
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1a1a2e]">
            Tre aree in cui ho già ottenuto risultati
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white border border-[#e2e8f0] rounded-xl p-8 flex flex-col gap-4 hover:shadow-md transition-shadow duration-200"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-[#eff6ff] flex items-center justify-center text-[#2563eb]">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#1a1a2e]">
                {service.title}
              </h3>
              <p className="text-[15px] text-[#64748b] leading-relaxed flex-1">
                {service.description}
              </p>
              <div className="bg-[#f0f9f4] border border-[#bbf7d0] rounded-lg px-4 py-3">
                <p className="text-sm font-medium text-[#059669]">
                  ↗ {service.result}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[#64748b] text-sm">
          Ogni sistema è costruito su misura per l&apos;operatività della tua
          agenzia.{" "}
          <span className="font-medium text-[#1a1a2e]">
            Nessun software generico, nessuna licenza.
          </span>
        </p>
      </div>
    </section>
  );
}
