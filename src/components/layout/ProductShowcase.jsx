import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../../assets/assets';

const ProductShowcase = () => {
  return (
    <div className="relative w-full min-h-[500px] md:min-h-[650px] overflow-hidden mt-20">
      {/* Background Gradient Fade (to blend into CTA) */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-[#2563EB] pointer-events-none z-40" />

      {/* Image 1: Left */}
      <motion.img
        src={assets.demo}
        className="hidden md:block absolute z-10 w-[35%] max-w-md rounded-2xl shadow-2xl left-0 top-24"
        alt="Product UI 1"
        initial={{ opacity: 0, x: -100, rotate: -5 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 0.6, delay: 0.2, type: 'spring', stiffness: 100 }}
        viewport={{ once: true, amount: 0.4 }}
      />

      {/* Image 2: Center */}
      <motion.img
        src={assets.demo}
        className="relative md:absolute z-30 w-[90%] md:w-[55%] max-w-3xl rounded-2xl shadow-2xl mx-auto md:left-1/2 md:-translate-x-1/2 top-10"
        alt="Main product UI"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        viewport={{ once: true, amount: 0.4 }}
      />

      {/* Image 3: Right */}
      <motion.img
        src={assets.demo}
        className="hidden md:block absolute z-20 w-[30%] max-w-sm rounded-2xl shadow-2xl right-0 top-32"
        alt="Product UI 2"
        initial={{ opacity: 0, x: 100, rotate: 5 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 0.6, delay: 0.3, type: 'spring', stiffness: 100 }}
        viewport={{ once: true, amount: 0.4 }}
      />
    </div>
  );
};

export default ProductShowcase;
