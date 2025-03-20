'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, Translations, translations } from './translations';

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translations;
};

const defaultLanguage: Language = 'bn';

// Create the context with a default value
const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
  setLanguage: () => {},
  t: translations[defaultLanguage],
});

// Custom hook for using the language context
export const useLanguage = () => useContext(LanguageContext);

// Provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(defaultLanguage);
  const [t, setTranslations] = useState<Translations>(translations[defaultLanguage]);
  
  // Update translations when language changes
  useEffect(() => {
    // Update the translations
    setTranslations(translations[language]);
    
    // Save the language preference to localStorage
    localStorage.setItem('language', language);
    
    // Update the document language attribute
    document.documentElement.lang = language;
    
    // We don't need to add a class to the document for the font
    // Instead, components will apply the font-hind-siliguri class to their text elements
  }, [language]);
  
  // Load saved language preference on initial load
  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem('language') as Language;
      // Only use saved language if it exists and is not the default (Bangla)
      if (savedLanguage && translations[savedLanguage] && savedLanguage !== defaultLanguage) {
        setLanguageState(savedLanguage);
      } else {
        // If no saved language or it's already Bangla, ensure we're using Bangla
        setLanguageState(defaultLanguage);
        localStorage.setItem('language', defaultLanguage);
      }
    } catch (error) {
      // In case of any localStorage errors, fallback to Bangla
      console.error('Error accessing localStorage:', error);
      setLanguageState(defaultLanguage);
    }
  }, []);
  
  const setLanguage = (newLanguage: Language) => {
    if (translations[newLanguage]) {
      setLanguageState(newLanguage);
    }
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}; 