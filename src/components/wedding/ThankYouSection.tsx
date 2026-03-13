import React from 'react';
import { useTranslation } from 'react-i18next';
import { Heart } from 'lucide-react';

export const ThankYouSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-32 px-6 bg-white text-center reveal-on-scroll">
      <div className="max-w-3xl mx-auto">
        <Heart className="w-12 h-12 text-wedding-gold mx-auto mb-8 fill-current opacity-20" />
        
        <h2 className="font-display text-5xl md:text-7xl text-wedding-gold mb-8">
          {t('confirm.thankYou')}
        </h2>
        
        <p className="text-wedding-carbon text-xl md:text-2xl leading-relaxed font-light italic mb-12">
          "{t('confirm.thankPart')}"
        </p>
        
        <div className="flex flex-col items-center">
          <div className="h-[1px] w-24 bg-wedding-gold/30 mb-8" />
          <p className="font-body text-sm uppercase tracking-[0.3em] text-wedding-sage">
            Andrea & Pedro
          </p>
          <p className="mt-4 text-xs text-wedding-carbon/40 uppercase tracking-widest">
            12.09.2026 • Ronda, Spain
          </p>
        </div>
      </div>
    </section>
  );
};
