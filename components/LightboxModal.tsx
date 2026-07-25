'use client';

import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { X, Sparkles } from 'lucide-react';
import { GalleryItem } from '@/data/galleryData';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export default function LightboxModal({ item, onClose }: LightboxModalProps) {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative max-w-4xl w-full bg-[#1E1E1E] border border-white/10 rounded-3xl overflow-hidden shadow-2xl text-white"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 text-white hover:bg-[#FF6A00] hover:text-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative aspect-[16/10] w-full bg-[#121212]">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/20" />
          </div>

          <div className="p-6 bg-[#1E1E1E]">
            <span className="px-3 py-1 rounded-full bg-[#FF6A00]/20 border border-[#FF6A00]/50 text-[#FF6A00] font-num text-xs font-bold uppercase tracking-wider">
              {item.category}
            </span>
            <h3 className="text-3xl font-heading text-white mt-2">{item.title}</h3>
            <p className="text-gray-300 text-sm font-light mt-1">{item.caption}</p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
