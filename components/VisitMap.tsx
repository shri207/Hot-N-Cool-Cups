'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Clock,
  Phone,
  Navigation,
  Share2,
  Check,
  Copy,
  ExternalLink,
  Sparkles,
  Layers,
} from 'lucide-react';

export default function VisitMap() {
  const [mapMode, setMapMode] = useState<'neon' | 'street'>('neon');
  const [copied, setCopied] = useState(false);

  const address = 'Bank Colony, Quthbullapur, Hyderabad, Telangana 500055';
  const phone = '+91 98765 43210';
  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Bank+Colony+Quthbullapur+Hyderabad';

  const handleCopy = () => {
    navigator.clipboard.writeText(`${address} | Hot N Cool Cups Cafe`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="visit" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#121212] overflow-hidden">
      {/* Background Neon Elements */}
      <div className="absolute inset-0 bg-concrete opacity-50" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#FF6A00]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-num font-semibold uppercase tracking-[0.25em] text-[#00D4FF] block mb-2">
            Locate Our Urban Hangout
          </span>
          <h2 className="text-4xl sm:text-6xl font-heading text-white tracking-wider">
            VISIT <span className="text-[#00D4FF] neon-text-cyan">HOT N COOL CUPS</span>
          </h2>
          <p className="text-gray-400 font-light text-sm mt-2">
            Located conveniently in Bank Colony, Quthbullapur. Easy parking, cozy seating, and piping hot chai awaiting you!
          </p>
        </div>

        {/* Split Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Interactive Stylized Map View */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden bg-[#1E1E1E] border border-white/10 p-2 shadow-2xl">
            {/* Map Mode Controls Header */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-[#121212]/90 backdrop-blur-md p-1.5 rounded-xl border border-white/10 text-xs font-num">
              <span className="text-gray-400 pl-2">Theme:</span>
              <button
                onClick={() => setMapMode('neon')}
                className={`px-3 py-1 rounded-lg transition-colors ${
                  mapMode === 'neon'
                    ? 'bg-[#FF6A00] text-black font-bold'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Neon Dark
              </button>
              <button
                onClick={() => setMapMode('street')}
                className={`px-3 py-1 rounded-lg transition-colors ${
                  mapMode === 'street'
                    ? 'bg-[#00D4FF] text-black font-bold'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Street Vector
              </button>
            </div>

            {/* Stylized Canvas / Interactive Vector Map Container */}
            <div className="relative aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-[#0A0A0A] flex items-center justify-center">
              {/* Map Canvas Background Grid */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  mapMode === 'neon'
                    ? 'bg-[radial-gradient(#1E1E1E_1px,transparent_1px)] [background-size:16px_16px]'
                    : 'bg-[#181818]'
                }`}
              />

              {/* Vector Road Lines Simulation */}
              <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 800 500">
                {/* Major Highways & Local Streets */}
                <path d="M 0 250 Q 400 200 800 250" stroke="#333333" strokeWidth="24" fill="none" />
                <path
                  d="M 0 250 Q 400 200 800 250"
                  stroke={mapMode === 'neon' ? '#FF6A00' : '#00D4FF'}
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  fill="none"
                />

                <path d="M 400 0 Q 450 250 400 500" stroke="#333333" strokeWidth="18" fill="none" />
                <path d="M 150 0 L 650 500" stroke="#222222" strokeWidth="12" fill="none" />
                <path d="M 100 400 L 700 100" stroke="#222222" strokeWidth="12" fill="none" />

                {/* Landmarks */}
                <circle cx="250" cy="180" r="12" fill="#2A2A2A" />
                <text x="250" y="210" fill="#666" fontSize="10" textAnchor="middle" fontFamily="sans-serif">
                  Quthbullapur Circle
                </text>

                <circle cx="550" cy="320" r="12" fill="#2A2A2A" />
                <text x="550" y="350" fill="#666" fontSize="10" textAnchor="middle" fontFamily="sans-serif">
                  Balanagar Highway
                </text>
              </svg>

              {/* Pulsing Café Pin Marker */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-[#FF6A00]/20 border-2 border-[#FF6A00] animate-ping absolute inset-0" />
                  <div className="w-16 h-16 rounded-full bg-[#1E1E1E] border-2 border-[#FF6A00] shadow-[0_0_25px_rgba(255,106,0,0.8)] flex items-center justify-center text-[#FF6A00]">
                    <MapPin className="w-8 h-8 fill-[#FF6A00]/20 stroke-[2.5]" />
                  </div>
                </div>

                {/* Pin Tooltip Box */}
                <div className="mt-3 bg-[#121212]/95 backdrop-blur-md border border-[#FF6A00] px-4 py-2 rounded-xl text-center shadow-2xl">
                  <p className="font-heading text-lg text-white leading-none">HOT N COOL CUPS</p>
                  <p className="text-[10px] text-[#8AFF5C] font-num font-bold mt-0.5">
                    📍 Bank Colony • Opens 6:00 AM
                  </p>
                </div>
              </div>

              {/* Map Bottom Overlay Controls */}
              <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between bg-[#121212]/90 backdrop-blur-md p-3 rounded-2xl border border-white/10 text-xs font-num text-gray-300">
                <span className="flex items-center gap-1.5 text-white font-bold">
                  <Navigation className="w-4 h-4 text-[#FF6A00] animate-bounce" />
                  Quthbullapur Main Road
                </span>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#FF6A00] text-black font-bold uppercase hover:scale-105 transition-transform"
                >
                  <span>Open Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Cafe Info & Quick Action Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <div className="bg-[#1E1E1E] border border-white/10 rounded-3xl p-8 space-y-6 shadow-xl">
              <div>
                <span className="text-[10px] font-num text-[#00D4FF] font-bold uppercase tracking-widest block mb-1">
                  Neighbourhood Café
                </span>
                <h3 className="text-4xl font-heading text-white tracking-wide">
                  HOT N COOL <span className="text-[#FF6A00]">CUPS</span>
                </h3>
              </div>

              {/* Address Row */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#121212] border border-white/10 flex items-center justify-center text-[#FF6A00] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-num font-bold uppercase text-gray-400">Address</h4>
                  <p className="text-sm text-white font-medium mt-0.5">{address}</p>
                  <p className="text-xs text-gray-400 mt-1">Landmark: Near Bank Colony Main Junction</p>
                </div>
              </div>

              {/* Hours Row */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#121212] border border-white/10 flex items-center justify-center text-[#8AFF5C] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-num font-bold uppercase text-gray-400">Operating Hours</h4>
                  <p className="text-sm text-white font-medium mt-0.5">Opens Daily • 6:00 AM – 11:30 PM</p>
                  <p className="text-xs text-[#8AFF5C] font-num mt-1">Early Morning Chai & Late Night Bites</p>
                </div>
              </div>

              {/* Phone Row */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#121212] border border-white/10 flex items-center justify-center text-[#00D4FF] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-num font-bold uppercase text-gray-400">Phone & Orders</h4>
                  <p className="text-sm text-white font-medium font-num mt-0.5">{phone}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#FF6A00] text-black font-heading text-base font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(255,106,0,0.4)] hover:scale-105 transition-all text-center"
                >
                  <Navigation className="w-4 h-4 stroke-[2.5]" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={`tel:${phone}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#121212] border border-white/20 text-white hover:border-[#8AFF5C] font-heading text-base font-bold uppercase tracking-wider transition-all text-center"
                >
                  <Phone className="w-4 h-4 text-[#8AFF5C]" />
                  <span>Call Now</span>
                </a>
              </div>

              <button
                onClick={handleCopy}
                className="w-full py-2.5 rounded-xl bg-[#121212] border border-white/10 text-gray-300 hover:text-white text-xs font-num flex items-center justify-center gap-2 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#8AFF5C]" />
                    <span className="text-[#8AFF5C] font-bold">Address Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Address & Location Info</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
