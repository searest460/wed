import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, ExternalLink } from 'lucide-react';

export const VenueSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-6 bg-white reveal-on-scroll">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-wedding-gold mb-4">
            {t('events.title')}
          </h2>
          <p className="text-wedding-sage uppercase tracking-widest text-sm">
            {t('events.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
            <img 
              src="/assets/venue-hedsor-DSq2yQw3.png" 
              alt="Venue" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-wedding-gold shrink-0 mt-1" />
              <div>
                <h3 className="font-body text-xl font-medium mb-2">Finca El Olivar</h3>
                <p className="text-wedding-carbon/70 leading-relaxed">
                  {t('transport.fullAddress')}
                </p>
              </div>
            </div>
            
            <div className="pt-4">
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-wedding-gold text-white rounded-full hover:bg-opacity-90 transition-all space-x-2"
              >
                <span>{t('events.openMaps')}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
