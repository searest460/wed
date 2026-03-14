import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const CountdownTimer = () => {
  const { t } = useTranslation();
  const targetDate = new Date('2026-09-12T00:00:00');
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number, label: string }) => (
    <div className="flex flex-col items-center mx-2 md:mx-4">
      <div className="text-3xl md:text-5xl font-light text-wedding-gold mb-1">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-[10px] md:text-xs uppercase tracking-widest text-wedding-sage">
        {label}
      </div>
    </div>
  );

  return (
    <section className="pt-16 pb-0 bg-wedding-ivory flex flex-col items-center reveal-on-scroll">
      <h2 className="font-display text-3xl md:text-4xl text-wedding-gold mb-2">
        {t('countdown.title')}
      </h2>
      <p className="text-wedding-sage text-sm mb-8 italic">
        {t('countdown.until')}
      </p>
      
      <div className="flex items-center justify-center">
        <TimeUnit value={timeLeft.days} label={t('countdown.days')} />
        <div className="text-wedding-gold text-2xl pb-6 mx-1 md:mx-2">:</div>
        <TimeUnit value={timeLeft.hours} label={t('countdown.hours')} />
        <div className="text-wedding-gold text-2xl pb-6 mx-1 md:mx-2">:</div>
        <TimeUnit value={timeLeft.minutes} label={t('countdown.minutes')} />
        <div className="text-wedding-gold text-2xl pb-6 mx-1 md:mx-2">:</div>
        <TimeUnit value={timeLeft.seconds} label={t('countdown.seconds')} />
      </div>
    </section>
  );
};
