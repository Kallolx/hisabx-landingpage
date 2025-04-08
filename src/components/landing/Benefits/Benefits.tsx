"use client";

import { motion } from "framer-motion";
import { img } from "framer-motion/client";
import { useLanguage } from '@/lib/i18n/LanguageContext';

const Benefits = () => {
  const { t, language } = useLanguage();
  const isBangla = language === 'bn';

  const beneficiaries = [
    {
      icon: <img src="/images/icons/quick.png" alt={t.benefits.items.quickService.title} className="w-12 h-12" />,
      title: t.benefits.items.quickService.title,
      description: t.benefits.items.quickService.description,
    },
    {
      icon: <img src="/images/icons/dining.png" alt={t.benefits.items.fineDining.title} className="w-12 h-12" />,
      title: t.benefits.items.fineDining.title,
      description: t.benefits.items.fineDining.description,
    },
    {
      icon: <img src="/images/icons/delivery.png" alt={t.benefits.items.delivery.title} className="w-12 h-12" />,
      title: t.benefits.items.delivery.title,
      description: t.benefits.items.delivery.description,
    },
    {
      icon: <img src="/images/icons/kitchen.png" alt={t.benefits.items.cloudKitchens.title} className="w-12 h-12" />,
      title: t.benefits.items.cloudKitchens.title,
      description: t.benefits.items.cloudKitchens.description,
    },
    {
      icon: <img src="/images/icons/catering.png" alt={t.benefits.items.catering.title} className="w-12 h-12" />,
      title: t.benefits.items.catering.title,
      description: t.benefits.items.catering.description,
    },
    {
      icon: <img src="/images/icons/court.png" alt={t.benefits.items.foodCourts.title} className="w-12 h-12" />,
      title: t.benefits.items.foodCourts.title,
      description: t.benefits.items.foodCourts.description,
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold -tracking-[0.04em] mb-4 ${isBangla ? 'font-hind-siliguri' : ''}`}>
            {t.benefits.title}
          </h2>
          <p className={`text-gray-600 max-w-2xl mx-auto text-lg ${isBangla ? 'font-hind-siliguri' : ''}`}>
            {t.benefits.subtitle}
          </p>
        </div>

        <div className="space-y-16">
          {/* First Row - 3 items side by side */}
          <div className="grid grid-cols-1 md:grid-cols-3 relative">
            {beneficiaries.slice(0, 3).map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 md:p-8 relative ${
                  index > 0 ? "md:border-l border-gray-200" : ""
                } ${
                  index > 0 && index < 3
                    ? "border-t md:border-t-0 border-gray-200"
                    : ""
                }`}
              >
                <div className="flex flex-col items-center">
                  <div className="mb-4 md:mb-6">{item.icon}</div>
                  <h3 className={`text-xl font-bold text-center mb-2 md:mb-3 ${isBangla ? 'font-hind-siliguri' : ''}`}>
                    {item.title}
                  </h3>
                  <p className={`text-gray-600 text-center text-sm md:text-base ${isBangla ? 'font-hind-siliguri' : ''}`}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Middle Section - Large Feature */}
          <div className="border-t border-b border-gray-200 py-8 md:py-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col justify-center text-center md:text-left">
                <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${isBangla ? 'font-hind-siliguri' : ''}`}>
                  {t.benefits.whyChooseUs.title}
                </h3>
                <p className={`text-gray-600 mb-6 ${isBangla ? 'font-hind-siliguri' : ''}`}>
                  {t.benefits.whyChooseUs.description}
                </p>
                <ul className="space-y-3 mx-auto md:mx-0 max-w-xs md:max-w-none">
                  <li className="flex items-center gap-3 justify-center md:justify-start">
                    <svg
                      className="w-5 h-5 text-[#6FB3FF] flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className={isBangla ? 'font-hind-siliguri' : ''}>
                      {t.benefits.whyChooseUs.features.orderManagement}
                    </span>
                  </li>
                  <li className="flex items-center gap-3 justify-center md:justify-start">
                    <svg
                      className="w-5 h-5 text-[#6FB3FF] flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className={isBangla ? 'font-hind-siliguri' : ''}>
                      {t.benefits.whyChooseUs.features.inventoryTracking}
                    </span>
                  </li>
                  <li className="flex items-center gap-3 justify-center md:justify-start">
                    <svg
                      className="w-5 h-5 text-[#6FB3FF] flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className={isBangla ? 'font-hind-siliguri' : ''}>
                      {t.benefits.whyChooseUs.features.staffScheduling}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="hidden md:flex items-center justify-center border-l border-gray-200 pl-8">
                <img src="/images/image.png" alt="Dashboard" />
              </div>
            </div>
          </div>

          {/* Bottom Row - 3 items in horizontal columns */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {beneficiaries.slice(3, 6).map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 md:p-8 relative ${
                  index > 0 ? "md:border-l border-gray-200" : ""
                } ${
                  index > 0 && index < 3
                    ? "border-t md:border-t-0 border-gray-200"
                    : ""
                }`}
              >
                <div className="flex flex-col items-center">
                  <div className="mb-4 md:mb-6">{item.icon}</div>
                  <h3 className={`text-xl font-bold text-center mb-2 md:mb-3 ${isBangla ? 'font-hind-siliguri' : ''}`}>
                    {item.title}
                  </h3>
                  <p className={`text-gray-600 text-center text-sm md:text-base ${isBangla ? 'font-hind-siliguri' : ''}`}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
