"use client";

import Link from 'next/link';
import Image from 'next/image';
import { FaTwitter, FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';
import LanguageSelector from '@/components/ui/LanguageSelector';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const Footer = () => {
  const { t, language } = useLanguage();
  const isBangla = language === 'bn';

  const footerLinks = {
    product: {
      title: t.footer.product,
      links: [
        { name: t.navbar.features, href: "/features" },
        { name: t.navbar.howItWorks, href: "/how-it-works" },
        { name: t.navbar.pricing, href: "/pricing" },
        { name: t.navbar.faq, href: "/faq" },
      ]
    },
    company: {
      title: t.footer.company,
      links: [
        { name: "About us", href: "/about" },
        { name: t.navbar.contact, href: "/contact" },
        { name: "Careers", href: "/careers" },
        { name: "Blog", href: "/blog" },
      ]
    },
    legal: {
      title: t.footer.legal,
      links: [
        { name: t.footer.privacy, href: "/privacy" },
        { name: t.footer.terms, href: "/terms" },
        { name: t.footer.cookies, href: "/cookies" },
      ]
    },
    support: {
      title: t.footer.support,
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Documentation", href: "/docs" },
        { name: "API Reference", href: "/api" },
        { name: "Status", href: "/status" },
      ]
    }
  };

  const socialLinks = [
    { name: "Twitter", icon: FaTwitter, href: "https://twitter.com" },
    { name: "LinkedIn", icon: FaLinkedinIn, href: "https://linkedin.com" },
    { name: "Facebook", icon: FaFacebookF, href: "https://facebook.com" },
    { name: "Instagram", icon: FaInstagram, href: "https://instagram.com" },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo and Social Links */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/images/logo.png" 
                alt="HisabX" 
                width={110} 
                height={110} 
                className="h-[42px] w-auto" 
              />
            </Link>
            <p className={`text-gray-600 text-sm mb-6 ${isBangla ? 'font-hind-siliguri' : ''}`}>
              Streamline your restaurant operations with our comprehensive management solution.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#6FB3FF] transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className={`font-semibold text-gray-900 mb-4 ${isBangla ? 'font-hind-siliguri' : ''}`}>
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`text-gray-600 hover:text-[#6FB3FF] transition-colors text-sm ${isBangla ? 'font-hind-siliguri' : ''}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={`text-gray-600 text-sm ${isBangla ? 'font-hind-siliguri' : ''}`}>
              © {new Date().getFullYear()} HisabX. {t.footer.allRightsReserved}
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/terms"
                className={`text-gray-600 hover:text-[#6FB3FF] transition-colors text-sm ${isBangla ? 'font-hind-siliguri' : ''}`}
              >
                {t.footer.terms}
              </Link>
              <Link
                href="/privacy"
                className={`text-gray-600 hover:text-[#6FB3FF] transition-colors text-sm ${isBangla ? 'font-hind-siliguri' : ''}`}
              >
                {t.footer.privacy}
              </Link>
              <Link
                href="/cookies"
                className={`text-gray-600 hover:text-[#6FB3FF] transition-colors text-sm ${isBangla ? 'font-hind-siliguri' : ''}`}
              >
                {t.footer.cookies}
              </Link>
              <LanguageSelector />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 