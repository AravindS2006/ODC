import React, { useState } from 'react';
import { MapPin, Navigation, Info, X } from 'lucide-react';

interface MapPoint {
  id: string;
  name: string;
  x: number; // Percentage
  y: number; // Percentage
  type: 'commerce' | 'health' | 'transport' | 'nature';
  info: string;
}

const POINTS: MapPoint[] = [
  { id: 'market', name: 'Gandhi Market', x: 45, y: 50, type: 'commerce', info: 'The town center. 24/7 Vegetable auctions happen here.' },
  { id: 'scudder', name: 'Scudder Hospital', x: 60, y: 40, type: 'health', info: 'Located on the eastern side, a major medical landmark.' },
  { id: 'railway', name: 'Railway Station', x: 30, y: 20, type: 'transport', info: 'Connects to Palani (West) and Dindigul (East).' },
  { id: 'dam', name: 'Parappalaru Dam', x: 10, y: 80, type: 'nature', info: 'Situated in the hills, southwest of the main town.' },
  { id: 'ccet', name: 'Engg. College', x: 70, y: 60, type: 'commerce', info: 'Christian College of Engineering & Technology.' },
];

export const InteractiveMap: React.FC = () => {
  const [activePoint, setActivePoint] = useState<MapPoint | null>(null);

  return (
    <section id="map" className="py-24 bg-stone-900 relative">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="font-serif text-4xl text-white mb-4">Interactive Town Guide</h2>
          <p className="text-gray-400">Navigate the key zones of Oddanchatram.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 h-[600px]">
          
          {/* Interactive Layer */}
          <div className="lg:col-span-2 relative bg-stone-800 rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
            {/* Abstract Map Graphic */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
               {/* Roads */}
               <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-500 rotate-12"></div> {/* Highway */}
               <div className="absolute top-0 left-1/3 h-full w-2 bg-gray-500 -rotate-12"></div> {/* Railway */}
               <div className="absolute top-[20%] left-[30%] w-32 h-32 border-4 border-dashed border-gray-500 rounded-full"></div> {/* Town limit */}
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-br from-odc-green/10 to-transparent"></div>

            {/* Pins */}
            {POINTS.map((point) => (
              <button
                key={point.id}
                onClick={() => setActivePoint(point)}
                style={{ left: `${point.x}%`, top: `${point.y}%` }}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 p-2 rounded-full transition-all duration-300 hover:scale-125 z-10 ${
                  activePoint?.id === point.id 
                    ? 'bg-odc-gold text-black shadow-[0_0_20px_rgba(212,175,55,0.6)] scale-125' 
                    : 'bg-stone-700 text-white border border-white/20 hover:bg-odc-gold hover:text-black'
                }`}
              >
                <MapPin size={24} />
              </button>
            ))}

            {/* Map Overlay Text */}
            <div className="absolute bottom-6 left-6 pointer-events-none">
              <h3 className="text-2xl font-bold text-white/10 uppercase tracking-widest">Digital Map</h3>
            </div>
          </div>

          {/* Info Panel / Google Maps Embed */}
          <div className="bg-stone-800 rounded-3xl p-6 border border-white/10 flex flex-col h-full relative overflow-hidden">
            {activePoint ? (
              <div className="animate-fade-in-up h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-xs font-bold text-odc-gold uppercase tracking-wider">{activePoint.type}</span>
                    <h3 className="text-3xl font-serif text-white mt-2">{activePoint.name}</h3>
                  </div>
                  <button onClick={() => setActivePoint(null)} className="text-gray-400 hover:text-white">
                    <X />
                  </button>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {activePoint.info}
                </p>
                
                <div className="mt-auto p-4 bg-black/30 rounded-xl border border-white/5">
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                    <Info size={16} /> Quick Tip
                  </div>
                  <p className="text-xs text-gray-500">
                    Use the AI Guide to ask about transport timings or specific directions to this location.
                  </p>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col">
                 <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-white font-bold">Real-time View</h3>
                    <span className="text-xs text-odc-gold flex items-center gap-1"><Navigation size={12}/> Live</span>
                 </div>
                 {/* Google Maps Embed */}
                 <div className="flex-1 rounded-xl overflow-hidden bg-stone-900 border border-white/10">
                   <iframe 
                     width="100%" 
                     height="100%" 
                     frameBorder="0" 
                     scrolling="no" 
                     marginHeight={0} 
                     marginWidth={0} 
                     src="https://maps.google.com/maps?q=Oddanchatram&t=&z=13&ie=UTF8&iwloc=&output=embed"
                     className="filter grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                   ></iframe>
                 </div>
                 <p className="text-xs text-center text-gray-500 mt-4">
                   Select a pin on the left to view detailed zone information.
                 </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};