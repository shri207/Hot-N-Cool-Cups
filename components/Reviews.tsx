'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Star, Quote, Plus, CheckCircle } from 'lucide-react';
import { REVIEWS_DATA, Review } from '@/data/reviewsData';
import ReviewModal from './ReviewModal';

export default function Reviews() {
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS_DATA);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddReview = (newRev: Review) => {
    setReviewsList([newRev, ...reviewsList]);
  };

  return (
    <section id="reviews" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#121212] overflow-hidden">
      {/* Background Neon Gradient */}
      <div className="absolute inset-0 bg-concrete opacity-50" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header & Rating Summary */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-num font-semibold uppercase tracking-[0.25em] text-[#00D4FF] block mb-2">
              Authentic Customer Testimonials
            </span>
            <h2 className="text-4xl sm:text-6xl font-heading text-white tracking-wider">
              WHAT OUR <span className="text-[#FF6A00] neon-text-orange">CUSTOMERS SAY</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4 bg-[#1E1E1E] p-4 rounded-3xl border border-white/10 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <div className="flex text-[#FFB700]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-2xl font-bold font-num text-white">4.6</span>
              <span className="text-xs font-num text-gray-400">/ 5.0</span>
            </div>

            <div className="h-8 w-px bg-white/10 hidden sm:block" />

            <div className="text-xs font-num text-gray-300">
              <p className="font-bold text-white">120+ Happy Reviews</p>
              <p className="text-gray-500">Quthbullapur & Bank Colony</p>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 rounded-xl bg-[#FF6A00] text-black font-heading text-sm font-bold uppercase tracking-wider flex items-center gap-1.5 hover:scale-105 transition-transform ml-auto sm:ml-0"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              <span>Leave Review</span>
            </button>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsList.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card glass-card-hover rounded-3xl p-6 flex flex-col justify-between"
            >
              <div>
                {/* Card Header: Tag & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#121212] border border-white/10 text-[10px] font-num font-bold text-[#00D4FF] uppercase tracking-wider">
                    {rev.tag}
                  </span>
                  <Quote className="w-6 h-6 text-[#FF6A00]/40 stroke-1" />
                </div>

                {/* Stars */}
                <div className="flex text-[#FFB700] mb-3">
                  {[...Array(Math.floor(rev.rating))].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  {rev.rating % 1 !== 0 && (
                    <Star className="w-4 h-4 fill-current opacity-60" />
                  )}
                </div>

                {/* Comment */}
                <p className="text-gray-200 text-sm font-light leading-relaxed italic mb-6">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-num">
                <div>
                  <h4 className="font-bold text-white text-sm flex items-center gap-1.5">
                    {rev.author}
                    {rev.verifiedVisit && (
                      <span title="Verified Customer">
                        <CheckCircle className="w-3.5 h-3.5 text-[#8AFF5C]" />
                      </span>
                    )}
                  </h4>
                  <p className="text-gray-500 text-[11px]">{rev.location}</p>
                </div>
                <span className="text-gray-500 text-[10px]">{rev.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddReview={handleAddReview}
      />
    </section>
  );
}
