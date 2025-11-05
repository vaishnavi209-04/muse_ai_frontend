import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../../assets/assets';

const ProductShowcase = () => {
  return (
    <div className="relative w-full min-h-[400px] md:min-h-[600px] my-20 overflow-x-clip">
      
      {/* Image 1: Left (Animate from left) */}
      <motion.img 
        src={assets.demo}
        className="hidden md:block absolute z-10 w-[35%] max-w-md rounded-lg shadow-2xl left-0 top-24"
        alt="Product UI component 1"
        initial={{ opacity: 0, x: -100, rotate: -5 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 100 }}
        viewport={{ once: true, amount: 0.5 }}
      />
      
      {/* Image 2: Center (Animate from bottom) */}
      <motion.img 
        src={assets.demo}
        className="relative md:absolute z-30 w-[90%] md:w-[50%] max-w-2xl rounded-lg shadow-2xl mx-auto md:left-1/2 md:-translate-x-1/2 top-10"
        alt="Main product UI"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        viewport={{ once: true, amount: 0.5 }}
      />
      
      {/* Image 3: Right (Animate from right) */}
      <motion.img 
        src={assets.demo}
        className="hidden md:block absolute z-20 w-[30%] max-w-sm rounded-lg shadow-2xl right-0 top-32"
        alt="Product UI component 2"
        initial={{ opacity: 0, x: 100, rotate: 5 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 100 }}
        viewport={{ once: true, amount: 0.5 }}
      />

    </div>
  );
};

export default ProductShowcase;
