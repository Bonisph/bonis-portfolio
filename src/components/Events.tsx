"use client";

import { useState } from "react";
import { events } from "@/data/portfolio";
import { useLang } from "@/context/LanguageContext";

const typeBg: Record<string, string> = {
  Palestra:    "bg-neutral-900 text-white",
  Talk:        "bg-neutral-900 text-white",
  Painel:      "bg-neutral-700 text-white",
  Panel:       "bg-neutral-700 text-white",
  Workshop:    "bg-neutral-500 text-white",
  Organização: "bg-neutral-200 text-neutral-700",
  Organizer:   "bg-neutral-200 text-neutral-700",
  Host:        "bg-neutral-800 text-white",
  Moderador:   "bg-neutral-600 text-white",
  Moderator:   "bg-neutral-600 text-white",
};

function getYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
  return match ? match[1] : null;
}

type MediaItem = { type: "image" | "video"; url: string };

function MediaCarousel({ media }: { media: MediaItem[] }) {
  const [idx, setIdx] = useState(0);

  if (!media || media.length === 0) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-neutral-100">
        <svg className="w-10 h-10 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
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
    <div className="absolute inset-0 bg-neutral-100">
      {/* Mídia atual */}
      {ytId ? (
        <iframe
          src={`https://www.youtube.com/embed/${ytId}`}
          title="video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={current.url}
          alt=""
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      )}

      {/* Navegação — só aparece se tiver mais de 1 item */}
      {total > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Anterior"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/75 transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={next}
            aria-label="Próximo"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/75 transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Contador + dots */}
          <div className="absolute bottom-2.5 left-0 right-0 z-10 flex flex-col items-center gap-1.5">
            <div className="flex gap-1.5">
              {media.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setIdx(i); }}
                  aria-label={`Item ${i + 1}`}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                    i === idx ? "bg-white scale-125" : "bg-white/45 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default function Events() {
  const { t } = useLang();

  return (
    <section id="eventos" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-8">
          {t({ pt: "Eventos", en: "Events" })}
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-snug mb-14">
          {t({ pt: "Eventos", en: "Events" })}
        </h2>

        {events.length === 0 ? (
          <p className="text-neutral-300 italic text-sm">
            {t({ pt: "Nenhum evento adicionado ainda.", en: "No events added yet." })}
          </p>
        ) : (
          <div className="flex flex-col gap-5">
            {events.map((event) => {
              const typeLabel = t(event.type);
              return (
                <div
                  key={event.id}
                  className="group bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:border-neutral-400 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex flex-col md:flex-row">

                    {/* Texto — esquerda */}
                    <div className="flex-1 p-7 flex flex-col justify-center min-w-0">
                      <div className="mb-3">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${typeBg[typeLabel] ?? "bg-neutral-200 text-neutral-700"}`}>
                          {typeLabel}
                        </span>
                      </div>
                      <h3 className="font-semibold text-neutral-900 text-lg mb-2 leading-snug">
                        {t(event.title)}
                      </h3>
                      <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                        {t(event.description)}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-neutral-400 flex-wrap">
                        <span>{event.date}</span>
                        <span>·</span>
                        <span>{event.location}</span>
                        {event.media.length > 0 && (
                          <>
                            <span>·</span>
                            <span className="text-neutral-300">
                              {event.media.length} {event.media.length === 1
                                ? t({ pt: "mídia", en: "media" })
                                : t({ pt: "mídias", en: "media items" })}
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Carrossel — direita */}
                    <div className="md:w-80 flex-shrink-0 h-64 md:h-auto md:min-h-[260px] relative overflow-hidden">
                      <MediaCarousel media={event.media} />
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
