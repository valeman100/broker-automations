"use client";

import { useState, useEffect, useRef } from "react";

const CALENDAR_LINK = "https://calendar.app.google/KjVPwqAM93d1CuiD7";

function formatEuro(value: number): string {
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

function MoneyCounter() {
  const ANNUAL_COST = 24000; // 10h * 2 people * 25EUR * 48 weeks
  const PER_SECOND = ANNUAL_COST / (365 * 24 * 3600);

  const [amount, setAmount] = useState(0);
  const rafRef = useRef<number | null>(null);
  const baseRef = useRef({ time: 0, amount: 0 });

  useEffect(() => {
    const now = new Date();
    const yearStart = new Date(now.getFullYear(), 0, 1);
    const elapsedSeconds = (now.getTime() - yearStart.getTime()) / 1000;
    const initialAmount = elapsedSeconds * PER_SECOND;

    baseRef.current = { time: performance.now(), amount: initialAmount };
    setAmount(Math.round(initialAmount));

    function tick() {
      const dt = (performance.now() - baseRef.current.time) / 1000;
      setAmount(Math.round(baseRef.current.amount + dt * PER_SECOND));
      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [PER_SECOND]);

  return (
    <div className="glass-dark-solid rounded-2xl p-8 md:p-10 text-center">
      <p className="text-sm font-medium text-[#94a3b8] uppercase tracking-widest mb-4">
        Euro persi quest&apos;anno in lavoro manuale
      </p>
      <p className="text-5xl md:text-6xl font-bold text-[#ef4444] tabular-nums animate-pulse-red mb-3">
        {formatEuro(amount)}
      </p>
      <p className="text-xs text-[#94a3b8] mb-6">
        basato su una media di 10h/settimana di attivit&agrave; ripetitive
      </p>
      <button
        onClick={() =>
          document.getElementById("calcolatore")?.scrollIntoView({ behavior: "smooth" })
        }
        className="text-[#f59e0b] hover:text-[#d97706] text-sm font-medium transition-colors cursor-pointer bg-transparent border-none"
      >
        Scopri il tuo numero reale &darr;
      </button>
    </div>
  );
}

export default function HeroSection() {
  const scrollToCalculator = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("calcolatore")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-[#0f172a] px-4 pt-24 pb-16 md:pb-24"
    >
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left — Copy */}
        <div className="animate-fade-in-up">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#f59e0b] mb-6">
            Automazioni per Broker Assicurativi
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] text-[#faf8f5] leading-[1.1] tracking-tight mb-6">
            Ogni ora che passa, la tua agenzia perde soldi
          </h1>
          <p className="text-lg md:text-xl text-[#94a3b8] leading-relaxed mb-10 max-w-[540px]">
            Scadenze, rinnovi, data entry, documenti IVASS — costruisco
            automazioni su misura che lavorano al posto del tuo team. Tu ti
            concentri sui clienti.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href="#calcolatore"
              onClick={scrollToCalculator}
              className="inline-block bg-[#f59e0b] hover:bg-[#d97706] text-[#0f172a] font-semibold text-base px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Calcola quanto stai perdendo
            </a>
            <div className="flex flex-col items-start gap-1">
              <a
                href={CALENDAR_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-[#e2e0dc]/20 hover:border-[#f59e0b]/40 text-[#e2e0dc] hover:text-[#f59e0b] font-medium text-base px-8 py-4 rounded-lg transition-all duration-200"
              >
                Prenota una chiamata
              </a>
              <p className="text-sm text-[#94a3b8]/60 pl-1">
                20 minuti, nessun impegno
              </p>
            </div>
          </div>
        </div>

        {/* Right — Money Counter */}
        <div className="animate-fade-in-up animation-delay-200">
          <MoneyCounter />
        </div>
      </div>
    </section>
  );
}
