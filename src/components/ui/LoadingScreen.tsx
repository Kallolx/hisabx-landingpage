'use client';

import { useEffect, useState } from 'react';
import { AnimatedCircularProgressBar } from './loading';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface LoadingScreenProps {
  isLoading: boolean;
}

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [shouldShow, setShouldShow] = useState(true);
  const { t, language } = useLanguage();
  const isBangla = language === 'bn';

  useEffect(() => {
    if (isLoading) {
      setShouldShow(true);
      setProgress(0);
      
      const startTime = Date.now();
      const duration = 1500; // 1.5 seconds

      const updateProgress = () => {
        const elapsedTime = Date.now() - startTime;
        const newProgress = Math.min((elapsedTime / duration) * 100, 100);
        
        setProgress(Math.round(newProgress));

        if (elapsedTime < duration) {
          requestAnimationFrame(updateProgress);
        } else {
          setProgress(100);
          setTimeout(() => {
            setShouldShow(false);
          }, 100); // Shorter delay after reaching 100%
        }
      };

      requestAnimationFrame(updateProgress);
    }
  }, [isLoading]);

  if (!shouldShow) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <AnimatedCircularProgressBar
          max={100}
          min={0}
          value={progress}
          gaugePrimaryColor="#067cfd"
          gaugeSecondaryColor="#e5e7eb"
          className="size-32"
        />
        <p className={`text-lg font-medium text-gray-600 ${isBangla ? 'font-hind-siliguri' : ''}`}>
          {progress === 100 ? (t?.loading?.complete || 'Complete') : (t?.loading?.inProgress || 'Loading...')}
        </p>
      </div>
    </div>
  );
} 