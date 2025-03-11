import type { Metadata } from "next";
import { DM_Sans as DMSans, Inter } from "next/font/google";
import "./globals.css";

const dmSans = DMSans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HisabX - Restaurant Management System",
  description: "Streamline your restaurant operations with HisabX, the all-in-one cloud restaurant management platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} ${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
