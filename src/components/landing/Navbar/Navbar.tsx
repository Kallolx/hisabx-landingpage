'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

const dropdownVariants = {
  hidden: { 
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2
    }
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3
    }
  }
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [language, setLanguage] = useState('en');

  const solutions = [
    {
      name: 'POS System',
      description: 'Modern point of sale solution',
      href: '/solutions/pos',
      icon: (
        <svg className="w-6 h-6 text-[#6FB3FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: 'Inventory',
      description: 'Track stock in real-time',
      href: '/solutions/inventory',
      icon: (
        <svg className="w-6 h-6 text-[#6FB3FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
        </svg>
      ),
    },
    {
      name: 'Kitchen Display',
      description: 'Streamline kitchen operations',
      href: '/solutions/kitchen',
      icon: (
        <svg className="w-6 h-6 text-[#6FB3FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
  ];

  const features = [
    {
      name: 'Analytics',
      description: 'Business insights dashboard',
      href: '/features/analytics',
      icon: (
        <svg className="w-6 h-6 text-[#6FB3FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      name: 'Staff Management',
      description: 'Employee tracking & roles',
      href: '/features/staff',
      icon: (
        <svg className="w-6 h-6 text-[#6FB3FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      name: 'Reports',
      description: 'Daily & monthly reports',
      href: '/features/reports',
      icon: (
        <svg className="w-6 h-6 text-[#6FB3FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          <div className="flex items-center gap-10">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/logo.png" 
                alt="HisabX" 
                width={110} 
                height={110} 
                className="h-[42px] w-auto" 
              />
            </Link>

            {/* Main Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Solutions Dropdown */}
              <div className="relative group">
                <button
                  onMouseEnter={() => setActiveDropdown('solutions')}
                  onClick={() => setActiveDropdown(activeDropdown === 'solutions' ? null : 'solutions')}
                  className="text-gray-600 hover:text-[#6FB3FF] px-3 py-2 text-base font-medium transition-colors inline-flex items-center gap-1"
                >
                  Solutions
                  <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                {activeDropdown === 'solutions' && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownVariants}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="absolute left-0 mt-2 w-[320px] rounded-lg bg-white shadow-lg p-2"
                  >
                    <div className="py-1">
                      {solutions.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="group flex items-start gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <div className="flex-shrink-0 p-2 rounded-lg bg-[#6FB3FF]/10">
                            {item.icon}
                          </div>
                          <div className="flex flex-col justify-center">
                            <p className="text-base font-medium text-gray-900">{item.name}</p>
                            <p className="text-sm text-gray-500">{item.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
                </AnimatePresence>
              </div>

              {/* Features Dropdown */}
              <div className="relative group">
                <button
                  onMouseEnter={() => setActiveDropdown('features')}
                  onClick={() => setActiveDropdown(activeDropdown === 'features' ? null : 'features')}
                  className="text-gray-600 hover:text-[#6FB3FF] px-3 py-2 text-base font-medium transition-colors inline-flex items-center gap-1"
                >
                  Features
                  <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                {activeDropdown === 'features' && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownVariants}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="absolute left-0 mt-2 w-[320px] rounded-lg bg-white shadow-lg p-2"
                  >
                    <div className="py-1">
                      {features.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="group flex items-start gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <div className="flex-shrink-0 p-2 rounded-lg bg-[#6FB3FF]/10">
                            {item.icon}
                          </div>
                          <div className="flex flex-col justify-center">
                            <p className="text-base font-medium text-gray-900">{item.name}</p>
                            <p className="text-sm text-gray-500">{item.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
                </AnimatePresence>
              </div>

              <Link href="/pricing" className="text-gray-600 hover:text-[#6FB3FF] px-3 py-2 text-base font-medium transition-colors">
                Pricing
              </Link>
            </div>
          </div>

          {/* Right side - Language and Get Started */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center border border-gray-200 rounded-lg">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 text-sm font-medium rounded-l-lg transition-colors ${
                  language === 'en'
                    ? 'bg-[#6FB3FF] text-white'
                    : 'text-gray-600 hover:text-[#6FB3FF]'
                }`}
              >
                ENG
              </button>
              <button
                onClick={() => setLanguage('bn')}
                className={`px-3 py-1.5 text-sm font-medium rounded-r-lg transition-colors ${
                  language === 'bn'
                    ? 'bg-[#6FB3FF] text-white'
                    : 'text-gray-600 hover:text-[#6FB3FF]'
                }`}
              >
                বাং
              </button>
            </div>
            <Button 
              href="/signup" 
              variant="primary"
              className="inline-flex items-center gap-2"
            >
              Get Started
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-[#6FB3FF] transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Solutions Section */}
            <div className="space-y-2">
              <div className="px-3 py-2 text-base font-medium text-gray-900">Solutions</div>
              {solutions.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2 text-base text-gray-600 hover:text-[#6FB3FF]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  <div>
                    <div className="font-medium">{item.name}</div>
                    <div className="text-sm text-gray-500">{item.description}</div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Features Section */}
            <div className="space-y-2">
              <div className="px-3 py-2 text-base font-medium text-gray-900">Features</div>
              {features.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2 text-base text-gray-600 hover:text-[#6FB3FF]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  <div>
                    <div className="font-medium">{item.name}</div>
                    <div className="text-sm text-gray-500">{item.description}</div>
                  </div>
                </Link>
              ))}
            </div>

            <Link
              href="/pricing"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-[#6FB3FF]"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>

            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex flex-col gap-3 px-3">
                <div className="flex items-center justify-center border border-gray-200 rounded-lg w-full">
                  <button
                    onClick={() => setLanguage('en')}
                    className={`flex-1 px-3 py-1.5 text-sm font-medium rounded-l-lg transition-colors ${
                      language === 'en'
                        ? 'bg-[#6FB3FF] text-white'
                        : 'text-gray-600 hover:text-[#6FB3FF]'
                    }`}
                  >
                    ENG
                  </button>
                  <button
                    onClick={() => setLanguage('bn')}
                    className={`flex-1 px-3 py-1.5 text-sm font-medium rounded-r-lg transition-colors ${
                      language === 'bn'
                        ? 'bg-[#6FB3FF] text-white'
                        : 'text-gray-600 hover:text-[#6FB3FF]'
                    }`}
                  >
                    বাং
                  </button>
                </div>
                <Link
                  href="/signup"
                  className="flex items-center justify-center gap-2 w-full bg-[#6FB3FF] text-white hover:bg-[#5A90CC] px-4 py-2 rounded-lg text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 