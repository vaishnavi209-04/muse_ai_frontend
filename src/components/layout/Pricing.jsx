import React from 'react';
import { motion } from 'framer-motion';
import { PricingTable } from '@clerk/clerk-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Pricing = () => {
  return (
    <motion.section
      className="min-h-screen bg-gray-50 font-sans py-24"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header - Kept from your old design */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-3">
          Choose Your Plan
        </h2>
        <p className="text-gray-500 max-w-md mx-auto text-lg">
          Start for free. Upgrade when you're ready.
        </p>
      </div>

      {/* Pricing Table Container 
        - max-w-5xl: Stops it from getting insanely wide on large screens.
        - mx-auto: Centers it.
      */}
      <div className="flex justify-center px-4 md:px-0">
        <div className="w-full max-w-[900px]"> 
           <PricingTable 
             mode="modal"
             appearance={{
               // 1. Variables control the high-level theme
               variables: {
                 colorPrimary: '#2563EB', // Your old blue accent color
                 colorTextOnPrimaryBackground: 'white',
                 borderRadius: '16px',    // Matches your old rounded-2xl
                 fontFamily: 'inherit',   // Uses your site's font
               },
               // 2. Elements let you target specific parts with Tailwind classes (if configured) or raw CSS
               elements: {
                 // This makes the overall container tighter
                 pricingPage: {
                   padding: '0px',
                   backgroundColor: 'transparent',
                 },
                 // Styles the individual cards to look more like your old ones
                 pricingPlan: {
                   backgroundColor: 'white',
                   border: '1px solid #e5e7eb', // border-gray-200
                   boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', // shadow-lg
                   padding: '32px', // Reduce standard huge padding
                 },
                 // Target the "Subscribe" button specifically
                 pricingPlanSubmitButton: {
                   backgroundColor: '#2563EB',
                   textTransform: 'none',
                   fontSize: '16px',
                   fontWeight: '500',
                   padding: '12px 24px',
                 },
                 // Tweak the feature list items
                 pricingPlanFeature: {
                   fontSize: '15px',
                   color: '#374151', // text-gray-700
                 }
               }
             }}
           />
        </div>
      </div>
    </motion.section>
  );
};

export default Pricing;