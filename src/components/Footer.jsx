import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#FFD700] border-t-8 border-black pt-16 pb-8 px-8 font-black text-black uppercase tracking-wider">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* COLUMN 1: BRANDING */}
        <div className="flex flex-col gap-4">
          <h2 className="text-6xl italic leading-none">STOP.</h2>
          <p className="text-sm max-w-250px">
            High caffeine. Low patience. <br /> 
            The only coffee that hits back.
          </p>
          <div className="flex gap-4 mt-4">
            <span className="w-10 h-10 bg-black text-[#FFD700] flex items-center justify-center cursor-pointer hover:translate-x-1 hover:-translate-y-1 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">IG</span>
            <span className="w-10 h-10 bg-black text-[#FFD700] flex items-center justify-center cursor-pointer hover:translate-x-1 hover:-translate-y-1 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">TW</span>
            <span className="w-10 h-10 bg-black text-[#FFD700] flex items-center justify-center cursor-pointer hover:translate-x-1 hover:-translate-y-1 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">FB</span>
          </div>
        </div>

        {/* COLUMN 2: QUICK LINKS */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl underline decoration-4 underline-offset-4">Navigation</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li><Link to="/home" className="hover:opacity-60 transition-opacity">Home</Link></li>
            <li><Link to="/coffeeList" className="hover:opacity-60 transition-opacity">Menu</Link></li>
            <li><Link to="/ourStory" className="hover:opacity-60 transition-opacity">Our Story</Link></li>
            <li><Link to="/locations" className="hover:opacity-60 transition-opacity">Locations</Link></li>
          </ul>
        </div>

        {/* COLUMN 3: NEWSLETTER / STOP CALLING */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl underline decoration-4 underline-offset-4">Get the beans.</h3>
          <p className="text-xs italic font-bold">Sign up for updates (or don't).</p>
          <div className="flex border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <input 
              type="text" 
              placeholder="EMAIL HERE" 
              className="bg-white p-3 outline-none w-full font-black placeholder:text-zinc-400"
            />
            <button className="bg-black text-[#FFD700] px-4 hover:bg-zinc-800 transition-colors border-l-4 border-black">
              GO
            </button>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="mt-20 pt-8 border-t-4 border-black flex flex-col md:flex-row justify-between items-center gap-4 text-[10px]">
        <p>© 2026 STOP. COFFEE CORP. NO RIGHTS RESERVED.</p>
        <p className="hover:italic cursor-pointer">PRIVACY POLICY / TERMS OF SERVICE</p>
      </div>
    </footer>
  );
};

export default Footer;