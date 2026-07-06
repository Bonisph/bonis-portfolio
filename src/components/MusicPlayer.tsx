"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useLang } from "@/context/LanguageContext";

const BASE = "https://4htf34ooxt9buwwf.public.blob.vercel-storage.com/music";

const TRACKS: { title: string; src: string }[] = [
  { title: "Radiohead — Creep",                         src: `${BASE}/track-01.mp3` },
  { title: "The Cure — Boys Don't Cry",                 src: `${BASE}/track-02.mp3` },
  { title: "Tears For Fears — Head Over Heels",         src: `${BASE}/track-03.mp3` },
  { title: "Tears For Fears — Everybody Wants to Rule", src: `${BASE}/track-04.mp3` },
  { title: "Sparks — Sparks",                           src: `${BASE}/track-05.mp3` },
  { title: "RHCP — Californication",                    src: `${BASE}/track-06.mp3` },
  { title: "RHCP — By The Way",                         src: `${BASE}/track-07.mp3` },
  { title: "Pixies — Where Is My Mind",                 src: `${BASE}/track-08.mp3` },
  { title: "Pearl Jam — Black",                         src: `${BASE}/track-09.mp3` },
  { title: "Oasis — Wonderwall",                        src: `${BASE}/track-10.mp3` },
  { title: "Oasis — Live Forever",                      src: `${BASE}/track-11.mp3` },
  { title: "Oasis — Don't Look Back in Anger",          src: `${BASE}/track-12.mp3` },
  { title: "Hoobastank — The Reason",                   src: `${BASE}/track-13.mp3` },
  { title: "The Beatles — Here Comes The Sun",          src: `${BASE}/track-14.mp3` },
  { title: "Green Day — Wake Me Up",                    src: `${BASE}/track-15.mp3` },
  { title: "Franz Ferdinand — Take Me Out",             src: `${BASE}/track-16.mp3` },
  { title: "Foster The People — Pumped Up Kicks",       src: `${BASE}/track-17.mp3` },
  { title: "Fleetwood Mac — Dreams",                    src: `${BASE}/track-18.mp3` },
  { title: "Dire Straits — Sultans of Swing",           src: `${BASE}/track-19.mp3` },
  { title: "Badfinger — Baby Blue",                     src: `${BASE}/track-20.mp3` },
  { title: "Audioslave — Like a Stone",                 src: `${BASE}/track-21.mp3` },
  { title: "Frank Ocean — Ivy",                         src: `${BASE}/track-22.mp3` },
  { title: "Frank Ocean — Godspeed",                    src: `${BASE}/track-23.mp3` },
  { title: "Mac Miller — Small Worlds",                 src: `${BASE}/track-24.mp3` },
];

export default function MusicPlayer() {
  if (TRACKS.length === 0) return null;
  return <MusicPlayerInner />;
}

function MusicPlayerInner() {
  const { t } = useLang();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const randomIdx = (exclude = -1) => {
    if (TRACKS.length === 1) return 0;
    let next;
    do { next = Math.floor(Math.random() * TRACKS.length); } while (next === exclude);
    return next;
  };

  const playedRef = useRef<Set<number>>(new Set());

  const initialIdx = randomIdx();
  const [trackIdx, setTrackIdx] = useState(initialIdx);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [volume, setVolume] = useState(0.7);
  const [visible, setVisible] = useState(false);

  const randomUnplayed = (exclude = -1): number => {
    const unplayed = TRACKS.map((_, i) => i).filter(i => !playedRef.current.has(i) && i !== exclude);
    if (unplayed.length === 0) return -1;
    return unplayed[Math.floor(Math.random() * unplayed.length)];
  };

  useEffect(() => {
    playedRef.current.add(initialIdx);
    const audio = new Audio(TRACKS[initialIdx].src);
    audio.loop = false;
    audio.muted = false;
    audio.volume = volume;
    audio.preload = "auto";
    audioRef.current = audio;

    audio.addEventListener("ended", handleEnded);

    audio.play()
      .then(() => { setMuted(false); setPlaying(true); setVisible(true); })
      .catch(() => {
        audio.muted = true;
        setMuted(true);
        audio.play().then(() => { setPlaying(true); }).catch(() => {});
        setVisible(true);
      });

    return () => {
      audio.removeEventListener("ended", handleEnded);
      audio.pause();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEnded = useCallback(() => {
    let next = randomUnplayed();
    if (next === -1) {
      playedRef.current.clear();
      next = randomUnplayed();
    }
    playedRef.current.add(next);
    setTrackIdx(next);
    loadTrack(next);
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
    if (playing) { audio.pause(); setPlaying(false); }
    else { audio.play().then(() => setPlaying(true)); }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !muted;
    setMuted(!muted);
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = val;
    if (val === 0) { audio.muted = true; setMuted(true); }
    else if (muted) { audio.muted = false; setMuted(false); }
  };

  const skipTrack = () => {
    let next = randomUnplayed(trackIdx);
    if (next === -1) {
      playedRef.current.clear();
      next = randomUnplayed(trackIdx);
    }
    playedRef.current.add(next);
    setTrackIdx(next);
    loadTrack(next);
  };

  const prevTrack = skipTrack;
  const nextTrack = skipTrack;

  if (!visible) return null;

  const label = t({
    pt: "Um pouco do gosto musical do Pedro",
    en: "A bit of Pedro's musical taste",
    es: "Un poco del gusto musical de Pedro",
  });

  const iconStyle: React.CSSProperties = {
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "var(--bg)",
    fontSize: 12,
    padding: "2px 4px",
    lineHeight: 1,
    opacity: 0.85,
    transition: "opacity .15s",
    fontFamily: "monospace",
    flexShrink: 0,
  };

  const tickerTextStyle: React.CSSProperties = {
    fontSize: 9,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    color: "var(--bg)",
    opacity: 0.65,
    whiteSpace: "nowrap",
    paddingRight: "2.5em",
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 100,
        background: "var(--ink)",
        border: "2px solid var(--ink)",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        padding: "7px 10px",
        width: 190,
      }}
    >
      {/* Ticker title */}
      <style>{`
        @keyframes music-ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
      <div style={{ overflow: "hidden", width: "100%" }}>
        <div style={{
          display: "inline-flex",
          whiteSpace: "nowrap",
          animation: "music-ticker 14s linear infinite",
          willChange: "transform",
        }}>
          <span style={tickerTextStyle}>{label}</span>
          <span style={tickerTextStyle}>{label}</span>
        </div>
      </div>

      {/* Controls row */}
      <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
        <button style={iconStyle} onClick={prevTrack} aria-label="Anterior">◀◀</button>
        <button style={iconStyle} onClick={togglePlay} aria-label={playing ? "Pausar" : "Tocar"}>
          {playing ? "⏸" : "▶"}
        </button>
        <button style={iconStyle} onClick={nextTrack} aria-label="Próxima">▶▶</button>
        <button
          style={{ ...iconStyle, marginLeft: "auto", opacity: muted ? 0.35 : 0.85 }}
          onClick={toggleMute}
          aria-label={muted ? "Ativar som" : "Mutar"}
        >
          {muted ? "🔇" : "🔊"}
        </button>
      </div>

      {/* Volume row */}
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <span style={{ fontSize: 9, color: "var(--bg)", opacity: 0.45, fontFamily: "monospace", flexShrink: 0, letterSpacing: "0.05em" }}>
          VOL
        </span>
        <input
          type="range"
          min={0}
          max={1}
          step={0.02}
          value={muted ? 0 : volume}
          onChange={handleVolume}
          aria-label="Volume"
          style={{ flex: 1, height: 2, accentColor: "var(--bg)", cursor: "pointer", opacity: 0.7 }}
        />
      </div>
    </div>
  );
}
