'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language } = useLanguage();
  const isBangla = language === 'bn';

  const navLinks = [
    { name: t.navbar.features, href: '/features' },
    { name: t.navbar.howItWorks, href: '/how-it-works' },
    { name: t.navbar.pricing, href: '/pricing' },
    { name: t.navbar.faq, href: '/faq' },
    { name: t.navbar.contact, href: '/contact' },
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
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-black hover:text-[#6FB3FF] px-3 py-2 text-base font-medium transition-colors gap-2 ${isBangla ? 'font-hind-siliguri' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side - Login/Get Started */}
          <div className="hidden lg:flex items-center gap-4">
            <Button 
              href="/login" 
              variant="secondary"
              className={`px-6 ${isBangla ? 'font-hind-siliguri' : ''}`}
            >
              {t.navbar.login}
            </Button>
            <Button 
              href="/signup" 
              variant="primary"
              className={`px-6 ${isBangla ? 'font-hind-siliguri' : ''}`}
            >
              {t.navbar.getStarted}
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
        <div className="lg:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block px-3 py-2 text-base font-medium text-gray-600 hover:text-[#6FB3FF] ${isBangla ? 'font-hind-siliguri' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex flex-col gap-3 px-3">
                <Link
                  href="/login"
                  className={`flex items-center justify-center w-full border border-gray-200 text-gray-600 hover:text-[#6FB3FF] hover:border-[#6FB3FF] px-4 py-2 rounded-lg text-base font-medium transition-colors ${isBangla ? 'font-hind-siliguri' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.navbar.login}
                </Link>
                <Link
                  href="/signup"
                  className={`flex items-center justify-center w-full bg-[#6FB3FF] text-white hover:bg-[#5A90CC] px-4 py-2 rounded-lg text-base font-medium ${isBangla ? 'font-hind-siliguri' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.navbar.getStarted}
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