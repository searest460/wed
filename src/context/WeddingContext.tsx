import React, { createContext, useContext, useState, useEffect } from 'react';

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
  photos: [
    "/assets/intro-poster-new-BU7qGwfU.jpg"
  ],
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
  if (context === undefined) {
    throw new Error('useWedding must be used within a WeddingProvider');
  }
  return context;
};
