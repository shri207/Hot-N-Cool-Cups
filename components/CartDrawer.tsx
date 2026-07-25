'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { MenuItem } from '@/data/menuItems';
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  Send,
  CheckCircle,
  MapPin,
  Utensils,
  Receipt,
  Sparkles,
  Printer,
} from 'lucide-react';

export interface CartItem {
  cartId: string;
  item: MenuItem;
  quantity: number;
  sugar?: string;
  spice?: string;
  addOns?: { name: string; price: number }[];
  notes?: string;
  totalPrice: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (cartId: string, delta: number) => void;
  onRemoveItem: (cartId: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  const [orderType, setOrderType] = useState<'dine-in' | 'takeaway'>('dine-in');
  const [tableNumber, setTableNumber] = useState<string>('Table 04');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [orderPlaced, setOrderPlaced] = useState<boolean>(false);
  const [receiptNumber, setReceiptNumber] = useState<string>('');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, ci) => sum + ci.totalPrice, 0);
  const taxes = Math.round(subtotal * 0.05); // 5% GST
  const grandTotal = subtotal + taxes;

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF6A00', '#00D4FF', '#8AFF5C'],
    });
  };

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) return;
    const rNo = 'HNC-' + Math.floor(1000 + Math.random() * 9000);
    setReceiptNumber(rNo);
    setOrderPlaced(true);
    triggerConfetti();
  };

  const handleWhatsAppSend = () => {
    const itemsFormatted = cartItems
      .map(
        (ci, i) =>
          `${i + 1}. *${ci.item.name}* x${ci.quantity} - ₹${ci.totalPrice}${
            ci.sugar ? ` [${ci.sugar}]` : ''
          }${ci.spice ? ` [${ci.spice}]` : ''}${
            ci.addOns && ci.addOns.length > 0
              ? ` (Add-ons: ${ci.addOns.map((a) => a.name).join(', ')})`
              : ''
          }`
      )
      .join('\n');

    const text = `*HOT N COOL CUPS - KITCHEN ORDER TICKET*\n` +
      `----------------------------------------\n` +
      `*Receipt:* #${receiptNumber}\n` +
      `*Order Type:* ${orderType === 'dine-in' ? `Dine-In (${tableNumber})` : 'Takeaway / Parcel'}\n` +
      `*Customer:* ${customerName || 'Guest'}${customerPhone ? ` (${customerPhone})` : ''}\n` +
      `----------------------------------------\n` +
      `*ITEMS:*\n${itemsFormatted}\n` +
      `----------------------------------------\n` +
      `*Grand Total:* ₹${grandTotal} (Incl. Taxes)\n\n` +
      `Please prepare fresh & notify when ready! ☕🍟`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/919876543210?text=${encodedText}`, '_blank');
  };

  const handleNewOrder = () => {
    onClearCart();
    setOrderPlaced(false);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="relative w-full max-w-md h-full bg-[#121212] border-l border-white/10 flex flex-col justify-between text-white shadow-2xl"
        >
          {/* Header */}
          <div className="p-5 bg-[#1E1E1E] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#FF6A00] flex items-center justify-center text-black">
                <ShoppingBag className="w-4 h-4 stroke-[2.5]" />
              </div>
              <div>
                <h2 className="font-heading text-2xl text-white leading-none">ORDER TICKET</h2>
                <p className="text-[10px] font-num text-gray-400">HOT N COOL CUPS Kitchen Queue</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#262626] text-gray-400 hover:text-white hover:bg-[#FF6A00] hover:text-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content or Order Confirmation */}
          {!orderPlaced ? (
            <>
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {/* Order Type Toggle */}
                <div className="grid grid-cols-2 gap-2 bg-[#1E1E1E] p-1.5 rounded-2xl border border-white/10">
                  <button
                    type="button"
                    onClick={() => setOrderType('dine-in')}
                    className={`py-2 px-3 rounded-xl text-xs font-num font-bold uppercase transition-all ${
                      orderType === 'dine-in'
                        ? 'bg-[#FF6A00] text-black shadow-md'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Dine-In
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderType('takeaway')}
                    className={`py-2 px-3 rounded-xl text-xs font-num font-bold uppercase transition-all ${
                      orderType === 'takeaway'
                        ? 'bg-[#00D4FF] text-black shadow-md'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Takeaway / Parcel
                  </button>
                </div>

                {orderType === 'dine-in' && (
                  <div className="flex items-center justify-between bg-[#1E1E1E] p-3 rounded-xl border border-white/10 text-xs font-num">
                    <span className="text-gray-400">Select Seating Table:</span>
                    <select
                      value={tableNumber}
                      onChange={(e) => setTableNumber(e.target.value)}
                      className="bg-[#121212] border border-white/10 rounded-lg px-2.5 py-1 text-white text-xs focus:outline-none focus:border-[#FF6A00]"
                    >
                      <option value="Table 01">Table 01 (Outdoor Neon)</option>
                      <option value="Table 02">Table 02 (Indoor Couch)</option>
                      <option value="Table 03">Table 03 (High Counter)</option>
                      <option value="Table 04">Table 04 (Lounge Corner)</option>
                      <option value="Table 05">Table 05 (Garden Patio)</option>
                    </select>
                  </div>
                )}

                {/* Customer Details Inputs */}
                <div className="grid grid-cols-2 gap-2 text-xs font-num">
                  <input
                    type="text"
                    placeholder="Your Name (Optional)"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="bg-[#1E1E1E] border border-white/10 rounded-xl px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6A00]"
                  />
                  <input
                    type="tel"
                    placeholder="Mobile No. (Optional)"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="bg-[#1E1E1E] border border-white/10 rounded-xl px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6A00]"
                  />
                </div>

                {/* Items List */}
                {cartItems.length === 0 ? (
                  <div className="text-center py-16 flex flex-col items-center justify-center text-gray-500">
                    <ShoppingBag className="w-12 h-12 stroke-1 mb-3 text-gray-600 animate-pulse" />
                    <p className="text-sm font-light">Your ticket is currently empty.</p>
                    <p className="text-xs text-gray-600 mt-1">
                      Explore our menu and add your favorite chai & snacks!
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {cartItems.map((ci) => (
                      <div
                        key={ci.cartId}
                        className="bg-[#1E1E1E] border border-white/10 rounded-2xl p-3.5 flex items-start justify-between gap-3"
                      >
                        <div className="flex-1">
                          <h4 className="font-heading text-lg text-white leading-tight">
                            {ci.item.name}
                          </h4>
                          <p className="text-[11px] font-num text-[#FF6A00] font-semibold mt-0.5">
                            ₹{ci.item.price} each
                          </p>

                          {/* Customizations summary */}
                          <div className="mt-1 space-y-0.5 text-[10px] text-gray-400 font-num">
                            {ci.sugar && <p>• Sugar: {ci.sugar}</p>}
                            {ci.spice && <p>• Spice: {ci.spice}</p>}
                            {ci.addOns && ci.addOns.length > 0 && (
                              <p className="text-[#00D4FF]">
                                • Add-ons: {ci.addOns.map((a) => a.name).join(', ')}
                              </p>
                            )}
                            {ci.notes && <p className="italic text-gray-500">Note: {ci.notes}</p>}
                          </div>

                          <div className="flex items-center gap-2 mt-3">
                            <button
                              onClick={() => onUpdateQuantity(ci.cartId, -1)}
                              className="p-1.5 rounded-md bg-[#121212] text-gray-300 hover:text-white hover:bg-[#FF6A00] hover:text-black transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-bold font-num px-2">{ci.quantity}</span>
                            <button
                              onClick={() => onUpdateQuantity(ci.cartId, 1)}
                              className="p-1.5 rounded-md bg-[#121212] text-gray-300 hover:text-white hover:bg-[#FF6A00] hover:text-black transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>

                        <div className="flex flex-col items-end justify-between self-stretch">
                          <button
                            onClick={() => onRemoveItem(ci.cartId)}
                            className="text-gray-500 hover:text-red-400 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                          <span className="text-sm font-bold font-num text-[#8AFF5C]">
                            ₹{ci.totalPrice}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Order Footer Calculation */}
              {cartItems.length > 0 && (
                <div className="p-5 bg-[#1E1E1E] border-t border-white/10 space-y-3">
                  <div className="space-y-1.5 text-xs font-num text-gray-400">
                    <div className="flex justify-between">
                      <span>Items Subtotal</span>
                      <span>₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Estimated GST (5%)</span>
                      <span>₹{taxes}</span>
                    </div>
                    <div className="flex justify-between text-white font-bold text-base pt-2 border-t border-white/10">
                      <span>Grand Total</span>
                      <span className="text-[#8AFF5C]">₹{grandTotal}</span>
                    </div>
                  </div>

                  <button
                    onClick={handlePlaceOrder}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#FF6A00] text-black font-heading text-xl tracking-wider uppercase font-bold shadow-[0_0_20px_rgba(255,106,0,0.5)] hover:scale-[1.02] active:scale-95 transition-all"
                  >
                    <span>Confirm & Generate Receipt</span>
                  </button>
                </div>
              )}
            </>
          ) : (
            /* Order Placed Receipt Screen */
            <div className="flex-1 overflow-y-auto p-6 flex flex-col justify-between">
              <div className="text-center space-y-4 my-auto">
                <div className="w-16 h-16 rounded-full bg-[#8AFF5C]/20 border border-[#8AFF5C] flex items-center justify-center text-[#8AFF5C] mx-auto shadow-[0_0_20px_rgba(138,255,92,0.4)] animate-bounce">
                  <CheckCircle className="w-8 h-8 stroke-[2.5]" />
                </div>

                <h3 className="text-3xl font-heading text-white">ORDER CONFIRMED!</h3>
                <p className="text-xs text-gray-300 font-num">
                  Receipt Token: <span className="text-[#FF6A00] font-bold">#{receiptNumber}</span>
                </p>

                {/* Printable Simulated Receipt */}
                <div className="bg-[#1E1E1E] border border-white/10 rounded-2xl p-4 text-left font-num text-xs space-y-3 shadow-inner my-4">
                  <div className="text-center border-b border-dashed border-gray-600 pb-3">
                    <p className="font-bold text-sm text-white">HOT N COOL CUPS</p>
                    <p className="text-[10px] text-gray-400">Quthbullapur, Hyderabad</p>
                  </div>

                  <div className="space-y-1">
                    <p className="flex justify-between text-gray-400">
                      <span>Service Mode:</span>
                      <span className="text-white font-bold capitalize">
                        {orderType === 'dine-in' ? tableNumber : 'Takeaway'}
                      </span>
                    </p>
                    <p className="flex justify-between text-gray-400">
                      <span>Status:</span>
                      <span className="text-[#8AFF5C]">Fresh Preparation</span>
                    </p>
                  </div>

                  <div className="border-t border-dashed border-gray-600 pt-2 space-y-1">
                    {cartItems.map((ci, idx) => (
                      <div key={idx} className="flex justify-between text-gray-300">
                        <span>
                          {ci.quantity}x {ci.item.name}
                        </span>
                        <span>₹{ci.totalPrice}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-dashed border-gray-600 pt-2 flex justify-between font-bold text-sm text-white">
                    <span>Total Paid</span>
                    <span className="text-[#8AFF5C]">₹{grandTotal}</span>
                  </div>
                </div>

                <p className="text-xs text-gray-400 font-light">
                  Click below to send this ticket directly to our kitchen WhatsApp line for instant preparation!
                </p>

                <button
                  onClick={handleWhatsAppSend}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#25D366] text-black font-heading text-lg font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-105 transition-all"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Order to Kitchen WhatsApp</span>
                </button>
              </div>

              <div className="pt-4 border-t border-white/10 flex gap-2">
                <button
                  onClick={handleNewOrder}
                  className="flex-1 py-3 rounded-xl bg-[#1E1E1E] border border-white/10 text-gray-300 hover:text-white text-xs font-num font-bold uppercase"
                >
                  Start New Ticket
                </button>
                <button
                  onClick={onClose}
                  className="px-4 py-3 rounded-xl bg-[#FF6A00] text-black text-xs font-num font-bold uppercase"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
