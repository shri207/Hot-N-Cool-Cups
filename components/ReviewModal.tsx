'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Star, Send, Check } from 'lucide-react';
import { Review } from '@/data/reviewsData';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddReview: (review: Review) => void;
}

export default function ReviewModal({ isOpen, onClose, onAddReview }: ReviewModalProps) {
  const [author, setAuthor] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [tag, setTag] = useState('Chai Lover');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !comment.trim()) return;

    const newRev: Review = {
      id: 'rev-' + Date.now(),
      author: author.trim(),
      location: location.trim() || 'Quthbullapur, Hyderabad',
      rating,
      date: 'Just now',
      comment: comment.trim(),
      tag,
      verifiedVisit: true,
    };

    onAddReview(newRev);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-lg bg-[#1E1E1E] border border-white/10 rounded-3xl p-6 shadow-2xl text-white"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-[#121212] text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <span className="text-xs font-num font-semibold text-[#FF6A00] uppercase tracking-wider block mb-1">
                  Feedback & Testimonial
                </span>
                <h3 className="text-3xl font-heading text-white">LEAVE A REVIEW</h3>
                <p className="text-xs text-gray-400 font-light">
                  Share your Hot N Cool Cups experience with the Hyderabad community!
                </p>
              </div>

              {/* Star Rating Selector */}
              <div>
                <label className="block text-xs font-num text-gray-400 uppercase mb-1">Your Rating</label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="p-1 hover:scale-125 transition-transform"
                    >
                      <Star
                        className={`w-7 h-7 ${
                          star <= rating ? 'text-[#FFB700] fill-current' : 'text-gray-600'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-num text-gray-400 uppercase mb-1">Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Verma"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full bg-[#121212] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6A00]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-num text-gray-400 uppercase mb-1">Location</label>
                  <input
                    type="text"
                    placeholder="e.g. Quthbullapur"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-[#121212] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6A00]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-num text-gray-400 uppercase mb-1">Tag / Specialty</label>
                <select
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  className="w-full bg-[#121212] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF6A00]"
                >
                  <option value="Chai Lover">Chai Lover</option>
                  <option value="Coffee Addict">Coffee Addict</option>
                  <option value="Sharjah Fan">Sharjah Fan</option>
                  <option value="Snack Enthusiast">Snack Enthusiast</option>
                  <option value="Evening Regular">Evening Regular</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-num text-gray-400 uppercase mb-1">Your Review *</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Tell us about the chai aroma, coffee flavor, fries crispiness, or cafe vibes..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full bg-[#121212] border border-white/10 rounded-xl p-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6A00]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#FF6A00] text-black font-heading text-lg font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(255,106,0,0.4)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Review</span>
              </button>
            </form>
          ) : (
            <div className="py-12 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#8AFF5C]/20 text-[#8AFF5C] border border-[#8AFF5C] flex items-center justify-center mx-auto">
                <Check className="w-6 h-6 stroke-[3]" />
              </div>
              <h4 className="text-2xl font-heading text-white">THANK YOU!</h4>
              <p className="text-xs text-gray-300 font-num">Your review has been published.</p>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
