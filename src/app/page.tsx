import Navbar from "@/components/landing/Navbar/Navbar";
import Hero from "@/components/landing/Hero/Hero";
import Features from "@/components/landing/Features/Features";
import Benefits from "@/components/landing/Benefits/Benefits";
import HowItWorks from "@/components/landing/HowItWorks/HowItWorks";
import Pricing from "@/components/landing/Pricing/Pricing";
import Testimonials from "@/components/landing/Testimonials/Testimonials";
import CTABanner from "@/components/landing/CTABanner/CTABanner";
import FAQ from "@/components/landing/FAQ/FAQ";
import Footer from "@/components/landing/Footer/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Main content */}
      <div className="relative z-10 overflow-x-hidden">
        <Navbar />
        <div className="flex-grow bg-[#f5faff]">
          <Hero />
          <Features />
          <Benefits />
          <HowItWorks />
          <Pricing />
          <Testimonials />
          <CTABanner />
          <FAQ />
          <Footer />
        </div>
      </div>
    </main>
  );
}
