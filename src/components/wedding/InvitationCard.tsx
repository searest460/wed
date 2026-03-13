import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import { useWedding } from '@/context/WeddingContext';

export const InvitationCard = () => {
  const { t } = useTranslation();
  const { data } = useWedding();

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center text-white text-center overflow-hidden">
      {/* Background overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/30 z-10" />
      
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center max-w-4xl px-6">
        <h2 className="text-sm md:text-base uppercase tracking-[0.3em] mb-8 font-light">
          {data.heroSubtitle || t('hero.subtitle')}
        </h2>
        
        <h1 className="font-display text-7xl md:text-9xl mb-4 text-white drop-shadow-lg">
          {data.brideName}
        </h1>
        <span className="font-display text-4xl md:text-5xl mb-4 italic opacity-80">&</span>
        <h1 className="font-display text-7xl md:text-9xl mb-12 text-white drop-shadow-lg">
          {data.groomName}
        </h1>
        
        <div className="flex items-center space-x-4 mb-16">
          <div className="h-[1px] w-8 md:w-12 bg-white/50" />
          <span className="text-lg md:text-2xl font-light tracking-widest uppercase">
            {new Date(data.weddingDate).toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' })}
          </span>
          <div className="h-[1px] w-8 md:w-12 bg-white/50" />
        </div>
        
        <div className="flex flex-col items-center cursor-pointer group">
          <span className="text-sm uppercase tracking-widest mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
            {t('hero.rsvp')}
          </span>
          <ChevronDown className="w-6 h-6 animate-bounce opacity-80 group-hover:opacity-100" />
        </div>
      </div>
    </section>
  );
};
