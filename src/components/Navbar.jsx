import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../slices/authSlice'; // Adjust path to your slice

const Navbar = () => {
  // 1. Get user from Redux state (auth is the key we used in store.js)
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Mock cart count (you'll replace this with useSelector from cartSlice later)
  const cartCount = 0;

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <nav className="bg-[#FFD700] px-8 py-4 flex items-center justify-between border-b-4 border-black uppercase font-black text-black tracking-wider sticky top-0 z-50">
      
      {/* LEFT: Logo */}
      <div className="text-2xl font-black italic">
        <Link to="/">STOP.</Link>
      </div>

      {/* MIDDLE: Links */}
      <ul className="hidden md:flex gap-10 text-sm">
        <li className="hover:italic transition-all">
          <Link to="/home">Home</Link>
        </li>
        <li className="hover:italic transition-all">
          <Link to="/coffeeList">Coffees</Link>
        </li>
        <li className="hover:italic transition-all">
          <Link to="/ourStory">Our Story</Link>
        </li>
      </ul>

      {/* RIGHT: User Profile & Cart */}
      <div className="flex items-center gap-6">
        
        {/* Conditional Rendering: User vs Login Link */}
        {user ? (
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-end">
              <span className="text-[10px] leading-none mb-1">WELCOME,</span>
              <span className="text-xs font-black">{user.name}</span>
              <button 
                onClick={handleLogout}
                className="text-[9px] underline hover:text-white transition-colors"
              >
                LOGOUT
              </button>
            </div>
            
            <div className="w-10 h-10 border-2 border-black overflow-hidden bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <img 
                src={user.avatar} 
                alt={user.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ) : (
          <Link 
            to="/" 
            className="text-sm border-2 border-black px-4 py-1 hover:bg-black hover:text-[#FFD700] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            SIGN IN
          </Link>
        )}

        {/* CART OPTION */}
        <Link to="/cart" className="relative group">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-2 bg-black text-[#FFD700] text-[10px] w-5 h-5 flex items-center justify-center rounded-full border border-[#FFD700]">
              {cartCount}
            </span>
          )}
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;