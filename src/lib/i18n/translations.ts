// Translation mapping for the entire application
// English is the default language

export type Language = 'en' | 'bn';

export interface Translations {
  // Navbar
  navbar: {
    features: string;
    howItWorks: string;
    pricing: string;
    faq: string;
    contact: string;
    login: string;
    getStarted: string;
  };
  
  // Footer
  footer: {
    product: string;
    company: string;
    legal: string;
    support: string;
    allRightsReserved: string;
    terms: string;
    privacy: string;
    cookies: string;
    languageSelector: string;
  };
  
  // Hero
  hero: {
    tagline: string;
    title: {
      part1: string;
      part2: string;
      part3: string;
    };
    description: string;
    startFree: string;
    watchDemo: string;
    tryFirst: string;
  };
  
  // Features
  features: {
    title: string;
    subtitle: string;
    viewDetails: string;
    learnMore: string;
    featureItems: {
      dashboards: {
        title: string;
        description: string;
      };
      reservations: {
        title: string;
        description: string;
      };
      statistics: {
        title: string;
        description: string;
      };
      payroll: {
        title: string;
        description: string;
      };
      menu: {
        title: string;
        description: string;
      };
      orders: {
        title: string;
        description: string;
      };
    };
  };
  
  // How It Works
  howItWorks: {
    title: string;
    subtitle: string;
    simpleProcess: string;
    steps: {
      step1: {
        title: string;
        description: string;
      };
      step2: {
        title: string;
        description: string;
      };
      step3: {
        title: string;
        description: string;
      };
      step4: {
        title: string;
        description: string;
      };
    };
    learnMore: string;
  };

  // Benefits
  benefits: {
    title: string;
    subtitle: string;
    items: {
      quickService: {
        title: string;
        description: string;
      };
      fineDining: {
        title: string;
        description: string;
      };
      delivery: {
        title: string;
        description: string;
      };
      cloudKitchens: {
        title: string;
        description: string;
      };
      catering: {
        title: string;
        description: string;
      };
      foodCourts: {
        title: string;
        description: string;
      };
    };
    whyChooseUs: {
      title: string;
      description: string;
      features: {
        orderManagement: string;
        inventoryTracking: string;
        staffScheduling: string;
      };
    };
  };

  // Pricing
  pricing: {
    title: string;
    subtitle: string;
    description: string;
    mostPopular: string;
    period: string;
    plans: {
      basic: {
        name: string;
        description: string;
        price: string;
        buttonText: string;
        features: string[];
      };
      professional: {
        name: string;
        description: string;
        price: string;
        buttonText: string;
        features: string[];
      };
      enterprise: {
        name: string;
        description: string;
        price: string;
        buttonText: string;
        features: string[];
      };
    };
  };

  testimonials: {
    title: string;
    heading: string;
    description: string;
  };

  cta: {
    primary: {
      title: string;
      description: string;
      startTrial: string;
    };
  };

  faq: {
    title: string;
    subtitle: string;
    description: string;
    categories: {
      general: {
        title: string;
        items: Array<{
          question: string;
          answer: string;
        }>;
      };
      technical: {
        title: string;
        items: Array<{
          question: string;
          answer: string;
        }>;
      };
    };
    stillHaveQuestions: {
      title: string;
      description: string;
      contactSupport: string;
    };
  };

  loading: {
    inProgress: string;
    complete: string;
  };

  notFound: {
    title: string;
    description: string;
    backHome: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    navbar: {
      features: 'Features',
      howItWorks: 'How it works',
      pricing: 'Pricing',
      faq: 'FAQ',
      contact: 'Contact',
      login: 'Log in',
      getStarted: 'Get Started',
    },
    footer: {
      product: 'Product',
      company: 'Company',
      legal: 'Legal',
      support: 'Support',
      allRightsReserved: 'All rights reserved.',
      terms: 'Terms',
      privacy: 'Privacy',
      cookies: 'Cookies',
      languageSelector: 'Language',
    },
    hero: {
      tagline: 'No-1 choice for restaurant owners',
      title: {
        part1: 'Smart Solutions for',
        part2: 'your',
        part3: 'Restaurant Management',
      },
      description: 'An all-in-one cloud-based restaurant management service that helps you manage orders, inventory, and staff efficiently.',
      startFree: 'Start Free Trial',
      watchDemo: 'Watch Demo',
      tryFirst: 'Try first, Pay later',
    },
    features: {
      title: 'HishabX Powerful Features',
      subtitle: 'Everything you need to manage your restaurant efficiently',
      viewDetails: 'View Details',
      learnMore: 'Learn More',
      featureItems: {
        dashboards: {
          title: 'Role-Based Dashboards',
          description: 'Dedicated dashboards for owners, managers, and staff with tailored views and functionality. Control access and permissions based on roles.',
        },
        reservations: {
          title: 'Reservation Management',
          description: 'Manage guest reservations effortlessly with real-time availability, table assignments, and customer preferences tracking.',
        },
        statistics: {
          title: 'Analytics & Reporting',
          description: 'Detailed insights into sales, inventory, and customer behaviors with visual reports and actionable data.',
        },
        payroll: {
          title: 'Payroll Management',
          description: 'Simplify staff payment processing with automated calculations for hours, tips, and bonuses while ensuring tax compliance.',
        },
        menu: {
          title: 'Menu Management',
          description: 'Easily update menu items, prices, and availability. Showcase seasonal specialties with customizable backgrounds and images.',
        },
        orders: {
          title: 'Order Processing',
          description: 'Handle both online and in-house orders from a unified system with real-time kitchen notifications and delivery tracking.',
        },
      },
    },
    howItWorks: {
      title: 'How HisabX Works',
      subtitle: 'Transform your restaurant operations with our intuitive platform in just 4 easy steps',
      simpleProcess: 'Simple Process',
      steps: {
        step1: {
          title: 'Create Your Restaurant Profile',
          description: 'Set up your business with basic details, locations, and operating hours. Our smart onboarding process gets you up and running in minutes, not days.',
        },
        step2: {
          title: 'Build Your Digital Menu',
          description: 'Upload your menu items with prices, descriptions, and images. Organize by categories and add modifiers for a complete ordering experience.',
        },
        step3: {
          title: 'Manage Your Team',
          description: 'Add staff members with role-based permissions. Assign responsibilities for front-of-house, kitchen, and management teams to streamline operations.',
        },
        step4: {
          title: 'Analyze & Grow Your Business',
          description: 'Track performance with real-time reports on sales, inventory, and staff. Use data-driven insights to optimize operations and increase revenue.',
        },
      },
      learnMore: 'Learn how it works',
    },
    benefits: {
      title: 'Who Can Benefit From HisabX?',
      subtitle: 'Our software is tailored to meet the diverse needs of various food service businesses, helping them optimize operations and enhance customer service',
      items: {
        quickService: {
          title: 'Quick Service Restaurants',
          description: 'Perfect for fast-food chains and casual dining establishments looking to streamline their operations and delivery management.',
        },
        fineDining: {
          title: 'Fine Dining Restaurants',
          description: 'Ideal for upscale restaurants requiring sophisticated staff management and precise service timing coordination.',
        },
        delivery: {
          title: 'Delivery Restaurants',
          description: 'Essential for delivery-only kitchens managing multiple brands and requiring efficient order processing systems.',
        },
        cloudKitchens: {
          title: 'Cloud Kitchens',
          description: 'Essential for delivery-only kitchens managing multiple brands and requiring efficient order processing systems.',
        },
        catering: {
          title: 'Catering Services',
          description: 'Perfect for catering businesses managing multiple events, staff assignments, and delivery schedules simultaneously.',
        },
        foodCourts: {
          title: 'Food Courts',
          description: 'Suitable for restaurant chains requiring centralized management and consistent service across multiple locations.',
        },
      },
      whyChooseUs: {
        title: 'Why Restaurant Owners Choose Us',
        description: 'HisabX is designed specifically for food service businesses of all sizes. Our platform combines powerful features with an intuitive interface to help you streamline operations.',
        features: {
          orderManagement: 'Simplified order management',
          inventoryTracking: 'Real-time inventory tracking',
          staffScheduling: 'Staff scheduling and management',
        },
      },
    },
    pricing: {
      title: "Pricing Plans",
      subtitle: "Choose Your Perfect Plan",
      description: "Select a plan that best suits your business needs and start managing your operations efficiently",
      mostPopular: "Most Popular",
      period: "/month",
      plans: {
        basic: {
          name: "Basic",
          description: "Perfect for small businesses just getting started",
          price: "৳999",
          buttonText: "Get Started",
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
          ]
        },
        professional: {
          name: "Professional",
          description: "Ideal for growing businesses with more needs",
          price: "৳2,499",
          buttonText: "Try Professional",
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
          ]
        },
        enterprise: {
          name: "Enterprise",
          description: "For large businesses requiring full features",
          price: "৳4,999",
          buttonText: "Contact Sales",
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
          ]
        }
      }
    },
    testimonials: {
      title: "Testimonials",
      heading: "What Our Clients Say",
      description: "Discover how HisabX has helped businesses streamline their operations and achieve their goals"
    },
    cta: {
      primary: {
        title: "Ready to Streamline Your Business Operations?",
        description: "Join thousands of businesses that trust HisabX for their financial management. Start your journey today with our 14-day free trial.",
        startTrial: "Start Free Trial"
      }
    },
    faq: {
      title: "FAQ",
      subtitle: "Frequently Asked Questions",
      description: "Find answers to common questions about HisabX and how it can help your business grow",
      categories: {
        general: {
          title: "General Questions",
          items: [
            {
              question: "What is HisabX?",
              answer: "HisabX is a comprehensive business management platform designed specifically for restaurants and food service businesses. It helps streamline operations, manage staff, track orders, and analyze performance all in one place."
            },
            {
              question: "How do I get started with HisabX?",
              answer: "Getting started is easy! Simply sign up for our 14-day free trial, and our team will guide you through the setup process. We provide full onboarding support to ensure you're up and running quickly."
            },
            {
              question: "Is my data secure with HisabX?",
              answer: "Yes, we take data security very seriously. We use industry-standard encryption and security measures to protect your data. All information is stored in secure cloud servers with regular backups."
            },
            {
              question: "Can I use HisabX on mobile devices?",
              answer: "Yes, HisabX is fully mobile-responsive and we also offer dedicated mobile apps for both iOS and Android devices, allowing you to manage your business on the go."
            }
          ]
        },
        technical: {
          title: "Technical Support",
          items: [
            {
              question: "What kind of support do you offer?",
              answer: "We offer 24/7 customer support through multiple channels including live chat, email, and phone. Our technical team is always ready to assist you with any issues or questions."
            },
            {
              question: "Can I integrate HisabX with other tools?",
              answer: "Yes, HisabX offers various integration options with popular business tools and POS systems. We provide API access and support for custom integrations as needed."
            },
            {
              question: "How often is the system updated?",
              answer: "We regularly update our system with new features and improvements based on user feedback. All updates are automatically deployed with zero downtime."
            },
            {
              question: "What happens to my data if I cancel?",
              answer: "You can export your data at any time. If you cancel, we provide a 30-day window to download your data before it is securely removed from our systems."
            }
          ]
        }
      },
      stillHaveQuestions: {
        title: "Still have questions?",
        description: "If you still have questions or need further assistance, our support team is here to help you 24/7.",
        contactSupport: "Contact Support"
      }
    },
    loading: {
      inProgress: "Loading...",
      complete: "Complete"
    },
    notFound: {
      title: "Page Not Found",
      description: "The page you are looking for does not exist.",
      backHome: "Back to Home"
    }
  },
  bn: {
    navbar: {
      features: 'বৈশিষ্ট্য',
      howItWorks: 'কিভাবে কাজ করে',
      pricing: 'মূল্য',
      faq: 'সাধারণ প্রশ্ন',
      contact: 'যোগাযোগ',
      login: 'লগইন',
      getStarted: 'শুরু করুন',
    },
    footer: {
      product: 'পণ্য',
      company: 'কোম্পানি',
      legal: 'আইনি',
      support: 'সহায়তা',
      allRightsReserved: 'সর্বস্বত্ব সংরক্ষিত।',
      terms: 'শর্তাবলী',
      privacy: 'গোপনীয়তা',
      cookies: 'কুকিজ',
      languageSelector: 'ভাষা',
    },
    hero: {
      tagline: 'রেস্টুরেন্ট মালিকদের জন্য প্রথম পছন্দ',
      title: {
        part1: 'স্মার্ট সমাধান আপনার',
        part2: 'রেস্টুরেন্ট',
        part3: 'ব্যবস্থাপনার জন্য',
      },
      description: 'একটি অল-ইন-ওয়ান ক্লাউড-ভিত্তিক রেস্টুরেন্ট ব্যবস্থাপনা পরিষেবা যা আপনাকে অর্ডার, ইনভেন্টরি এবং কর্মীদের দক্ষতার সাথে পরিচালনা করতে সাহায্য করে।',
      startFree: 'বিনামূল্যে শুরু করুন',
      watchDemo: 'ডেমো দেখুন',
      tryFirst: 'আগে চেষ্টা করুন, পরে পেমেন্ট করুন',
    },
    features: {
      title: 'হিসাবএক্স শক্তিশালী বৈশিষ্ট্য',
      subtitle: 'আপনার রেস্টুরেন্ট দক্ষতার সাথে পরিচালনার জন্য প্রয়োজনীয় সবকিছু',
      viewDetails: 'বিস্তারিত দেখুন',
      learnMore: 'আরও জানুন',
      featureItems: {
        dashboards: {
          title: 'রোল-ভিত্তিক ড্যাশবোর্ড',
          description: 'মালিক, ম্যানেজার এবং স্টাফদের জন্য আলাদা ড্যাশবোর্ড, প্রত্যেকের জন্য ভিন্ন ভিউ এবং কার্যকারিতা সহ। ভূমিকা অনুযায়ী অ্যাকসেস এবং অনুমতি নিয়ন্ত্রণ করুন।',
        },
        reservations: {
          title: 'রিজার্ভেশন ব্যবস্থাপনা',
          description: 'রিয়েল-টাইম উপলব্ধতা, টেবিল অ্যাসাইনমেন্ট এবং গ্রাহক পছন্দ ট্র্যাকিং সহ সহজেই অতিথি রিজার্ভেশন পরিচালনা করুন।',
        },
        statistics: {
          title: 'বিশ্লেষণ ও প্রতিবেদন',
          description: 'ভিজ্যুয়াল রিপোর্ট এবং কার্যকরী ডাটা সহ বিক্রয়, ইনভেন্টরি এবং গ্রাহক আচরণ সম্পর্কে বিস্তারিত অন্তর্দৃষ্টি পান।',
        },
        payroll: {
          title: 'বেতন ব্যবস্থাপনা',
          description: 'ঘন্টা, টিপস এবং বোনাসের জন্য স্বয়ংক্রিয় ক্যালকুলেশন সহ স্টাফ পেমেন্ট প্রসেসিং সহজ করুন, ট্যাক্স অনুমোদন নিশ্চিত করার সাথে।',
        },
        menu: {
          title: 'মেনু ব্যবস্থাপনা',
          description: 'সহজেই মেনু আইটেম, দাম এবং উপলব্ধতা আপডেট করুন। কাস্টমাইজযোগ্য ব্যাকগ্রাউন্ড এবং ছবি সহ মৌসুমী বিশেষত্ব প্রদর্শন করুন।',
        },
        orders: {
          title: 'অর্ডার প্রসেসিং',
          description: 'রিয়েল-টাইম কিচেন নোটিফিকেশন এবং ডেলিভারি ট্র্যাকিং সহ একটি একীভূত সিস্টেম থেকে অনলাইন এবং ইন-হাউস উভয় অর্ডার পরিচালনা করুন।',
        },
      },
    },
    howItWorks: {
      title: 'হিসাবএক্স কিভাবে কাজ করে',
      subtitle: 'আমাদের সহজবোধ্য প্ল্যাটফর্ম দিয়ে মাত্র ৪টি সহজ ধাপে আপনার রেস্টুরেন্টের কার্যক্রম পরিবর্তন করুন',
      simpleProcess: 'সহজ প্রক্রিয়া',
      steps: {
        step1: {
          title: 'আপনার রেস্টুরেন্ট প্রোফাইল তৈরি করুন',
          description: 'আপনার ব্যবসার মৌলিক বিবরণ, অবস্থান এবং কার্যকালের সময় সেট করুন। আমাদের স্মার্ট অনবোর্ডিং প্রক্রিয়া আপনাকে দিনের পরিবর্তে মিনিটের মধ্যে চালু করে দেয়।',
        },
        step2: {
          title: 'আপনার ডিজিটাল মেনু তৈরি করুন',
          description: 'মূল্য, বিবরণ এবং ছবি সহ আপনার মেনু আইটেমগুলি আপলোড করুন। সম্পূর্ণ অর্ডারিং অভিজ্ঞতার জন্য বিভাগ অনুসারে সংগঠিত করুন এবং মডিফায়ার যোগ করুন।',
        },
        step3: {
          title: 'আপনার টিম পরিচালনা করুন',
          description: 'ভূমিকা-ভিত্তিক অনুমতি সহ স্টাফ সদস্যদের যোগ করুন। কার্যক্রম সুব্যবস্থিত করতে ফ্রন্ট-অফ-হাউস, রান্নাঘর এবং ব্যবস্থাপনা দলের জন্য দায়িত্ব বরাদ্দ করুন।',
        },
        step4: {
          title: 'আপনার ব্যবসা বিশ্লেষণ করুন এবং বাড়ান',
          description: 'বিক্রয়, ইনভেন্টরি এবং কর্মীদের সম্পর্কে রিয়েল-টাইম রিপোর্ট দিয়ে পারফরম্যান্স ট্র্যাক করুন। কার্যক্রম অপ্টিমাইজ করতে এবং রাজস্ব বাড়াতে ডাটা-ভিত্তিক অন্তর্দৃষ্টি ব্যবহার করুন।',
        },
      },
      learnMore: 'কিভাবে কাজ করে জানুন',
    },
    benefits: {
      title: 'কারা হিসাবএক্স থেকে উপকৃত হতে পারেন?',
      subtitle: 'আমাদের সফটওয়্যার বিভিন্ন ধরনের ফুড সার্ভিস ব্যবসার প্রয়োজনীয়তা পূরণের জন্য তৈরি করা হয়েছে, যা তাদের কার্যক্রম অপ্টিমাইজ করতে এবং গ্রাহক সেবা উন্নত করতে সাহায্য করে',
      items: {
        quickService: {
          title: 'দ্রুত সেবা রেস্টুরেন্ট',
          description: 'দ্রুত খাবার চেইন এবং ক্যাজুয়াল ডাইনিং প্রতিষ্ঠানের জন্য আদর্শ যারা তাদের পরিচালনা এবং ডেলিভারি ব্যবস্থাপনা সহজ করতে চান।',
        },
        fineDining: {
          title: 'ফাইন ডাইনিং রেস্টুরেন্ট',
          description: 'আপস্কেল রেস্টুরেন্টের জন্য আদর্শ যাদের উন্নত স্টাফ ব্যবস্থাপনা এবং সঠিক সার্ভিস টাইমিং সমন্বয় প্রয়োজন।',
        },
        delivery: {
          title: 'ডেলিভারি রেস্টুরেন্ট',
          description: 'শুধুমাত্র ডেলিভারি-কেন্দ্রিক রেস্টুরেন্টের জন্য অপরিহার্য যারা একাধিক ব্র্যান্ড পরিচালনা করে এবং দক্ষ অর্ডার প্রসেসিং সিস্টেম প্রয়োজন।',
        },
        cloudKitchens: {
          title: 'ক্লাউড কিচেন',
          description: 'শুধুমাত্র ডেলিভারি-কেন্দ্রিক কিচেনের জন্য অপরিহার্য যারা একাধিক ব্র্যান্ড পরিচালনা করে এবং দক্ষ অর্ডার প্রসেসিং সিস্টেম প্রয়োজন।',
        },
        catering: {
          title: 'ক্যাটারিং সার্ভিস',
          description: 'ক্যাটারিং ব্যবসার জন্য আদর্শ যারা একই সময়ে একাধিক ইভেন্ট, স্টাফ অ্যাসাইনমেন্ট এবং ডেলিভারি সিডিউল পরিচালনা করে।',
        },
        foodCourts: {
          title: 'ফুড কোর্ট',
          description: 'রেস্টুরেন্ট চেইনের জন্য উপযুক্ত যাদের কেন্দ্রীয় ব্যবস্থাপনা এবং একাধিক স্থানে সুসংগত সেবা প্রয়োজন।',
        },
      },
      whyChooseUs: {
        title: 'কেন রেস্টুরেন্ট মালিকরা আমাদের বেছে নেন',
        description: 'হিসাবএক্স সব আকারের ফুড সার্ভিস ব্যবসার জন্য বিশেষভাবে ডিজাইন করা হয়েছে। আমাদের প্ল্যাটফর্ম শক্তিশালী বৈশিষ্ট্য এবং সহজবোধ্য ইন্টারফেসের সমন্বয় করে আপনাকে কার্যক্রম সহজ করতে সাহায্য করে।',
        features: {
          orderManagement: 'সহজ অর্ডার ব্যবস্থাপনা',
          inventoryTracking: 'রিয়েল-টাইম ইনভেন্টরি ট্র্যাকিং',
          staffScheduling: 'স্টাফ শিডিউলিং এবং ব্যবস্থাপনা',
        },
      },
    },
    pricing: {
      title: "মূল্য পরিকল্পনা",
      subtitle: "আপনার পারফেক্ট প্ল্যান বেছে নিন",
      description: "আপনার ব্যবসার প্রয়োজন অনুযায়ী সর্বোত্তম প্ল্যান নির্বাচন করুন এবং দক্ষতার সাথে আপনার কার্যক্রম পরিচালনা শুরু করুন",
      mostPopular: "সবচেয়ে জনপ্রিয়",
      period: "/মাস",
      plans: {
        basic: {
          name: "বেসিক",
          description: "নতুন শুরু করা ছোট ব্যবসার জন্য পারফেক্ট",
          price: "৳৯৯৯",
          buttonText: "শুরু করুন",
          features: [
            "প্রতি মাসে ১০০টি পর্যন্ত ইনভয়েস",
            "বেসিক ইনভেন্টরি ব্যবস্থাপনা",
            "২ জন টিম সদস্য অন্তর্ভুক্ত",
            "ইমেইল সাপোর্ট",
            "বেসিক রিপোর্টিং টুলস",
            "মোবাইল অ্যাপ অ্যাক্সেস",
            "কাস্টমার ডাটাবেস",
            "ডিজিটাল রসিদ",
            "পেমেন্ট ট্র্যাকিং",
            "বেসিক অ্যানালিটিক্স"
          ]
        },
        professional: {
          name: "প্রফেশনাল",
          description: "বর্ধনশীল ব্যবসার জন্য আদর্শ যাদের আরও বৈশিষ্ট্যের প্রয়োজন",
          price: "৳২,৪৯৯",
          buttonText: "প্রফেশনাল ব্যবহার করুন",
          features: [
            "প্রতি মাসে ৫০০টি পর্যন্ত ইনভয়েস",
            "অ্যাডভান্সড ইনভেন্টরি ব্যবস্থাপনা",
            "৫ জন টিম সদস্য অন্তর্ভুক্ত",
            "অগ্রাধিকার ইমেইল ও চ্যাট সাপোর্ট",
            "অ্যাডভান্সড রিপোর্টিং ও অ্যানালিটিক্স",
            "কাস্টম ব্র্যান্ডিং অপশন",
            "স্বয়ংক্রিয় বিলিং",
            "মাল্টি-লোকেশন সাপোর্ট",
            "API অ্যাক্সেস",
            "ডাটা এক্সপোর্ট সুবিধা"
          ]
        },
        enterprise: {
          name: "এন্টারপ্রাইজ",
          description: "বড় ব্যবসার জন্য যাদের সম্পূর্ণ বৈশিষ্ট্যের প্রয়োজন",
          price: "৳৪,৯৯৯",
          buttonText: "সেলস এর সাথে যোগাযোগ করুন",
          features: [
            "আনলিমিটেড ইনভয়েস",
            "এন্টারপ্রাইজ ইনভেন্টরি সলিউশন",
            "আনলিমিটেড টিম সদস্য",
            "২৪/৭ ডেডিকেটেড সাপোর্ট",
            "কাস্টম রিপোর্টিং সলিউশন",
            "হোয়াইট-লেবেল অপশন",
            "অ্যাডভান্সড সিকিউরিটি ফিচার",
            "কাস্টম API ইন্টিগ্রেশন",
            "ডেডিকেটেড অ্যাকাউন্ট ম্যানেজার",
            "কাস্টম ট্রেনিং সেশন"
          ]
        }
      }
    },
    testimonials: {
      title: "প্রশংসাপত্র",
      heading: "আমাদের ক্লায়েন্টরা যা বলেন",
      description: "দেখুন কিভাবে HisabX ব্যবসাগুলিকে তাদের কার্যক্রম সহজতর করতে এবং লক্ষ্য অর্জন করতে সাহায্য করেছে"
    },
    cta: {
      primary: {
        title: "আপনার ব্যবসার কার্যক্রম সহজ করতে প্রস্তুত?",
        description: "হাজার হাজার ব্যবসা প্রতিষ্ঠান তাদের আর্থিক ব্যবসাপনার জন্য HisabX-কে বিশ্বাস করে। ১৪ দিনের বিনামূল্যে ট্রায়ালের মাধ্যমে আজই আপনার যাত্রা শুরু করুন।",
        startTrial: "বিনামূল্যে শুরু করুন"
      }
    },
    faq: {
      title: "সাধারণ প্রশ্ন",
      subtitle: "প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী",
      description: "HisabX সম্পর্কে সাধারণ প্রশ্নের উত্তর জানুন এবং কিভাবে এটি আপনার ব্যবসা বৃদ্ধিতে সাহায্য করতে পারে",
      categories: {
        general: {
          title: "সাধারণ প্রশ্নাবলী",
          items: [
            {
              question: "HisabX কী?",
              answer: "HisabX একটি সম্পূর্ণ ব্যবসা ব্যবসাপনা প্ল্যাটফর্ম যা বিশেষভাবে রেস্তোরাঁ এবং খাদ্য সেবা ব্যবসার জন্য ডিজাইন করা হয়েছে। এটি একটি জায়গায় অপারেশন সহজ করে, কর্মীদের পরিচালনা করে, অর্ডার ট্র্যাক করে এবং পারফরম্যান্স বিশ্লেষণ করতে সাহায্য করে।"
            },
            {
              question: "HisabX দিয়ে কিভাবে শুরু করব?",
              answer: "শুরু করা খুবই সহজ! আমাদের ১৪ দিনের বিনামূল্যে ট্রায়ালের জন্য সাইন আপ করুন, এবং আমাদের টিম আপনাকে সেটআপ প্রক্রিয়ার মাধ্যমে গাইড করবে। আপনি দ্রুত শুরু করতে পারেন তা নিশ্চিত করতে আমরা সম্পূর্ণ অনবোর্ডিং সাপোর্ট প্রদান করি।"
            },
            {
              question: "HisabX-এ আমার ডেটা কি নিরাপদ?",
              answer: "হ্যাঁ, আমরা ডেটা নিরাপত্তাকে খুব গুরুত্বের সাথে নেই। আমরা আপনার ডেটা সুরক্ষার জন্য ইন্ডাস্ট্রি-স্ট্যান্ডার্ড এনক্রিপশন এবং নিরাপত্তা ব্যবস্থা ব্যবহার করি। সমস্ত তথ্য নিয়মিত ব্যাকআপ সহ সুরক্ষিত ক্লাউড সার্ভারে সংরক্ষণ করা হয়।"
            },
            {
              question: "আমি কি মোবাইল ডিভাইসে HisabX ব্যবহার করতে পারি?",
              answer: "হ্যাঁ, HisabX সম্পূর্ণ মোবাইল-রেসপনসিভ এবং আমরা iOS এবং Android উভয় ডিভাইসের জন্য ডেডিকেটেড মোবাইল অ্যাপও অফার করি, যা আপনাকে চলতে চলতে আপনার ব্যবসা পরিচালনা করতে দেয়।"
            }
          ]
        },
        technical: {
          title: "টেকনিক্যাল সাপোর্ট",
          items: [
            {
              question: "আপনারা কি ধরনের সাপোর্ট দেন?",
              answer: "আমরা লাইভ চ্যাট, ইমেইল এবং ফোন সহ একাধিক চ্যানেলের মাধ্যমে ২৪/৭ গ্রাহক সহায়তা প্রদান করি। আমাদের টেকনিক্যাল টিম যেকোনো সমস্যা বা প্রশ্নে সাহায্য করার জন্য সর্বদা প্রস্তুত।"
            },
            {
              question: "আমি কি HisabX-কে অন্যান্য টুলের সাথে ইন্টিগ্রেট করতে পারি?",
              answer: "হ্যাঁ, HisabX জনপ্রিয় ব্যবসায়িক টুল এবং POS সিস্টেমের সাথে বিভিন্ন ইন্টিগ্রেশন অপশন অফার করি। আমরা প্রয়োজন অনুযায়ী API অ্যাক্সেস এবং কাস্টম ইন্টিগ্রেশনের জন্য সাপোর্ট প্রদান করি।"
            },
            {
              question: "সিস্টেম কত ঘন ঘন আপডেট করা হয়?",
              answer: "আমরা নিয়মিতভাবে ব্যবহারকারীদের ফিডব্যাকের ভিত্তিতে নতুন ফিচার এবং উন্নতি সহ আমাদের সিস্টেম আপডেট করি। সমস্ত আপডেট জিরো ডাউনটাইম সহ স্বয়ংক্রিয়ভাবে ডেপ্লয় করা হয়।"
            },
            {
              question: "আমি ক্যানসেল করলে আমার ডেটার কী হবে?",
              answer: "আপনি যেকোনো সময় আপনার ডেটা এক্সপোর্ট করতে পারেন। আপনি ক্যানসেল করলে, আমরা আপনার ডেটা আমাদের সিস্টেম থেকে নিরাপদে সরানোর আগে ৩০ দিনের উইন্ডো প্রদান করি।"
            }
          ]
        }
      },
      stillHaveQuestions: {
        title: "আরও প্রশ্ন আছে?",
        description: "আপনার যদি আরও প্রশ্ন থাকে বা আরও সহায়তার প্রয়োজন হয়, আমাদের সাপোর্ট টিম ২৪/৭ আপনাকে সাহায্য করার জন্য প্রস্তুত।",
        contactSupport: "সাপোর্টের সাথে যোগাযোগ করুন"
      }
    },
    loading: {
      inProgress: "লোড হচ্ছে...",
      complete: "সম্পন্ন"
    },
    notFound: {
      title: "পৃষ্ঠা পাওয়া যায়নি",
      description: "আপনি যে পৃষ্ঠাটি খুঁজছেন তা বিদ্যমান নেই।",
      backHome: "হোম পেজে ফিরুন"
    }
  },
}; 