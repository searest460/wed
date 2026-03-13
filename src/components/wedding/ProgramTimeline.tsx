import React from 'react';
import { useTranslation } from 'react-i18next';
import { Clock, Music, GlassWater, Utensils, Cake } from 'lucide-react';

export const ProgramTimeline = () => {
  const { t } = useTranslation();

  const events = [
    { time: '17:30', title: t('program.arrival'), icon: Clock },
    { time: '18:00', title: t('program.ceremony'), icon: Music },
    { time: '19:00', title: t('program.cocktails'), icon: GlassWater },
    { time: '21:00', title: t('program.dinner'), icon: Utensils },
    { time: '23:30', title: t('program.cake'), icon: Cake },
  ];

  return (
    <section className="pt-0 pb-24 px-6 bg-wedding-ivory reveal-on-scroll">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 pt-12">
          <h2 className="font-display text-4xl md:text-5xl text-wedding-gold mb-4">
            {t('program.title')}
          </h2>
          <p className="text-wedding-sage uppercase tracking-widest text-sm">
            {t('program.date')}
          </p>
        </div>
        
        <div className="space-y-12">
          {events.map((event, index) => (
            <div key={index} className="flex items-center group">
              <div className="w-24 text-right pr-8 font-body text-wedding-gold font-medium">
                {event.time}
              </div>
              
              <div className="relative flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white border border-wedding-gold flex items-center justify-center z-10 group-hover:bg-wedding-gold group-hover:text-white transition-colors">
                  <event.icon className="w-6 h-6" />
                </div>
                {index < events.length - 1 && (
                  <div className="absolute top-12 bottom-0 w-[1px] bg-wedding-gold/30 h-12 -mb-12" />
                )}
              </div>
              
              <div className="pl-8 font-body text-xl text-wedding-carbon/80">
                {event.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
