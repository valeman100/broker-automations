export default function Footer() {
  return (
    <footer className="bg-[#080d19] border-t border-white/5 py-10 px-4">
      <div className="max-w-[800px] mx-auto text-center flex flex-col items-center gap-4">
        <p className="text-[#e2e0dc] font-semibold text-base">Valerio Mannucci</p>

        <div className="flex items-center gap-6 flex-wrap justify-center">
          <a
            href="mailto:valerio@valeriomannucci.com"
            className="text-[#94a3b8] hover:text-[#f59e0b] text-sm transition-colors"
          >
            valerio@valeriomannucci.com
          </a>

          <a
            href="https://www.linkedin.com/in/valerio-mannucci/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[#94a3b8] hover:text-[#f59e0b] transition-colors"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>

        <p className="text-white/30 text-xs">
          &copy; {new Date().getFullYear()} Valerio Mannucci &mdash; Tutti i diritti
          riservati
        </p>
      </div>
    </footer>
  );
}
