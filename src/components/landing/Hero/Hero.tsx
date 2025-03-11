'use client';

import Image from 'next/image';
import Button from '@/components/ui/Button';

const Hero = () => {
  const avatars = [
    '/images/user/testimonial-1.jpg',
    '/images/user/testimonial-2.jpg',
    '/images/user/testimonial-3.jpg',
    '/images/user/testimonial-4.jpg',
    '/images/user/testimonial-2.jpg',
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <h1 className="text-7xl tracking-[-0.06em] sm:text-3xl lg:text-7xl font-bold text-gray-900 max-w-4xl mx-auto mb-6">
          Streamline Your Restaurant{' '}
          <br className="hidden sm:block" />
          Operations with{' '}
          <span className="text-[#6FB3FF]">HishabX.io</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
          An all-in-one cloud-based restaurant management service at your fingertips.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Button 
            href="/signup" 
            variant="primary" 
            className="text-base px-8 py-4 flex items-center gap-2"
          >
            Try for Free
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
          <Button 
            href="#demo" 
            variant="secondary" 
            className="text-base px-8 py-4"
          >
            Request a Demo
          </Button>
        </div>

        {/* Trust Section */}
        <div className="text-center mb-16">
          <p className="text-gray-600 mb-4">Trusted by 100+ Restaurants Worldwide</p>
          <div className="flex justify-center items-center -space-x-2">
            {avatars.map((avatar, index) => (
              <div
                key={index}
                className="w-10 h-10 rounded-full border-2 border-white relative overflow-hidden"
              >
                <Image
                  src={avatar}
                  alt={`User testimonial ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
            <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-50 flex items-center justify-center">
              <span className="text-sm text-gray-600 font-medium">+95</span>
            </div>
          </div>
        </div>

        {/* Dashboard Preview Video */}
        <div className="relative mx-auto max-w-6xl">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-auto"
            >
              <source src="/videos/preview.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Add gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#6FB3FF]/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-8 -left-4 w-40 h-40 bg-[#8EC2FF]/10 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Hero; 