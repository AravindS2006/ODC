import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { MarketShowcase } from './components/MarketShowcase';
import { InteractiveMap } from './components/InteractiveMap';
import { DetailedInfo } from './components/DetailedInfo';
import { Attractions } from './components/Attractions';
import { History } from './components/History';
import { Footer } from './components/Footer';
import { AiGuide } from './components/AiGuide';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-900 text-white selection:bg-odc-gold selection:text-black">
      <Navigation />
      
      <main>
        <Hero />
        <MarketShowcase />
        <InteractiveMap />
        <DetailedInfo />
        <Attractions />
        <History />
      </main>

      <Footer />
      <AiGuide />
    </div>
  );
};

export default App;