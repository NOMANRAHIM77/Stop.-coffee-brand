import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomQuote } from '../slices/quoteSlice';
import { RefreshCw, Zap } from 'lucide-react';

const QuoteGenerator = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.quote);

  const handleGenerate = () => {
    dispatch(fetchRandomQuote());
  };

  return (
    <section className="bg-white border-y-8 border-black py-16 px-4">
      <div className="max-w-4xl mx-auto border-8 border-black bg-[#FFD700] p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-black text-white p-2">
            <Zap size={32} fill="currentColor" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">
            QUOTE.GEN
          </h2>
        </div>

        {/* DISPLAY BOX */}
        <div className="bg-black text-white p-8 md:p-12 mb-8 min-h-[220px] flex flex-col justify-center relative overflow-hidden">
          {status === 'loading' ? (
            <div className="flex flex-col gap-4 animate-pulse">
              <div className="h-6 bg-zinc-700 w-full"></div>
              <div className="h-6 bg-zinc-700 w-2/3"></div>
            </div>
          ) : status === 'failed' ? (
            <p className="text-red-500 font-bold italic">ERROR: {error}</p>
          ) : (
            <>
              <p className="text-2xl md:text-4xl font-black italic uppercase leading-none mb-6">
                "{data.quote}"
              </p>
              <span className="text-[#FFD700] font-bold tracking-widest">— {data.author}</span>
            </>
          )}
          
          {/* Decorative scanner effect */}
          <div className="absolute inset-0 pointer-events-none opacity-10 bg-gradient-to-b from-transparent via-white to-transparent h-1/2 animate-bounce"></div>
        </div>

        {/* BUTTON */}
        <button
          onClick={handleGenerate}
          disabled={status === 'loading'}
          className="w-full md:w-auto bg-black text-[#FFD700] px-12 py-6 text-2xl font-black uppercase flex items-center justify-center gap-4 hover:bg-zinc-800 transition-all active:translate-x-2 active:translate-y-2 active:shadow-none shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] disabled:opacity-50"
        >
          {status === 'loading' ? "SYNCING..." : "GENERATE NEW FUEL"}
          <RefreshCw className={status === 'loading' ? "animate-spin" : ""} size={28} />
        </button>
      </div>
    </section>
  );
};

export default QuoteGenerator;