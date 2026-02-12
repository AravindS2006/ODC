import React from 'react';
import { LANDMARKS } from '../constants';
import { ArrowRight } from 'lucide-react';

export const Attractions: React.FC = () => {
  const handleScrollToMap = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('map');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="attractions" className="py-24 bg-stone-950" aria-labelledby="attractions-title">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <header>
            <h2 id="attractions-title" className="font-serif text-4xl md:text-5xl text-white mb-4">
              Tourism & Sightseeing in Oddanchatram
            </h2>
            <p className="text-gray-400 max-w-md">
              From the peaceful Parappalaru Dam waterfalls to the historic Scudder Hospital, explore the major landmarks of the Dindigul district.
            </p>
          </header>
          <a 
            href="#map" 
            onClick={handleScrollToMap}
            aria-label="View Oddanchatram Tourism Map"
            className="hidden md:flex items-center gap-2 text-odc-gold hover:text-white transition-colors uppercase text-xs tracking-widest mt-6 md:mt-0 cursor-pointer"
          >
            View Map <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LANDMARKS.map((item) => (
            <article 
              key={item.id} 
              className="group relative h-[400px] overflow-hidden rounded-2xl cursor-pointer"
            >
              <img 
                src={item.imageUrl} 
                alt={`${item.name} in Oddanchatram - A key ${item.category} location`} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
              
              <div className="absolute bottom-0 left-0 p-6 w-full transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                <span className="text-xs font-bold text-odc-gold uppercase tracking-wider mb-2 block">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-2 font-serif">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {item.details}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};