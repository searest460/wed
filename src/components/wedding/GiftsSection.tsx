import React from 'react';
import { useTranslation } from 'react-i18next';
import { Gift, Copy } from 'lucide-react';

export const GiftsSection = () => {
  const { t } = useTranslation();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  return (
    <section className="py-24 px-6 bg-wedding-ivory reveal-on-scroll">
      <div className="max-w-4xl mx-auto text-center">
        <Gift className="w-12 h-12 text-wedding-gold mx-auto mb-8" />
        <h2 className="font-display text-4xl md:text-5xl text-wedding-gold mb-8">
          {t('gifts.title')}
        </h2>
        <p className="text-wedding-carbon/70 text-lg mb-12 max-w-2xl mx-auto leading-relaxed italic">
          {t('gifts.text')}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white rounded-lg shadow-sm border border-wedding-gold/10">
            <h3 className="font-body text-xl font-medium mb-4 text-wedding-gold">
              {t('gifts.account1')}
            </h3>
            <div className="bg-wedding-ivory p-4 rounded text-sm font-mono break-all relative group">
              {t('gifts.account1details')}
              <button 
                onClick={() => copyToClipboard(t('gifts.account1details'))}
                className="absolute top-2 right-2 p-1 text-wedding-gold hover:bg-wedding-gold/10 rounded transition-colors"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="p-8 bg-white rounded-lg shadow-sm border border-wedding-gold/10">
            <h3 className="font-body text-xl font-medium mb-4 text-wedding-gold">
              {t('gifts.account2')}
            </h3>
            <div className="bg-wedding-ivory p-4 rounded text-sm font-mono break-all relative group">
              {t('gifts.account2details')}
              <button 
                onClick={() => copyToClipboard(t('gifts.account2details'))}
                className="absolute top-2 right-2 p-1 text-wedding-gold hover:bg-wedding-gold/10 rounded transition-colors"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
