'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Flame, Coffee, GlassWater, Utensils, ArrowUpRight } from 'lucide-react';

interface CategoriesProps {
  onSelectCategory: (categoryId: string) => void;
}

export default function Categories({ onSelectCategory }: CategoriesProps) {
  const categories = [
    {
      id: 'chai-coffee',
      title: 'Signature Chai',
      subtitle: 'Premium Tea Blends',
      description: 'Hyderabadi Irani chai, clay pot Kulhad chai, lemongrass & cardamom tea brewed fresh continuously.',
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800',
      icon: Coffee,
      accentColor: '#FF6A00',
      borderColor: 'border-[#FF6A00]/50',
      tag: 'Fresh Brewed',
      isHot: true,
    },
    {
      id: 'chai-coffee-coffee',
      title: 'Coffee',
      subtitle: 'Artisanal Espresso & Brews',
      description: 'Rich arabica double shots, velvety cappuccino, cold coffee floats, and hazelnut lattes.',
      image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=800',
      icon: Flame,
      accentColor: '#00D4FF',
      borderColor: 'border-[#00D4FF]/50',
      tag: 'Dark Roast',
      isHot: true,
    },
    {
      id: 'coolers',
      title: 'Cool Refreshments',
      subtitle: 'Sharjah, Juices & Shakes',
      description: 'Iconic Sharjah banana shake with nuts, thick cold coffee with ice cream, and electric mint sodas.',
      image: 'https://images.unsplash.com/photo-1553787499-6f9133860278?auto=format&fit=crop&q=80&w=800',
      icon: GlassWater,
      accentColor: '#00D4FF',
      borderColor: 'border-[#00D4FF]/50',
      tag: 'Chilled Shakes',
      isLiquid: true,
    },
    {
      id: 'quick-bites',
      title: 'Quick Bites & Maggi',
      subtitle: 'Hot Snacks & Crispy Sides',
      description: 'Double egg Maggi, Peri Peri crinkle fries, crispy chicken nuggets, and melted cheese sandwiches.',
      image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=800',
      icon: Utensils,
      accentColor: '#8AFF5C',
      borderColor: 'border-[#8AFF5C]/50',
      tag: 'Hot & Crispy',
    },
  ];

  return (
    <section id="categories" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#121212] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs font-num font-semibold uppercase tracking-[0.25em] text-[#FF6A00] block mb-2">
              Explore Our Offerings
            </span>
            <h2 className="text-4xl sm:text-6xl font-heading text-white tracking-wider">
              FEATURED <span className="text-[#00D4FF] neon-text-cyan">CATEGORIES</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-md mt-4 md:mt-0 font-light">
            Handcrafted beverages and freshly prepared snacks made to order in our urban street kitchen.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                onClick={() => onSelectCategory(cat.id)}
                className={`group relative rounded-3xl overflow-hidden bg-[#1E1E1E] border ${cat.borderColor} p-1 cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)]`}
              >
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#121212]">
                  {/* Image */}
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />

                  {/* Liquid Wave Animation Effect inside Beverage Cards */}
                  {cat.isLiquid && (
                    <div className="absolute bottom-0 inset-x-0 h-16 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity overflow-hidden">
                      <div className="absolute -bottom-8 left-1/2 w-[300px] h-[300px] bg-[#00D4FF] rounded-[40%] animate-liquid" />
                    </div>
                  )}

                  {/* Steam Rising Animation inside Hot Tea/Coffee Cards */}
                  {cat.isHot && (
                    <div className="absolute top-8 left-10 flex space-x-1 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="w-1 h-6 bg-[#FF6A00] rounded-full animate-steam-1" />
                      <span className="w-1 h-8 bg-white rounded-full animate-steam-2" />
                    </div>
                  )}

                  {/* Top Tag & Icon */}
                  <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full bg-[#121212]/80 backdrop-blur-md text-[10px] font-num font-bold uppercase tracking-wider text-white border border-white/10">
                      {cat.tag}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#121212]/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" style={{ color: cat.accentColor }} />
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="absolute bottom-0 inset-x-0 p-5 z-10 flex flex-col justify-end">
                    <span className="text-[11px] font-num text-gray-400 uppercase tracking-widest mb-1">
                      {cat.subtitle}
                    </span>
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-heading text-white tracking-wide group-hover:text-[#FF6A00] transition-colors">
                        {cat.title}
                      </h3>
                      <div className="w-8 h-8 rounded-full bg-[#FF6A00] text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 shadow-[0_0_12px_rgba(255,106,0,0.8)]">
                        <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                      </div>
                    </div>
                    <p className="text-xs text-gray-300 font-light line-clamp-2 mt-2 group-hover:text-white transition-colors">
                      {cat.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
