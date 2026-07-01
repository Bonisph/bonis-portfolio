"use client";

import { useState } from "react";
import Image from "next/image";
import { events } from "@/data/portfolio";
import { useLang } from "@/context/LanguageContext";

const typeBg: Record<string, string> = {
  Palestrante: "bg-neutral-900 text-white",
  Speaker:     "bg-neutral-900 text-white",
  Ponente:     "bg-neutral-900 text-white",
  Painel:      "bg-neutral-700 text-white",
  Panel:       "bg-neutral-700 text-white",
  Workshop:    "bg-neutral-500 text-white",
  Organizador: "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-600",
  Organizer:   "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-600",
  Host:        "bg-neutral-800 text-white",
  Moderador:   "bg-neutral-600 text-white",
  Moderator:   "bg-neutral-600 text-white",
};

const YT_ID_RE = /^[a-zA-Z0-9_-]{11}$/;

function getYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?\s]+)/);
  if (!match) return null;
  return YT_ID_RE.test(match[1]) ? match[1] : null;
}

type MediaItem = { type: "image" | "video"; url: string };

function MediaCarousel({ media, eventId, eventTitle }: { media: MediaItem[]; eventId: number; eventTitle: string }) {
  const [idx, setIdx] = useState(0);

  if (!media || media.length === 0) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-neutral-100">
        <svg className="w-12 h-12 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    );
  }

  const current = media[idx];
  const ytId = current.type === "video" ? getYouTubeId(current.url) : null;
  const total = media.length;

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIdx((i) => (i - 1 + total) % total);
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIdx((i) => (i + 1) % total);
  };

  return (
    <div className="absolute inset-0">
      {/* Mídia atual — key força re-render ao trocar */}
      {ytId ? (
        <iframe
          key={`${eventId}-yt-${ytId}`}
          src={`https://www.youtube.com/embed/${ytId}?rel=0`}
          title={`Aftermovie: ${eventTitle}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
        />
      ) : (
        <div className="relative w-full h-full">
          <Image
            key={`${eventId}-img-${idx}`}
            fill
            src={current.url}
            alt=""
            className="object-cover"
          />
        </div>
      )}

      {/* Gradiente suave no fundo para dots ficarem legíveis */}
      {total > 1 && (
        <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
      )}

      {/* Setas + dots */}
      {total > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Anterior"
            className="absolute left-2.5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/75 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={next}
            aria-label="Próximo"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/75 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
            {media.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setIdx(i); }}
                aria-label={`Mídia ${i + 1} de ${total}`}
                aria-current={i === idx ? "true" : undefined}
                className={`transition-all duration-200 rounded-full ${
                  i === idx
                    ? "bg-white w-4 h-1.5"
                    : "bg-white/50 w-1.5 h-1.5 hover:bg-white/75"
                }`}
              />
            ))}
          </div>

          {/* Ícone de vídeo quando o item atual for vídeo */}
          {current.type === "video" && (
            <div className="absolute top-3 right-3 z-10 bg-black/50 rounded-md px-2 py-1 flex items-center gap-1" aria-hidden="true">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              <span className="text-white text-xs font-medium">vídeo</span>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default function Events() {
  const { t } = useLang();

  return (
    <section id="eventos" aria-labelledby="events-heading" className="py-28 px-6 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-8">
          {t({ pt: "Eventos", en: "Events", es: "Eventos" })}
        </span>

        <h2 id="events-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white leading-snug mb-14">
          {t({ pt: "Eventos em que participei", en: "Events I've attended", es: "Eventos en los que participé" })}
        </h2>

        {events.length === 0 ? (
          <p className="text-neutral-300 italic text-sm">
            {t({ pt: "Nenhum evento adicionado ainda.", en: "No events added yet.", es: "Ningún evento añadido aún." })}
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-2xl overflow-hidden hover:border-neutral-300 dark:hover:border-neutral-600 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {/* ── Imagem / Carrossel ── */}
                <div className="relative aspect-video overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                  <MediaCarousel
                    media={event.media}
                    eventId={event.id}
                    eventTitle={t(event.title)}
                  />
                </div>

                {/* ── Informações ── */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {event.types.map((type, i) => {
                      const label = t(type);
                      return (
                        <span
                          key={i}
                          className={`text-xs font-semibold px-2.5 py-1 rounded-full ${typeBg[label] ?? "bg-neutral-200 text-neutral-700"}`}
                        >
                          {label}
                        </span>
                      );
                    })}
                  </div>

                  {/* Título */}
                  <h3 className="font-semibold text-neutral-900 dark:text-white text-lg leading-snug mb-2">
                    {t(event.title)}
                  </h3>

                  {/* Data e local */}
                  <div className="flex items-center gap-2 text-xs text-neutral-400 dark:text-neutral-500 mb-4">
                    <span>{event.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{event.location}</span>
                  </div>

                  {/* Descrição */}
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    {t(event.description)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
