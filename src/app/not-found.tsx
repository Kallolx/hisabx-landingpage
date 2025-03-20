'use client';

import { Suspense } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import Link from 'next/link';

function NotFoundContent() {
  const { t, language } = useLanguage();
  const isBangla = language === 'bn';

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className={`text-6xl font-bold text-[#067cfd] mb-4 ${isBangla ? 'font-hind-siliguri' : ''}`}>
          404
        </h1>
        <h2 className={`text-2xl font-semibold text-gray-900 mb-4 ${isBangla ? 'font-hind-siliguri' : ''}`}>
          {t?.notFound?.title || 'Page Not Found'}
        </h2>
        <p className={`text-gray-600 mb-8 ${isBangla ? 'font-hind-siliguri' : ''}`}>
          {t?.notFound?.description || 'The page you are looking for does not exist.'}
        </p>
        <Link 
          href="/" 
          className={`inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#067cfd] hover:bg-[#0456b3] transition-colors ${isBangla ? 'font-hind-siliguri' : ''}`}
        >
          {t?.notFound?.backHome || 'Back to Home'}
        </Link>
      </div>
    </div>
  );
}

export default function NotFound() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NotFoundContent />
    </Suspense>
  );
} 