import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useWedding } from '@/context/WeddingContext';

export const EnvelopeScene = ({ onOpen }: { onOpen: () => void }) => {
  const [isOpening, setIsOpening] = useState(false);
  const { data } = useWedding();

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(onOpen, 1000);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-wedding-ivory flex items-center justify-center overflow-hidden">
      <AnimatePresence>
        {!isOpening && (
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.1, opacity: 0, transition: { duration: 0.8 } }}
            className="relative cursor-pointer group"
            onClick={handleOpen}
          >
            {/* Envelope Body */}
            <div className="w-80 h-56 md:w-96 md:h-64 bg-white shadow-2xl relative border border-wedding-gold/20 flex flex-col items-center justify-center">
              {/* Seal */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 rounded-full bg-wedding-gold shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Heart className="text-white w-8 h-8 fill-current" />
                </div>
              </div>
              
              <div className="text-center mt-20">
                <h1 className="font-display text-3xl text-wedding-gold mb-2">{data.brideName} & {data.groomName}</h1>
                <p className="text-wedding-sage text-xs uppercase tracking-[0.2em]">Click to Open</p>
              </div>
            </div>
            
            {/* Decorative corners */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-wedding-gold/30" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-wedding-gold/30" />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-wedding-gold/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-wedding-gold/10 blur-3xl" />
      </div>
    </div>
  );
};
