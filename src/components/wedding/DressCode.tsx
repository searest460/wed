import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shirt, Coffee, Utensils } from 'lucide-react';

export const DressCode = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-6 bg-white reveal-on-scroll">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl text-wedding-gold mb-12">
          {t('dress.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-8 border border-wedding-ivory bg-wedding-ivory/50 rounded-lg shadow-sm">
            <Shirt className="w-12 h-12 text-wedding-gold mx-auto mb-6" />
            <h3 className="font-body text-2xl font-medium mb-4">{t('dress.men')}</h3>
            <p className="text-wedding-carbon/70 leading-relaxed italic">
              {t('dress.menDesc')}
            </p>
          </div>
          
          <div className="p-8 border border-wedding-ivory bg-wedding-ivory/50 rounded-lg shadow-sm">
            <Coffee className="w-12 h-12 text-wedding-gold mx-auto mb-6" />
            <h3 className="font-body text-2xl font-medium mb-4">Teacup</h3>
            <p className="text-wedding-carbon/70 leading-relaxed italic">
              Join us for a cozy afternoon tea session.
            </p>
          </div>

          <div className="p-8 border border-wedding-ivory bg-wedding-ivory/50 rounded-lg shadow-sm">
            <Utensils className="w-12 h-12 text-wedding-gold mx-auto mb-6" />
            <h3 className="font-body text-2xl font-medium mb-4">Sunday Lunch</h3>
            <p className="text-wedding-carbon/70 leading-relaxed italic">
              A farewell lunch to wrap up the celebrations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
