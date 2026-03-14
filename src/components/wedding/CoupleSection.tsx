import React from 'react';
import { useTranslation } from 'react-i18next';

export const CoupleSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-6 bg-white text-center reveal-on-scroll">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 flex justify-center">
          <img 
            src="/assets/floral-vase-6x28LN74.png" 
            alt="Floral decoration" 
            className="w-32 md:w-40 h-auto opacity-80"
          />
        </div>
        
        <h2 className="font-display text-4xl md:text-5xl text-wedding-gold mb-8">
          {t('welcome.title')}
        </h2>
        <p className="text-wedding-carbon text-lg md:text-xl leading-relaxed font-light italic">
          "{t('welcome.text')}"
        </p>
        
        <div className="mt-12 flex justify-center items-center space-x-8">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-wedding-ivory border border-wedding-gold flex items-center justify-center mb-4">
              <span className="font-display text-3xl text-wedding-gold">A</span>
            </div>
            <span className="font-body text-sm tracking-widest uppercase text-wedding-sage">Andrea</span>
          </div>
          
          <span className="font-display text-4xl text-wedding-gold">&</span>
          
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-wedding-ivory border border-wedding-gold flex items-center justify-center mb-4">
              <span className="font-display text-3xl text-wedding-gold">P</span>
            </div>
            <span className="font-body text-sm tracking-widest uppercase text-wedding-sage">Pedro</span>
          </div>
        </div>
      </div>
    </section>
  );
};
