'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import {
  Coffee,
  Sparkles,
  MapPin,
  Star,
  Flame,
  ArrowRight,
  Clock,
  ChevronDown,
} from 'lucide-react';

interface HeroProps {
  onExploreMenu: () => void;
  onVisitUs: () => void;
}

export default function Hero({ onExploreMenu, onVisitUs }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-[#121212] overflow-hidden"
    >
      {/* Background Graphic & Texture Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.png"
          alt="HOT N COOL CUPS Industrial Café Background"
          fill
          priority
          className="object-cover object-center opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent" />
        <div className="absolute inset-0 bg-concrete opacity-60" />

        {/* Ambient Neon Lighting Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#FF6A00]/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-[#00D4FF]/15 rounded-full blur-[130px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Neon Location Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E1E1E] border border-[#FF6A00]/50 shadow-[0_0_15px_rgba(255,106,0,0.2)] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#8AFF5C] animate-ping" />
            <span className="text-xs font-num font-semibold text-[#FF6A00] uppercase tracking-wider">
              Open Daily • 6:00 AM – 11:30 PM
            </span>
            <span className="text-gray-500">•</span>
            <span className="text-xs font-num text-gray-300 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#00D4FF]" /> Quthbullapur
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-heading tracking-tight leading-[0.95] text-white mb-6 uppercase">
            Hot Tea.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-white to-[#00D4FF] neon-text-cyan">
              Cold Drinks.
            </span>{' '}
            <br />
            <span className="text-[#FF6A00] neon-text-orange">Endless Vibes.</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl font-sans font-light leading-relaxed mb-8">
            Your favorite neighborhood urban café serving freshly brewed Irani chai, artisanal espresso, icy Sharjah shakes, and sizzling hot snacks every day in Quthbullapur, Hyderabad.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-12 w-full sm:w-auto">
            <button
              onClick={onExploreMenu}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#FF6A00] text-black font-heading text-xl tracking-wider uppercase shadow-[0_0_25px_rgba(255,106,0,0.5)] hover:shadow-[0_0_35px_rgba(255,106,0,0.8)] hover:scale-[1.03] active:scale-95 transition-all group"
            >
              <span>Explore Menu</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
            </button>

            <button
              onClick={onVisitUs}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#1E1E1E] border border-white/20 hover:border-[#00D4FF] text-white font-heading text-xl tracking-wider uppercase hover:text-[#00D4FF] hover:bg-[#1E1E1E]/80 transition-all"
            >
              <MapPin className="w-5 h-5 text-[#00D4FF]" />
              <span>Visit Us</span>
            </button>
          </div>

          {/* Floating Statistics Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-6 border-t border-white/10">
            <div className="bg-[#1E1E1E]/80 backdrop-blur-md border border-white/10 rounded-xl p-3 flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-1 text-[#FFB700] text-sm font-bold font-num">
                <Star className="w-4 h-4 fill-current" />
                <span>4.6 / 5</span>
              </div>
              <span className="text-[11px] text-gray-400 font-num">Rating</span>
            </div>

            <div className="bg-[#1E1E1E]/80 backdrop-blur-md border border-white/10 rounded-xl p-3 flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-1 text-[#FF6A00] text-sm font-bold font-num">
                <Coffee className="w-4 h-4" />
                <span>120+</span>
              </div>
              <span className="text-[11px] text-gray-400 font-num">Happy Reviews</span>
            </div>

            <div className="bg-[#1E1E1E]/80 backdrop-blur-md border border-white/10 rounded-xl p-3 flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-1 text-[#8AFF5C] text-sm font-bold font-num">
                <Flame className="w-4 h-4" />
                <span>Fresh & Fast</span>
              </div>
              <span className="text-[11px] text-gray-400 font-num">Snacks & Bites</span>
            </div>

            <div className="bg-[#1E1E1E]/80 backdrop-blur-md border border-white/10 rounded-xl p-3 flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-1 text-[#00D4FF] text-sm font-bold font-num">
                <MapPin className="w-4 h-4" />
                <span>Bank Colony</span>
              </div>
              <span className="text-[11px] text-gray-400 font-num">Hyderabad</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Hero Visual Feature Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative"
        >
          {/* Main Visual Frame */}
          <div className="relative rounded-3xl p-2 bg-gradient-to-b from-[#FF6A00]/40 via-white/10 to-[#00D4FF]/30 shadow-[0_0_40px_rgba(255,106,0,0.25)]">
            <div className="relative rounded-2xl overflow-hidden bg-[#1E1E1E] aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=1200"
                alt="Fresh Irani Chai & Coffee at HOT N COOL CUPS"
                fill
                priority
                className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/30" />

              {/* Steam Rising Animation Over Cup */}
              <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-12 flex space-x-2 pointer-events-none">
                <span className="w-2 h-16 bg-gradient-to-t from-[#FF6A00] to-transparent rounded-full opacity-0 animate-steam-1" />
                <span className="w-2 h-20 bg-gradient-to-t from-white to-transparent rounded-full opacity-0 animate-steam-2" />
                <span className="w-2 h-16 bg-gradient-to-t from-[#00D4FF] to-transparent rounded-full opacity-0 animate-steam-3" />
              </div>

              {/* Floating Badge 1: Fresh Tea Pour */}
              <div className="absolute top-4 left-4 bg-[#121212]/85 backdrop-blur-md border border-[#FF6A00]/50 rounded-xl px-3.5 py-2 shadow-lg flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-[#FF6A00] animate-ping" />
                <div>
                  <p className="text-[10px] uppercase font-num text-gray-400">Signature</p>
                  <p className="text-xs font-bold text-white">Hyderabadi Irani Chai</p>
                </div>
              </div>

              {/* Floating Badge 2: Price Tag */}
              <div className="absolute bottom-4 right-4 bg-[#121212]/90 backdrop-blur-md border border-[#00D4FF]/60 rounded-xl px-4 py-2.5 shadow-2xl flex items-center gap-3">
                <div className="text-right">
                  <p className="text-[10px] uppercase font-num text-gray-400">Starting At</p>
                  <p className="text-lg font-bold font-num text-[#8AFF5C]">₹25 ONLY</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-500 text-xs font-num opacity-70 animate-bounce">
        <span className="uppercase tracking-widest text-[10px] mb-1">Scroll to Explore</span>
        <ChevronDown className="w-4 h-4 text-[#FF6A00]" />
      </div>
    </section>
  );
}
