import React from 'react';

const OurStory = () => {
  return (
    <div className="bg-white min-h-screen font-black uppercase overflow-x-hidden">
      
      {/* SECTION 1: THE MANIFESTO (HERO) */}
      <section className="px-8 py-20 border-b-8 border-black bg-[#FFD700]">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[12vw] leading-[0.8] tracking-tighter italic mb-8">
            BORN <br /> IN THE <br /> TRENCHES.
          </h1>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <p className="text-2xl md:text-4xl max-w-3xl leading-tight border-l-8 border-black pl-6">
              WE DIDN'T START IN A BOUTIQUE LAB. WE STARTED IN A CARRIAGE HOUSE AT 3 AM WITH A BROKEN GRINDER AND A DESPERATE NEED TO STAY AWAKE.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE PHILOSOPHY (SPLIT LAYOUT) */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b-8 border-black">
        <div className="p-12 border-b-8 md:border-b-0 md:border-r-8 border-black flex flex-col justify-center">
          <h2 className="text-6xl mb-6 underline decoration-8">THE TRUTH.</h2>
          <p className="text-lg mb-4">
            Most coffee shops want you to relax. They want jazz music and soft chairs. They want you to stay for hours.
          </p>
          <p className="text-xl bg-black text-white p-4 self-start shadow-[8px_8px_0px_0px_rgba(255,215,0,1)]">
            WE ARE NOT THAT SHOP.
          </p>
        </div>
        <div className="relative h-500px md:h-auto overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000&auto=format&fit=crop" 
            alt="Coffee Roaster" 
            className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
        </div>
      </section>

      {/* SECTION 3: THE TIMELINE (RAW VERTICAL) */}
      <section className="px-8 py-24 bg-zinc-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-7xl italic text-[#FFD700] mb-16 tracking-tighter">THE LOG.</h2>
          
          <div className="space-y-20 relative before:absolute before:left-0 before:top-0 before:h-full before:w-2 before:bg-[#FFD700]">
            <div className="pl-10 relative">
              <span className="text-sm bg-[#FFD700] text-black px-2 py-1 absolute -left-1 top-0">2023</span>
              <h3 className="text-3xl mb-2 italic">THE BLACKOUT</h3>
              <p className="text-zinc-400 text-sm">After a city-wide power failure, we brewed our first batch over an open flame. People didn't just want the warmth; they wanted the voltage.</p>
            </div>

            <div className="pl-10 relative">
              <span className="text-sm bg-[#FFD700] text-black px-2 py-1 absolute -left-1 top-0">2024</span>
              <h3 className="text-3xl mb-2 italic">THE FIRST BRICK</h3>
              <p className="text-zinc-400 text-sm">We found a garage in the industrial district. No chairs. No WiFi. Just a counter and a machine. We called it STOP.</p>
            </div>

            <div className="pl-10 relative">
              <span className="text-sm bg-[#FFD700] text-black px-2 py-1 absolute -left-1 top-0">TODAY</span>
              <h3 className="text-3xl mb-2 italic">NO SURRENDER</h3>
              <p className="text-zinc-400 text-sm">12 blends. 3 locations. Zero compromises. We serve the people who keep the world moving while everyone else is asleep.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CALL TO ACTION (THE WARNING) */}
      <section className="p-12 text-center bg-white border-b-8 border-black">
        <div className="border-8 border-black p-12 inline-block shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] max-w-3xl">
          <h2 className="text-5xl md:text-7xl mb-6">NOT FOR <br /> EVERYONE.</h2>
          <p className="text-lg mb-8 italic">
            IF YOU WANT CARAMEL SWIRLS AND WHIPPED CREAM, GO DOWN THE STREET. IF YOU WANT FUEL, STAY HERE.
          </p>
          <button 
             onClick={() => window.location.href='/coffeeList'}
             className="bg-black text-[#FFD700] px-12 py-6 text-2xl hover:bg-[#FFD700] hover:text-black transition-all border-4 border-black"
          >
            ENTER THE MENU
          </button>
        </div>
      </section>
      
    </div>
  );
};

export default OurStory;