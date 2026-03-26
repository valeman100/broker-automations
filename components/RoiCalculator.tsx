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
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium text-[#64748b]">{label}</label>
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
            className="w-16 text-center text-sm font-semibold text-[#1a1a2e] border border-[#e2e8f0] rounded-md py-1 px-2 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
          />
          {suffix && (
            <span className="text-sm text-[#64748b]">{suffix}</span>
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
      />
      <div className="flex justify-between text-xs text-[#94a3b8]">
        <span>{min}{suffix}</span>
        <span>{max}{suffix}</span>
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
    const duration = 400;
    const startTime = performance.now();

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    function step(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
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

export default function RoiCalculator() {
  const [hours, setHours] = useState(10);
  const [people, setPeople] = useState(2);
  const [cost, setCost] = useState(25);
  const { ref, inView } = useInView({ threshold: 0.1 });

  const annualCost = hours * people * cost * 48;
  const annualSaving = Math.round(annualCost * 0.75);

  return (
    <section id="calcolatore" className="bg-[#f8f9fa] py-20 px-4">
      <div
        ref={ref}
        className={`max-w-[1000px] mx-auto transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#2563eb] block mb-3">
            Calcolatore
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1a1a2e] mb-3">
            Quanto ti costa il lavoro manuale ogni anno?
          </h2>
          <p className="text-[#64748b]">
            Inserisci i dati della tua agenzia e scopri il margine di risparmio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Inputs */}
          <div className="bg-white border border-[#e2e8f0] rounded-xl p-8 flex flex-col gap-8">
            <SliderInput
              label="Ore/settimana per attività ripetitive"
              value={hours}
              min={1}
              max={40}
              onChange={setHours}
              suffix="h"
            />
            <SliderInput
              label="Persone che svolgono queste attività"
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
              suffix="€"
            />
          </div>

          {/* Output */}
          <div className="bg-white rounded-2xl p-10 shadow-[0_4px_24px_rgba(0,0,0,0.08)] flex flex-col gap-6">
            <div className="text-center">
              <p className="text-sm font-medium text-[#64748b] mb-2 uppercase tracking-wide">
                Costo annuale del lavoro manuale
              </p>
              <CountUp
                value={annualCost}
                className="text-5xl font-bold text-[#dc2626] tabular-nums"
              />
              <p className="text-sm text-[#94a3b8] mt-1">all&apos;anno</p>
            </div>

            <div className="border-t border-[#f1f5f9] pt-6 text-center">
              <p className="text-sm font-medium text-[#64748b] mb-2 uppercase tracking-wide">
                Risparmio stimato con automazione
              </p>
              <CountUp
                value={annualSaving}
                className="text-4xl font-bold text-[#059669] tabular-nums"
              />
              <p className="text-sm text-[#94a3b8] mt-1">all&apos;anno (75% del costo)</p>
            </div>

            <div className="bg-[#eff6ff] rounded-xl px-5 py-4 text-center">
              <p className="text-sm font-semibold text-[#2563eb]">
                ROI dell&apos;investimento in meno di 6 mesi
              </p>
            </div>

            <a
              href={CALENDAR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 shadow-sm"
            >
              Vediamo insieme dove risparmiare
            </a>
          </div>
        </div>

        <p className="text-center text-xs text-[#94a3b8] mt-6 max-w-[600px] mx-auto leading-relaxed">
          Stime basate sulla nostra esperienza con broker assicurativi italiani.
          Il risparmio effettivo dipende dalla complessità dei processi
          specifici.
        </p>
      </div>
    </section>
  );
}
