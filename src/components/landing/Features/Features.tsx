"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import { Safari } from "@/components/ui/safari";


interface Feature {
  id: string;
  title: string;
  description: string;
  bulletPoints: {
    en: string[];
    bn: string[];
  };
  image: string;
  mobileImage: string;
  color: string;
}

interface FeatureAccordionProps {
  feature: Feature;
  index: number;
  isBangla: boolean;
  learnMoreText: string;
}

const Features = () => {
  const { t, language } = useLanguage();
  const isBangla = language === 'bn';
  const [activeFeature, setActiveFeature] = useState(0);
  
  // Define features with translations
  const restaurantFeatures: Feature[] = [
    {
      id: "dashboards",
      title: t.features.featureItems.dashboards.title,
      description: t.features.featureItems.dashboards.description,
      bulletPoints: {
        en: [
          "Role-specific views with essential information for each user type",
          "Real-time updates and notifications for critical business metrics",
          "Interactive data visualization with filters and drill-down capabilities"
        ],
        bn: [
          "প্রতিটি ব্যবহারকারীর জন্য ভূমিকা-নির্দিষ্ট ভিউ",
          "গুরুত্বপূর্ণ ব্যবসায়িক মেট্রিক্সের জন্য রিয়েল-টাইম আপডেট",
          "ইন্টারেক্টিভ ডাটা ভিজুয়ালাইজেশন টুলস"
        ]
      },
      image: "/images/feature/f1.jpg",
      mobileImage: "/images/feature/mobile/f1.jpg",
      color: "#6FB3FF"
    },
    {
      id: "reservations",
      title: t.features.featureItems.reservations.title,
      description: t.features.featureItems.reservations.description,
      bulletPoints: {
        en: [
          "Streamlined online booking system with instant confirmation",
          "Smart table allocation to maximize seating capacity and turnover",
          "Custom event scheduling with special arrangements and requirements"
        ],
        bn: [
          "তাৎক্ষণিক নিশ্চিতকরণ সহ অনলাইন বুকিং সিস্টেম",
          "আসন ক্ষমতা বাড়ানোর জন্য স্মার্ট টেবিল বরাদ্দ",
          "বিশেষ আয়োজন ও প্রয়োজনীয়তা সহ অনুষ্ঠান সময়সূচী"
        ]
      },
      image: "/images/feature/f2.jpg",
      mobileImage: "/images/feature/mobile/f2.jpg",
      color: "#6FB3FF"
    },
    {
      id: "statistics",
      title: t.features.featureItems.statistics.title,
      description: t.features.featureItems.statistics.description,
      bulletPoints: {
        en: [
          "Comprehensive sales reports with customizable date ranges",
          "Expense tracking and profit margin analysis by menu item",
          "Customer behavior insights and trend forecasting"
        ],
        bn: [
          "কাস্টমাইজযোগ্য তারিখ পরিসর সহ বিক্রয় প্রতিবেদন",
          "মেনু আইটেম অনুসারে খরচ ট্র্যাকিং এবং লাভের বিশ্লেষণ",
          "গ্রাহক আচরণের অন্তর্দৃষ্টি এবং প্রবণতা পূর্বাভাস"
        ]
      },
      image: "/images/feature/f3.jpg",
      mobileImage: "/images/feature/mobile/f3.jpg",
      color: "#6FB3FF"
    },
    {
      id: "payroll",
      title: t.features.featureItems.payroll.title,
      description: t.features.featureItems.payroll.description,
      bulletPoints: {
        en: [
          "Automated hourly tracking with overtime calculations",
          "Integrated tip allocation system with fair distribution",
          "Tax compliance tools with automatic calculation and reporting"
        ],
        bn: [
          "ওভারটাইম গণনার সাথে স্বয়ংক্রিয় ঘন্টাভিত্তিক ট্র্যাকিং",
          "ন্যায্য বণ্টন সহ সমন্বিত টিপ বরাদ্দ সিস্টেম",
          "স্বয়ংক্রিয় গণনা এবং প্রতিবেদন সহ ট্যাক্স পরিপালন টুল"
        ]
      },
      image: "/images/feature/f4.jpg",
      mobileImage: "/images/feature/mobile/f4.jpg",
      color: "#6FB3FF"
    },
    {
      id: "menu",
      title: t.features.featureItems.menu.title,
      description: t.features.featureItems.menu.description,
      bulletPoints: {
        en: [
          "Easy menu creation with drag-and-drop menu builder",
          "Digital menu integration with QR code ordering capability",
          "Seasonal menu planning with inventory integration"
        ],
        bn: [
          "ড্র্যাগ-অ্যান্ড-ড্রপ মেনু বিল্ডার সহ সহজ মেনু তৈরি",
          "QR কোড অর্ডারিং ক্ষমতা সহ ডিজিটাল মেনু ইন্টিগ্রেশন",
          "ইনভেন্টরি সমন্বয় সহ মৌসুমী মেনু পরিকল্পনা"
        ]
      },
      image: "/images/feature/f5.jpg",
      mobileImage: "/images/feature/mobile/f5.jpg",
      color: "#6FB3FF"
    },
    {
      id: "orders",
      title: t.features.featureItems.orders.title,
      description: t.features.featureItems.orders.description,
      bulletPoints: {
        en: [
          "Unified order management for dine-in, takeout, and delivery",
          "Kitchen display system with order timing and alerts",
          "Integration with major food delivery platforms and POS systems"
        ],
        bn: [
          "ডাইন-ইন, টেকআউট, এবং ডেলিভারির জন্য একীভূত অর্ডার ব্যবস্থাপনা",
          "অর্ডার টাইমিং এবং অ্যালার্ট সহ কিচেন ডিসপ্লে সিস্টেম",
          "প্রধান খাদ্য বিতরণ প্ল্যাটফর্ম এবং POS সিস্টেমের সাথে সংযোগ"
        ]
      },
      image: "/images/feature/f6.jpg",
      mobileImage: "/images/feature/mobile/f6.jpg",
      color: "#6FB3FF"
    }
  ];
  
  // Create specific URL paths for each feature
  const getFeatureUrl = (featureId: string): string => {
    // Using simple URLs as requested
    return `hisabx.io/${featureId}`;
  };
  
  // Placeholder image URL if the feature image is not available
  const getFeatureImage = (feature: Feature): string => {
    // If actual image path exists and is valid, use it
    if (feature.image && !feature.image.includes('undefined')) {
      return feature.image;
    }
    
    // Otherwise, use an empty string (no image for now)
    return '';
  };
  
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className={`text-[#6FB3FF] font-semibold mb-3 ${isBangla ? 'font-hind-siliguri' : ''}`}>
            {isBangla ? 'বৈশিষ্ট্য' : 'Features'}
          </h3>
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 tracking-tight ${isBangla ? 'font-hind-siliguri' : ''}`}>
            {t.features.title}
          </h2>
          <p className={`text-gray-600 max-w-2xl mx-auto text-base ${isBangla ? 'font-hind-siliguri' : ''}`}>
            {t.features.subtitle}
          </p>
        </div>

        {/* Feature Tabs - Desktop */}
        <div className="hidden lg:block">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8 space-x-2 border-b border-gray-200">
            {restaurantFeatures.map((feature, idx) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(idx)}
                className={`px-5 py-3 text-sm font-medium transition-all relative ${
                  activeFeature === idx 
                    ? 'text-[#6FB3FF] font-bold' 
                    : 'text-gray-500 hover:text-gray-700'
                } ${isBangla ? 'font-hind-siliguri' : ''}`}
              >
                {feature.title}
                {activeFeature === idx && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ backgroundColor: feature.color }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Feature Content */}
          <div className="relative h-[530px] overflow-hidden rounded-xl shadow-lg">
            {restaurantFeatures.map((feature, idx) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: activeFeature === idx ? 1 : 0,
                  x: activeFeature === idx ? 0 : 20,
                  zIndex: activeFeature === idx ? 10 : 0
                }}
                transition={{ duration: 0.3 }}
                className={`absolute inset-0 flex ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Text Content */}
                <div className="w-1/2 p-12 flex flex-col justify-center bg-white">
                  <h3 
                    className={`text-2xl font-bold mb-6 tracking-tight ${isBangla ? 'font-hind-siliguri' : ''}`}
                    style={{ color: feature.color }}
                  >
                    {feature.title}
                  </h3>
                  <p className={`text-gray-600 mb-6 leading-relaxed ${isBangla ? 'font-hind-siliguri' : ''}`}>
                    {feature.description}
                  </p>

                  {/* Bullet Points with Tick Marks */}
                  <ul className="mb-6 space-y-3">
                    {feature.bulletPoints[isBangla ? 'bn' : 'en'].map((point, i) => (
                      <li key={i} className={`flex items-start ${isBangla ? 'font-hind-siliguri' : ''}`}>
                        <span className="text-[#6FB3FF] mr-2 mt-0.5 flex-shrink-0">
                          <FaCheck size={16} />
                        </span>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <button 
                      className={`px-6 py-2 rounded-lg text-white text-sm font-medium transition-all hover:opacity-90 ${isBangla ? 'font-hind-siliguri' : ''}`}
                      style={{ backgroundColor: feature.color }}
                    >
                      {t.features.learnMore}
                    </button>
                  </div>
                </div>
                
                {/* Image with Safari Browser */}
                <div className="w-1/2 relative bg-white flex items-center justify-center p-4 overflow-hidden">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-full max-w-[550px] -mt-8"
                  >
                    <Safari 
                      width={600} 
                      height={480} 
                      url={getFeatureUrl(feature.id)}
                      imageSrc={feature.image}
                      mode="default"
                      className="shadow-xl transform transition-all duration-500 hover:scale-[1.02] w-full rounded-xl overflow-hidden"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Feature Accordion - Mobile/Tablet */}
        <div className="lg:hidden space-y-4">
          {restaurantFeatures.map((feature, idx) => (
            <FeatureAccordion 
              key={feature.id} 
              feature={feature} 
              index={idx} 
              isBangla={isBangla}
              learnMoreText={t.features.learnMore}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureAccordion: React.FC<FeatureAccordionProps> = ({ feature, index, isBangla, learnMoreText }) => {
  const [isOpen, setIsOpen] = useState(index === 0 ? true : false); // Make first one open by default
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  
  // Generate URL for Safari browser in the accordion
  const getAccordionUrl = (id: string): string => {
    // Using simple URLs as requested
    return `hisabx.io/${id}`;
  };
  
  // Get image source for the feature (empty for now)
  const getAccordionImage = (feat: Feature): string => {
    return '';
  };
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border border-gray-200 rounded-lg overflow-hidden"
    >
      {/* Accordion Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0"
            style={{ backgroundColor: feature.color }}
          >
            <span className="text-white text-sm font-bold">{index + 1}</span>
          </div>
          <h4 className={`text-lg font-semibold text-left ${isBangla ? 'font-hind-siliguri' : ''}`}>
            {feature.title}
          </h4>
        </div>
        <svg
          className={`w-5 h-5 text-gray-500 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {/* Accordion Content */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6">
          {/* Feature Image - Simple image instead of Safari browser */}
          <div className="aspect-video relative rounded-lg mb-4 overflow-hidden flex items-center justify-center bg-white">
            {feature.mobileImage ? (
              <div className="relative w-full h-full overflow-hidden">
                <Image 
                  src={feature.mobileImage}
                  alt={feature.title}
                  width={600}
                  height={480}
                  className="object-cover rounded-lg object-top"
                  style={{ objectPosition: 'top left' }}
                />
              </div>
            ) : (
              <div 
                className="w-full h-full flex items-center justify-center rounded-lg"
                style={{ backgroundColor: feature.color + '33' }} // Adding transparency to feature color
              >
                <span className="text-lg font-medium" style={{ color: feature.color }}>{feature.title}</span>
              </div>
            )}
          </div>
          
          {/* Feature Description */}
          <p className={`text-gray-600 mb-4 ${isBangla ? 'font-hind-siliguri' : ''}`}>
            {feature.description}
          </p>
          
          {/* Bullet Points with Tick Marks for Mobile */}
          <ul className="mb-5 space-y-2.5">
            {feature.bulletPoints[isBangla ? 'bn' : 'en'].map((point, i) => (
              <li key={i} className={`flex items-start ${isBangla ? 'font-hind-siliguri' : ''}`}>
                <span className="text-[#6FB3FF] mr-2 flex-shrink-0 mt-0.5">
                  <FaCheck size={14} />
                </span>
                <span className="text-gray-700 text-sm">{point}</span>
              </li>
            ))}
          </ul>
          
          <button 
            className={`px-5 py-2 rounded-lg text-white text-sm font-medium transition-all hover:opacity-90 ${isBangla ? 'font-hind-siliguri' : ''}`}
            style={{ backgroundColor: feature.color }}
          >
            {learnMoreText}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Features; 