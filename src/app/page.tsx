import Navbar from '@/components/landing/Navbar/Navbar';
import Hero from '@/components/landing/Hero/Hero';
import Image from 'next/image';
export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Fixed Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/bg.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0" />
      </div>
      <Navbar />
      <div className="pt-16">
        <Hero />
      </div>
    </main>
  );
}
