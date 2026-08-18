"use client";

import { useState } from "react";
import Image from "next/image";
import { events } from "@/data/portfolio";
import { useLang } from "@/context/LanguageContext";
import Reveal from "@/components/Reveal";
import TypeOnView from "@/components/TypeOnView";

const YT_ID_RE = /^[a-zA-Z0-9_-]{11}$/;

function getYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?\s]+)/);
  if (!match) return null;
  return YT_ID_RE.test(match[1]) ? match[1] : null;
}

type Translated = { pt: string; en: string; es?: string };
type MediaItem = { type: "image" | "video"; url: string; alt?: Translated };

/* Arrows stay visually small, but the hit area is padded out to the 44px
   minimum so they are not two pinpoint targets on a phone. */
const CAROUSEL_BTN_SIZE = 44;

/* Visually hidden, still read aloud. Used for the live slide announcement,
   which has no visual counterpart — the "2/3" badge is its visual form. */
const SR_ONLY: React.CSSProperties = {
  position: "absolute",
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  border: 0,
};

function MediaCarousel({ media, eventId, eventTitle }: { media: MediaItem[]; eventId: number; eventTitle: string }) {
  const [idx, setIdx] = useState(0);
  const { t } = useLang();

  if (!media || media.length === 0) {
    return (
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg-alt)" }}>
        <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ opacity: 0.3 }} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    );
  }

  const current = media[idx];
  const ytId = current.type === "video" ? getYouTubeId(current.url) : null;
  const total = media.length;

  const prev = (e: React.MouseEvent) => { e.stopPropagation(); setIdx((i) => (i - 1 + total) % total); };
  const next = (e: React.MouseEvent) => { e.stopPropagation(); setIdx((i) => (i + 1) % total); };

  /* Falls back to position when the item carries no authored description.
     It states only what is verifiable — it deliberately does not pretend to
     describe the photo. */
  const positionLabel = (i: number) =>
    t({
      pt: `${eventTitle} — imagem ${i + 1} de ${total}`,
      en: `${eventTitle} — image ${i + 1} of ${total}`,
      es: `${eventTitle} — imagen ${i + 1} de ${total}`,
    });

  const altFor = (item: MediaItem, i: number) =>
    item.alt ? t(item.alt) : positionLabel(i);

  return (
    <div
      style={{ position: "absolute", inset: 0 }}
      role={total > 1 ? "group" : undefined}
      aria-label={total > 1 ? eventTitle : undefined}
    >
      {/* All images rendered in the DOM — CSS opacity controls visibility.
          This lets Next.js Image load every slide through /_next/image on mount,
          so navigation is instant after the first render. */}
      {media.map((item, i) => {
        if (item.type !== "image") return null;
        const isActive = i === idx && !ytId;
        return (
          <div
            key={i}
            /* Every slide stays mounted so navigation is instant, but only the
               visible one is exposed — otherwise a screen reader reads all
               slides of every card back to back. Safe here: no focusable
               content lives inside a slide. */
            aria-hidden={!isActive}
            style={{
              position: "absolute", inset: 0,
              opacity: isActive ? 1 : 0,
              transition: "opacity 0.2s",
              zIndex: 1,
            }}
          >
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
              {/* Images are local now, so Next serves WebP/AVIF sized to the
                  card instead of the full-resolution original. Lazy throughout:
                  this section sits well below the fold, so nothing here is the
                  LCP and none of it needs to load before the card is reached. */}
              <Image
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 400px"
                src={item.url}
                alt={altFor(item, i)}
                loading="lazy"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        );
      })}

      {/* YouTube video rendered only when it's the active slide */}
      {ytId && (
        <iframe
          key={`${eventId}-yt-${ytId}`}
          src={`https://www.youtube.com/embed/${ytId}?rel=0`}
          title={`Aftermovie: ${eventTitle}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0, zIndex: 2 }}
        />
      )}

      {total > 1 && (
        <>
          <button
            onClick={prev}
            aria-label={t({ pt: "Imagem anterior", en: "Previous image", es: "Imagen anterior" })}
            style={{
              position: "absolute", left: 2, top: "50%", transform: "translateY(-50%)",
              width: CAROUSEL_BTN_SIZE, height: CAROUSEL_BTN_SIZE, border: 0, background: "transparent",
              color: "#fefefe", fontSize: 30, fontWeight: 700, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              lineHeight: 1, textShadow: "0 1px 6px rgba(0,0,0,0.7)",
              transition: "all .2s", zIndex: 3,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-50%) translateX(-3px) scale(1.15)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(-50%)"; }}
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label={t({ pt: "Próxima imagem", en: "Next image", es: "Imagen siguiente" })}
            style={{
              position: "absolute", right: 2, top: "50%", transform: "translateY(-50%)",
              width: CAROUSEL_BTN_SIZE, height: CAROUSEL_BTN_SIZE, border: 0, background: "transparent",
              color: "#fefefe", fontSize: 30, fontWeight: 700, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              lineHeight: 1, textShadow: "0 1px 6px rgba(0,0,0,0.7)",
              transition: "all .2s", zIndex: 3,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-50%) translateX(3px) scale(1.15)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(-50%)"; }}
          >
            ›
          </button>
          {/* "2/3" reads as noise out of context, so the badge is visual only
              and the live region carries the full phrase instead. */}
          <span
            aria-hidden="true"
            style={{
              position: "absolute", right: 8, bottom: 8, zIndex: 3,
              background: "var(--nav-bg)", border: "2px solid var(--ink)",
              fontSize: 10, fontWeight: 700, padding: "2px 8px",
              color: "var(--ink)",
            }}
          >
            {idx + 1}/{total}
          </span>

          {/* Announces the change without moving focus, so the arrows produce a
              perceivable result instead of silently swapping hidden images. */}
          <span aria-live="polite" aria-atomic="true" style={SR_ONLY}>
            {altFor(media[idx], idx)}
          </span>
        </>
      )}
    </div>
  );
}

type EventEntry = (typeof events)[number];

function EventCard({ event, featured }: { event: EventEntry; featured: boolean }) {
  const { t } = useLang();

  return (
    <article className={`event-card${featured ? " event-card--featured" : ""}`}>
      <div className="event-card__media">
        <MediaCarousel media={event.media} eventId={event.id} eventTitle={t(event.title)} />
      </div>

      <div className="event-card__body">
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {event.types.map((type, ti) => (
            <span key={ti} className="event-chip">{t(type)}</span>
          ))}
        </div>

        <TypeOnView
          as="h3"
          className="display-heading"
          text={t(event.title)}
          style={{
            fontSize: featured ? 24 : 17,
            margin: 0,
            letterSpacing: "-0.01em",
            color: "var(--ink)",
          }}
        />

        <p style={{
          fontSize: featured ? 13 : 12, fontWeight: 500, lineHeight: 1.65, textTransform: "uppercase",
          color: "var(--muted)", margin: 0, flex: featured ? "none" : 1,
        }}>
          {t(event.description)}
        </p>

        <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: "var(--muted)" }}>
          {event.location} · {event.date}
        </div>
      </div>
    </article>
  );
}

export default function Events() {
  const { t } = useLang();

  return (
    <section id="eventos" style={{ borderBottom: "2px solid var(--ink)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "100px 32px" }}>
        <Reveal>
          <div style={{
            fontSize: 12, fontWeight: 700, letterSpacing: "0.2em",
            textTransform: "uppercase", marginBottom: 28, color: "var(--muted)",
          }}>
            (04) {t({ pt: "Eventos", en: "Events", es: "Eventos" })}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <TypeOnView
            as="h2"
            id="events-heading"
            className="display-heading"
            text={t({ pt: "Onde já estive", en: "Events I've attended", es: "Eventos en los que participé" })}
            style={{
              fontSize: "clamp(34px, 4.5vw, 64px)",
              letterSpacing: "-0.02em",
              margin: "0 0 48px",
              color: "var(--ink)",
            }}
          />
        </Reveal>

        {events.length === 0 ? (
          <p style={{ fontSize: 12, fontWeight: 500, textTransform: "uppercase", color: "var(--faint)", fontStyle: "italic" }}>
            {t({ pt: "Nenhum evento adicionado ainda.", en: "No events added yet.", es: "Ningún evento añadido aún." })}
          </p>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="events-grid">
            {events.map((event, i) => (
              <Reveal
                key={event.id}
                delay={i * 70}
                className={i === 0 ? "event-cell--featured" : undefined}
              >
                <EventCard event={event} featured={i === 0} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
