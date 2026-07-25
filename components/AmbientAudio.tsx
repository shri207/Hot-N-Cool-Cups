'use client';

import { useEffect, useRef } from 'react';

interface AmbientAudioProps {
  isPlaying: boolean;
}

export default function AmbientAudio({ isPlaying }: AmbientAudioProps) {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  useEffect(() => {
    if (isPlaying) {
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;

        // Subtle ambient low frequency hum + gentle vinyl noise simulation
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(120, ctx.currentTime); // Low warm tone
        gain.gain.setValueAtTime(0.015, ctx.currentTime); // Soft volume

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();

        oscRef.current = osc;
        gainRef.current = gain;
      } catch (err) {
        console.warn('Web Audio API not supported or user gesture required', err);
      }
    } else {
      if (oscRef.current) {
        try {
          oscRef.current.stop();
          oscRef.current.disconnect();
        } catch {}
      }
      if (audioCtxRef.current) {
        try {
          audioCtxRef.current.close();
        } catch {}
      }
    }

    return () => {
      if (oscRef.current) {
        try {
          oscRef.current.stop();
        } catch {}
      }
      if (audioCtxRef.current) {
        try {
          audioCtxRef.current.close();
        } catch {}
      }
    };
  }, [isPlaying]);

  return null;
}
