'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete?: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }
        return prev + 4;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#121212] text-white overflow-hidden selection:bg-[#FF6A00]"
      >
        {/* Background Subtle Grid & Neon Radial Accent */}
        <div className="absolute inset-0 bg-concrete pointer-events-none opacity-40" />
        <div className="absolute w-[500px] h-[500px] bg-[#FF6A00]/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />

        <div className="relative z-10 flex flex-col items-center px-6 max-w-md w-full text-center">
          {/* Steaming Tea Cup Icon with Animated Steam */}
          <div className="relative mb-6">
            {/* Steam Trails */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex space-x-2 pointer-events-none">
              <span className="w-1.5 h-8 bg-gradient-to-t from-[#FF6A00] to-transparent rounded-full opacity-0 animate-steam-1" />
              <span className="w-1.5 h-10 bg-gradient-to-t from-[#8AFF5C] to-transparent rounded-full opacity-0 animate-steam-2" />
              <span className="w-1.5 h-8 bg-gradient-to-t from-[#00D4FF] to-transparent rounded-full opacity-0 animate-steam-3" />
            </div>

            {/* Neon Cup Container */}
            <div className="w-24 h-24 rounded-2xl bg-[#1E1E1E] border border-[#FF6A00]/50 flex items-center justify-center shadow-[0_0_25px_rgba(255,106,0,0.3)] animate-neon-pulse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-[#FF6A00]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
                <line x1="6" y1="2" x2="6" y2="4" />
                <line x1="10" y1="2" x2="10" y2="4" />
                <line x1="14" y1="2" x2="14" y2="4" />
              </svg>
            </div>
          </div>

          {/* Title Branding */}
          <h1 className="text-4xl sm:text-5xl font-heading tracking-wider mb-1 text-white">
            HOT <span className="text-[#00D4FF]">N</span> COOL <span className="text-[#FF6A00]">CUPS</span>
          </h1>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400 font-num mb-8">
            Brewing Happiness in Quthbullapur
          </p>

          {/* Progress Bar Container */}
          <div className="w-full bg-[#1E1E1E] border border-white/10 h-3 rounded-full overflow-hidden p-0.5 shadow-inner mb-3">
            <motion.div
              className="h-full bg-gradient-to-r from-[#FF6A00] via-[#8AFF5C] to-[#00D4FF] rounded-full shadow-[0_0_12px_rgba(255,106,0,0.8)]"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>

          <div className="flex justify-between w-full text-xs font-num text-gray-400">
            <span>Brewing freshest flavors...</span>
            <span className="text-[#FF6A00] font-bold">{progress}%</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
