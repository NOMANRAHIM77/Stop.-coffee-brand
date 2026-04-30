import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CoffeeDataCoffeeList } from '../data/coffeeDataCoffeeList';
import { ShoppingCart, CheckCircle2 } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../slices/cartSlice';

const CoffeeDetails = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  
  // State for the notification popup
  const [isAdded, setIsAdded] = useState(false);

  // Find coffee by slug (URL friendly)
  const coffee = CoffeeDataCoffeeList.find((c) => c.name === slug);

  const handleAddToCart = () => {
    dispatch(addToCart(coffee));
    
    // Trigger the popup logic
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 3000); // Hide after 3 seconds
  };

  if (!coffee) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white p-20 text-center font-black text-4xl uppercase">
        404: BEANS NOT FOUND IN SYSTEM.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-black uppercase p-8 relative overflow-x-hidden">
      
      {/* SUCCESS NOTIFICATION POPUP */}
      <div 
        className={`fixed top-10 right-10 z-100 bg-black text-[#FFD700] border-4 border-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 transform ${
          isAdded ? 'translate-x-0 opacity-100' : 'translate-x-[150%] opacity-0'
        } flex items-center gap-4`}
      >
        <div className="bg-[#FFD700] text-black p-1">
          <CheckCircle2 size={24} strokeWidth={3} />
        </div>
        <div>
          <p className="text-[10px] leading-none opacity-60">SYSTEM ALERT:</p>
          <p className="text-xl leading-none">{coffee.name} ADDED</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 border-8 border-black p-8 md:p-16 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] bg-white">
        
        {/* LEFT: IMAGE */}
        <div className="border-4 border-black overflow-hidden bg-zinc-100 aspect-square md:aspect-auto">
          <img 
            src={coffee.image} 
            alt={coffee.name} 
            className="w-full h-full object-cover contrast-125 grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>

        {/* RIGHT: CONTENT */}
        <div className="flex flex-col justify-between">
          <div>
            <span className="bg-black text-[#FFD700] px-3 py-1 text-sm inline-block mb-4">
              {coffee.tag || "PREMIUM"}
            </span>
            <h1 className="text-5xl md:text-8xl  leading-[0.85] mb-8 tracking-tighter italic">
              {coffee.name}
            </h1>
            <p className="text-xl md:text-2xl mb-8 border-l-8 border-[#FFD700] pl-6 leading-tight lowercase font-bold">
              {coffee.description}
            </p>

            <div className="mb-8">
              <h3 className="text-xl underline decoration-4 underline-offset-4 mb-6">COMPONENTS:</h3>
              <ul className="flex flex-wrap gap-3">
                {coffee.ingredients?.map((ing, i) => (
                  <li key={i} className="border-2 border-black px-4 py-2 bg-zinc-50 text-xs hover:bg-black hover:text-white transition-colors cursor-crosshair">
                    {ing}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t-4 border-black flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex flex-col">
              <span className="text-xs opacity-50">PRICE PER UNIT</span>
              <span className="text-5xl italic font-black">PKR {coffee.price}</span>
            </div>
            
            <button 
              onClick={handleAddToCart}
              className="w-full sm:w-auto flex items-center justify-center gap-4 bg-black text-[#FFD700] px-10 py-6 text-xl border-4 border-black hover:bg-[#FFD700] hover:text-black transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none"
            >
              <ShoppingCart size={24} strokeWidth={3} /> 
              ADD TO SYSTEM
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;