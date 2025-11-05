import React from "react";
import { assets } from "../../assets/assets";

// 1. Import Framer Motion
import { motion } from "framer-motion";

// --- Framer Motion Variants (from your original code) ---

// 2. Variant for the main footer section
const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      when: "beforeChildren", // Animate this container first
      staggerChildren: 0.15, // Then animate children 0.15s apart
    },
  },
};

// 3. Variant for each column
const columnVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

const Footer = () => {
  return (
    <footer className="text-white">
      
      {/* ===== Part 1: Call to Action Section (from image) ===== */}
      {/* This animates in as one block */}
      <motion.div
        className="bg-purple-600"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-5xl mx-auto py-20 px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            You made it. Nice. <br /> Now, let's talk?
          </h2>
          <motion.button
            className="bg-white text-purple-700 font-semibold py-3 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            I'm interested
          </motion.button>
        </div>
      </motion.div>

      {/* ===== Part 2: Main Footer Links Section (Your 4 Columns) ===== */}
      {/* This uses your original variants for the staggered animation */}
      <motion.div
        className="text-gray-300 pt-16 pb-12 px-6 md:px-16 lg:px-24 xl:px-32 bg-purple-900"
        variants={footerVariants}
        initial="hidden"
        whileInView="visible" // Triggers animation on scroll
        viewport={{ once: true, amount: 0.2 }} // Triggers once 20% is visible
      >
        {/* Updated to a 4-column grid for responsiveness */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          
          {/* Column 1: Logo & About (from your code) */}
          <motion.div className="sm:max-w-80" variants={columnVariants}>
            <img src={assets.logo} alt="logo" className="mb-4 h-8 md:h-9" />
            <p className="text-sm text-gray-400">
              Experience the Power of AI with muse.ai <br /> Your Ultimate Content
              Creation Companion.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {/* Instagram */}l
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, y: -2, color: "#ec4899" }}
                className="text-gray-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM4.5 7.75A3.25 3.25 0 017.75 4.5h8.5a3.25 3.25 0 013.25 3.25v8.5a3.25 3.25 0 01-3.25 3.25h-8.5a3.25 3.25 0 01-3.25-3.25v-8.5zm9.5 1a4 4 0 11-4 4 4 4 0 014-4zm0 1.5a2.5 2.5 0 102.5 2.5 2.5 2.5 0 00-2.5-2.5zm3.5-.75a.75.75 0 11.75-.75.75.75 0 01-.75.75z" />
                </svg>
              </motion.a>
              {/* Facebook */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, y: -2, color: "#60a5fa" }}
                className="text-gray-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.5 9H15V6.5h-1.5c-1.933 0-3.5 1.567-3.5 3.5v1.5H8v3h2.5V21h3v-7.5H16l.5-3h-3z" />
                </svg>
              </motion.a>
              {/* Twitter */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, y: -2, color: "#38bdf8" }}
                className="text-gray-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 5.92a8.2 8.2 0 01-2.36.65A4.1 4.1 0 0021.4 4a8.27 8.27 0 01-2.6 1A4.14 4.14 0 0016 4a4.15 4.15 0 00-4.15 4.15c0 .32.04.64.1.94a11.75 11.75 0 01-8.52-4.32 4.14 4.14 0 001.29 5.54A4.1 4.1 0 013 10v.05a4.15 4.15 0 003.33 4.07 4.12 4.12 0 01-1.87.07 4.16 4.16 0 003.88 2.89A8.33 8.33 0 012 19.56a11.72 11.72 0 006.29 1.84c7.55 0 11.68-6.25 11.68-11.67 0-.18 0-.35-.01-.53A8.18 8.18 0 0022 5.92z" />
                </svg>
              </motion.a>
              {/* LinkedIn */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, y: -2, color: "#3b82f6" }}
                className="text-gray-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.48c0 1.1.88 1.98 1.98 1.98h.02c1.1 0 1.98-.88 1.98-1.98C6.98 4.38 6.1 3.5 4.98 3.5zM3 8.75h3.96V21H3V8.75zm6.25 0h3.8v1.68h.05c.53-.98 1.82-2.02 3.75-2.02 4.01 0 4.75 2.64 4.75 6.07V21H17v-5.63c0-1.34-.03-3.07-1.88-3.07-1.88 0-2.17 1.47-2.17 2.98V21H9.25V8.75z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Column 2: Company Links (from your code) */}
          <motion.div variants={columnVariants}>
            <p className="text-lg text-white font-semibold">COMPANY</p>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              {["About", "Careers", "Press", "Blog", "Partners"].map(
                (item, i) => (
                  <li key={i}>
                    <motion.a
                      href="#"
                      className="text-gray-400 hover:text-white transition"
                      whileHover={{ x: 3, color: "#ffffff" }}
                    >
                      {item}
                    </motion.a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Column 3: Support Links (from your code) */}
          <motion.div variants={columnVariants}>
            <p className="text-lg text-white font-semibold">SUPPORT</p>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              {[
                "Help Center",
                "Safety Information",
                "Cancellation Options",
                "Contact Us",
                "Accessibility",
              ].map((item, i) => (
                <li key={i}>
                  <motion.a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                    whileHover={{ x: 3, color: "#ffffff" }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Newsletter (from your code) */}
          <motion.div className="sm:max-w-80" variants={columnVariants}>
            <p className="text-lg text-white font-semibold">STAY UPDATED</p>
            <p className="mt-3 text-sm text-gray-400">
              Subscribe to our newsletter for inspiration and special offers.
            </p>
            <div className="flex items-center mt-4">
              <input
                type="text"
                className="bg-purple-800 text-white rounded-l border border-purple-700 h-9 px-3 outline-none placeholder-gray-400 focus:ring-2 focus:ring-white"
                placeholder="Your email"
              />
              <motion.button
                className="flex items-center justify-center bg-[#5044E5] text-white rounded-r h-9 px-4 hover:bg-[#3b32b6] transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>

        </div> {/* End of grid */}
      </motion.div>

      {/* ===== Part 3: Bottom Copyright Bar (Merged) ===== */}
      <motion.div
        className="bg-purple-950 text-gray-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true, amount: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center text-sm">
          
          {/* Left Side: Copyright (from your code) */}
          <div className="mb-2 md:mb-0">
            <span>&copy; {new Date().getFullYear()} Muse.ai. All rights reserved.</span>
          </div>
          
          {/* Right Side: Your new request */}
          <div>
            <span>Made with love by Team AV ❤️</span>
          </div>
        </div>
      </motion.div>
      
    </footer>
  );
};

export default Footer;