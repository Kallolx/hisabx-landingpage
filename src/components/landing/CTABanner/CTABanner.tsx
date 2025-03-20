"use client";

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { FaRocket } from 'react-icons/fa';

const CTABanner = () => {
  const { t, language } = useLanguage();
  const isBangla = language === 'bn';

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#6FB3FF]/5 -top-48 -right-24" />
        <div className="absolute w-[300px] h-[300px] rounded-full bg-[#6FB3FF]/10 bottom-0 -left-20" />
        <div className="absolute w-[200px] h-[200px] rounded-full bg-[#6FB3FF]/5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#6FB3FF] to-[#3B82F6] rounded-3xl shadow-xl overflow-hidden relative">
          {/* Additional decorative elements inside the card */}
          <div className="absolute w-[300px] h-[300px] rounded-full bg-white/5 -top-32 -right-32" />
          <div className="absolute w-[200px] h-[200px] rounded-full bg-white/5 -bottom-20 -left-20" />
          
          <div className="px-8 py-16 sm:px-16 relative">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 text-white leading-tight ${isBangla ? 'font-hind-siliguri' : ''}`}>
                {t.cta?.primary.title || 'Ready to Streamline Your Business Operations?'}
              </h2>
              <p className={`text-white/90 text-lg mb-10 ${isBangla ? 'font-hind-siliguri' : ''}`}>
                {t.cta?.primary.description || 'Join thousands of businesses that trust HisabX for their financial management. Start your journey today with our 14-day free trial.'}
              </p>
              <button className={`inline-flex items-center justify-center px-8 py-4 bg-white text-[#3B82F6] font-semibold rounded-xl hover:bg-gray-50 transition-all transform hover:scale-105 hover:shadow-lg gap-2 ${isBangla ? 'font-hind-siliguri' : ''}`}>
                <FaRocket className="w-5 h-5" />
                {t.cta?.primary.startTrial || 'Start Free Trial'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner; 