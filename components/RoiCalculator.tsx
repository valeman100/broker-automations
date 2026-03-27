"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "@/hooks/useInView";

const CALENDAR_LINK = "https://calendar.app.google/KjVPwqAM93d1CuiD7";

function formatEuro(value: number): string {
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

function SliderInput({
  label,
  value,
  min,
  max,
  onChange,
  suffix,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
  suffix?: string;
}) {
  const percent = ((value - min) / (max - min)) * 100;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium text-[#94a3b8]">{label}</label>
        <div className="flex items-center gap-1">
          <input
            type="number"
            min={min}
            max={max}
            value={value}
            onChange={(e) => {
              const v = Math.min(max, Math.max(min, Number(e.target.value)));
              onChange(v);
            }}
            className="w-16 text-center text-sm font-bold text-[#f59e0b] bg-white/5 border border-white/10 rounded-md py-1.5 px-2 focus:outline-none focus:ring-2 focus:ring-[#f59e0b]/50 focus:border-transparent"
          />
          {suffix && (
            <span className="text-sm text-[#94a3b8]">{suffix}</span>
          )}
        </div>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
        style={{
          background: `linear-gradient(to right, #f59e0b ${percent}%, rgba(255,255,255,0.1) ${percent}%)`,
        }}
      />
      <div className="flex justify-between text-xs text-[#94a3b8]/60">
        <span>
          {min}
          {suffix}
        </span>
        <span>
          {max}
          {suffix}
        </span>
      </div>
    </div>
  );
}

function CountUp({ value, className }: { value: number; className?: string }) {
  const [displayed, setDisplayed] = useState(value);
  const prevRef = useRef(value);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const start = prevRef.current;
    const end = value;
    const duration = 700;
    const startTime = performance.now();

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    function step(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setDisplayed(Math.round(start + (end - start) * eased));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        prevRef.current = end;
      }
    }

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [value]);

  return <span className={className}>{formatEuro(displayed)}</span>;
}

const floatingEuros = [
  { size: "text-7xl", left: "5%", duration: "18s", delay: "0s" },
  { size: "text-5xl", left: "20%", duration: "22s", delay: "4s" },
  { size: "text-8xl", left: "75%", duration: "20s", delay: "2s" },
  { size: "text-6xl", left: "90%", duration: "16s", delay: "6s" },
  { size: "text-9xl", left: "50%", duration: "24s", delay: "8s" },
];

export default function RoiCalculator() {
  const [hours, setHours] = useState(10);
  const [people, setPeople] = useState(2);
  const [cost, setCost] = useState(25);
  const { ref, inView } = useInView({ threshold: 0.1 });

  const annualCost = hours * people * cost * 48;
  const annualSaving = Math.round(annualCost * 0.95);
  const savingsPercent = 95;

  return (
    <section
      id="calcolatore"
      className="bg-[#0f172a] bg-grid-pattern py-24 md:py-32 px-4 relative overflow-hidden"
    >
      {/* Floating euro decorations */}
      {floatingEuros.map((euro, i) => (
        <span
          key={i}
          className={`absolute ${euro.size} text-white pointer-events-none select-none`}
          style={{
            left: euro.left,
            bottom: "-10%",
            opacity: 0,
            animation: `floatUp ${euro.duration} linear ${euro.delay} infinite`,
          }}
        >
          &euro;
        </span>
      ))}

      <div
        ref={ref}
        className={`max-w-[1100px] mx-auto relative z-10 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#f59e0b] block mb-3">
            Calcolatore ROI
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[#faf8f5] mb-4">
            Quanto ti costa il lavoro manuale?
          </h2>
          <p className="text-[#94a3b8] max-w-[500px] mx-auto">
            Inserisci i dati della tua agenzia e scopri il margine di risparmio.
          </p>
        </div>

        {/* Calculator panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left — Inputs */}
          <div className="glass-dark-solid rounded-2xl p-8 md:p-10 flex flex-col gap-8">
            <h3 className="text-sm font-semibold text-[#e2e0dc] uppercase tracking-wider">
              I tuoi dati
            </h3>
            <SliderInput
              label="Ore/settimana per attivit&agrave; ripetitive"
              value={hours}
              min={1}
              max={40}
              onChange={setHours}
              suffix="h"
            />
            <SliderInput
              label="Persone che svolgono queste attivit&agrave;"
              value={people}
              min={1}
              max={10}
              onChange={setPeople}
              suffix=""
            />
            <SliderInput
              label="Costo orario aziendale medio"
              value={cost}
              min={15}
              max={50}
              onChange={setCost}
              suffix="&euro;"
            />
          </div>

          {/* Right — Results Dashboard */}
          <div className="glass-dark-solid rounded-2xl p-8 md:p-10 flex flex-col gap-6 border border-[#f59e0b]/10">
            {/* Annual cost */}
            <div className="text-center">
              <p className="text-sm font-medium text-[#94a3b8] mb-2 uppercase tracking-wide">
                Costo annuale del lavoro manuale
              </p>
              <CountUp
                value={annualCost}
                className="text-5xl md:text-6xl font-bold text-[#ef4444] tabular-nums animate-pulse-red"
              />
              <p className="text-xs text-[#94a3b8]/60 mt-2">all&apos;anno</p>
            </div>

            {/* Divider */}
            <div className="border-t border-white/5" />

            {/* Savings */}
            <div className="text-center">
              <p className="text-sm font-medium text-[#94a3b8] mb-2 uppercase tracking-wide">
                Risparmio stimato con automazione
              </p>
              <CountUp
                value={annualSaving}
                className="text-4xl md:text-5xl font-bold text-[#10b981] tabular-nums"
              />
              <p className="text-xs text-[#94a3b8]/60 mt-2">
                all&apos;anno
              </p>
            </div>

            {/* Savings bar */}
            <div>
              <div className="flex justify-between text-xs text-[#94a3b8] mb-2">
                <span>Costo recuperabile</span>
                <span className="text-[#10b981] font-semibold">{savingsPercent}%</span>
              </div>
              <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#10b981] to-[#34d399] rounded-full transition-all duration-700"
                  style={{ width: `${savingsPercent}%` }}
                />
              </div>
            </div>

            {/* ROI Timeline */}
            <div className="relative grid grid-cols-3 px-2 py-3">
              <div className="absolute top-[1.125rem] left-[16.67%] right-[16.67%] h-[1px] bg-[#f59e0b]/30" />
              {[
                { label: "Setup", month: "Mese 1" },
                { label: "Operativo", month: "Mese 2" },
                { label: "ROI completo", month: "Mese 6" },
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-3 h-3 rounded-full bg-[#f59e0b] mb-2 relative z-10" />
                  <p className="text-xs font-semibold text-[#e2e0dc]">{step.month}</p>
                  <p className="text-[10px] text-[#94a3b8]">{step.label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href={CALENDAR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-[#f59e0b] hover:bg-[#d97706] text-[#0f172a] font-semibold py-4 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl animate-glow-amber"
            >
              Vediamo insieme dove risparmiare
            </a>
          </div>
        </div>

        <p className="text-center text-xs text-[#94a3b8]/60 mt-8 max-w-[600px] mx-auto leading-relaxed">
          Stime basate sulla nostra esperienza con broker assicurativi italiani.
          Il risparmio effettivo dipende dalla complessit&agrave; dei processi
          specifici.
        </p>
      </div>
    </section>
  );
}
