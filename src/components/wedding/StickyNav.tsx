import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';

export const StickyNav = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('welcome.title'), href: '#' },
    { label: t('events.title'), href: '#' },
    { label: t('program.title'), href: '#' },
    { label: t('rsvp.title'), href: '#rsvp' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="font-display text-2xl text-wedding-gold cursor-pointer">
          A & P
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <a 
              key={index} 
              href={item.href}
              className={`text-sm uppercase tracking-widest transition-colors ${isScrolled ? 'text-wedding-carbon hover:text-wedding-gold' : 'text-white hover:text-wedding-gold'}`}
            >
              {item.label}
            </a>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-wedding-gold"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-8 flex flex-col items-center space-y-6 animate-in fade-in slide-in-from-top-4">
          {navItems.map((item, index) => (
            <a 
              key={index} 
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-wedding-carbon text-lg uppercase tracking-widest hover:text-wedding-gold transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
