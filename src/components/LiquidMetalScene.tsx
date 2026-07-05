"use client";

import React from "react";

const CHROME =
  "linear-gradient(135deg, #c8ccd8 0%, #f2f2fc 16%, #aaaab8 36%, #e0e0ee 54%, #888898 72%, #c2c2d2 88%, #dcdce8 100%)";

const BLOBS = [
  { id: "bA", w: 230, h: 170, top: "5%",  right: "6%",  morph: "morphA", floatDur: "7s",   floatDelay: "0s",   opacity: 0.92 },
  { id: "bB", w: 135, h: 108, top: "22%", right: "30%", morph: "morphB", floatDur: "5.5s", floatDelay: "1.2s", opacity: 0.80 },
  { id: "bC", w: 180, h: 135, top: "50%", right: "4%",  morph: "morphC", floatDur: "8s",   floatDelay: "0.8s", opacity: 0.82 },
  { id: "bD", w: 98,  h: 82,  top: "11%", right: "52%", morph: "morphA", floatDur: "6s",   floatDelay: "2s",   opacity: 0.68 },
  { id: "bE", w: 160, h: 118, top: "69%", right: "21%", morph: "morphB", floatDur: "9s",   floatDelay: "0.5s", opacity: 0.70 },
];

function ChainLinks({ x, y, r }: { x: number; y: number; r: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <ellipse cx={-r * 0.72} cy={0} rx={r * 0.72} ry={r * 0.42}
        fill="none" stroke="url(#cg)" strokeWidth={r * 0.2} />
      <ellipse cx={r * 0.72} cy={0} rx={r * 0.72} ry={r * 0.42}
        fill="none" stroke="url(#cg)" strokeWidth={r * 0.2} />
    </g>
  );
}

function Chip({ x, y, s }: { x: number; y: number; s: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x={-s / 2} y={-s / 2} width={s} height={s} rx={s * 0.1} fill="url(#cg)" />
      <rect x={-s * 0.32} y={-s * 0.32} width={s * 0.64} height={s * 0.64} rx={s * 0.06}
        fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth={s * 0.04} />
      <line x1={-s * 0.14} y1={-s * 0.32} x2={-s * 0.14} y2={s * 0.32} stroke="rgba(255,255,255,0.18)" strokeWidth={s * 0.03} />
      <line x1={s * 0.14}  y1={-s * 0.32} x2={s * 0.14}  y2={s * 0.32} stroke="rgba(255,255,255,0.18)" strokeWidth={s * 0.03} />
      <line x1={-s * 0.32} y1={-s * 0.14} x2={s * 0.32} y2={-s * 0.14} stroke="rgba(255,255,255,0.18)" strokeWidth={s * 0.03} />
      <line x1={-s * 0.32} y1={s * 0.14}  x2={s * 0.32} y2={s * 0.14}  stroke="rgba(255,255,255,0.18)" strokeWidth={s * 0.03} />
      {([-0.3, 0, 0.3] as const).map((p, i) => (
        <React.Fragment key={i}>
          <rect x={s * p - s * 0.05} y={-s * 0.68} width={s * 0.1} height={s * 0.18} rx={s * 0.02} fill="url(#cg)" />
          <rect x={s * p - s * 0.05} y={s * 0.50}  width={s * 0.1} height={s * 0.18} rx={s * 0.02} fill="url(#cg)" />
        </React.Fragment>
      ))}
      <rect x={-s * 0.22} y={-s * 0.38} width={s * 0.14} height={s * 0.09} rx={2} fill="rgba(255,255,255,0.45)" />
    </g>
  );
}

function Hexagon({ x, y, r }: { x: number; y: number; r: number }) {
  const pts  = Array.from({ length: 6 }, (_, i) => { const a = (Math.PI / 3) * i - Math.PI / 6; return `${r * Math.cos(a)},${r * Math.sin(a)}`; }).join(" ");
  const ipts = Array.from({ length: 6 }, (_, i) => { const a = (Math.PI / 3) * i - Math.PI / 6; return `${r * 0.52 * Math.cos(a)},${r * 0.52 * Math.sin(a)}`; }).join(" ");
  return (
    <g transform={`translate(${x} ${y})`}>
      <polygon points={pts} fill="url(#cg)" />
      <polygon points={ipts} fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth={r * 0.06} />
      <circle r={r * 0.14} fill="rgba(255,255,255,0.55)" />
    </g>
  );
}

function CmdKey({ x, y, s }: { x: number; y: number; s: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x={-s / 2} y={-s / 2} width={s} height={s} rx={s * 0.18}
        fill="url(#cg)" stroke="rgba(255,255,255,0.22)" strokeWidth={s * 0.04} />
      <text x={0} y={s * 0.18} textAnchor="middle"
        fill="rgba(255,255,255,0.75)" fontSize={s * 0.52} fontWeight="bold" fontFamily="system-ui">
        ⌘
      </text>
    </g>
  );
}

function Orbital({ x, y, r }: { x: number; y: number; r: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <ellipse rx={r} ry={r * 0.38} fill="none" stroke="url(#cg)" strokeWidth={r * 0.08}
        strokeDasharray={`${r * 0.3} ${r * 0.15}`} />
      <ellipse rx={r * 0.55} ry={r * 0.88} fill="none" stroke="url(#cg)" strokeWidth={r * 0.06}
        strokeDasharray={`${r * 0.28} ${r * 0.14}`} />
      <circle r={r * 0.2} fill="url(#cg)" />
      <circle cx={r} cy={0} r={r * 0.12} fill="rgba(255,255,255,0.82)" />
    </g>
  );
}

export default function LiquidMetalScene() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {BLOBS.map(b => (
        <div
          key={b.id}
          className="absolute"
          style={{
            width: b.w,
            height: b.h,
            top: b.top,
            right: b.right,
            background: CHROME,
            boxShadow:
              "inset 0 3px 24px rgba(255,255,255,0.48), inset 0 -6px 24px rgba(50,50,70,0.38), 0 12px 44px rgba(0,0,0,0.22)",
            opacity: b.opacity,
            animation: `${b.morph} 10s ease-in-out infinite, floatMetal ${b.floatDur} ease-in-out ${b.floatDelay} infinite`,
          }}
        />
      ))}

      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.28))" }}
      >
        <defs>
          <linearGradient id="cg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#c0c0d0" />
            <stop offset="22%"  stopColor="#f0f0ff" />
            <stop offset="48%"  stopColor="#909098" />
            <stop offset="73%"  stopColor="#d0d0e0" />
            <stop offset="100%" stopColor="#a0a0b0" />
          </linearGradient>
        </defs>

        <g style={{ animation: "floatTech 6s ease-in-out 0.4s infinite" }}>
          <ChainLinks x={76} y={14} r={5} />
        </g>
        <g style={{ animation: "floatTech 8s ease-in-out 1.8s infinite" }}>
          <Chip x={89} y={52} s={8} />
        </g>
        <g style={{ animation: "floatTech 5.5s ease-in-out 0.9s infinite" }}>
          <Hexagon x={63} y={25} r={5} />
        </g>
        <g style={{ animation: "floatTech 7.5s ease-in-out 2.5s infinite" }}>
          <CmdKey x={40} y={73} s={6} />
        </g>
        <g style={{ animation: "floatTech 10s ease-in-out 1.2s infinite" }}>
          <Orbital x={73} y={77} r={8} />
        </g>
      </svg>
    </div>
  );
}
