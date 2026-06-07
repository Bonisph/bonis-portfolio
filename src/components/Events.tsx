"use client";

import { events } from "@/data/portfolio";
import { useLang } from "@/context/LanguageContext";

const typeBg: Record<string, string> = {
  Palestra: "bg-neutral-900 text-white",
  Talk: "bg-neutral-900 text-white",
  Painel: "bg-neutral-700 text-white",
  Panel: "bg-neutral-700 text-white",
  Workshop: "bg-neutral-500 text-white",
  Organização: "bg-neutral-200 text-neutral-700",
  Organizer: "bg-neutral-200 text-neutral-700",
};

const PlaceholderImage = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-neutral-100">
    <svg className="w-12 h-12 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  </div>
);

export default function Events() {
  const { t } = useLang();

  return (
    <section id="eventos" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-8">
          {t({ pt: "Eventos", en: "Events" })}
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-snug mb-14">
          Eventos
        </h2>

        {events.length === 0 ? (
          <p className="text-neutral-300 italic text-sm">
            {t({ pt: "Nenhum evento adicionado ainda.", en: "No events added yet." })}
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {events.map((event) => {
              const typeLabel = t(event.type);
              return (
                <div
                  key={event.id}
                  className="group bg-white border border-neutral-200 rounded-xl overflow-hidden hover:border-neutral-400 hover:shadow-md transition-all duration-200"
                >
                  {/* Foto — aceita URL externa ou caminho local */}
                  <div className="relative h-48 overflow-hidden">
                    {event.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={event.image}
                        alt={t(event.title)}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <PlaceholderImage />
                    )}
                    <div className="absolute top-3 left-3">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${typeBg[typeLabel] ?? "bg-neutral-200 text-neutral-700"}`}>
                        {typeLabel}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <h3 className="font-semibold text-neutral-900 mb-1">{t(event.title)}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed mb-4">{t(event.description)}</p>
                    <div className="flex items-center gap-4 text-xs text-neutral-400">
                      <span>{event.date}</span>
                      <span>·</span>
                      <span>{event.location}</span>
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
