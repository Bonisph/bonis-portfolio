"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const TRACKS: { title: string; src: string }[] = [
  { title: "On Sight Loop", src: "/music/track-01.mp3" },
  // add more: { title: "...", src: "/music/track-02.mp3" },
];

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [trackIdx, setTrackIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [visible, setVisible] = useState(false);

  // Init audio on mount
  useEffect(() => {
    const audio = new Audio(TRACKS[0].src);
    audio.loop = TRACKS.length === 1;
    audio.muted = true;
    audio.preload = "auto";
    audioRef.current = audio;

    audio.addEventListener("ended", handleEnded);

    // Autoplay muted
    audio.play().then(() => {
      setPlaying(true);
      setVisible(true);
    }).catch(() => {
      setVisible(true);
    });

    return () => {
      audio.removeEventListener("ended", handleEnded);
      audio.pause();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEnded = useCallback(() => {
    if (TRACKS.length <= 1) return;
    setTrackIdx((i) => {
      const next = (i + 1) % TRACKS.length;
      loadTrack(next);
      return next;
    });
  }, []);

  const loadTrack = (idx: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = TRACKS[idx].src;
    audio.load();
    audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true));
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !muted;
    setMuted(!muted);
  };

  const prevTrack = () => {
    const idx = (trackIdx - 1 + TRACKS.length) % TRACKS.length;
    setTrackIdx(idx);
    loadTrack(idx);
  };

  const nextTrack = () => {
    const idx = (trackIdx + 1) % TRACKS.length;
    setTrackIdx(idx);
    loadTrack(idx);
  };

  if (!visible) return null;

  const iconStyle: React.CSSProperties = {
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "var(--bg)",
    fontSize: 14,
    padding: "4px 6px",
    lineHeight: 1,
    opacity: 0.85,
    transition: "opacity .15s",
    fontFamily: "monospace",
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 100,
        background: "var(--ink)",
        border: "2px solid var(--ink)",
        display: "flex",
        alignItems: "center",
        gap: 2,
        padding: "8px 12px",
        maxWidth: 260,
      }}
    >
      {/* Track name */}
      <span style={{
        fontSize: 10,
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        color: "var(--bg)",
        opacity: 0.6,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        maxWidth: 100,
        marginRight: 6,
      }}>
        {TRACKS[trackIdx].title}
      </span>

      {/* Prev — only show with multiple tracks */}
      {TRACKS.length > 1 && (
        <button style={iconStyle} onClick={prevTrack} aria-label="Anterior" title="Anterior">
          ◀◀
        </button>
      )}

      {/* Play/Pause */}
      <button style={iconStyle} onClick={togglePlay} aria-label={playing ? "Pausar" : "Tocar"}>
        {playing ? "⏸" : "▶"}
      </button>

      {/* Next — only show with multiple tracks */}
      {TRACKS.length > 1 && (
        <button style={iconStyle} onClick={nextTrack} aria-label="Próxima" title="Próxima">
          ▶▶
        </button>
      )}

      {/* Mute toggle */}
      <button
        style={{ ...iconStyle, opacity: muted ? 0.4 : 0.85 }}
        onClick={toggleMute}
        aria-label={muted ? "Ativar som" : "Mutar"}
        title={muted ? "Ativar som" : "Mutar"}
      >
        {muted ? "🔇" : "🔊"}
      </button>
    </div>
  );
}
