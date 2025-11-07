import React from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import axios from 'axios';

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};

// Updated plans
const pricingPlans = [
  {
    name: 'Free',
    price: '₹0',
    billingCycle: 'Always free',
    description: 'Perfect for beginners exploring AI tools. No card required.',
    features: ['Title Generation', 'Article Generation'],
    isPremium: false,
  },
  {
    name: 'Premium',
    price: '₹400',
    billingCycle: '/month (Billed annually)',
    description: 'Try all premium AI tools free for 7 days — no card required.',
    features: [
      'Title Generation',
      'Article Generation',
      'Generate Images',
      'Remove Background',
      'Remove Object',
      'Resume Review',
    ],
    isPremium: true,
  },
];

// Handle plan selection
const handlePlanSelection = async (plan) => {
  try {
    if (plan.isPremium) {
      // Mock backend call for trial activation
      const res = await axios.post('/api/start-trial', { plan: 'premium' });
      toast.success('🎉 Premium trial activated! Enjoy 7 days of full access.');
    } else {
      toast.success('✅ You’re already on the free plan. Enjoy creating!');
    }
  } catch (error) {
    console.error(error);
    toast.error('Something went wrong. Please try again.');
  }
};

const Pricing = () => {
  return (
    <motion.section
      className="py-24 bg-gray-50 font-sans"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <div className="text-center mb-14 px-4">
        <h2 className="text-4xl md:text-[42px] font-semibold text-gray-800 mb-3">
          Choose Your Plan
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto text-lg">
          Start for free — no credit card required. Upgrade anytime.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={plan.name}
            variants={cardVariants}
            whileHover={{
              y: -8,
              scale: 1.02,
              transition: { type: 'spring', stiffness: 200, damping: 15 },
            }}
            className={`relative flex flex-col items-start bg-white rounded-2xl shadow-md border
              ${plan.isPremium ? 'border-[#2563EB]' : 'border-gray-200'}
              hover:shadow-lg transition-all duration-300 p-8 w-full sm:w-[300px] md:w-[340px]`}
          >
            {/* Badge for Premium */}
            {plan.isPremium && (
              <span className="absolute -top-3 right-5 bg-[#2563EB] text-white text-xs px-3 py-1 rounded-full shadow-md">
                Most Popular
              </span>
            )}

            {/* Plan Title */}
            <h3 className="text-2xl font-semibold text-gray-900 mb-1">{plan.name}</h3>
            <p className="text-gray-500 text-sm mb-4">{plan.description}</p>

            {/* Price */}
            <div className="mb-6">
              <p className="text-5xl font-bold text-gray-800">{plan.price}</p>
              <p className="text-gray-500 text-sm">{plan.billingCycle}</p>
            </div>

            {/* Features */}
            <ul className="space-y-3 text-gray-700 mb-8 w-full">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <svg
                    className="w-5 h-5 text-[#2563EB] mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Action Button */}
            {plan.isPremium ? (
              <button
                onClick={() => handlePlanSelection(plan)}
                className="mt-auto w-full py-3 rounded-xl text-lg font-medium transition bg-[#2563EB] text-white hover:bg-[#1E4FD8]"
              >
                Start Free Trial
              </button>
            ) : (
              <p className="mt-auto w-full text-center text-gray-500 font-medium pt-4 border-t">
                Always free — no subscription needed
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Pricing;
