'use client';

import { motion } from 'motion/react';
import { CheckCircle2, Coffee, Sparkles, ShieldCheck, Clock, Users, IndianRupee } from 'lucide-react';

export default function WhyUsTimeline() {
  const points = [
    {
      title: 'Freshly Brewed Every Cup',
      description: 'Zero re-boiled tea or pre-made coffee. Every single glass is freshly pulled for rich flavor & aroma.',
      icon: Coffee,
      highlight: '100% Fresh',
    },
    {
      title: 'Affordable Pocket-Friendly Prices',
      description: 'Enjoy signature chai starting at just ₹25 and snacks under ₹100 without compromising quality.',
      icon: IndianRupee,
      highlight: 'Best Value',
    },
    {
      title: 'Cozy Industrial Seating',
      description: 'Ambient Edison lights, brushed steel tables, and neon glow corners designed for relaxing.',
      icon: Sparkles,
      highlight: 'Urban Vibe',
    },
    {
      title: 'Super Fast Service',
      description: 'Quick street kitchen dispatch. Hot chai in 2 minutes & sizzling snacks under 7 minutes.',
      icon: Clock,
      highlight: '< 5 Mins',
    },
    {
      title: 'Great Evening Hangout',
      description: 'Vibrant neighborhood gathering spot for students, friends, families, and night owls.',
      icon: Users,
      highlight: 'Chill Spot',
    },
    {
      title: 'Hygienic Kitchen Standards',
      description: 'Open clean counter, purified water, fresh milk, and strict hygiene protocols.',
      icon: ShieldCheck,
      highlight: 'Pure & Clean',
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#121212] overflow-hidden">
      {/* Background Neon Elements */}
      <div className="absolute inset-0 bg-concrete opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF6A00]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-num font-semibold uppercase tracking-[0.25em] text-[#8AFF5C] block mb-2">
            The Hot N Cool Promise
          </span>
          <h2 className="text-4xl sm:text-6xl font-heading text-white tracking-wider">
            WHY CUSTOMERS <span className="text-[#8AFF5C]">LOVE US</span>
          </h2>
          <p className="text-gray-400 font-light text-sm mt-3">
            Every detail is crafted to give you the ultimate Hyderabad street café experience.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative border-l-2 border-[#FF6A00]/40 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <motion.div
                key={pt.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Timeline Dot Icon */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-0 w-10 h-10 rounded-full bg-[#1E1E1E] border-2 border-[#FF6A00] flex items-center justify-center text-[#FF6A00] shadow-[0_0_12px_rgba(255,106,0,0.5)] group-hover:scale-110 group-hover:bg-[#FF6A00] group-hover:text-black transition-all">
                  <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
                </div>

                {/* Timeline Card */}
                <div className="bg-[#1E1E1E]/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#8AFF5C]/50 transition-all shadow-lg hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-2xl font-heading text-white tracking-wide group-hover:text-[#8AFF5C] transition-colors">
                      {pt.title}
                    </h3>
                    <span className="px-3 py-1 rounded-full bg-[#8AFF5C]/10 border border-[#8AFF5C]/40 text-[#8AFF5C] font-num text-[10px] font-bold uppercase tracking-wider">
                      {pt.highlight}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm font-light leading-relaxed">
                    {pt.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
