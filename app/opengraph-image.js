import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Vishwa Pernapati - Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "linear-gradient(135deg, #1a1030 0%, #0a0a0a 60%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "30px",
            color: "#c084fc",
            fontWeight: 700,
          }}
        >
          Vishwa Pernapati<span style={{ color: "#fff" }}>.</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "82px",
              fontWeight: 800,
              color: "#f4f4f6",
              lineHeight: 1.05,
              letterSpacing: "-2px",
            }}
          >
            Building useful digital work
          </div>
          <div
            style={{
              fontSize: "82px",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-2px",
              background: "linear-gradient(90deg,#c084fc,#ff8a5c)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            with care.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "30px",
            color: "#9a9ab0",
          }}
        >
          <span
            style={{
              padding: "8px 22px",
              borderRadius: "999px",
              border: "1px solid #ffffff22",
              color: "#fff",
            }}
          >
            Portfolio
          </span>
          <span style={{ color: "#34d399" }}>● Available for work</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
