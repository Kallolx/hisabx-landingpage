"use client";

const CTABanner = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto bg-[#6FB3FF] rounded-2xl shadow-lg">
          <div className="px-8 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Ready to Streamline Your Business Operations?
              </h2>
              <p className="text-white/90">
                Join thousands of businesses that trust HisabX for their financial management. Start your journey today with our 14-day free trial.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-colors">
                Start Free Trial
              </button>
              <button className="px-8 py-3 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white/10 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner; 