"use client";

import { useEffect, useRef, useState, createElement, ReactNode, CSSProperties } from "react";

export function useTypewriter(
  text: string,
  opts: { speed?: number; startDelay?: number; autoStart?: boolean; onDone?: () => void } = {}
) {
  const { speed = 45, startDelay = 0, autoStart = true, onDone } = opts;
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const startedRef = useRef(false);

  const start = () => {
    if (startedRef.current) return;
    startedRef.current = true;

    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayed(text);
      setDone(true);
      onDone?.();
      return;
    }

    let i = 0;
    const kickoff = setTimeout(() => {
      const tick = () => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i < text.length) {
          setTimeout(tick, speed + Math.random() * (speed * 0.6));
        } else {
          setDone(true);
          onDone?.();
        }
      };
      tick();
    }, startDelay);
    return () => clearTimeout(kickoff);
  };

  useEffect(() => {
    if (autoStart) start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { displayed, done, start };
}

export default function TypeOnView({
  text,
  as = "span",
  className = "",
  id,
  speed = 22,
  style,
}: {
  text: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  id?: string;
  speed?: number;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const { displayed, start } = useTypewriter(text, { speed, autoStart: false });
  const caretOn = displayed.length > 0 && displayed.length < text.length;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          start();
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [start]);

  const content: ReactNode = visible ? displayed : " ";

  return createElement(
    as,
    { ref, id, className, style: { minHeight: "1em", ...style } },
    content,
    caretOn && (
      <span
        aria-hidden="true"
        style={{
          display: "inline-block",
          width: "0.08em",
          marginLeft: "2px",
          borderRight: "2px solid currentColor",
          animation: "blink 1s steps(1) infinite",
        }}
      />
    )
  );
}
