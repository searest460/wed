import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "hero.subtitle": "We're getting married",
        "hero.date": "12 September 2026",
        "hero.rsvp": "RSVP",
        "countdown.title": "Countdown",
        "countdown.until": "Until 12 September 2026",
        "countdown.days": "Days",
        "countdown.hours": "Hours",
        "countdown.minutes": "Minutes",
        "countdown.seconds": "Seconds",
        "welcome.title": "Welcome!",
        "welcome.text": "We warmly invite you to celebrate our wedding day with us in the beautiful town of Ronda, Andalusia. We look forward to sharing this unforgettable moment with our most special people.",
        "events.title": "The Venue",
        "events.subtitle": "Where we celebrate",
        "events.date": "12 September 2026",
        "events.openMaps": "Open in Maps",
        "program.title": "Day Programme",
        "program.date": "12 September 2026",
        "program.arrival": "Arrival",
        "program.ceremony": "Ceremony",
        "program.cocktails": "Cocktails",
        "program.dinner": "Dinner",
        "program.cake": "Cutting the Cake",
        "program.finish": "Finish",
        "dress.title": "Dress Code",
        "dress.men": "Men",
        "dress.menDesc": "Dark suit and tie",
        "dress.women": "Women",
        "dress.womenDesc": "Cocktail or formal dress",
        "gifts.title": "Gifts",
        "gifts.text": "Your presence is our greatest gift. If you wish to give us something, please find our bank account information below:",
        "gifts.account1": "CaixaBank – Andrea Morales",
        "gifts.account1details": "IBAN: ES00 0000 0000 0000 0000 0000\nBIC/SWIFT: XXXXXXXXXX",
        "gifts.account2": "Banco Santander – Pedro Fernández",
        "gifts.account2details": "IBAN: ES00 0000 0000 0000 0000 0000\nBIC/SWIFT: XXXXXXXXXX",
        "rsvp.title": "RSVP",
        "rsvp.subtitle": "Let us know if you can make it",
        "rsvp.attend": "Will you be attending? *",
        "rsvp.yes": "Yes, I'll be there",
        "rsvp.no": "Unfortunately, I can't make it",
        "rsvp.fullName": "Full name *",
        "rsvp.enterName": "Enter your name",
        "rsvp.howMany": "How many guests?",
        "rsvp.email": "Email address",
        "rsvp.dietary": "Dietary requirements",
        "rsvp.message": "Message for the couple",
        "rsvp.send": "Send RSVP",
        "transport.title": "Location & Transportation",
        "transport.subtitle": "How to get to Finca El Olivar",
        "transport.fullAddress": "Finca El Olivar, Camino de los Olivos s/n, 29400 Ronda, Málaga – Spain"
      }
    }
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
})

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
