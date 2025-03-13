"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";

const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-1 mt-24">
            {/* Tagline */}
            <div className="inline-flex items-center rounded-full bg-[#6FB3FF]/10 border border-gray-300 px-4 py-1.5 mb-6">
              <span className="text-[#067cfd] text-sm font-medium">
                No-1 choice for restaurant owners
              </span>
            </div>

            {/* Title & Description */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-[-0.06em] font-bold text-black mb-6">
              Smart Solutions{" "} <br className="hidden lg:block" /> for your
              <span className="text-[#6FB3FF]"> Restaurant</span> Management
            </h1>

            <p className="text-base lg:text-lg text-gray-600 mb-8 max-w-lg">
              An all-in-one cloud-based restaurant management service that helps
              you manage orders, inventory, and staff efficiently.
            </p>

            {/* CTA Section */}
            <div className="flex flex-col items-center lg:items-start gap-4">
              <Button
                href="/signup"
                variant="primary"
                className="text-base px-8 py-4 flex items-center gap-2"
              >
                Get Started
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>
              <p className="text-sm text-gray-500">Try first, Pay later</p>
            </div>
          </div>

          {/* Right side image section */}
          <div className="relative lg:absolute lg:top-0 lg:right-0 h-[400px] md:h-[400px] lg:h-[70%] w-full lg:w-[50%] flex items-center order-2 lg:mt-30 lg:mr-8 mt-0">
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
              <div className="relative w-[800px] h-[500px] min-w-[800px]">
                <Image
                  src="/images/img.jpg"
                  alt="HisabX Dashboard"
                  fill
                  className="object-contain rounded-lg shadow-xl "
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;