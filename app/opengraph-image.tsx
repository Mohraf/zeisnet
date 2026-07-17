import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "Zeisnet — IT Services & Technology Solutions in Kigali, Rwanda";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0a1122",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo row */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#2554eb",
              borderRadius: 18,
              fontSize: 48,
              fontWeight: 700,
            }}
          >
            Z
          </div>
          <div style={{ display: "flex", fontSize: 44, fontWeight: 700 }}>
            Zeisnet<span style={{ color: "#22d3ee" }}>.</span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 68, fontWeight: 700, lineHeight: 1.1, letterSpacing: -2 }}>
            Your technology partner for a smarter, more secure business
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#94a3b8" }}>
            IT Consulting · Cloud · Cybersecurity · Training
          </div>
        </div>

        {/* Footer strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            paddingTop: 28,
            fontSize: 26,
            color: "#67e8f9",
          }}
        >
          <div style={{ display: "flex" }}>zeisnet.com</div>
          <div style={{ display: "flex", color: "#94a3b8" }}>Kigali, Rwanda · Serving Africa &amp; beyond</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
