import React, { useState } from 'react';
import { CoffeeDataCoffeeList } from '../data/coffeeDataCoffeeList';
import { Link } from 'react-router-dom';
import { Search, Eye, ShoppingCart, CheckCircle2 } from 'lucide-react';

// Redux Imports
import { useDispatch } from 'react-redux';
import { addToCart } from '../slices/cartSlice';

const CoffeeList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  
  // State for the popup notification
  const [addedItemName, setAddedItemName] = useState("");

  // Filter Logic
  const filteredCoffees = CoffeeDataCoffeeList.filter((coffee) =>
    coffee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    coffee.tag.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle Add to Cart with Notification
  const handleAddToCart = (coffee) => {
    dispatch(addToCart(coffee));
    
    // Set the name to show the popup
    setAddedItemName(coffee.name);
    
    // Hide popup after 3 seconds
    setTimeout(() => {
      setAddedItemName("");
    }, 3000);
  };

  return (
    <div className="bg-zinc-50 min-h-screen p-8 font-black uppercase relative overflow-x-hidden">
      
      {/* SYSTEM NOTIFICATION POPUP */}
      <div 
        className={`fixed top-10 right-10 z-100 bg-black text-[#FFD700] border-4 border-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 transform ${
          addedItemName ? 'translate-x-0 opacity-100' : 'translate-x-[150%] opacity-0'
        } flex items-center gap-4`}
      >
        <div className="bg-[#FFD700] text-black p-1">
          <CheckCircle2 size={24} strokeWidth={3} />
        </div>
        <div>
          <p className="text-[10px] leading-none opacity-60">SYSTEM UPDATE:</p>
          <p className="text-xl leading-none">{addedItemName} ADDED</p>
        </div>
      </div>

      {/* HEADER & SEARCH SECTION */}
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <h1 className="text-6xl md:text-8xl italic tracking-tighter leading-none">
            THE <br /> INVENTORY.
          </h1>
          <p className="mt-4 bg-black text-[#FFD700] inline-block px-4 py-1 text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
            {filteredCoffees.length} ITEMS DETECTED IN SYSTEM
          </p>
        </div>

        {/* SEARCH BAR */}
        <div className="relative w-full md:w-96 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-black z-10" size={24} />
          <input
            type="text"
            placeholder="SEARCH BY NAME OR TAG..."
            className="w-full bg-white border-4 border-black p-5 pl-14 outline-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] focus:bg-[#FFD700] transition-colors placeholder:text-zinc-400"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* GRID SECTION */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {filteredCoffees.length > 0 ? (
          filteredCoffees.map((coffee) => (
            <div 
              key={coffee.id} 
              className="group relative bg-white border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(255,215,0,1)] transition-all duration-300"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative aspect-square border-4 border-black overflow-hidden mb-4">
                <img 
                  src={coffee.image} 
                  alt={coffee.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
                />
                <div className="absolute top-2 right-2 bg-black text-[#FFD700] px-2 py-1 text-[10px]">
                  {coffee.tag}
                </div>
              </div>

              {/* DETAILS */}
              <div className="mb-4">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl italic leading-none max-w-[70%]">{coffee.name}</h2>
                  <span className="text-lg">PKR {coffee.price}</span>
                </div>
                <p className="text-[10px] font-bold text-zinc-600 lowercase line-clamp-2 leading-tight">
                  {coffee.description}
                </p>
              </div>

              {/* ACTIONS */}
              <div className="grid grid-cols-2 gap-2 mt-6">
                <Link 
                  to={`/coffeeList/${coffee.slug || coffee.name}`} 
                  className="flex items-center justify-center gap-2 border-2 border-black py-2 hover:bg-zinc-100 transition-colors text-xs"
                >
                  <Eye size={16} /> VIEW
                </Link>
                <button 
                  onClick={() => handleAddToCart(coffee)}
                  className="flex items-center justify-center gap-2 bg-black text-[#FFD700] py-2 hover:bg-[#FFD700] hover:text-black transition-colors text-xs border-2 border-black active:translate-x-1 active:translate-y-1"
                >
                  <ShoppingCart size={16} /> ADD
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center border-4 border-dashed border-black">
            <p className="text-4xl italic opacity-30">NO BEANS FOUND FOR "{searchTerm}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoffeeList;