"use client";

import { useLanguage } from '@/lib/i18n/LanguageContext';

interface PlanFeatures {
  name: string;
  description: string;
  price: string;
  buttonText: string;
  features: string[];
}

interface PricingTranslations {
  title: string;
  subtitle: string;
  description: string;
  mostPopular: string;
  period: string;
  plans: {
    basic: PlanFeatures;
    professional: PlanFeatures;
    enterprise: PlanFeatures;
  };
}

const Pricing = () => {
  const { t, language } = useLanguage();
  const isBangla = language === 'bn';

  // Access translations directly as an object
  const pricingTranslations = t.pricing as PricingTranslations;

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#6FB3FF] font-semibold  mb-4">{pricingTranslations.title}</p>
          <h2 className={`text-3xl md:text-4xl -tracking-[0.04em] font-bold mb-4 ${isBangla ? 'font-hind-siliguri' : ''}`}>
            {pricingTranslations.subtitle}
          </h2>
          <p className={`text-gray-600 max-w-2xl mx-auto ${isBangla ? 'font-hind-siliguri' : ''}`}>
            {pricingTranslations.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-0 max-w-6xl mx-auto bg-white">
          {(['basic', 'professional', 'enterprise'] as const).map((planKey, index) => {
            const plan = pricingTranslations.plans[planKey];
            const isPopular = planKey === 'professional';

            return (
              <div 
                key={planKey}
                className={`relative flex flex-col min-h-[800px] ${
                  index === 0 ? 'lg:border-r' : 
                  index === 1 ? 'lg:border-r' : ''
                } border-gray-200`}
              >
                <div className="p-8 md:p-12 flex-1">
                  {isPopular && (
                    <div className={`inline-block bg-[#6FB3FF]/10 text-[#6FB3FF] text-sm font-semibold px-4 py-1 rounded-full mb-8 ${isBangla ? 'font-hind-siliguri' : ''}`}>
                      {pricingTranslations.mostPopular}
                    </div>
                  )}
                  
                  <div className="flex flex-col mb-8">
                    <h3 className={`text-xl font-bold mb-2 ${isBangla ? 'font-hind-siliguri' : ''}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-gray-600 text-sm mb-6 ${isBangla ? 'font-hind-siliguri' : ''}`}>
                      {plan.description}
                    </p>
                    <div className="flex items-baseline">
                      <span className={`text-4xl lg:text-5xl font-bold tracking-tight ${isBangla ? 'font-hind-siliguri' : ''}`}>
                        {plan.price}
                      </span>
                      <span className={`text-gray-500 ml-2 ${isBangla ? 'font-hind-siliguri' : ''}`}>
                        {pricingTranslations.period}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {plan.features.map((feature: string, featureIndex: number) => (
                      <div key={feature} className="flex items-start">
                        <div className={`mr-3 h-5 w-5 rounded-full flex items-center justify-center ${isPopular ? 'bg-[#6FB3FF]/10' : 'bg-gray-50'}`}>
                          <svg className={`h-3 w-3 ${isPopular ? 'text-[#6FB3FF]' : 'text-gray-400'}`} viewBox="0 0 12 12" fill="none">
                            <path d="M2.5 6L5 8.5L9.5 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className={`text-sm ${featureIndex < 5 ? 'font-medium' : ''} ${isBangla ? 'font-hind-siliguri' : ''}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-8 md:p-12 border-t border-gray-200">
                  <button 
                    className={`w-full py-4 rounded-xl text-center font-semibold transition-colors ${
                      isPopular 
                        ? 'bg-[#6FB3FF] text-white hover:bg-[#5A9FFF]' 
                        : 'bg-[#6FB3FF] text-white hover:bg-[#5A9FFF]'
                    } ${isBangla ? 'font-hind-siliguri' : ''}`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing; 