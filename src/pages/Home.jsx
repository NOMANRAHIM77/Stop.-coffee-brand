import React from 'react';
import { CoffeeDataHome } from '../data/CoffeeDataHome.jsx';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-white min-h-screen font-black uppercase overflow-x-hidden">
      
      {/* HERO SECTION - Keep as is */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-8 py-20 bg-[#FFD700] border-b-8 border-black">
        <div className="z-10 max-w-2xl">
          <h1 className="text-7xl md:text-9xl leading-[0.8] tracking-tighter mb-6 italic">
            STOP <br /> DREAMING. <br /> START <br /> DRINKING.
          </h1>
          <p className="text-xl md:text-2xl bg-black text-white p-4 inline-block shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] border-2 border-white">
            WAKE UP TO THE RAW POWER OF CAFFEINE.
          </p>
        </div>
        
        <div className="relative mt-12 md:mt-0">
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-black rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <img 
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&auto=format&fit=crop" 
            alt="Hero Coffee" 
            className="w-80 md:w-450px border-8 border-black shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-4 hover:-translate-y-4 transition-transform duration-300"
          />
        </div>
      </section>

      {/* MARQUEE EFFECT - Keep as is */}
      <div className="bg-black text-[#FFD700] py-4 border-b-8 border-black overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block text-xl sm:text-2xl md:text-4xl italic">
  BEST COFFEE IN THE CITY • NO SURRENDER • HIGH CAFFEINE • STOP CALLING • 
</div>
      </div>

      {/* PRODUCT GRID SECTION */}
      <section className="px-8 py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <h2 className="text-6xl md:text-8xl tracking-tighter">OUR <br /> FUEL.</h2>
          <Link to="/coffeeList" className="bg-black text-[#FFD700] px-8 py-4 text-xl border-4 border-black hover:bg-white hover:text-black transition-colors shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            VIEW ALL MENU
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {CoffeeDataHome.map((coffee) => (
            /* We wrap the whole card in a Link for better UX, or just the button */
            <div key={coffee.id} className="group border-4 border-black p-6 bg-white hover:bg-[#FFD700] transition-colors shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col">
              <div className="relative mb-6 overflow-hidden border-4 border-black aspect-square">
                <img 
                  src={coffee.image} 
                  
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
                />
                <span className="absolute top-4 left-4 bg-black text-white text-xs px-2 py-1">
                  {coffee.tag}
                </span>
              </div>
              <h3 className="text-3xl mb-2 italic underline decoration-4">{coffee.name}</h3>
              <p className="text-sm font-bold leading-tight mb-6 lowercase grow">
                {coffee.description}
              </p>
              
              {/* Change <button> to <Link> for dynamic routing */}
              <Link 
                to={`/coffee/${coffee.name}`} 
                className="w-full border-4 border-black py-2 bg-white text-center hover:bg-black hover:text-white transition-colors font-black"
              >
                ORDER NOW
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION - Keep as is */}
      <section className="bg-zinc-100 border-y-8 border-black p-12 text-center">
        <h2 className="text-5xl md:text-7xl mb-8 leading-none">WANT TO STAY <br /> AWAKE FOREVER?</h2>
        <div className="flex flex-wrap justify-center gap-6">
            <div className="border-4 border-black p-8 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-xs">
                <p className="text-4xl mb-2">0%</p>
                <p className="text-xs">CHANCE OF SLEEPING TONIGHT</p>
            </div>
            <div className="border-4 border-black p-8 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-xs">
                <p className="text-4xl mb-2">100%</p>
                <p className="text-xs">ADRENALINE GUARANTEED</p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;