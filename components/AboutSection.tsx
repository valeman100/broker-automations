"use client";

import { useInView } from "@/hooks/useInView";

const credentials = [
  {
    label: "Laurea in Fisica",
    description: "Approccio rigoroso e quantitativo ai problemi operativi",
  },
  {
    label: "Sistema attivo su 10+ compagnie",
    description: "Esperienza concreta, non solo teoria",
  },
  {
    label: "Clienti in Italia e Svizzera",
    description: "Lavoro da remoto, con risultati misurabili",
  },
];

export default function AboutSection() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="chi-sono" className="bg-[#f5f0eb] py-20 px-4">
      <div
        ref={ref}
        className={`max-w-[900px] mx-auto transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="font-display text-2xl md:text-3xl text-[#1a1a2e] mb-8">
          Chi sono
        </h2>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="flex-shrink-0 hidden md:block">
            <div className="w-[120px] h-[120px] rounded-full bg-[#e8e4df] ring-2 ring-[#f59e0b]/30 ring-offset-2 ring-offset-[#f5f0eb] flex items-center justify-center text-[#94a3b8]">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
          </div>

          <div className="flex-1">
            <p className="text-base md:text-lg text-[#1a1a2e] leading-[1.7] mb-4">
              Mi chiamo Valerio. Ho una laurea in fisica, un passato da
              sviluppatore full-stack in una startup fintech, e oggi costruisco
              automazioni su misura per broker assicurativi. Lavoro da remoto —
              i miei clienti sono in Italia e Svizzera.
            </p>
            <p className="text-base md:text-lg text-[#94a3b8] leading-[1.7]">
              Il mio approccio: capire come lavori oggi, identificare dove perdi
              tempo, e costruire un sistema che risolve quel problema specifico.{" "}
              <span className="text-[#1a1a2e] font-medium">
                Nessun software generico. Nessuna licenza annuale. Un sistema
                tuo, che fa quello che ti serve.
              </span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          {credentials.map((item, i) => (
            <div
              key={i}
              className="bg-white border-t-2 border-[#f59e0b] rounded-xl p-5"
            >
              <p className="font-semibold text-[#1a1a2e] mb-1">{item.label}</p>
              <p className="text-sm text-[#94a3b8]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
