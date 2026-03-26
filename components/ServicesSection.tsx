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
      "Sistema automatico di promemoria e follow-up a pi\u00f9 touchpoint. Il ciclo di rinnovo viene gestito senza intervento manuale.",
    result:
      "Recupero del 10\u201315% delle provvigioni che andavano perse per dimenticanza.",
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
    result: "Riduzione dell\u201980% del tempo di inserimento dati per addetto.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Documentazione IVASS Automatica",
    description:
      "Allegati 3 e 4 pre-compilati con i dati gi\u00e0 presenti nel sistema. Generazione in un clic, senza errori.",
    result: "Da 20\u201330 minuti per documento a meno di 1 minuto.",
  },
];

export default function ServicesSection() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="soluzioni" className="bg-[#0f172a] py-20 px-4">
      <div
        ref={ref}
        className={`max-w-[1100px] mx-auto transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#f59e0b] block mb-3">
            Soluzioni
          </span>
          <h2 className="font-display text-2xl md:text-3xl text-[#faf8f5]">
            Tre aree in cui ho gi&agrave; ottenuto risultati
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="glass-dark rounded-xl p-8 flex flex-col gap-4 hover:border-[#f59e0b]/30 transition-all duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-[#f59e0b]/15 flex items-center justify-center text-[#f59e0b]">
                {service.icon}
              </div>
              <h3 className="font-display text-lg text-[#faf8f5]">
                {service.title}
              </h3>
              <p className="text-[15px] text-[#94a3b8] leading-relaxed flex-1">
                {service.description}
              </p>
              <div className="bg-[#10b981]/10 border border-[#10b981]/20 rounded-lg px-4 py-3">
                <p className="text-sm font-medium text-[#10b981]">
                  &uarr; {service.result}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[#94a3b8] text-sm">
          Ogni sistema &egrave; costruito su misura per l&apos;operativit&agrave; della tua
          agenzia.{" "}
          <span className="font-medium text-[#e2e0dc]">
            Nessun software generico, nessuna licenza.
          </span>
        </p>
      </div>
    </section>
  );
}
