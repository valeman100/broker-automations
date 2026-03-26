"use client";

const CALENDAR_LINK = "https://calendar.app.google/KjVPwqAM93d1CuiD7";

export default function HeroSection() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("contatti")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-[90vh] flex items-center justify-center bg-white px-4 py-24"
    >
      <div className="max-w-[720px] mx-auto text-center">
        <div className="animate-fade-in-up">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#2563eb] mb-6">
            Automazioni per Broker Assicurativi
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] leading-tight tracking-tight mb-6">
            Elimina le ore perse in attività manuali nella tua agenzia
          </h1>
          <p className="text-lg md:text-xl text-[#64748b] leading-relaxed mb-10 max-w-[600px] mx-auto">
            Automazioni su misura per broker assicurativi. Scadenze, rinnovi,
            data entry, documenti IVASS — costruisco sistemi che lavorano al
            posto del tuo team.
          </p>
        </div>

        <div className="animate-fade-in-up animation-delay-200 flex flex-col items-center gap-4">
          <a
            href={CALENDAR_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-base px-8 py-4 rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            Prenota una chiamata conoscitiva
          </a>
          <p className="text-sm text-[#64748b]">20 minuti, nessun impegno</p>
          <button
            onClick={scrollToContact}
            className="text-sm text-[#2563eb] hover:text-[#1d4ed8] hover:underline transition-colors duration-200 cursor-pointer bg-transparent border-none p-0"
          >
            Oppure scrivimi direttamente ↓
          </button>
        </div>
      </div>
    </section>
  );
}
