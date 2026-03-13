import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, ChevronDown, Clock, Music, GlassWater, Utensils, Cake, 
  MessageSquare, Send, HelpCircle, Menu, X, MessageCircle, 
  ArrowLeft, Save, RotateCcw, Plus, Trash2, Image as ImageIcon,
  MapPin, ExternalLink, Shirt, Coffee
} from 'lucide-react';
import { Link, BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { Sonner } from '@/components/ui/sonner';
import { toast } from 'sonner';

// --- WEDDING CONTEXT ---
export interface WeddingData {
  brideName: string;
  groomName: string;
  weddingDate: string;
  venueName: string;
  venueAddress: string;
  welcomeText: string;
  heroSubtitle: string;
  photos: string[];
  eventDetails: {
    arrival: string;
    ceremony: string;
    cocktails: string;
    dinner: string;
    cake: string;
  };
}

const defaultData: WeddingData = {
  brideName: "Andrea",
  groomName: "Pedro",
  weddingDate: "2026-09-12",
  venueName: "Finca El Olivar",
  venueAddress: "Finca El Olivar, Camino de los Olivos s/n, 29400 Ronda, Málaga – Spain",
  welcomeText: "We warmly invite you to celebrate our wedding day with us in the beautiful town of Ronda, Andalusia. We look forward to sharing this unforgettable moment with our most special people.",
  heroSubtitle: "We're getting married",
  photos: ["/assets/intro-poster-new-BU7qGwfU.jpg"],
  eventDetails: {
    arrival: "17:30",
    ceremony: "18:00",
    cocktails: "19:00",
    dinner: "21:00",
    cake: "23:30",
  }
};

interface WeddingContextType {
  data: WeddingData;
  updateData: (newData: Partial<WeddingData>) => void;
  resetData: () => void;
}

const WeddingContext = createContext<WeddingContextType | undefined>(undefined);

export const WeddingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<WeddingData>(() => {
    const saved = localStorage.getItem('wedding_data');
    return saved ? JSON.parse(saved) : defaultData;
  });

  useEffect(() => {
    localStorage.setItem('wedding_data', JSON.stringify(data));
  }, [data]);

  const updateData = (newData: Partial<WeddingData>) => {
    setData(prev => ({ ...prev, ...newData }));
  };

  const resetData = () => {
    setData(defaultData);
  };

  return (
    <WeddingContext.Provider value={{ data, updateData, resetData }}>
      {children}
    </WeddingContext.Provider>
  );
};

export const useWedding = () => {
  const context = useContext(WeddingContext);
  if (context === undefined) throw new Error('useWedding must be used within a WeddingProvider');
  return context;
};

// --- COMPONENTS ---

const StickyNav = () => {
  const { t } = useTranslation();
  const { data } = useWedding();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('welcome.title'), href: '#' },
    { label: t('events.title'), href: '#' },
    { label: t('program.title'), href: '#' },
    { label: t('rsvp.title'), href: '#rsvp' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="font-display text-2xl text-wedding-gold cursor-pointer">
          {data.brideName.charAt(0)} & {data.groomName.charAt(0)}
        </div>
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <a key={index} href={item.href} className={`text-sm uppercase tracking-widest transition-colors ${isScrolled ? 'text-wedding-carbon hover:text-wedding-gold' : 'text-white hover:text-wedding-gold'}`}>
              {item.label}
            </a>
          ))}
        </div>
        <button className="md:hidden text-wedding-gold" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-8 flex flex-col items-center space-y-6">
          {navItems.map((item, index) => (
            <a key={index} href={item.href} onClick={() => setIsMenuOpen(false)} className="text-wedding-carbon text-lg uppercase tracking-widest hover:text-wedding-gold transition-colors">
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const WhatsAppButton = () => (
  <a href="https://wa.me/XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-[60] p-4 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group">
    <MessageCircle className="w-6 h-6" />
    <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 whitespace-nowrap">WhatsApp Us</span>
  </a>
);

const EnvelopeScene = ({ onOpen }: { onOpen: () => void }) => {
  const [isOpening, setIsOpening] = useState(false);
  const { data } = useWedding();
  const handleOpen = () => { setIsOpening(true); setTimeout(onOpen, 1000); };

  return (
    <div className="fixed inset-0 z-[100] bg-wedding-ivory flex items-center justify-center overflow-hidden">
      <AnimatePresence>
        {!isOpening && (
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 1.1, opacity: 0, transition: { duration: 0.8 } }} className="relative cursor-pointer group" onClick={handleOpen}>
            <div className="w-80 h-56 md:w-96 md:h-64 bg-white shadow-2xl relative border border-wedding-gold/20 flex flex-col items-center justify-center">
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
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-wedding-gold/30" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-wedding-gold/30" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const InvitationCard = () => {
  const { t } = useTranslation();
  const { data } = useWedding();
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center text-white text-center overflow-hidden">
      <div className="absolute inset-0 bg-black/30 z-10" />
      <div className="relative z-20 flex flex-col items-center max-w-4xl px-6">
        <h2 className="text-sm md:text-base uppercase tracking-[0.3em] mb-8 font-light">{data.heroSubtitle}</h2>
        <h1 className="font-display text-7xl md:text-9xl mb-4 text-white drop-shadow-lg">{data.brideName}</h1>
        <span className="font-display text-4xl md:text-5xl mb-4 italic opacity-80">&</span>
        <h1 className="font-display text-7xl md:text-9xl mb-12 text-white drop-shadow-lg">{data.groomName}</h1>
        <div className="flex items-center space-x-4 mb-16">
          <div className="h-[1px] w-8 md:w-12 bg-white/50" />
          <span className="text-lg md:text-2xl font-light tracking-widest uppercase">{new Date(data.weddingDate).toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' })}</span>
          <div className="h-[1px] w-8 md:w-12 bg-white/50" />
        </div>
        <div className="flex flex-col items-center cursor-pointer group">
          <span className="text-sm uppercase tracking-widest mb-4 opacity-80 group-hover:opacity-100 transition-opacity">{t('hero.rsvp')}</span>
          <ChevronDown className="w-6 h-6 animate-bounce opacity-80 group-hover:opacity-100" />
        </div>
      </div>
    </section>
  );
};

const CoupleSection = () => {
  const { t } = useTranslation();
  const { data } = useWedding();
  return (
    <section className="py-20 px-6 bg-white text-center reveal-on-scroll">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl text-wedding-gold mb-8">{t('welcome.title')}</h2>
        <p className="text-wedding-carbon text-lg md:text-xl leading-relaxed font-light italic">"{data.welcomeText}"</p>
        <div className="mt-12 flex justify-center items-center space-x-8">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-wedding-ivory border border-wedding-gold flex items-center justify-center mb-4">
              <span className="font-display text-3xl text-wedding-gold">{data.brideName.charAt(0)}</span>
            </div>
            <span className="font-body text-sm tracking-widest uppercase text-wedding-sage">{data.brideName}</span>
          </div>
          <span className="font-display text-4xl text-wedding-gold">&</span>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-wedding-ivory border border-wedding-gold flex items-center justify-center mb-4">
              <span className="font-display text-3xl text-wedding-gold">{data.groomName.charAt(0)}</span>
            </div>
            <span className="font-body text-sm tracking-widest uppercase text-wedding-sage">{data.groomName}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const CountdownTimer = () => {
  const { t } = useTranslation();
  const { data } = useWedding();
  const targetDate = new Date(data.weddingDate + 'T00:00:00');
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const diff = targetDate.getTime() - new Date().getTime();
      if (diff > 0) setTimeLeft({ days: Math.floor(diff / 864e5), hours: Math.floor((diff / 36e5) % 24), minutes: Math.floor((diff / 6e4) % 60), seconds: Math.floor((diff / 1e3) % 60) });
    };
    calculateTimeLeft(); const timer = setInterval(calculateTimeLeft, 1000); return () => clearInterval(timer);
  }, [data.weddingDate]);

  const TimeUnit = ({ value, label }: { value: number, label: string }) => (
    <div className="flex flex-col items-center mx-2 md:mx-4">
      <div className="text-3xl md:text-5xl font-light text-wedding-gold mb-1">{value.toString().padStart(2, '0')}</div>
      <div className="text-[10px] md:text-xs uppercase tracking-widest text-wedding-sage">{label}</div>
    </div>
  );

  return (
    <section className="pt-16 pb-0 bg-wedding-ivory flex flex-col items-center reveal-on-scroll">
      <h2 className="font-display text-3xl md:text-4xl text-wedding-gold mb-2">{t('countdown.title')}</h2>
      <p className="text-wedding-sage text-sm mb-8 italic">{t('countdown.until')} {new Date(data.weddingDate).toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' })}</p>
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

const ProgramTimeline = () => {
  const { t } = useTranslation();
  const { data } = useWedding();
  const events = [
    { time: data.eventDetails.arrival, title: t('program.arrival'), icon: Clock },
    { time: data.eventDetails.ceremony, title: t('program.ceremony'), icon: Music },
    { time: data.eventDetails.cocktails, title: t('program.cocktails'), icon: GlassWater },
    { time: data.eventDetails.dinner, title: t('program.dinner'), icon: Utensils },
    { time: data.eventDetails.cake, title: t('program.cake'), icon: Cake },
  ];
  return (
    <section className="pt-0 pb-24 px-6 bg-wedding-ivory reveal-on-scroll">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 pt-12">
          <h2 className="font-display text-4xl md:text-5xl text-wedding-gold mb-4">{t('program.title')}</h2>
          <p className="text-wedding-sage uppercase tracking-widest text-sm">{new Date(data.weddingDate).toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        </div>
        <div className="space-y-12">
          {events.map((event, index) => (
            <div key={index} className="flex items-center group">
              <div className="w-24 text-right pr-8 font-body text-wedding-gold font-medium">{event.time}</div>
              <div className="relative flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white border border-wedding-gold flex items-center justify-center z-10 group-hover:bg-wedding-gold group-hover:text-white transition-colors"><event.icon className="w-6 h-6" /></div>
                {index < events.length - 1 && <div className="absolute top-12 bottom-0 w-[1px] bg-wedding-gold/30 h-12 -mb-12" />}
              </div>
              <div className="pl-8 font-body text-xl text-wedding-carbon/80">{event.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DressCode = () => {
  const { t } = useTranslation();
  return (
    <section className="py-24 px-6 bg-white reveal-on-scroll">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl text-wedding-gold mb-12">{t('dress.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-8 border border-wedding-ivory bg-wedding-ivory/50 rounded-lg shadow-sm">
            <Shirt className="w-12 h-12 text-wedding-gold mx-auto mb-6" />
            <h3 className="font-body text-2xl font-medium mb-4">{t('dress.men')}</h3>
            <p className="text-wedding-carbon/70 leading-relaxed italic">{t('dress.menDesc')}</p>
          </div>
          <div className="p-8 border border-wedding-ivory bg-wedding-ivory/50 rounded-lg shadow-sm">
            <Coffee className="w-12 h-12 text-wedding-gold mx-auto mb-6" />
            <h3 className="font-body text-2xl font-medium mb-4">Teacup</h3>
            <p className="text-wedding-carbon/70 leading-relaxed italic">Join us for a cozy afternoon tea session.</p>
          </div>
          <div className="p-8 border border-wedding-ivory bg-wedding-ivory/50 rounded-lg shadow-sm">
            <Utensils className="w-12 h-12 text-wedding-gold mx-auto mb-6" />
            <h3 className="font-body text-2xl font-medium mb-4">Sunday Lunch</h3>
            <p className="text-wedding-carbon/70 leading-relaxed italic">A farewell lunch to wrap up the celebrations.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const RSVPForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', attending: 'yes', guests: '1', dietary: '', message: '' });
  const handleSubmit = (e: any) => { e.preventDefault(); toast.success('RSVP Submitted!'); };
  return (
    <section className="py-24 px-6 bg-white reveal-on-scroll" id="rsvp">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="font-display text-4xl md:text-5xl text-wedding-gold mb-4">{t('rsvp.title')}</h2>
        <form onSubmit={handleSubmit} className="space-y-6 bg-wedding-ivory p-8 md:p-12 rounded-lg text-left">
          <input className="w-full p-3 bg-white border border-wedding-gold/20 rounded" placeholder={t('rsvp.enterName')} value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
          <input className="w-full p-3 bg-white border border-wedding-gold/20 rounded" placeholder="email@example.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
          <button type="submit" className="w-full py-3 bg-wedding-gold text-white uppercase tracking-widest font-medium rounded flex items-center justify-center space-x-2">
            <span>{t('rsvp.submit')}</span> <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
};

const WishesWall = () => {
  const [newWish, setNewWish] = useState({ name: '', message: '' });
  const [wishes, setWishes] = useState([
    { name: 'Maria & Juan', message: 'Congratulations to the beautiful couple!' },
    { name: 'Carlos', message: 'Wishing you a lifetime of happiness.' }
  ]);
  const handleSubmit = (e: any) => { e.preventDefault(); setWishes([newWish, ...wishes]); setNewWish({ name: '', message: '' }); };
  return (
    <section className="py-24 px-6 bg-wedding-ivory reveal-on-scroll">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-center text-4xl md:text-5xl text-wedding-gold mb-12">Wishes Wall</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg space-y-4">
            <input className="w-full p-3 bg-wedding-ivory border border-wedding-gold/20 rounded" value={newWish.name} onChange={(e) => setNewWish({...newWish, name: e.target.value})} placeholder="Your Name" />
            <textarea className="w-full p-3 bg-wedding-ivory border border-wedding-gold/20 rounded h-32" value={newWish.message} onChange={(e) => setNewWish({...newWish, message: e.target.value})} placeholder="Wishes..." />
            <button type="submit" className="w-full py-3 bg-wedding-gold text-white rounded flex items-center justify-center space-x-2"><span>Post</span><Send className="w-4 h-4" /></button>
          </form>
          <div className="space-y-6 max-h-[400px] overflow-y-auto">
            {wishes.map((w, i) => <div key={i} className="bg-white p-6 rounded-lg border-l-4 border-wedding-gold"><p className="italic">"{w.message}"</p><p className="text-wedding-gold font-medium">— {w.name}</p></div>)}
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const faqs = [
    { q: 'Is there a dress code?', a: 'Yes, please check the Dress Code section.' },
    { q: 'Can I bring a plus one?', a: 'Check your individual invitation.' }
  ];
  return (
    <section className="py-24 px-6 bg-white reveal-on-scroll text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl text-wedding-gold mb-12">Questions & Answers</h2>
        <div className="space-y-8 text-left">
          {faqs.map((f, i) => <div key={i} className="p-6 border border-wedding-ivory rounded-lg"><h3 className="font-medium text-wedding-gold mb-2">{f.q}</h3><p className="opacity-70">{f.a}</p></div>)}
        </div>
      </div>
    </section>
  );
};

const ThankYouSection = () => {
  const { t } = useTranslation();
  const { data } = useWedding();
  return (
    <section className="py-32 px-6 bg-white text-center reveal-on-scroll">
      <div className="max-w-3xl mx-auto">
        <Heart className="w-12 h-12 text-wedding-gold mx-auto mb-8 fill-current opacity-20" />
        <h2 className="font-display text-5xl md:text-7xl text-wedding-gold mb-8">{t('confirm.thankYou')}</h2>
        <p className="text-wedding-carbon text-xl md:text-2xl italic mb-12">"{t('confirm.thankPart')}"</p>
        <div className="flex flex-col items-center">
          <div className="h-[1px] w-24 bg-wedding-gold/30 mb-8" />
          <p className="font-body text-sm uppercase tracking-[0.3em] text-wedding-sage">{data.brideName} & {data.groomName}</p>
          <p className="mt-4 text-xs opacity-40 uppercase">{new Date(data.weddingDate).toLocaleDateString(undefined, { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '.')} • Ronda, Spain</p>
        </div>
      </div>
    </section>
  );
};

const VenueSection = () => {
  const { t } = useTranslation();
  const { data } = useWedding();
  return (
    <section className="py-24 px-6 bg-white reveal-on-scroll">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl text-wedding-gold mb-12">{t('events.title')}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="h-[400px] rounded-lg overflow-hidden shadow-2xl"><img src={data.photos[0]} className="w-full h-full object-cover" /></div>
          <div className="space-y-8 text-left">
            <div className="flex items-start space-x-4"><MapPin className="w-6 h-6 text-wedding-gold mt-1" /><div><h3 className="text-xl font-medium mb-2">{data.venueName}</h3><p className="opacity-70">{data.venueAddress}</p></div></div>
            <a href={`https://maps.google.com/?q=${encodeURIComponent(data.venueAddress)}`} target="_blank" className="inline-flex items-center px-8 py-3 bg-wedding-gold text-white rounded-full"><span>{t('events.openMaps')}</span><ExternalLink className="w-4 h-4 ml-2" /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- MAIN PAGE & ADMIN ---

const Index = () => {
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const handleOpen = useCallback(() => setEnvelopeOpen(true), []);
  return (
    <div className="bg-ivory min-h-screen">
      {!envelopeOpen && <EnvelopeScene onOpen={handleOpen} />}
      {envelopeOpen && (
        <>
          <StickyNav /> <WhatsAppButton /> <InvitationCard /> <CoupleSection /> <CountdownTimer /> <ProgramTimeline /> <DressCode /> <RSVPForm /> <WishesWall /> <FAQSection /> <ThankYouSection />
        </>
      )}
    </div>
  );
};

const Admin = () => {
  const { data, updateData, resetData } = useWedding();
  const [formData, setFormData] = useState<WeddingData>(data);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [p, c] = name.split('.'); setFormData(prev => ({ ...prev, [p]: { ...(prev[p as keyof WeddingData] as any), [c]: value } }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };
  const handleSave = () => { updateData(formData); toast.success('Saved!'); };
  const inputClasses = "w-full p-2 border border-wedding-gold/20 rounded bg-white mt-1";
  const labelClasses = "block text-xs uppercase tracking-widest text-wedding-carbon/60 mt-4";

  return (
    <div className="min-h-screen bg-wedding-ivory p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Link to="/" className="text-wedding-gold flex items-center"><ArrowLeft className="mr-2" /> Back</Link>
          <div className="flex space-x-2">
            <button onClick={() => {resetData(); setFormData(data);}} className="px-4 py-2 border border-wedding-gold/30 rounded text-wedding-gold flex items-center"><RotateCcw className="mr-2 w-4" /> Reset</button>
            <button onClick={handleSave} className="px-4 py-2 bg-wedding-gold text-white rounded flex items-center"><Save className="mr-2 w-4" /> Save</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl border border-wedding-gold/10">
            <h2 className="text-wedding-gold font-semibold border-b pb-2 mb-4">Core Details</h2>
            <label className={labelClasses}>Bride Name</label><input className={inputClasses} name="brideName" value={formData.brideName} onChange={handleChange} />
            <label className={labelClasses}>Groom Name</label><input className={inputClasses} name="groomName" value={formData.groomName} onChange={handleChange} />
            <label className={labelClasses}>Date</label><input className={inputClasses} type="date" name="weddingDate" value={formData.weddingDate} onChange={handleChange} />
          </div>
          <div className="bg-white p-8 rounded-xl border border-wedding-gold/10">
            <h2 className="text-wedding-gold font-semibold border-b pb-2 mb-4">Venue & Welcome</h2>
            <label className={labelClasses}>Venue</label><input className={inputClasses} name="venueName" value={formData.venueName} onChange={handleChange} />
            <label className={labelClasses}>Address</label><input className={inputClasses} name="venueAddress" value={formData.venueAddress} onChange={handleChange} />
            <label className={labelClasses}>Welcome Message</label><textarea className={inputClasses} name="welcomeText" value={formData.welcomeText} onChange={handleChange} rows={4} />
          </div>
        </div>
      </div>
    </div>
  );
};

// --- APP ROOT ---

const WeddingApp = () => (
  <WeddingProvider>
    <Toaster /> <Sonner />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  </WeddingProvider>
);

export default WeddingApp;
