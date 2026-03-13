import React from 'react';
import { useTranslation } from 'react-i18next';
import { HelpCircle } from 'lucide-react';

export const FAQSection = () => {
  const { t } = useTranslation();

  const faqs = [
    { q: 'Is there a dress code?', a: 'Yes, please check the Dress Code section for details.' },
    { q: 'Can I bring a plus one?', a: 'Please refer to your individual invitation for guest details.' },
    { q: 'Is there parking available?', a: 'Yes, there is ample parking at Finca El Olivar.' },
  ];

  return (
    <section className="py-24 px-6 bg-white reveal-on-scroll">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <HelpCircle className="w-12 h-12 text-wedding-gold mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-5xl text-wedding-gold mb-4">
            Questions & Answers
          </h2>
        </div>
        
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="p-6 border border-wedding-ivory rounded-lg hover:border-wedding-gold transition-colors">
              <h3 className="font-body font-medium text-lg mb-2 text-wedding-gold">
                {faq.q}
              </h3>
              <p className="text-wedding-carbon/70 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
