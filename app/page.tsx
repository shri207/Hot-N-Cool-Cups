'use client';

import { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Categories from '@/components/Categories';
import MenuShowcase from '@/components/MenuShowcase';
import ItemModal from '@/components/ItemModal';
import CartDrawer, { CartItem } from '@/components/CartDrawer';
import WhyUsTimeline from '@/components/WhyUsTimeline';
import Reviews from '@/components/Reviews';
import GalleryMasonry from '@/components/GalleryMasonry';
import VisitMap from '@/components/VisitMap';
import Footer from '@/components/Footer';
import AmbientAudio from '@/components/AmbientAudio';
import ParticlesBackground from '@/components/ParticlesBackground';
import { MenuItem } from '@/data/menuItems';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedItemModal, setSelectedItemModal] = useState<MenuItem | null>(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  // Cart Handlers
  const handleAddToCart = (
    item: MenuItem,
    quantity: number,
    sugar?: string,
    spice?: string,
    addOns?: { name: string; price: number }[],
    notes?: string
  ) => {
    const addOnsPrice = (addOns || []).reduce((sum, a) => sum + a.price, 0);
    const unitPrice = item.price + addOnsPrice;
    const totalPrice = unitPrice * quantity;

    const cartId = `${item.id}-${sugar || ''}-${spice || ''}-${(addOns || [])
      .map((a) => a.name)
      .join(',')}-${notes || ''}`;

    setCartItems((prev) => {
      const existingIdx = prev.findIndex((ci) => ci.cartId === cartId);
      if (existingIdx > -1) {
        const updated = [...prev];
        const newQty = updated[existingIdx].quantity + quantity;
        updated[existingIdx] = {
          ...updated[existingIdx],
          quantity: newQty,
          totalPrice: unitPrice * newQty,
        };
        return updated;
      }
      return [
        ...prev,
        {
          cartId,
          item,
          quantity,
          sugar,
          spice,
          addOns,
          notes,
          totalPrice,
        },
      ];
    });

    setIsCartOpen(true);
  };

  const handleQuickAdd = (item: MenuItem) => {
    handleAddToCart(item, 1);
  };

  const handleUpdateQuantity = (cartId: string, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((ci) => {
          if (ci.cartId === cartId) {
            const newQty = ci.quantity + delta;
            if (newQty <= 0) return null;
            const unitPrice = ci.totalPrice / ci.quantity;
            return {
              ...ci,
              quantity: newQty,
              totalPrice: unitPrice * newQty,
            };
          }
          return ci;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveItem = (cartId: string) => {
    setCartItems((prev) => prev.filter((ci) => ci.cartId !== cartId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Scroll navigation helpers
  const handleExploreMenu = () => {
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleVisitUs = () => {
    const el = document.getElementById('visit');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectCategory = (categoryId: string) => {
    handleExploreMenu();
  };

  const cartTotal = cartItems.reduce((sum, ci) => sum + ci.totalPrice, 0);
  const cartCount = cartItems.reduce((sum, ci) => sum + ci.quantity, 0);

  return (
    <main className="relative bg-[#121212] min-h-screen text-white selection:bg-[#FF6A00] selection:text-black">
      {/* Loading Screen */}
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      {/* Floating Particles */}
      <ParticlesBackground />

      {/* Ambient Lo-Fi Audio Generator */}
      <AmbientAudio isPlaying={isAudioPlaying} />

      {/* Sticky Header Navbar */}
      <Navbar
        cartCount={cartCount}
        cartTotal={cartTotal}
        onOpenCart={() => setIsCartOpen(true)}
        isAudioPlaying={isAudioPlaying}
        onToggleAudio={() => setIsAudioPlaying(!isAudioPlaying)}
      />

      {/* Main Page Sections */}
      <Hero onExploreMenu={handleExploreMenu} onVisitUs={handleVisitUs} />
      <About />
      <Categories onSelectCategory={handleSelectCategory} />
      <MenuShowcase
        onSelectItem={(item) => setSelectedItemModal(item)}
        onQuickAdd={handleQuickAdd}
      />
      <WhyUsTimeline />
      <Reviews />
      <GalleryMasonry />
      <VisitMap />
      <Footer />

      {/* Item Detail / Customization Modal */}
      <ItemModal
        item={selectedItemModal}
        onClose={() => setSelectedItemModal(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Order Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </main>
  );
}
