import React from 'react';
import { STATS } from '../constants';
import { TrendingUp, Truck, Clock, Sprout } from 'lucide-react';

export const MarketShowcase: React.FC = () => {
  return (
    <section id="market" className="py-24 bg-stone-900 relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-odc-green/5 blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-odc-earth/5 blur-[120px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/30 border border-green-500/20 text-green-400 text-xs uppercase tracking-wider">
              <TrendingUp size={14} /> Economic Powerhouse
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
              Gandhi Vegetable Market
            </h2>
            
            <p className="text-gray-400 leading-relaxed text-lg">
              The pulse of Oddanchatram beats within the Gandhi Market. Operating round the clock, it is one of Asia's largest vegetable auctions. While famous for **Drumsticks (Moringa)**, the region is also the world's leading exporter of **Gloriosa Superba** seeds to the pharmaceutical industry.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              {STATS.map((stat, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-odc-green/50 transition-colors">
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-odc-gold uppercase tracking-wider font-bold mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-500">{stat.subtext}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 text-gray-400 pt-4">
              <div className="flex items-center gap-2">
                <Clock className="text-odc-gold" size={20} />
                <span className="text-sm">24/7 Operations</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="text-odc-gold" size={20} />
                <span className="text-sm">Global Export (Europe/UAE)</span>
              </div>
              <div className="flex items-center gap-2">
                <Sprout className="text-odc-gold" size={20} />
                <span className="text-sm">Medicinal Crops</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
               <div className="relative group overflow-hidden rounded-2xl translate-y-12">
                 <img 
                  src="https://picsum.photos/seed/market-vegetables/400/500" 
                  alt="Fresh Produce" 
                  className="object-cover h-64 w-full shadow-2xl shadow-green-900/20 transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold">Vegetables</div>
               </div>
              
              <div className="relative group overflow-hidden rounded-2xl">
                <img 
                  src="https://picsum.photos/seed/market-trucks/400/500" 
                  alt="Market Logistics" 
                  className="object-cover h-64 w-full shadow-2xl shadow-green-900/20 transition-transform duration-500 group-hover:scale-110"
                />
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold">Logistics</div>
              </div>

               <div className="relative group overflow-hidden rounded-2xl translate-y-12">
                  <img 
                  src="https://picsum.photos/seed/market-crowd/400/500" 
                  alt="Busy Market" 
                  className="object-cover h-64 w-full shadow-2xl shadow-green-900/20 transition-transform duration-500 group-hover:scale-110"
                />
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold">Auction</div>
               </div>
              
               <div className="relative group overflow-hidden rounded-2xl">
                <img 
                  src="https://picsum.photos/seed/glory-lily/400/500" 
                  alt="Gloriosa Superba" 
                  className="object-cover h-64 w-full shadow-2xl shadow-green-900/20 transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-center p-2">Gloriosa Superba</div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};