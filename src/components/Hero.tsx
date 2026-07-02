"use client";

import Image from "next/image";
import { siteConfig } from "@/data/portfolio";
import { useLang } from "@/context/LanguageContext";
import ParticleField from "@/components/ParticleField";

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const TelegramIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const STAGGER = [50, 160, 280, 380] as const;

function heroStyle(i: number): React.CSSProperties {
  return { animation: `heroUp 0.65s cubic-bezier(0.4,0,0.2,1) ${STAGGER[i]}ms both` };
}

const BONIS_GRADIENT: React.CSSProperties = {
  background: "linear-gradient(135deg, #60a5fa 0%, #818cf8 55%, #a78bfa 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

export default function Hero() {
  const { t } = useLang();

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-screen overflow-hidden bg-neutral-950"
    >
      {/* Particle network animation */}
      <ParticleField />

      {/* Subtle colour tint behind particles */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 15% 50%, rgba(59,130,246,0.12) 0%, transparent 70%), " +
            "radial-gradient(ellipse 55% 70% at 85% 45%, rgba(99,102,241,0.14) 0%, transparent 70%)",
        }}
      />

      {/* Edge vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 40%, rgba(10,10,10,0.75) 100%)" }}
      />

      {/* Two-column layout */}
      <div className="relative z-10 flex items-center min-h-screen max-w-6xl mx-auto px-8 md:px-12 lg:px-20 pt-24 pb-16 md:pt-0 md:pb-0 gap-6 lg:gap-12">

        {/* Left — text */}
        <div className="flex-1 flex flex-col justify-center min-w-0">

          <span
            className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-8 block"
            style={heroStyle(0)}
          >
            {t({ pt: "Portfólio Pessoal", en: "Personal Portfolio", es: "Portafolio Personal" })}
          </span>

          <h1
            id="hero-heading"
            className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.0] tracking-tight mb-8"
            style={heroStyle(1)}
          >
            <span className="text-white">Pedro</span><br />
            <span style={BONIS_GRADIENT}>&ldquo;Bonis&rdquo;</span>
          </h1>

          <div
            className="flex flex-col sm:flex-row items-start gap-3 mb-8"
            style={heroStyle(2)}
          >
            <a
              href={siteConfig.socials.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30"
            >
              <CalendarIcon />
              {t({ pt: "Marque uma reunião", en: "Schedule a meeting", es: "Agenda una reunión" })}
            </a>
            <a
              href={siteConfig.socials.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-neutral-700 text-neutral-300 text-sm font-semibold rounded-full hover:border-blue-400 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              <TelegramIcon />
              {t({ pt: "Me mande uma mensagem", en: "Send me a message", es: "Envíame un mensaje" })}
            </a>
          </div>

          <div
            className="flex flex-wrap items-center gap-3"
            style={heroStyle(3)}
          >
            <a href={siteConfig.socials.twitter} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center w-11 h-11 rounded-full border border-neutral-800 text-neutral-500 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:-translate-y-0.5"
              aria-label="Twitter"><TwitterIcon /></a>
            <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center w-11 h-11 rounded-full border border-neutral-800 text-neutral-500 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:-translate-y-0.5"
              aria-label="LinkedIn"><LinkedInIcon /></a>
            <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center w-11 h-11 rounded-full border border-neutral-800 text-neutral-500 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:-translate-y-0.5"
              aria-label="GitHub"><GitHubIcon /></a>
          </div>
        </div>

        {/* Right — portrait card */}
        {siteConfig.photo && (
          <div
            className="hidden md:flex self-stretch flex-shrink-0"
            style={{
              animation: `heroUp 0.7s cubic-bezier(0.4,0,0.2,1) 120ms both`,
              paddingTop: "80px",
              paddingBottom: "28px",
            }}
          >
            <div
              className="relative h-full"
              style={{ filter: "drop-shadow(0 0 72px rgba(99,102,241,0.5))" }}
            >
              {/* Outer decorative ring */}
              <div style={{
                position: "absolute", inset: "-8px",
                borderRadius: "26px",
                border: "1px solid rgba(99,102,241,0.25)",
                pointerEvents: "none",
              }} />

              {/* Photo card */}
              <div style={{
                width: "360px",
                height: "100%",
                borderRadius: "18px",
                overflow: "hidden",
                border: "2px solid rgba(99,102,241,0.55)",
                position: "relative",
                background: "#0f0f18",
              }}>
                <Image
                  src={siteConfig.photo}
                  alt="Pedro Bonis"
                  fill
                  priority
                  sizes="360px"
                  className="object-cover"
                  style={{ transform: "scale(1.35)", transformOrigin: "center 18%" }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
