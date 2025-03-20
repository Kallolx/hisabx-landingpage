"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const faqData = {
  general: {
    title: "General Questions",
    items: [
      {
        question: "What is HisabX?",
        answer: "HisabX is a comprehensive business management platform designed specifically for restaurants and food service businesses. It helps streamline operations, manage staff, track orders, and analyze performance all in one place."
      },
      {
        question: "How do I get started with HisabX?",
        answer: "Getting started is easy! Simply sign up for our 14-day free trial, and our team will guide you through the setup process. We provide full onboarding support to ensure you're up and running quickly."
      },
      {
        question: "Is my data secure with HisabX?",
        answer: "Yes, we take data security very seriously. We use industry-standard encryption and security measures to protect your data. All information is stored in secure cloud servers with regular backups."
      },
      {
        question: "Can I use HisabX on mobile devices?",
        answer: "Yes, HisabX is fully mobile-responsive and we also offer dedicated mobile apps for both iOS and Android devices, allowing you to manage your business on the go."
      }
    ]
  },
  technical: {
    title: "Technical Support",
    items: [
      {
        question: "What kind of support do you offer?",
        answer: "We offer 24/7 customer support through multiple channels including live chat, email, and phone. Our technical team is always ready to assist you with any issues or questions."
      },
      {
        question: "Can I integrate HisabX with other tools?",
        answer: "Yes, HisabX offers various integration options with popular business tools and POS systems. We provide API access and support for custom integrations as needed."
      },
      {
        question: "How often is the system updated?",
        answer: "We regularly update our system with new features and improvements based on user feedback. All updates are automatically deployed with zero downtime."
      },
      {
        question: "What happens to my data if I cancel?",
        answer: "You can export your data at any time. If you cancel, we provide a 30-day window to download your data before it is securely removed from our systems."
      }
    ]
  }
};

const FAQCard = ({ question, answer, isOpen, onClick, isBangla }: { 
  question: string; 
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  isBangla: boolean;
}) => {
  return (
    <div 
      className="border border-gray-200 rounded-xl overflow-hidden bg-white cursor-pointer hover:border-[#6FB3FF]/30 transition-colors"
      onClick={onClick}
    >
      <div className="p-6">
        <div className="flex justify-between items-center gap-4">
          <h3 className={`font-semibold text-gray-900 ${isBangla ? 'font-hind-siliguri' : ''}`}>{question}</h3>
          <svg
            className={`w-5 h-5 text-[#6FB3FF] transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <p className={`mt-4 text-gray-600 ${isBangla ? 'font-hind-siliguri' : ''}`}>{answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openItems, setOpenItems] = useState<{[key: string]: boolean}>({});
  const { t, language } = useLanguage();
  const isBangla = language === 'bn';

  const toggleItem = (category: string, index: number) => {
    const key = `${category}-${index}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#6FB3FF] font-semibold mb-4">{t.faq?.title}</p>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isBangla ? 'font-hind-siliguri' : ''}`}>
            {t.faq?.subtitle}
          </h2>
          <p className={`text-gray-600 max-w-2xl mx-auto ${isBangla ? 'font-hind-siliguri' : ''}`}>
            {t.faq?.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {Object.entries(t.faq?.categories || {}).map(([category, { title, items }]) => (
            <div key={category}>
              <h3 className={`text-xl font-bold mb-6 ${isBangla ? 'font-hind-siliguri' : ''}`}>{title}</h3>
              <div className="space-y-4">
                {items.map((item, index) => (
                  <FAQCard
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openItems[`${category}-${index}`] || false}
                    onClick={() => toggleItem(category, index)}
                    isBangla={isBangla}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Us Section */}
        <div className="mt-20 text-center">
          <h3 className={`text-2xl font-bold mb-4 ${isBangla ? 'font-hind-siliguri' : ''}`}>
            {t.faq?.stillHaveQuestions.title}
          </h3>
          <p className={`text-gray-600 mb-8 max-w-2xl mx-auto ${isBangla ? 'font-hind-siliguri' : ''}`}>
            {t.faq?.stillHaveQuestions.description}
          </p>
          <button className={`px-8 py-3 bg-[#6FB3FF] text-white font-semibold rounded-xl hover:bg-[#5A9FFF] transition-colors ${isBangla ? 'font-hind-siliguri' : ''}`}>
            {t.faq?.stillHaveQuestions.contactSupport}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 