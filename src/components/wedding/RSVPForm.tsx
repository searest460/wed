import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Send } from 'lucide-react';

export const RSVPForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: 'yes',
    guests: '1',
    dietary: '',
    message: ''
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('RSVP Submitted:', formData);
    // Add submission logic here
  };

  return (
    <section className="py-24 px-6 bg-white reveal-on-scroll" id="rsvp">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-wedding-gold mb-4">
            {t('rsvp.title')}
          </h2>
          <p className="text-wedding-sage uppercase tracking-widest text-sm">
            {t('rsvp.subtitle')}
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-wedding-ivory p-8 md:p-12 rounded-lg shadow-sm border border-wedding-gold/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-body uppercase tracking-widest text-wedding-carbon/60">
                {t('rsvp.fullName')}
              </label>
              <input 
                type="text" 
                required
                className="w-full p-3 bg-white border border-wedding-gold/20 rounded focus:outline-none focus:border-wedding-gold transition-colors"
                placeholder={t('rsvp.enterName')}
                value={formData.name}
                onChange={(e: any) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-body uppercase tracking-widest text-wedding-carbon/60">
                {t('rsvp.email')}
              </label>
              <input 
                type="email" 
                required
                className="w-full p-3 bg-white border border-wedding-gold/20 rounded focus:outline-none focus:border-wedding-gold transition-colors"
                placeholder="email@example.com"
                value={formData.email}
                onChange={(e: any) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-body uppercase tracking-widest text-wedding-carbon/60">
              {t('rsvp.attend')}
            </label>
            <div className="flex space-x-6">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="radio" 
                  name="attending" 
                  value="yes"
                  checked={formData.attending === 'yes'}
                  onChange={(e: any) => setFormData({...formData, attending: e.target.value})}
                  className="accent-wedding-gold"
                />
                <span className="text-wedding-carbon/80">{t('rsvp.yes')}</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="radio" 
                  name="attending" 
                  value="no"
                  checked={formData.attending === 'no'}
                  onChange={(e: any) => setFormData({...formData, attending: e.target.value})}
                  className="accent-wedding-gold"
                />
                <span className="text-wedding-carbon/80">{t('rsvp.no')}</span>
              </label>
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-body uppercase tracking-widest text-wedding-carbon/60">
              {t('rsvp.dietary')}
            </label>
            <textarea 
              className="w-full p-3 bg-white border border-wedding-gold/20 rounded focus:outline-none focus:border-wedding-gold transition-colors h-24 resize-none"
              placeholder="e.g. Vegetarian, Gluten-free, etc."
              value={formData.dietary}
              onChange={(e: any) => setFormData({...formData, dietary: e.target.value})}
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-body uppercase tracking-widest text-wedding-carbon/60">
              {t('rsvp.message')}
            </label>
            <textarea 
              className="w-full p-3 bg-white border border-wedding-gold/20 rounded focus:outline-none focus:border-wedding-gold transition-colors h-32 resize-none"
              placeholder="Any message for us?"
              value={formData.message}
              onChange={(e: any) => setFormData({...formData, message: e.target.value})}
            />
          </div>
          
          <button 
            type="submit"
            className="w-full py-4 bg-wedding-gold text-white uppercase tracking-widest font-body font-medium rounded hover:bg-opacity-90 transition-all flex items-center justify-center space-x-2 shadow-lg"
          >
            <span>{t('rsvp.send')}</span>
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
};
