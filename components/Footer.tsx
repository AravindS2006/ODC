import React from 'react';

export const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h4 className="font-serif text-2xl font-bold mb-2">Oddanchatram</h4>
          <p className="text-gray-500 text-sm">The Vegetable City of Tamil Nadu</p>
        </div>
        
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#history" onClick={(e) => handleNavClick(e, '#history')} className="hover:text-odc-gold transition-colors cursor-pointer">History</a>
          <a href="#attractions" onClick={(e) => handleNavClick(e, '#attractions')} className="hover:text-odc-gold transition-colors cursor-pointer">Tourism</a>
          <a href="#map" onClick={(e) => handleNavClick(e, '#map')} className="hover:text-odc-gold transition-colors cursor-pointer">Map</a>
        </div>

        <div className="text-xs text-gray-600">
          &copy; {new Date().getFullYear()} Visit Oddanchatram. All rights reserved.
        </div>
      </div>
    </footer>
  );
};