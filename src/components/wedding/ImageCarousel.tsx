import React from 'react';

const images = [
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

export const ImageCarousel = () => {
  return (
    <div className="w-full overflow-hidden bg-white pb-16 md:pb-20">
      <div 
        className="flex animate-marquee hover:[animation-play-state:paused] transform-gpu flex-nowrap"
        style={{ 
          width: 'max-content'
        }}
      >
        {/* Quadruple the images for guaranteed seamless loop covering any screen width */}
        {[...images, ...images, ...images, ...images].map((src, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-64 h-80 md:w-80 md:h-96 rounded-lg overflow-hidden shadow-md px-2"
          >
            <img 
              src={src} 
              alt={`Gallery ${index % images.length + 1}`} 
              className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
              draggable={false}
              loading={index < 5 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
