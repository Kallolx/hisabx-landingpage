"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import StepImage from "./StepImage";
import { useLanguage } from '@/lib/i18n/LanguageContext';

const HowItWorks = () => {
  const { t, language } = useLanguage();
  const isBangla = language === 'bn';
  
  const steps = [
    {
      number: 1,
      title: t.howItWorks.steps.step1.title,
      description: t.howItWorks.steps.step1.description
    },
    {
      number: 2,
      title: t.howItWorks.steps.step2.title,
      description: t.howItWorks.steps.step2.description
    },
    {
      number: 3,
      title: t.howItWorks.steps.step3.title,
      description: t.howItWorks.steps.step3.description
    },
    {
      number: 4,
      title: t.howItWorks.steps.step4.title,
      description: t.howItWorks.steps.step4.description
    },
  ];

  const StepItem = ({ step, index, isLeft }: { step: typeof steps[0], index: number, isLeft: boolean }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : (isLeft ? -50 : 50) }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative"
      >
        {/* Number Circle - Desktop */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#6FB3FF] text-white items-center justify-center text-2xl font-bold z-10">
          {step.number}
        </div>

        <div className={`flex flex-col ${isLeft ? 'lg:mr-[55%] lg:text-right' : 'lg:ml-[55%]'}`}>
          {/* Step Content */}
          <div className="flex flex-col lg:block">
            {/* Number Circle - Mobile */}
            <div className="lg:hidden w-10 h-10 rounded-full bg-[#6FB3FF] text-white flex items-center justify-center text-lg font-bold shrink-0 relative z-10 mb-4">
              {step.number}
            </div>
            <div className="flex-1 bg-white lg:bg-transparent p-4 lg:p-0 rounded-xl lg:rounded-none">
              {/* Image Container */}
              <div className={`w-full lg:w-[400px] mb-4 lg:mb-6 rounded-xl lg:rounded-lg overflow-hidden bg-white shadow-md lg:shadow-xl ${isLeft ? 'lg:ml-auto' : ''}`}>
                <div className="aspect-[16/10] relative">
                  <StepImage number={step.number} />
                </div>
              </div>
              
              <h3 className={`text-lg lg:text-xl font-bold mb-2 lg:mb-3 ${isBangla ? 'font-hind-siliguri' : ''}`}>
                {step.title}
              </h3>
              <p className={`text-sm lg:text-base text-gray-600 ${isBangla ? 'font-hind-siliguri' : ''}`}>
                {step.description}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };
  
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className={`inline-block px-4 py-1 bg-blue-50 text-[#6FB3FF] rounded-full text-sm font-medium mb-4 ${isBangla ? 'font-hind-siliguri' : ''}`}>
            {t.howItWorks.simpleProcess}
          </span>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold -tracking-[0.04em] mb-4 ${isBangla ? 'font-hind-siliguri' : ''}`}>
            {t.howItWorks.title}
          </h2>
          <p className={`text-gray-600 max-w-2xl mx-auto text-lg ${isBangla ? 'font-hind-siliguri' : ''}`}>
            {t.howItWorks.subtitle}
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Connecting Line - Desktop Only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-100" />
          </div>

          <div className="space-y-8 lg:space-y-24">
            {steps.map((step, index) => (
              <StepItem 
                key={step.number} 
                step={step} 
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 