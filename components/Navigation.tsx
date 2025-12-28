import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const navClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    scrolled ? 'bg-black/40 backdrop-blur-md py-4' : 'bg-transparent py-6'
  }`;

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Market', href: '#market' },
    { name: 'Map', href: '#map' },
    { name: 'Details', href: '#details' },
    { name: 'Attractions', href: '#attractions' },
    { name: 'History', href: '#history' },
  ];

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 text-white font-serif font-bold text-xl tracking-wider cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}>
          <MapPin className="text-odc-gold" />
          ODDANCHATRAM
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-white/80 hover:text-odc-gold transition-colors text-sm uppercase tracking-widest font-medium cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-xl border-t border-white/10 p-6 flex flex-col gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-white text-lg font-serif cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};