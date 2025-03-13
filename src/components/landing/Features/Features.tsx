"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    id: "location",
    title: "Location Tracking",
    description: "Track your staff members' real-time GPS locations on a map, ensuring safety, accountability, and resource optimization.",
    imageNumber: "1"
  },
  {
    id: "checkin",
    title: "Check-in, Check-out",
    description: "Streamline attendance management with digital check-in/out system. Monitor work hours, breaks, and attendance patterns efficiently.",
    imageNumber: "2"
  },
  {
    id: "order",
    title: "Order Management",
    description: "Efficiently manage orders, track deliveries, and optimize your restaurant's order fulfillment process in real-time.",
    imageNumber: "3"
  },
  {
    id: "zone",
    title: "Zone Management",
    description: "Define and manage service zones, delivery areas, and staff assignments to optimize coverage and improve service efficiency.",
    imageNumber: "4"
  },
  {
    id: "performance",
    title: "Performance Analysis",
    description: "Get detailed insights into staff performance, delivery times, and operational metrics to make data-driven decisions.",
    imageNumber: "5"
  },
  {
    id: "mobile",
    title: "Mobile App",
    description: "Access all features on-the-go with our powerful mobile app. Perfect for managers and staff to stay connected and productive.",
    imageNumber: "6"
  }
];

const Features = () => {
  const [activeTab, setActiveTab] = useState("location");
  const [direction, setDirection] = useState(0);

  const activeFeature = features.find(feature => feature.id === activeTab);
  
  const handleTabChange = (id: string) => {
    const currentIndex = features.findIndex(f => f.id === activeTab);
    const newIndex = features.findIndex(f => f.id === id);
    setDirection(newIndex > currentIndex ? 1 : -1);
    setActiveTab(id);
  };

  return (
    <section className="py-20 bg-[#f2f8ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16 bg-[#6FB3FF]/5 rounded-lg p-4">
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => handleTabChange(feature.id)}
              className={`px-4 py-2 rounded-md text-sm md:text-base font-medium transition-all duration-300 ease-in-out
                ${activeTab === feature.id 
                  ? "bg-[#6FB3FF] text-white shadow-lg" 
                  : "text-gray-600 hover:text-[#6FB3FF] hover:bg-[#6FB3FF]/10"
                }`}
            >
              {feature.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="text-center mb-12">
          <AnimatePresence mode="wait">
            <motion.h2
              key={activeFeature?.title + "-title"}
              initial={{ opacity: 0, x: 50 * direction }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 * direction }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              {activeFeature?.title}
            </motion.h2>
            <motion.p
              key={activeFeature?.description + "-desc"}
              initial={{ opacity: 0, x: 50 * direction }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 * direction }}
              transition={{ duration: 0.3, delay: 0.1, ease: "easeInOut" }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              {activeFeature?.description}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Image */}
        <div className="relative w-full aspect-[16/9] max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature?.imageNumber + "-image"}
              initial={{ opacity: 0, x: 100 * direction }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 * direction }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full h-full bg-white rounded-2xl shadow-[0_8px_30px_rgb(111,179,255,0.2)] flex items-center justify-center"
            >
              <span className="text-8xl font-bold text-[#6FB3FF]/20">
                Image {activeFeature?.imageNumber}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Features; 