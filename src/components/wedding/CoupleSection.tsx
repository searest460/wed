import React from 'react';
import { useTranslation } from 'react-i18next';

const galleryImages = [
  '/assets/gallery-1-CndRyTXZ.jpg',
  '/assets/gallery-2-LJ9SqFT7.jpg',
  '/assets/gallery-3-BqTMMcNY.jpg',
  '/assets/gallery-4-D3agzgGx.jpg',
  '/assets/gallery-5-Ca9X0lht.jpg',
  '/assets/gallery-6-KQCB4EG9.jpg',
  '/assets/gallery-7-CHFbVCJd.jpg',
  '/assets/gallery-8-LSBB5t-f.jpg',
  '/assets/gallery-9-C_h0QLUe.jpg',
  '/assets/gallery-10-BbneIAac.jpg',
];

export const CoupleSection = () => {
  const { t } = useTranslation();

  const ImageList = () => (
    <div className="flex gap-4 pr-4 shrink-0">
      {galleryImages.map((src, index) => (
        <div 
          key={index} 
          className="flex-shrink-0 w-64 h-80 md:w-80 md:h-[450px] rounded-sm overflow-hidden shadow-sm"
        >
          <img 
            src={src} 
            alt={`Gallery ${index + 1}`} 
            className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
            draggable={false}
          />
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-20 bg-white text-center reveal-on-scroll">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-display text-4xl md:text-6xl text-wedding-gold mb-8">
          {t('welcome.title')}
        </h2>
        <p className="text-wedding-carbon text-lg md:text-xl leading-relaxed font-light italic max-w-3xl mx-auto mb-16">
          "{t('welcome.text')}"
        </p>
      </div>

      <div className="w-full overflow-hidden">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] transform-gpu">
          <ImageList />
          <ImageList />
        </div>
      </div>
    </section>
  );
};


