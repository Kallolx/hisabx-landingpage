"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import StepImage from "./StepImage";

const steps = [
  {
    number: 1,
    title: "Create a Business Account",
    description: "Begin by setting up your business account on HisabX. Fill in the necessary details and ensure that your business information is accurate and up-to-date."
  },
  {
    number: 2,
    title: "Subscribe a plan",
    description: "Choose a suitable subscription plan that aligns with your business requirements. Upon subscription, you'll gain access to your control panel, the central hub for managing your sales operations."
  },
  {
    number: 3,
    title: "Setup Your Business Profile",
    description: "Customize your business profile with your brand details, operating hours, and service areas. This helps create a professional presence for your customers."
  },
  {
    number: 4,
    title: "Add Team Members",
    description: "Invite your team members and assign roles. Set permissions and access levels to ensure smooth collaboration and secure operations management."
  },
  {
    number: 5,
    title: "Configure Settings",
    description: "Set up your preferences, notification settings, and customize the dashboard according to your business needs for optimal workflow."
  },
  {
    number: 6,
    title: "Start Managing Operations",
    description: "Begin managing your daily operations, track sales, handle inventory, and monitor performance metrics all from one centralized dashboard."
  }
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
            <div className={`w-full lg:w-[400px] mb-4 lg:mb-6 rounded-xl lg:rounded-2xl overflow-hidden bg-white shadow-sm lg:shadow-lg ${isLeft ? 'lg:ml-auto' : ''}`}>
              <div className="aspect-[16/10]">
                <StepImage number={step.number} />
              </div>
            </div>
            
            <h3 className="text-lg lg:text-xl font-bold mb-2 lg:mb-3">
              {step.title}
            </h3>
            <p className="text-sm lg:text-base text-gray-600">
              {step.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const HowItWorks = () => {
  return (
    <section className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-[#6FB3FF] font-semibold mb-4">How it Works</p>
          <h2 className="text-2xl lg:text-4xl font-bold mb-4">
            Your Roadmap to Sales Success
          </h2>
          <p className="text-sm lg:text-base text-gray-600 max-w-2xl mx-auto">
            Launching Your Sales Team Management Journey with HisabX: A Step-by-Step Guide
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