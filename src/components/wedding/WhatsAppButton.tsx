import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/XXXXXXXXXX" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[60] p-4 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 whitespace-nowrap">
        WhatsApp Us
      </span>
    </a>
  );
};
