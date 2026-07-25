'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShoppingBag,
  Phone,
  Menu as MenuIcon,
  X,
  Volume2,
  VolumeX,
  MapPin,
  Coffee,
  Sparkles,
} from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  cartTotal: number;
  onOpenCart: () => void;
  isAudioPlaying: boolean;
  onToggleAudio: () => void;
}

export default function Navbar({
  cartCount,
  cartTotal,
  onOpenCart,
  isAudioPlaying,
  onToggleAudio,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Categories', href: '#categories' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Visit Us', href: '#visit' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#121212]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-xl'
          : 'bg-gradient-to-b from-[#121212]/90 via-[#121212]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-xl bg-[#1E1E1E] border border-[#FF6A00]/60 flex items-center justify-center shadow-[0_0_15px_rgba(255,106,0,0.3)] group-hover:border-[#FF6A00] transition-colors">
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 flex gap-0.5">
                <span className="w-1 h-3 bg-[#FF6A00] rounded-full animate-steam-1 opacity-70" />
                <span className="w-1 h-3.5 bg-[#00D4FF] rounded-full animate-steam-2 opacity-70" />
              </span>
              <Coffee className="w-5 h-5 text-[#FF6A00] group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-2xl tracking-wider text-white leading-none">
                HOT <span className="text-[#00D4FF]">N</span> COOL <span className="text-[#FF6A00]">CUPS</span>
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-num">
                Quthbullapur • Hyderabad
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#1E1E1E]/80 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs uppercase tracking-wider font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2.5">
            {/* Ambient Audio Synth Toggle */}
            <button
              onClick={onToggleAudio}
              className={`relative p-2.5 rounded-xl border transition-all ${
                isAudioPlaying
                  ? 'bg-[#FF6A00]/15 border-[#FF6A00] text-[#FF6A00] shadow-[0_0_12px_rgba(255,106,0,0.3)]'
                  : 'bg-[#1E1E1E] border-white/10 text-gray-400 hover:text-white hover:border-white/20'
              }`}
              title={isAudioPlaying ? 'Mute Ambient Cafe Audio' : 'Play Ambient Cafe Audio'}
            >
              {isAudioPlaying ? (
                <div className="flex items-center gap-1">
                  <Volume2 className="w-4 h-4 animate-pulse" />
                  <span className="hidden sm:inline-block text-[10px] font-num font-bold uppercase tracking-wider">
                    LO-FI
                  </span>
                </div>
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
            </button>

            {/* Quick Call Button */}
            <a
              href="tel:+919876543210"
              className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-[#1E1E1E] border border-white/10 text-xs font-num font-medium text-gray-300 hover:text-white hover:border-[#FF6A00]/50 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#8AFF5C]" />
              <span>Call Us</span>
            </a>

            {/* Order Cart Drawer Button */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#FF6A00] to-[#FF8A00] text-black font-semibold text-xs tracking-wider uppercase shadow-[0_0_15px_rgba(255,106,0,0.4)] hover:shadow-[0_0_25px_rgba(255,106,0,0.6)] hover:scale-[1.02] active:scale-95 transition-all"
            >
              <ShoppingBag className="w-4 h-4 text-black stroke-[2.5]" />
              <span className="hidden sm:inline font-bold">Quick Order</span>
              {cartCount > 0 ? (
                <span className="flex items-center justify-center bg-black text-[#FF6A00] text-[10px] font-bold rounded-full min-w-[20px] h-5 px-1 font-num">
                  {cartCount}
                </span>
              ) : null}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-[#1E1E1E] border border-white/10 text-gray-300 hover:text-white"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1E1E1E] border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2.5 rounded-lg text-sm uppercase tracking-wider font-medium text-gray-300 hover:bg-[#FF6A00]/20 hover:text-[#FF6A00] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between px-2 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#FF6A00]" /> Bank Colony, Quthbullapur
                </span>
                <span className="text-[#8AFF5C] font-num">Opens 6:00 AM</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
