"use client";

import { useRef, useState, useEffect } from "react";

export default function VideoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="video" className="bg-[#faf8f5] py-20 px-4">
      <div className="max-w-[800px] mx-auto text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#f59e0b] block mb-3">
          Guarda il sistema in azione
        </span>
        <h2 className="font-display text-2xl md:text-3xl text-[#1a1a2e] mb-3">
          Un sistema reale, costruito per un broker reale
        </h2>
        <p className="text-[#94a3b8] mb-8 max-w-[580px] mx-auto leading-relaxed">
          In 2 minuti vedrai un sistema di preventivazione automatica su 10+
          compagnie assicurative. Se ho costruito questo, posso costruire la
          soluzione giusta per la tua agenzia.
        </p>

        <div
          ref={containerRef}
          className="bg-[#0f172a] rounded-2xl p-3 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
        >
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            {shouldLoad ? (
              <iframe
                className="absolute inset-0 w-full h-full rounded-lg"
                src="https://www.youtube-nocookie.com/embed/I4njMkiwAX0"
                title="Sistema di preventivazione automatica per broker assicurativi"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-[#1e293b] rounded-lg">
                <div className="text-center text-[#94a3b8]">
                  <svg
                    className="w-16 h-16 mx-auto mb-2 text-[#f59e0b] opacity-60"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <p className="text-sm">Caricamento video...</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <p className="text-xs text-[#94a3b8] mt-4">
          Sistema attivo dal 2025. I dati mostrati sono reali.
        </p>
      </div>
    </section>
  );
}
