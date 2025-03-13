"use client";

const pricingPlans = [
  {
    name: "Basic",
    price: "৳999",
    period: "/month",
    description: "Perfect for small businesses just getting started",
    features: [
      "Up to 100 invoices per month",
      "Basic inventory management",
      "2 team members included",
      "Email support",
      "Basic reporting tools",
      "Mobile app access",
      "Customer database",
      "Digital receipts",
      "Payment tracking",
      "Basic analytics"
    ],
    buttonText: "Get Started",
    popular: false
  },
  {
    name: "Professional",
    price: "৳2,499",
    period: "/month",
    description: "Ideal for growing businesses with more needs",
    features: [
      "Up to 500 invoices per month",
      "Advanced inventory management",
      "5 team members included",
      "Priority email & chat support",
      "Advanced reporting & analytics",
      "Custom branding options",
      "Automated billing",
      "Multi-location support",
      "API access",
      "Data export capabilities"
    ],
    buttonText: "Try Professional",
    popular: true
  },
  {
    name: "Enterprise",
    price: "৳4,999",
    period: "/month",
    description: "For large businesses requiring full features",
    features: [
      "Unlimited invoices",
      "Enterprise inventory solutions",
      "Unlimited team members",
      "24/7 dedicated support",
      "Custom reporting solutions",
      "White-label options",
      "Advanced security features",
      "Custom API integration",
      "Dedicated account manager",
      "Custom training sessions"
    ],
    buttonText: "Contact Sales",
    popular: false
  }
];

const Pricing = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#6FB3FF] font-semibold mb-4">Pricing Plans</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select a plan that best suits your business needs and start managing your operations efficiently
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-0 max-w-6xl mx-auto bg-white">
          {pricingPlans.map((plan, index) => (
            <div 
              key={plan.name}
              className={`relative flex flex-col min-h-[800px] ${
                index === 0 ? 'lg:border-r' : 
                index === 1 ? 'lg:border-r' : ''
              } border-gray-200`}
            >
              <div className="p-8 md:p-12 flex-1">
                {plan.popular && (
                  <div className="inline-block bg-[#6FB3FF]/10 text-[#6FB3FF] text-sm font-semibold px-4 py-1 rounded-full mb-8">
                    Most Popular
                  </div>
                )}
                
                <div className="flex flex-col mb-8">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl lg:text-5xl font-bold tracking-tight">{plan.price}</span>
                    <span className="text-gray-500 ml-2">{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-6">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={feature} className="flex items-start">
                      <div className={`mr-3 h-5 w-5 rounded-full flex items-center justify-center ${plan.popular ? 'bg-[#6FB3FF]/10' : 'bg-gray-50'}`}>
                        <svg className={`h-3 w-3 ${plan.popular ? 'text-[#6FB3FF]' : 'text-gray-400'}`} viewBox="0 0 12 12" fill="none">
                          <path d="M2.5 6L5 8.5L9.5 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className={`text-sm ${featureIndex < 5 ? 'font-medium' : ''}`}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 md:p-12 border-t border-gray-200">
                <button 
                  className={`w-full py-4 rounded-xl text-center font-semibold transition-colors ${
                    plan.popular 
                      ? 'bg-[#6FB3FF] text-white hover:bg-[#5A9FFF]' 
                      : 'bg-[#6FB3FF] text-white hover:bg-[#5A9FFF]'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing; 