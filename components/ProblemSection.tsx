"use client";

import { useInView } from "@/hooks/useInView";

const problems = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14,2 14,8 20,8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10,9 9,9 8,9"/>
      </svg>
    ),
    text: "Il tuo team passa ore a copiare dati dai PDF delle compagnie nel gestionale.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    text: "Le scadenze si gestiscono con Excel, e qualche rinnovo sfugge sempre.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    text: "Ogni documento IVASS viene compilato a mano, ogni volta da zero.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12,6 12,12 16,14"/>
      </svg>
    ),
    text: "Il lavoro operativo mangia il tempo che dovrebbe andare ai clienti.",
  },
];

export default function ProblemSection() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="problema" className="bg-[#faf8f5] py-20 px-4">
      <div
        ref={ref}
        className={`max-w-[680px] mx-auto transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <span className="text-xs font-semibold uppercase tracking-widest text-[#f59e0b] block mb-3">
          Il Problema
        </span>
        <h2 className="font-display text-2xl md:text-3xl text-[#1a1a2e] mb-4">
          Conosci questa situazione?
        </h2>
        <p className="text-[#94a3b8] mb-10 text-sm">
          Hai appena visto quanto ti costa. Ecco da dove vengono quei numeri.
        </p>

        <div className="space-y-6">
          {problems.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 transition-all duration-500"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-white border-l-2 border-[#f59e0b] flex items-center justify-center text-[#94a3b8]">
                {item.icon}
              </div>
              <p className="text-base md:text-lg text-[#1a1a2e] leading-relaxed pt-1">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
