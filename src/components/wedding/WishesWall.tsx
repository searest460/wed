import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MessageSquare, Send } from 'lucide-react';

export const WishesWall = () => {
  const { t } = useTranslation();
  const [newWish, setNewWish] = useState({ name: '', message: '' });
  const [wishes, setWishes] = useState([
    { name: 'Maria & Juan', message: 'Congratulations to the beautiful couple! We can\'t wait to celebrate with you.' },
    { name: 'Carlos', message: 'Wishing you a lifetime of happiness and love.' },
    { name: 'Elena', message: 'So happy for both of you! Ronda is going to be magical.' },
  ]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (newWish.name && newWish.message) {
      setWishes([newWish, ...wishes]);
      setNewWish({ name: '', message: '' });
    }
  };

  return (
    <section className="py-24 px-6 bg-wedding-ivory reveal-on-scroll">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <MessageSquare className="w-12 h-12 text-wedding-gold mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-5xl text-wedding-gold mb-4">
            Wishes Wall
          </h2>
          <p className="text-wedding-sage uppercase tracking-widest text-sm">
            Leave a message for the couple
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-wedding-gold/10">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-widest text-wedding-carbon/60 mb-2">Your Name</label>
                <input 
                  type="text" 
                  className="w-full p-3 bg-wedding-ivory border border-wedding-gold/20 rounded focus:outline-none focus:border-wedding-gold transition-colors"
                  value={newWish.name}
                  onChange={(e) => setNewWish({ ...newWish, name: e.target.value })}
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-wedding-carbon/60 mb-2">Your Message</label>
                <textarea 
                  className="w-full p-3 bg-wedding-ivory border border-wedding-gold/20 rounded focus:outline-none focus:border-wedding-gold transition-colors h-32 resize-none"
                  value={newWish.message}
                  onChange={(e) => setNewWish({ ...newWish, message: e.target.value })}
                  placeholder="Write your wishes here..."
                />
              </div>
              <button 
                type="submit"
                className="w-full py-3 bg-wedding-gold text-white uppercase tracking-widest text-sm font-medium rounded hover:bg-opacity-90 transition-all flex items-center justify-center space-x-2"
              >
                <span>Post Wish</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Wall */}
          <div className="space-y-6 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            {wishes.map((wish, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-wedding-gold">
                <p className="text-wedding-carbon italic mb-4">"{wish.message}"</p>
                <p className="text-wedding-gold font-medium text-sm">— {wish.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
