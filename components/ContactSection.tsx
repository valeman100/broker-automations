"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";

const CALENDAR_LINK = "https://calendar.app.google/KjVPwqAM93d1CuiD7";
const WHATSAPP_LINK = "https://wa.me/393294522188";

export default function ContactSection() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-[#e2e0dc] placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#f59e0b]/50 focus:border-transparent transition text-base";

  return (
    <section id="contatti" className="bg-[#0f172a] py-20 px-4">
      <div
        ref={ref}
        className={`max-w-[1000px] mx-auto transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left col */}
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-[#faf8f5] mb-4">
              Parliamone
            </h2>
            <p className="text-[#94a3b8] leading-relaxed mb-8">
              20 minuti per capire se posso aiutarti. Nessun impegno, nessun
              preventivo a sorpresa. Solo una conversazione per capire come
              lavori e dove c&apos;&egrave; margine.
            </p>
            <a
              href={CALENDAR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#f59e0b] hover:bg-[#d97706] text-[#0f172a] font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg mb-4"
            >
              Prenota una chiamata
            </a>
            <p className="text-sm text-[#94a3b8]">
              Preferisci WhatsApp?{" "}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f59e0b] hover:text-[#d97706] hover:underline transition-colors"
              >
                Scrivimi qui
              </a>
              .
            </p>
          </div>

          {/* Right col — form */}
          <div>
            {status === "success" ? (
              <div className="glass-dark border border-[#10b981]/20 rounded-xl p-8 text-center">
                <svg
                  className="w-12 h-12 text-[#10b981] mx-auto mb-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <h3 className="font-semibold text-[#faf8f5] text-lg mb-2">
                  Grazie!
                </h3>
                <p className="text-[#94a3b8] text-sm">
                  Ti rispondero entro 24 ore.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Honeypot */}
                <input
                  type="text"
                  name="_gotcha"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div>
                  <input
                    type="text"
                    required
                    placeholder="Il tuo nome"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <input
                    type="email"
                    required
                    placeholder="La tua email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className={inputClasses}
                  />
                </div>

                <div>
                  <textarea
                    rows={4}
                    placeholder="Raccontami brevemente la tua situazione (opzionale)"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-[#ef4444]">
                    Qualcosa &egrave; andato storto. Scrivi direttamente a{" "}
                    <a
                      href="mailto:valerio@valeriomannucci.com"
                      className="underline text-[#f59e0b]"
                    >
                      valerio@valeriomannucci.com
                    </a>
                    .
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="bg-[#f59e0b] hover:bg-[#d97706] disabled:opacity-60 text-[#0f172a] font-semibold py-4 px-6 rounded-lg transition-colors duration-200 cursor-pointer"
                >
                  {status === "sending"
                    ? "Invio in corso..."
                    : "Inviami un messaggio"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
