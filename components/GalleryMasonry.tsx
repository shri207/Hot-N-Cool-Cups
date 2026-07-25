'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { GALLERY_ITEMS, GalleryItem } from '@/data/galleryData';
import LightboxModal from './LightboxModal';
import { Maximize2, Sparkles } from 'lucide-react';

export default function GalleryMasonry() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Chai Art', 'Coffee', 'Coolers', 'Snacks', 'Interior Vibes', 'People & Mood'];

  const filteredGallery = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="gallery" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#121212] overflow-hidden">
      {/* Background Grid & Accent */}
      <div className="absolute inset-0 bg-concrete opacity-50" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#FF6A00]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-num font-semibold uppercase tracking-[0.25em] text-[#FF6A00] block mb-2">
            Visual Ambiance & Moments
          </span>
          <h2 className="text-4xl sm:text-6xl font-heading text-white tracking-wider mb-4">
            GALLERY OF <span className="text-[#FF6A00] neon-text-orange">ATMOSPHERE</span>
          </h2>
          <p className="text-gray-400 font-light text-sm">
            Step inside HOT N COOL CUPS through our lens: glowing neon lights, steaming kulhad chai, icy shakes, and street bites.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-num font-medium uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-[#FF6A00] text-black font-bold shadow-[0_0_15px_rgba(255,106,0,0.4)]'
                  : 'bg-[#1E1E1E] text-gray-300 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Pinterest Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredGallery.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedItem(item)}
              className="break-inside-avoid relative rounded-3xl overflow-hidden bg-[#1E1E1E] border border-white/10 group cursor-pointer shadow-xl"
            >
              <div className={`relative w-full ${item.heightClass} bg-[#121212]`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Glowing Orange Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                <div className="absolute inset-0 bg-[#FF6A00]/20 opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex justify-end">
                    <div className="w-10 h-10 rounded-full bg-[#121212]/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-num text-[#FF6A00] font-bold uppercase tracking-widest block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-heading text-white">{item.title}</h3>
                    <p className="text-xs text-gray-300 font-light line-clamp-2 mt-1">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <LightboxModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
}
