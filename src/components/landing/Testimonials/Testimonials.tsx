"use client";

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper/modules';
import { FaTwitter, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

const testimonials = [
  // First row
  {
    name: "Sarah Johnson",
    position: "Business Owner",
    company: "Tech Solutions Ltd",
    rating: 5,
    social: {
      type: "twitter",
      icon: FaTwitter
    },
    content: "HisabX has transformed how we manage our business finances. The interface is intuitive, and the features are exactly what we needed. Highly recommend for any growing business!"
  },
  {
    name: "Michael Chen",
    position: "CEO",
    company: "Digital Innovations",
    rating: 5,
    social: {
      type: "linkedin",
      icon: FaLinkedinIn
    },
    content: "The best business management solution we've used. It's streamlined our operations and given us clear insights into our financial performance. The support team is also exceptional."
  },
  {
    name: "Emily Rodriguez",
    position: "Operations Manager",
    company: "Global Retail Co",
    rating: 5,
    social: {
      type: "facebook",
      icon: FaFacebookF
    },
    content: "We've seen a significant improvement in our efficiency since switching to HisabX. The automated features save us hours each week, and the reporting tools are invaluable."
  },
  // Second row
  {
    name: "David Smith",
    position: "Finance Director",
    company: "Smart Services Inc",
    rating: 5,
    social: {
      type: "linkedin",
      icon: FaLinkedinIn
    },
    content: "The platform's ability to handle complex financial operations while maintaining simplicity is impressive. It's become an essential tool for our daily operations."
  },
  {
    name: "Lisa Wong",
    position: "Small Business Owner",
    company: "Creative Studios",
    rating: 5,
    social: {
      type: "facebook",
      icon: FaFacebookF
    },
    content: "As a small business owner, I needed something comprehensive yet easy to use. HisabX delivers exactly that. The pricing is fair, and the value is exceptional."
  },
  {
    name: "James Wilson",
    position: "Operations Head",
    company: "Retail Solutions",
    rating: 5,
    social: {
      type: "twitter",
      icon: FaTwitter
    },
    content: "The reporting features and analytics have given us invaluable insights. We've been able to make data-driven decisions that have significantly improved our bottom line."
  },
  // Additional testimonials for both rows
  {
    name: "Anna Martinez",
    position: "Store Manager",
    company: "Fashion Outlet",
    rating: 5,
    social: {
      type: "facebook",
      icon: FaFacebookF
    },
    content: "Managing multiple store locations has become so much easier with HisabX. The multi-location support and real-time syncing are game-changers for our business."
  },
  {
    name: "Robert Kim",
    position: "IT Director",
    company: "Tech Corp",
    rating: 5,
    social: {
      type: "linkedin",
      icon: FaLinkedinIn
    },
    content: "The API integration capabilities are robust and well-documented. We've been able to customize the platform to fit our specific needs perfectly."
  },
  {
    name: "Sophie Taylor",
    position: "Startup Founder",
    company: "Innovation Hub",
    rating: 5,
    social: {
      type: "twitter",
      icon: FaTwitter
    },
    content: "For a startup like ours, having a scalable solution is crucial. HisabX grows with us, offering features that support our expanding business needs."
  },
  {
    name: "Mark Anderson",
    position: "Financial Analyst",
    company: "Global Finance",
    rating: 5,
    social: {
      type: "linkedin",
      icon: FaLinkedinIn
    },
    content: "The financial reporting tools are comprehensive and accurate. It's made our month-end closing process significantly faster and more reliable."
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-4 h-4 ${index < rating ? 'text-[#6FB3FF]' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const Testimonials = () => {
  const { t, language } = useLanguage();
  const isBangla = language === 'bn';

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#6FB3FF]/10 text-[#6FB3FF] text-sm font-semibold px-6 py-2 rounded-full mb-4">
            {t.testimonials?.title || 'Testimonials'}
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent ${isBangla ? 'font-hind-siliguri' : ''}`}>
            {t.testimonials?.heading || 'What Our Clients Say'}
          </h2>
          <p className={`text-gray-600 max-w-2xl mx-auto text-lg ${isBangla ? 'font-hind-siliguri' : ''}`}>
            {t.testimonials?.description || 'Discover how HisabX has helped businesses streamline their operations and achieve their goals'}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Grid, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            grid={{
              rows: 2,
              fill: 'row'
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            grabCursor={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                grid: {
                  rows: 2
                }
              },
              1024: {
                slidesPerView: 3,
                grid: {
                  rows: 2
                }
              },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className={`h-full bg-white border-r border-b border-gray-200`}>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <StarRating rating={testimonial.rating} />
                      <testimonial.social.icon 
                        className={`w-4 h-4 ${
                          testimonial.social.type === 'twitter' ? 'text-[#1DA1F2]' :
                          testimonial.social.type === 'linkedin' ? 'text-[#0A66C2]' :
                          'text-[#1877F2]'
                        }`} 
                      />
                    </div>
                    
                    <blockquote className="mb-8">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        "{testimonial.content}"
                      </p>
                    </blockquote>

                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 