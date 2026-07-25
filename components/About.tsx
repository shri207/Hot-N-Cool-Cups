'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Coffee, Flame, ShieldCheck, Heart, Sparkles, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#121212] overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute inset-0 bg-concrete opacity-50" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6A00]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Industrial Café Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden bg-[#1E1E1E] border border-white/10 shadow-2xl aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000"
                alt="HOT N COOL CUPS Industrial Café Interior"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/20" />

              {/* Glowing Badge overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#121212]/90 backdrop-blur-md border border-[#FF6A00]/40 flex items-center justify-between">
                <div>
                  <p className="font-heading text-xl text-white">THE URBAN STREET EXPERIENCE</p>
                  <p className="text-xs text-gray-400 font-num">Bank Colony, Quthbullapur, Hyderabad</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#FF6A00] flex items-center justify-center text-black font-bold font-num shadow-[0_0_15px_rgba(255,106,0,0.5)]">
                  ★ 4.6
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: About Content & Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E1E1E] border border-[#00D4FF]/40 mb-4 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-[#00D4FF]" />
              <span className="text-xs font-num font-semibold text-[#00D4FF] uppercase tracking-wider">
                Our Story & Vibe
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-heading text-white tracking-wider mb-6">
              WHERE GREAT <span className="text-[#FF6A00] neon-text-orange">CONVERSATIONS</span> BEGIN
            </h2>

            <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed mb-8">
              <strong className="text-white font-medium">HOT N COOL CUPS</strong> is where great conversations begin. Whether you&apos;re stopping by for an early morning chai, an evening coffee break, or quick snacks with friends, every visit is served fresh with warmth and flavor.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#1E1E1E]/80 border border-white/10 hover:border-[#FF6A00]/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#FF6A00]/20 flex items-center justify-center text-[#FF6A00] mb-3">
                  <Coffee className="w-4 h-4" />
                </div>
                <h3 className="font-heading text-lg text-white mb-1">Freshly Brewed Every Cup</h3>
                <p className="text-xs text-gray-400">Zero re-heating. Every single cup of chai and coffee is freshly pulled for maximum aroma.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#1E1E1E]/80 border border-white/10 hover:border-[#00D4FF]/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#00D4FF]/20 flex items-center justify-center text-[#00D4FF] mb-3">
                  <Flame className="w-4 h-4" />
                </div>
                <h3 className="font-heading text-lg text-white mb-1">Street Style Flavor</h3>
                <p className="text-xs text-gray-400">Authentic Hyderabadi spices, spicy Maggi, crunchy fries, and rich creamy cold shakes.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#1E1E1E]/80 border border-white/10 hover:border-[#8AFF5C]/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#8AFF5C]/20 flex items-center justify-center text-[#8AFF5C] mb-3">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="font-heading text-lg text-white mb-1">Hygienic Kitchen</h3>
                <p className="text-xs text-gray-400">Transparent open counter with spotless equipment and strict cleanliness standards.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#1E1E1E]/80 border border-white/10 hover:border-[#FF6A00]/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#FF6A00]/20 flex items-center justify-center text-[#FF6A00] mb-3">
                  <Heart className="w-4 h-4" />
                </div>
                <h3 className="font-heading text-lg text-white mb-1">Cozy Evening Spot</h3>
                <p className="text-xs text-gray-400">Industrial lighting, comfortable seating, and ambient beats for the ultimate hangout.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
