import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../slices/authSlice.js'; 
import { Menu, X, ShoppingBag, LogOut } from 'lucide-react'; // Added LogOut import

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const user = useSelector((state) => state.auth?.user);
  
  // FIXED: Added optional chaining and fallback empty array
  const cartItems = useSelector((state) => state.cart?.cartItems || []);
  const cartCount = cartItems.reduce((total, item) => total + (item.quantity || 0), 0);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    setIsMenuOpen(false);
    navigate('/');
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-[#FFD700] px-6 md:px-8 py-4 flex items-center justify-between border-b-4 border-black uppercase font-black text-black tracking-wider sticky top-0 z-[100]">
      
      {/* LEFT: Burger & Logo */}
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleMenu}
          className="md:hidden p-1 border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-0.5 active:translate-y-0.5"
        >
          {isMenuOpen ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
        </button>
        
        <div className="text-2xl font-black italic">
          <Link to="/home" onClick={() => setIsMenuOpen(false)}>STOP.</Link>
        </div>
      </div>

      {/* MIDDLE: Links */}
      <ul className="hidden md:flex gap-10 text-sm">
        <li className="hover:italic transition-all"><Link to="/home">Home</Link></li>
        <li className="hover:italic transition-all"><Link to="/coffeeList">Coffees</Link></li>
        <li className="hover:italic transition-all"><Link to="/ourStory">Our Story</Link></li>
      </ul>

      {/* RIGHT: User & Cart */}
      <div className="flex items-center gap-4 md:gap-6">
        {user ? (
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-[10px] leading-none mb-1">WELCOME,</span>
              <span className="text-xs font-black">{user.name}</span>
              <button onClick={handleLogout} className="text-[9px] underline hover:text-white transition-colors">LOGOUT</button>
            </div>
            <div className="w-10 h-10 border-2 border-black overflow-hidden bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
            </div>
          </div>
        ) : (
          <Link to="/" className="text-[10px] md:text-sm border-2 border-black px-3 py-1 bg-white hover:bg-black hover:text-[#FFD700] transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">SIGN IN</Link>
        )}

        <Link to="/cart" className="relative group p-1 border-2 border-transparent hover:border-black transition-all">
          <ShoppingBag size={28} strokeWidth={2.5} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-2 bg-black text-[#FFD700] text-[10px] w-5 h-5 flex items-center justify-center border-2 border-[#FFD700] font-bold">
              {cartCount}
            </span>
          )}
        </Link>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div className={`fixed inset-0 top-[72px] z-[90] bg-[#FFD700] transition-transform duration-500 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden border-t-4 border-black`}>
        <div className="flex flex-col p-8 gap-8">
          <Link to="/home" onClick={toggleMenu} className="text-4xl font-black italic border-b-4 border-black pb-2">Home</Link>
          <Link to="/coffeeList" onClick={toggleMenu} className="text-4xl font-black italic border-b-4 border-black pb-2">Coffees</Link>
          <Link to="/ourStory" onClick={toggleMenu} className="text-4xl font-black italic border-b-4 border-black pb-2">Our Story</Link>
          {user && (
            <button onClick={handleLogout} className="text-left text-2xl font-black text-red-600 flex items-center gap-2">
              <LogOut size={24} strokeWidth={3} /> LOGOUT_SYSTEM
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;