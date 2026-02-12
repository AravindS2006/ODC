import React from 'react';
import { HISTORY } from '../constants';

export const History: React.FC = () => {
  return (
    <section id="history" className="py-24 bg-stone-900" aria-labelledby="history-heading">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 id="history-heading" className="font-serif text-4xl text-white mb-4">Historical Timeline of Oddanchatram</h2>
          <div className="w-24 h-1 bg-odc-gold mx-auto"></div>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-1/2 space-y-12">
          {HISTORY.map((event, index) => (
            <article 
              key={index} 
              className={`relative pl-8 md:pl-0 flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-[5px] w-2.5 h-2.5 bg-odc-gold rounded-full ring-4 ring-stone-900"></div>

              {/* Content Box */}
              <div className={`w-full md:w-[45%] mb-4 md:mb-0 ${index % 2 === 0 ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right'}`}>
                <time className="text-odc-gold font-bold text-lg block mb-2">{event.year}</time>
                <h3 className="text-2xl text-white font-serif mb-2">{event.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {event.description}
                </p>
              </div>
              
              {/* Spacer for the other side */}
              <div className="hidden md:block w-[45%]"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};