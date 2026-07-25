'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { MenuItem } from '@/data/menuItems';
import { X, Star, Clock, Plus, Minus, ShoppingBag, Check, Flame } from 'lucide-react';

interface ItemModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (
    item: MenuItem,
    quantity: number,
    selectedSugar?: string,
    selectedSpice?: string,
    selectedAddOns?: { name: string; price: number }[],
    notes?: string
  ) => void;
}

export default function ItemModal({ item, onClose, onAddToCart }: ItemModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSugar, setSelectedSugar] = useState<string>(
    item?.customizationOptions?.sugarLevel?.[0] || ''
  );
  const [selectedSpice, setSelectedSpice] = useState<string>(
    item?.customizationOptions?.spiceLevel?.[0] || ''
  );
  const [selectedAddOns, setSelectedAddOns] = useState<{ name: string; price: number }[]>([]);
  const [notes, setNotes] = useState('');

  if (!item) return null;

  const toggleAddOn = (addOn: { name: string; price: number }) => {
    if (selectedAddOns.some((a) => a.name === addOn.name)) {
      setSelectedAddOns(selectedAddOns.filter((a) => a.name !== addOn.name));
    } else {
      setSelectedAddOns([...selectedAddOns, addOn]);
    }
  };

  const addOnsTotal = selectedAddOns.reduce((sum, a) => sum + a.price, 0);
  const unitPrice = item.price + addOnsTotal;
  const totalPrice = unitPrice * quantity;

  const handleAdd = () => {
    onAddToCart(item, quantity, selectedSugar, selectedSpice, selectedAddOns, notes);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#1E1E1E] border border-white/10 rounded-3xl overflow-hidden shadow-2xl my-8 text-white"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-[#FF6A00] hover:text-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image & Header */}
          <div className="relative aspect-[16/9] w-full bg-[#121212]">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] via-transparent to-black/40" />

            <div className="absolute bottom-4 left-6 right-6">
              <span className="px-3 py-1 rounded-md bg-[#FF6A00] text-black text-[10px] font-bold font-num uppercase tracking-wider">
                {item.categoryLabel}
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading text-white mt-1">{item.name}</h2>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
            {/* Description & Specs */}
            <p className="text-gray-300 text-sm font-light leading-relaxed">
              {item.longDescription || item.description}
            </p>

            <div className="flex items-center gap-4 text-xs font-num text-gray-400 py-2 border-y border-white/10">
              <span className="flex items-center gap-1 text-[#FFB700] font-bold">
                <Star className="w-3.5 h-3.5 fill-current" /> {item.rating} ({item.reviewsCount} reviews)
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#00D4FF]" /> Prep: {item.prepTime}
              </span>
            </div>

            {/* Customization 1: Sugar Level */}
            {item.customizationOptions?.sugarLevel && (
              <div>
                <label className="block text-xs font-num uppercase tracking-wider text-gray-400 mb-2">
                  Sugar Preference
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {item.customizationOptions.sugarLevel.map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => setSelectedSugar(lvl)}
                      className={`py-2 px-3 rounded-xl text-xs font-num transition-all border ${
                        selectedSugar === lvl
                          ? 'bg-[#FF6A00] text-black font-bold border-[#FF6A00]'
                          : 'bg-[#121212] text-gray-300 border-white/10 hover:border-white/30'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Customization 2: Spice Level */}
            {item.customizationOptions?.spiceLevel && (
              <div>
                <label className="block text-xs font-num uppercase tracking-wider text-gray-400 mb-2">
                  Spice Level
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {item.customizationOptions.spiceLevel.map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => setSelectedSpice(lvl)}
                      className={`py-2 px-3 rounded-xl text-xs font-num transition-all border ${
                        selectedSpice === lvl
                          ? 'bg-[#FF6A00] text-black font-bold border-[#FF6A00]'
                          : 'bg-[#121212] text-gray-300 border-white/10 hover:border-white/30'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Customization 3: Add-Ons */}
            {item.customizationOptions?.addOns && (
              <div>
                <label className="block text-xs font-num uppercase tracking-wider text-gray-400 mb-2">
                  Popular Add-Ons
                </label>
                <div className="space-y-2">
                  {item.customizationOptions.addOns.map((addOn) => {
                    const isSelected = selectedAddOns.some((a) => a.name === addOn.name);
                    return (
                      <button
                        key={addOn.name}
                        type="button"
                        onClick={() => toggleAddOn(addOn)}
                        className={`w-full flex items-center justify-between p-3 rounded-xl text-xs font-num border transition-all ${
                          isSelected
                            ? 'bg-[#00D4FF]/10 border-[#00D4FF] text-white'
                            : 'bg-[#121212] border-white/10 text-gray-300 hover:border-white/30'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span
                            className={`w-4 h-4 rounded border flex items-center justify-center ${
                              isSelected
                                ? 'bg-[#00D4FF] border-[#00D4FF] text-black'
                                : 'border-gray-500'
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </span>
                          {addOn.name}
                        </span>
                        <span className="text-[#8AFF5C] font-bold">+₹{addOn.price}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Special Instructions */}
            <div>
              <label className="block text-xs font-num uppercase tracking-wider text-gray-400 mb-2">
                Special Kitchen Instructions (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Extra hot, serve in Kulhad pot..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6A00]"
              />
            </div>
          </div>

          {/* Footer Bar: Quantity & Add Button */}
          <div className="p-6 bg-[#121212] border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3 bg-[#1E1E1E] p-1.5 rounded-xl border border-white/10">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 rounded-lg bg-[#262626] text-white hover:bg-[#FF6A00] hover:text-black transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-8 text-center font-num font-bold text-base text-white">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 rounded-lg bg-[#262626] text-white hover:bg-[#FF6A00] hover:text-black transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={handleAdd}
              className="flex-1 sm:flex-none flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl bg-[#FF6A00] text-black font-heading text-lg tracking-wider uppercase font-bold shadow-[0_0_20px_rgba(255,106,0,0.4)] hover:scale-105 active:scale-95 transition-all"
            >
              <ShoppingBag className="w-5 h-5 stroke-[2.5]" />
              <span>Add to Ticket • ₹{totalPrice}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
