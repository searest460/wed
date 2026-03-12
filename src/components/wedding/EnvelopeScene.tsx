import React from 'react';

export const EnvelopeScene = ({ onOpen }: { onOpen: () => void }) => (
  <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
    <div className="p-8 border-4 border-double border-wedding-gold bg-white shadow-xl text-center">
      <h1 className="font-display text-4xl text-wedding-gold mb-4">Andrea & Pedro</h1>
      <p className="mb-6">Click below to open the invitation</p>
      <button 
        onClick={onOpen}
        className="px-6 py-2 bg-wedding-gold text-white rounded hover:bg-opacity-90 transition-colors"
      >
        Open Invitation
      </button>
    </div>
  </div>
);
