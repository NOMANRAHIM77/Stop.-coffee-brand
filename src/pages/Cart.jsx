import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../slices/cartSlice';
import { Trash2, ShoppingBag, ArrowRight, CheckCircle2, Truck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

// Shadcn UI Components
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Cart = () => {
  const { items, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Modal State
  const [showSuccess, setShowSuccess] = useState(false);
  const [orderId] = useState(`STOP-${Math.floor(Math.random() * 90000) + 10000}`);

  const handleCheckout = () => {
    setShowSuccess(true);
    
    // Auto-clear cart and redirect after 4 seconds
    setTimeout(() => {
      dispatch(clearCart());
      setShowSuccess(false);
      navigate('/coffeeList');
    }, 4500);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center uppercase font-black">
        <ShoppingBag size={80} strokeWidth={3} className="mb-6 opacity-20" />
        <h2 className="text-4xl mb-4 italic">SYSTEM EMPTY.</h2>
        <p className="mb-8 text-zinc-500">No caffeine detected in your current queue.</p>
        <Link 
          to="/coffeeList" 
          className="bg-black text-[#FFD700] px-8 py-4 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:bg-[#FFD700] hover:text-black transition-all"
        >
          REFILL NOW
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-zinc-50 min-h-screen p-4 md:p-12 font-black uppercase">
      {/* SUCCESS MODAL */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="border-8 border-black bg-[#FFD700] rounded-none p-10 shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] outline-none">
          <DialogHeader className="items-center text-center">
            <div className="bg-black p-4 rounded-full mb-4">
              <CheckCircle2 size={48} className="text-[#FFD700] animate-bounce" />
            </div>
            <DialogTitle className="text-5xl italic font-black text-black leading-none mb-2">
              PURCHASE <br /> VERIFIED.
            </DialogTitle>
          </DialogHeader>

          <div className="text-center space-y-6">
            <div className="bg-white border-4 border-black p-4 inline-block">
              <p className="text-xs">TRANSACTION ID:</p>
              <p className="text-2xl">{orderId}</p>
            </div>

            <div className="relative py-10 overflow-hidden border-y-4 border-black">
              <p className="text-xl italic mb-4">YOUR COFFEE IS ON THE WAY...</p>
              {/* Delivery Animation */}
              <div className="flex justify-center animate-pulse">
                <Truck size={64} strokeWidth={3} className="animate-bounce" />
              </div>
              <div className="w-full h-2 bg-black mt-2 animate-pulse"></div>
            </div>

            <p className="text-sm">SYSTEM REBOOTING IN 4 SECONDS...</p>
          </div>
        </DialogContent>
      </Dialog>

      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl md:text-8xl italic tracking-tighter mb-12">THE <br /> QUEUE.</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* LEFT: ITEMS LIST */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div 
                key={item.id} 
                className="bg-white border-4 border-black p-4 md:p-6 flex flex-col md:flex-row items-center gap-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <div className="w-24 h-24 border-2 border-black shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale" />
                </div>
                
                <div className="grow text-center md:text-left">
                  <h3 className="text-2xl italic leading-none mb-1">{item.name}</h3>
                  <p className="text-xs text-zinc-500 mb-2">QTY: {item.quantity}</p>
                  <p className="text-lg">PKR {item.totalPrice}</p>
                </div>

                <button 
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="p-3 border-2 border-black hover:bg-red-500 hover:text-white transition-colors group"
                >
                  <Trash2 size={20} className="group-hover:animate-bounce" />
                </button>
              </div>
            ))}

            <button 
              onClick={() => dispatch(clearCart())}
              className="text-xs underline decoration-2 underline-offset-4 hover:text-red-600 transition-colors"
            >
              PURGE ENTIRE SYSTEM
            </button>
          </div>

          {/* RIGHT: SUMMARY */}
          <div className="lg:col-span-1">
            <div className="bg-[#FFD700] border-8 border-black p-8 sticky top-24 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-3xl mb-8 underline decoration-4 underline-offset-8">SUMMARY</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between border-b-2 border-black/20 pb-2">
                  <span>SUBTOTAL</span>
                  <span>PKR {totalAmount}</span>
                </div>
                <div className="flex justify-between border-b-2 border-black/20 pb-2">
                  <span>TAX (0%)</span>
                  <span>PKR 0</span>
                </div>
                <div className="flex justify-between text-2xl pt-4">
                  <span>TOTAL</span>
                  <span>PKR {totalAmount}</span>
                </div>
              </div>

              <button 
                onClick={handleCheckout}
                className="w-full bg-black text-[#FFD700] py-4 text-xl flex items-center justify-center gap-4 hover:bg-zinc-800 transition-all group active:scale-95"
              >
                INITIATE CHECKOUT <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
              
              <p className="text-[10px] mt-6 text-center leading-tight">
                BY CLICKING CHECKOUT YOU AGREE TO OUR TERMS OF HIGH CAFFEINE CONSUMPTION.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;