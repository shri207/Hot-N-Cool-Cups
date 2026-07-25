'use client';

import { motion } from 'motion/react';
import { useMemo } from 'react';

export default function ParticlesBackground() {
  const particles = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      size: ((i * 7) % 5) + 2,
      x: (i * 13) % 100,
      y: (i * 19) % 100,
      duration: ((i * 3) % 10) + 8,
      delay: (i * 2) % 5,
      color: i % 2 === 0 ? '#FF6A00' : '#00D4FF',
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full opacity-20"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            backgroundColor: p.color,
            boxShadow: `0 0 10px ${p.color}`,
          }}
          animate={{
            y: ['0%', '-120%'],
            x: ['0%', Math.sin(p.id) * 30 + '%'],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}

