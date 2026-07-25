'use client';

import Image from 'next/image';
import {
  Coffee,
  Instagram,
  Facebook,
  Phone,
  MapPin,
  ArrowUp,
  Heart,
  MessageCircle,
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0A0A0A] border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-[#FF6A00]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Glowing Logo */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-2xl bg-[#121212] border border-[#FF6A00]/80 flex items-center justify-center shadow-[0_0_20px_rgba(255,106,0,0.4)]">
                <Image
                  src="/logo.png"
                  alt="HOT N COOL CUPS Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-heading text-3xl tracking-wider text-white leading-none">
                  HOT <span className="text-[#00D4FF]">N</span> COOL <span className="text-[#FF6A00]">CUPS</span>
                </h3>
                <p className="text-[10px] font-num text-gray-400 uppercase tracking-widest">
                  Industrial Neon & Urban Street Café
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-xs font-light max-w-sm leading-relaxed">
              Serving freshly brewed Hyderabadi Irani chai, artisanal espresso, cold Sharjah shakes, and crispy street bites under warm Edison lights in Quthbullapur.
            </p>

            {/* Social Icons with Neon Hover Effects */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#121212] border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#FF6A00] hover:border-[#FF6A00] hover:shadow-[0_0_15px_rgba(255,106,0,0.5)] transition-all"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#121212] border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#25D366] hover:border-[#25D366] hover:shadow-[0_0_15px_rgba(37,211,102,0.5)] transition-all"
                title="WhatsApp Kitchen"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#121212] border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#00D4FF] hover:border-[#00D4FF] hover:shadow-[0_0_15px_rgba(0,212,255,0.5)] transition-all"
                title="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#121212] border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#8AFF5C] hover:border-[#8AFF5C] hover:shadow-[0_0_15px_rgba(138,255,92,0.5)] transition-all"
                title="Google Maps"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading text-lg text-white tracking-wider">NAVIGATION</h4>
            <ul className="space-y-2 text-xs font-num text-gray-400">
              <li>
                <a href="#hero" className="hover:text-[#FF6A00] transition-colors">
                  Home Overview
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FF6A00] transition-colors">
                  Our Story & Vibe
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-[#FF6A00] transition-colors">
                  Featured Categories
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#FF6A00] transition-colors">
                  Signature Menu
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#FF6A00] transition-colors">
                  Atmosphere Gallery
                </a>
              </li>
              <li>
                <a href="#visit" className="hover:text-[#FF6A00] transition-colors">
                  Visit Us & Map
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours & Location Info */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-heading text-lg text-white tracking-wider">VISIT & TIMINGS</h4>
            <div className="text-xs font-num text-gray-400 space-y-2">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF6A00]" /> Bank Colony, Quthbullapur, Hyderabad
              </p>
              <p className="flex items-center gap-2">
                <Coffee className="w-4 h-4 text-[#00D4FF]" /> Opens Daily: 6:00 AM – 11:30 PM
              </p>
              <p className="flex items-center gap-2 text-[#8AFF5C]">
                <Phone className="w-4 h-4" /> Phone: +91 98765 43210
              </p>
            </div>

            <div className="pt-2">
              <span className="px-3 py-1.5 rounded-full bg-[#121212] border border-[#8AFF5C]/50 text-[#8AFF5C] font-num text-[10px] font-bold uppercase tracking-wider">
                ✓ Dine-In • Takeaway • Kitchen Queue
              </span>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-num text-gray-500 gap-4">
          <p>© HOT N COOL CUPS • Brewing Happiness Every Day.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#121212] border border-white/10 hover:border-[#FF6A00] text-gray-300 hover:text-white transition-all"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#FF6A00]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
