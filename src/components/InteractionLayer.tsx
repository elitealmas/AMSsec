"use client";
import { useEffect, useRef } from "react";

/** Subtle, user-gesture-only interaction feedback; no audio assets are loaded. */
export function InteractionLayer() {
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let audio: AudioContext | undefined;
    const move = (event: PointerEvent) => {
      ring.current?.style.setProperty("transform", `translate3d(${event.clientX - 14}px, ${event.clientY - 14}px, 0)`);
      ring.current?.classList.toggle("is-hovering", Boolean((event.target as Element | null)?.closest("button, a, input, label")));
    };
    const click = (event: PointerEvent) => {
      if (!(event.target as Element | null)?.closest("button, a, input, label")) return;
      audio ??= new AudioContext();
      const oscillator = audio.createOscillator();
      const gain = audio.createGain();
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(440, audio.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(280, audio.currentTime + 0.045);
      gain.gain.setValueAtTime(0.025, audio.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + 0.05);
      oscillator.connect(gain).connect(audio.destination);
      oscillator.start();
      oscillator.stop(audio.currentTime + 0.055);
    };
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", click, { passive: true });
    return () => { window.removeEventListener("pointermove", move); window.removeEventListener("pointerdown", click); void audio?.close(); };
  }, []);

  return <div ref={ring} className="cursor-ring" aria-hidden="true" />;
}
