'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { MenuItem, MENU_ITEMS } from '@/data/menuItems';
import {
  Search,
  Star,
  Plus,
  Flame,
  Clock,
  Sparkles,
  Filter,
  Check,
  ShoppingBag,
  Info,
} from 'lucide-react';

interface MenuShowcaseProps {
  onSelectItem: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
  selectedCategoryFromParent?: string;
}

export default function MenuShowcase({
  onSelectItem,
  onQuickAdd,
  selectedCategoryFromParent,
}: MenuShowcaseProps) {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'veg' | 'spicy' | 'under50'>('all');

  const tabs = [
    { id: 'all', label: 'All Items' },
    { id: 'chai-coffee', label: 'Chai & Coffee' },
    { id: 'coolers', label: 'Cool Refreshments' },
    { id: 'quick-bites', label: 'Quick Bites' },
    { id: 'maggi', label: 'Maggi Specials' },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    // Category match
    const categoryMatch =
      activeTab === 'all' ||
      item.category === activeTab ||
      (activeTab === 'chai-coffee' && item.category === 'chai-coffee') ||
      (activeTab === 'quick-bites' && (item.category === 'quick-bites' || item.category === 'maggi'));

    // Search query match
    const searchMatch =
      searchQuery.trim() === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    // Attribute Filter match
    let filterMatch = true;
    if (activeFilter === 'veg') filterMatch = !!item.isVegetarian;
    if (activeFilter === 'spicy') filterMatch = !!item.isSpicy;
    if (activeFilter === 'under50') filterMatch = item.price <= 50;

    return categoryMatch && searchMatch && filterMatch;
  });

  return (
    <section id="menu" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#121212] overflow-hidden">
      {/* Background Neon Orbs */}
      <div className="absolute inset-0 bg-concrete opacity-50" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#FF6A00]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#00D4FF]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1E1E1E] border border-[#FF6A00]/40 text-[#FF6A00] font-num text-xs font-semibold uppercase tracking-widest mb-3">
            <Flame className="w-3.5 h-3.5" /> Signature Menu & Favorites
          </span>
          <h2 className="text-4xl sm:text-6xl font-heading text-white tracking-wider mb-4">
            BREWED & SERVED <span className="text-[#FF6A00] neon-text-orange">FRESH DAILY</span>
          </h2>
          <p className="text-gray-300 font-light text-base">
            Select any item to customize sweetness, spice level, and toppings or add directly to your order table ticket.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-10 bg-[#1E1E1E]/90 p-4 rounded-3xl border border-white/10 backdrop-blur-md">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-num font-medium uppercase tracking-wider whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#FF6A00] text-black font-bold shadow-[0_0_15px_rgba(255,106,0,0.5)]'
                    : 'bg-[#121212] text-gray-300 hover:text-white hover:bg-white/5 border border-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box & Quick Tag Filters */}
          <div className="flex items-center gap-3 w-full lg:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 lg:w-64">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search chai, coffee, fries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#121212] border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6A00] transition-colors"
              />
            </div>

            {/* Sub-Filters */}
            <div className="flex items-center gap-1.5 bg-[#121212] border border-white/10 p-1 rounded-xl text-xs font-num text-gray-300">
              <button
                onClick={() => setActiveFilter(activeFilter === 'veg' ? 'all' : 'veg')}
                className={`px-2.5 py-1 rounded-lg text-[11px] transition-colors ${
                  activeFilter === 'veg' ? 'bg-[#8AFF5C] text-black font-bold' : 'hover:text-white'
                }`}
              >
                Pure Veg
              </button>
              <button
                onClick={() => setActiveFilter(activeFilter === 'spicy' ? 'all' : 'spicy')}
                className={`px-2.5 py-1 rounded-lg text-[11px] transition-colors ${
                  activeFilter === 'spicy' ? 'bg-[#FF6A00] text-black font-bold' : 'hover:text-white'
                }`}
              >
                🌶 Spicy
              </button>
              <button
                onClick={() => setActiveFilter(activeFilter === 'under50' ? 'all' : 'under50')}
                className={`px-2.5 py-1 rounded-lg text-[11px] transition-colors ${
                  activeFilter === 'under50' ? 'bg-[#00D4FF] text-black font-bold' : 'hover:text-white'
                }`}
              >
                ≤ ₹50
              </button>
            </div>
          </div>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Item Image & Badges */}
                  <div
                    onClick={() => onSelectItem(item)}
                    className="relative aspect-[16/10] overflow-hidden bg-[#121212] cursor-pointer group"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] via-transparent to-black/30" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                      <div className="flex gap-1.5">
                        {item.isPopular && (
                          <span className="px-2.5 py-1 rounded-md bg-[#FF6A00] text-black text-[10px] font-bold font-num uppercase tracking-wider shadow-md">
                            ★ Bestseller
                          </span>
                        )}
                        {item.isVegetarian ? (
                          <span className="w-5 h-5 rounded bg-[#121212]/80 backdrop-blur-md border border-[#8AFF5C] flex items-center justify-center">
                            <span className="w-2 h-2 rounded-full bg-[#8AFF5C]" />
                          </span>
                        ) : (
                          <span className="w-5 h-5 rounded bg-[#121212]/80 backdrop-blur-md border border-[#FF6A00] flex items-center justify-center">
                            <span className="w-2 h-2 rounded-full bg-[#FF6A00]" />
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#121212]/90 backdrop-blur-md text-[11px] font-bold font-num text-[#FFB700]">
                        <Star className="w-3 h-3 fill-current" />
                        <span>{item.rating}</span>
                      </div>
                    </div>

                    {/* Prep Time Badge */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1 text-[11px] text-gray-300 font-num bg-[#121212]/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                      <Clock className="w-3 h-3 text-[#00D4FF]" />
                      <span>{item.prepTime}</span>
                    </div>
                  </div>

                  {/* Item Info */}
                  <div className="p-5">
                    <span className="text-[10px] font-num text-[#00D4FF] uppercase tracking-widest block mb-1">
                      {item.categoryLabel}
                    </span>
                    <h3
                      onClick={() => onSelectItem(item)}
                      className="text-2xl font-heading text-white tracking-wide hover:text-[#FF6A00] transition-colors cursor-pointer mb-2"
                    >
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-400 font-light line-clamp-2 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Footer Price & Add Button */}
                <div className="p-5 pt-0 border-t border-white/5 flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-[10px] uppercase text-gray-500 font-num block">Price</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold font-num text-[#8AFF5C]">₹{item.price}</span>
                      {item.originalPrice && (
                        <span className="text-xs text-gray-500 line-through font-num">
                          ₹{item.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectItem(item)}
                      className="p-2.5 rounded-xl bg-[#262626] border border-white/10 hover:border-white/30 text-gray-300 hover:text-white transition-all"
                      title="Customize options"
                    >
                      <Info className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => onQuickAdd(item)}
                      className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#FF6A00] text-black font-heading text-sm tracking-wider uppercase font-bold shadow-[0_0_15px_rgba(255,106,0,0.3)] hover:scale-105 active:scale-95 transition-all"
                    >
                      <Plus className="w-4 h-4 stroke-[3]" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-[#1E1E1E] rounded-3xl border border-white/10">
            <p className="text-gray-400 text-base font-light mb-2">No items matched your search criteria.</p>
            <button
              onClick={() => {
                setActiveTab('all');
                setSearchQuery('');
                setActiveFilter('all');
              }}
              className="px-4 py-2 bg-[#FF6A00] text-black text-xs font-bold uppercase rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
