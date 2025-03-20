"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import { Safari } from "@/components/ui/safari";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const Hero = () => {
  const { t, language } = useLanguage();
  const isBangla = language === 'bn';
  
  return (
    <div className="relative overflow-hidden min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="grid lg:grid-cols-2 gap-0 lg:gap-0 mt-10 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-1 mt-10 lg:mt-12 sm:mt-10 lg:pr-12 z-10">
            {/* Tagline */}
            <div className="inline-flex items-center rounded-full bg-[#6FB3FF]/10 border border-gray-300 px-4 py-1.5 mb-6">
              <span className={`text-[#067cfd] text-sm font-medium ${isBangla ? 'font-hind-siliguri' : ''}`}>
                {t.hero.tagline}
              </span>
            </div>

            {/* Title & Description */}
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[-0.04em] font-bold text-black ${isBangla ? 'font-hind-siliguri hero-title' : 'mb-6'}`}>
              {t.hero.title.part1}
              <br />
              {isBangla ? (
                <>
                  <span className="text-[#6FB3FF] text-blue">{t.hero.title.part2}</span>
                  <br />
                  <span>{t.hero.title.part3}</span>
                </>
              ) : (
                <>
                  <span>{t.hero.title.part2} </span>
                  <span className="text-[#6FB3FF]">{t.hero.title.part3}</span>
                </>
              )}
            </h1>

            <p className={`text-base lg:text-lg text-gray-600 mb-8 max-w-lg mt-4 ${isBangla ? 'font-hind-siliguri' : ''}`}>
              {t.hero.description}
            </p>

            {/* CTA Section */}
            <div>
              <Button
                href="/signup"
                variant="primary"
                className={`text-base px-8 py-4 flex items-center gap-2 ${isBangla ? 'font-hind-siliguri font-semibold' : ''}`}
              >
                {t.hero.startFree}
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
              <p className={`text-sm text-gray-500 mt-2 ${isBangla ? 'font-hind-siliguri' : ''}`}>
                {t.hero.tryFirst}
              </p>
            </div>
          </div>

          {/* Right side - Safari browser mockup */}
          <div className="w-full order-2 lg:order-2 mt-10 lg:mt-0 lg:absolute lg:right-[-5%] lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:w-[65%]">
            <div className="relative w-full max-w-[800px] mx-auto">
              <Safari 
                url="app.hisabx.io/dashboard" 
                imageSrc="/images/img.jpg"
                width={1203} 
                height={753}
                mode="default"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;