"use client";

import { motion } from "framer-motion";

const beneficiaries = [
  {
    icon: (
      <svg className="w-12 h-12 text-[#6FB3FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Quick Service Restaurants",
    description: "Perfect for fast-food chains and casual dining establishments looking to streamline their operations and delivery management."
  },
  {
    icon: (
      <svg className="w-12 h-12 text-[#6FB3FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Fine Dining Restaurants",
    description: "Ideal for upscale restaurants requiring sophisticated staff management and precise service timing coordination."
  },
  {
    icon: (
      <svg className="w-12 h-12 text-[#6FB3FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Cloud Kitchens",
    description: "Essential for delivery-only kitchens managing multiple brands and requiring efficient order processing systems."
  },
  {
    icon: (
      <svg className="w-12 h-12 text-[#6FB3FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
    title: "Catering Services",
    description: "Perfect for catering businesses managing multiple events, staff assignments, and delivery schedules simultaneously."
  },
  {
    icon: (
      <svg className="w-12 h-12 text-[#6FB3FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Food Chains",
    description: "Suitable for restaurant chains requiring centralized management and consistent service across multiple locations."
  },
  {
    icon: (
      <svg className="w-12 h-12 text-[#6FB3FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    title: "Food Courts",
    description: "Ideal for food court vendors needing efficient order management and delivery coordination in busy environments."
  }
];

const Benefits = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
            Who Can Benefit From HisabX?
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Our software is tailored to meet the diverse needs of various food service businesses, helping them optimize operations and enhance customer service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {beneficiaries.map((item, index) => (
            <div key={item.title} className={`py-4 px-3 md:p-8 relative
              ${index === 1 || index === 4 ? 'border-l border-gray-200' : ''}
              ${index === 2 || index === 5 ? 'lg:border-l lg:border-gray-200' : ''}
              ${index >= 3 ? 'border-t border-gray-200' : ''}
            `}>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 text-center md:text-left">
                <div className="bg-[#6FB3FF]/5 p-2 md:p-3 rounded-lg shrink-0">
                  <div className="w-8 h-8 md:w-12 md:h-12">
                    {item.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits; 