import type { Metadata } from "next";
import { DM_Sans as DMSans, Inter, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import { LoadingProvider } from '@/providers/LoadingProvider';

const dmSans = DMSans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: '--font-dm-sans',
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: '--font-inter',
});

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: '--font-hind-siliguri',
});

export const metadata: Metadata = {
  title: "HishabX - Restaurant Management System",
  description: "Streamline your restaurant operations with HishabX, the all-in-one cloud restaurant management platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${inter.variable} ${hindSiliguri.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${dmSans.className} antialiased`}>
        <LanguageProvider>
          <LoadingProvider>
            {children}
          </LoadingProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
