"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    id: "location",
    title: "Location Tracking",
    description: "Track your staff members' real-time GPS locations on a map, ensuring safety, accountability, and resource optimization.",
    imageNumber: "1",
    stats: [
      { value: "98%", label: "Accuracy Rate" },
      { value: "24/7", label: "Real-time Tracking" },
      { value: "100+", label: "Cities Covered" },
      { value: "50k+", label: "Daily Updates" }
    ]
  },
  {
    id: "checkin",
    title: "Check-in, Check-out",
    description: "Streamline attendance management with digital check-in/out system. Monitor work hours, breaks, and attendance patterns efficiently.",
    imageNumber: "2",
    stats: [
      { value: "99.9%", label: "Uptime" },
      { value: "10k+", label: "Daily Check-ins" },
      { value: "500+", label: "Restaurants" },
      { value: "2k+", label: "Staff Members" }
    ]
  },
  {
    id: "order",
    title: "Order Management",
    description: "Efficiently manage orders, track deliveries, and optimize your restaurant's order fulfillment process in real-time.",
    imageNumber: "3",
    stats: [
      { value: "15k+", label: "Orders Daily" },
      { value: "30%", label: "Faster Delivery" },
      { value: "95%", label: "Customer Satisfaction" },
      { value: "200+", label: "Delivery Partners" }
    ]
  },
  {
    id: "zone",
    title: "Zone Management",
    description: "Define and manage service zones, delivery areas, and staff assignments to optimize coverage and improve service efficiency.",
    imageNumber: "4",
    stats: [
      { value: "50+", label: "Service Zones" },
      { value: "100%", label: "Coverage" },
      { value: "2x", label: "Efficiency" },
      { value: "1k+", label: "Active Zones" }
    ]
  },
  {
    id: "performance",
    title: "Performance Analysis",
    description: "Get detailed insights into staff performance, delivery times, and operational metrics to make data-driven decisions.",
    imageNumber: "5",
    stats: [
      { value: "40%", label: "Cost Reduction" },
      { value: "25%", label: "Time Saved" },
      { value: "100+", label: "Reports" },
      { value: "5k+", label: "Data Points" }
    ]
  },
  {
    id: "mobile",
    title: "Mobile App",
    description: "Access all features on-the-go with our powerful mobile app. Perfect for managers and staff to stay connected and productive.",
    imageNumber: "6",
    stats: [
      { value: "4.8/5", label: "App Rating" },
      { value: "10k+", label: "Downloads" },
      { value: "98%", label: "User Retention" },
      { value: "24/7", label: "Support" }
    ]
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
    <section className="py-12 sm:py-20]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-16 bg-[#6FB3FF]/5 rounded-lg p-2 sm:p-4">
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => handleTabChange(feature.id)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm md:text-base font-medium transition-all duration-300 ease-in-out whitespace-nowrap
                ${activeTab === feature.id 
                  ? "bg-[#5A90CC] text-white shadow-lg" 
                  : "text-gray-600 hover:text-[#6FB3FF] hover:bg-[#6FB3FF]/10"
                }`}
            >
              {feature.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="text-center mb-8 sm:mb-12">
          <AnimatePresence mode="wait">
            <motion.h2
              key={activeFeature?.title + "-title"}
              initial={{ opacity: 0, x: 50 * direction }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 * direction }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
            >
              {activeFeature?.title}
            </motion.h2>
            <motion.p
              key={activeFeature?.description + "-desc"}
              initial={{ opacity: 0, x: 50 * direction }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 * direction }}
              transition={{ duration: 0.3, delay: 0.1, ease: "easeInOut" }}
              className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4"
            >
              {activeFeature?.description}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Image */}
        <div className="relative w-full aspect-[16/9] max-w-5xl mx-auto mb-8 sm:mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature?.imageNumber + "-image"}
              initial={{ opacity: 0, x: 100 * direction }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 * direction }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full h-full bg-white rounded-2xl shadow-[0_8px_30px_rgb(111,179,255,0.2)] flex items-center justify-center"
            >
              <span className="text-6xl sm:text-8xl font-bold text-[#6FB3FF]/20">
                Image {activeFeature?.imageNumber}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Stats Section */}
        <div className="max-w-4xl mx-auto">
          <motion.h3
            key={activeFeature?.title + "-stats-title"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-12"
          >
            Key Statistics
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {activeFeature?.stats.map((stat, index) => (
              <div key={stat.label} className="relative">
                <div className="text-center h-[120px] sm:h-[180px] flex flex-col items-center justify-center">
                  <motion.div
                    key={stat.value + "-" + activeFeature.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="text-2xl sm:text-4xl md:text-2xl lg:text-4xl font-bold text-[#6FB3FF] mb-2 sm:mb-3"
                  >
                    {stat.value}
                  </motion.div>
                  <motion.div
                    key={stat.label + "-" + activeFeature.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.1 }}
                    className="text-base sm:text-lg md:text-xl text-gray-600"
                  >
                    {stat.label}
                  </motion.div>
                </div>
                {/* Desktop dividers */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 w-px h-24 bg-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 