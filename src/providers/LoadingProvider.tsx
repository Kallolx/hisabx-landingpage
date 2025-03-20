'use client';

import { createContext, useContext, useState, useEffect, ReactNode, Suspense } from 'react';
import { LoadingScreen } from '@/components/ui/LoadingScreen';

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType>({
  isLoading: true,
  setIsLoading: () => {},
});

export const useLoading = () => useContext(LoadingContext);

function LoadingProviderContent({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  // Handle initial page load
  useEffect(() => {
    const handleInitialLoad = () => {
      if (document.readyState === 'complete') {
        setIsLoading(false);
      }
    };

    handleInitialLoad();
    window.addEventListener('load', handleInitialLoad);

    return () => window.removeEventListener('load', handleInitialLoad);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      <LoadingScreen isLoading={isLoading} />
      {children}
    </LoadingContext.Provider>
  );
}

export function LoadingProvider({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<LoadingScreen isLoading={true} />}>
      <LoadingProviderContent>{children}</LoadingProviderContent>
    </Suspense>
  );
} 