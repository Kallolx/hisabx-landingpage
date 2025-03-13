import Navbar from '@/components/landing/Navbar/Navbar';
import Hero from '@/components/landing/Hero/Hero';
import Features from '@/components/landing/Features/Features';


export default function Home() {
  return (
    <main className="relative min-h-screen">     
    

      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <div className="flex-grow  bg-[#f2f8ff]">
          <Hero />
        </div>
        <Features />
      </div>
    </main>
  );
}
