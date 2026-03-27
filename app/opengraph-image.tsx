import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Automazione Processi per Broker Assicurativi — Valerio Mannucci";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#1a1a2e",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          position: "relative",
        }}
      >
        {/* Grid decorativa top-right */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "340px",
            height: "340px",
            display: "flex",
            flexWrap: "wrap",
            opacity: 0.07,
          }}
        >
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: "34px",
                height: "34px",
                border: "1px solid #f59e0b",
                display: "flex",
              }}
            />
          ))}
        </div>

        {/* Logo / badge in alto */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              background: "#f59e0b",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1a1a2e"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span
            style={{
              color: "#f5f0eb",
              fontSize: "18px",
              letterSpacing: "0.05em",
              opacity: 0.7,
            }}
          >
            broker-automazioni.valeriomannucci.com
          </span>
        </div>

        {/* Contenuto centrale */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* Pill tag */}
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              alignItems: "center",
              gap: "8px",
              background: "rgba(245,158,11,0.12)",
              border: "1px solid rgba(245,158,11,0.3)",
              borderRadius: "999px",
              padding: "6px 16px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#f59e0b",
                display: "flex",
              }}
            />
            <span style={{ color: "#f59e0b", fontSize: "15px" }}>
              Automazione su misura per broker assicurativi
            </span>
          </div>

          {/* Titolo principale */}
          <div
            style={{
              color: "#f5f0eb",
              fontSize: "58px",
              fontWeight: "700",
              lineHeight: 1.15,
              maxWidth: "820px",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            Smetti di perdere ore in{" "}
            <span style={{ color: "#f59e0b" }}>
              &nbsp;attività manuali.
            </span>
          </div>

          {/* Sottotitolo */}
          <div
            style={{
              color: "#94a3b8",
              fontSize: "22px",
              maxWidth: "720px",
              lineHeight: 1.5,
              display: "flex",
            }}
          >
            Scadenze, rinnovi, data entry, documenti IVASS — automatizzati,
            così puoi concentrarti sui clienti.
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <span
              style={{
                color: "#f5f0eb",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              Valerio Mannucci
            </span>
            <span style={{ color: "#94a3b8", fontSize: "15px" }}>
              Automation Specialist · Italia &amp; Svizzera
            </span>
          </div>

          <div
            style={{
              width: "80px",
              height: "4px",
              background: "#f59e0b",
              borderRadius: "2px",
              display: "flex",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
