'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Language } from '@/lib/i18n/translations';
import { useState } from 'react';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'bn', name: 'বাংলা', flag: '🇧🇩' },
];

const LanguageSelector = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  // Find the current language details
  const currentLanguage = languages.find((lang) => lang.code === language) || languages[0];
  const isBangla = language === 'bn';

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className={`flex items-center gap-2 text-gray-600 hover:text-[#6FB3FF] transition-colors text-sm ${isBangla ? 'font-hind-siliguri' : ''}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="mr-1">{currentLanguage.flag}</span>
        <span>{currentLanguage.name}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute bottom-full mb-2 right-0 z-10 bg-white rounded-lg shadow-lg border border-gray-200 py-1 min-w-[120px]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code as Language)}
              className={`w-full text-left px-4 py-2 text-sm ${
                language === lang.code
                  ? 'bg-[#6FB3FF]/10 text-[#6FB3FF]'
                  : 'text-gray-700 hover:bg-gray-100'
              } ${lang.code === 'bn' ? 'font-hind-siliguri' : ''}`}
            >
              <span className="mr-2">{lang.flag}</span>
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector; 