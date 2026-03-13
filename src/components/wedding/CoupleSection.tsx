import React from 'react';
import { useTranslation } from 'react-i18next';
import { useWedding } from '@/context/WeddingContext';

export const CoupleSection = () => {
  const { t } = useTranslation();
  const { data } = useWedding();

  return (
    <section className="py-20 px-6 bg-white text-center reveal-on-scroll">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl text-wedding-gold mb-8">
          {t('welcome.title')}
        </h2>
        <p className="text-wedding-carbon text-lg md:text-xl leading-relaxed font-light italic">
          "{data.welcomeText || t('welcome.text')}"
        </p>
        
        <div className="mt-12 flex justify-center items-center space-x-8">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-wedding-ivory border border-wedding-gold flex items-center justify-center mb-4">
              <span className="font-display text-3xl text-wedding-gold">{data.brideName.charAt(0)}</span>
            </div>
            <span className="font-body text-sm tracking-widest uppercase text-wedding-sage">{data.brideName}</span>
          </div>
          
          <span className="font-display text-4xl text-wedding-gold">&</span>
          
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-wedding-ivory border border-wedding-gold flex items-center justify-center mb-4">
              <span className="font-display text-3xl text-wedding-gold">{data.groomName.charAt(0)}</span>
            </div>
            <span className="font-body text-sm tracking-widest uppercase text-wedding-sage">{data.groomName}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
