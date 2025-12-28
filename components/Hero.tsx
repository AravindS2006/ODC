import React from 'react';
import { HERO_IMAGE } from '../constants';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={HERO_IMAGE} 
          alt="Oddanchatram Landscape" 
          className="w-full h-full object-cover scale-105 animate-float" // Slight movement
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-stone-900"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-odc-gold uppercase tracking-[0.3em] mb-4 text-sm md:text-base animate-fade-in-up">
          Dindigul District • Tamil Nadu
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-6 leading-tight drop-shadow-2xl">
          The Vegetable City
        </h1>
        <p className="text-gray-200 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Discover Oddanchatram, a vibrant blend of agricultural prosperity, scenic Western Ghats foothills, and rich cultural heritage.
        </p>
        
        <a 
          href="#market"
          className="inline-block border border-white/30 bg-white/10 backdrop-blur-sm px-8 py-3 text-white hover:bg-white hover:text-black transition-all duration-300 rounded-full uppercase text-xs tracking-widest"
        >
          Explore the Town
        </a>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce text-white/50">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};