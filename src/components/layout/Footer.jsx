import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700">
      {/* === Main Footer === */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-200">
        
        {/* === Left: Logo + Description === */}
        <div>
          <img
            src={assets.logo}
            alt="Muse.ai Logo"
            className="h-8 mb-4"
          />
          <p className="text-gray-500 text-sm leading-relaxed">
            Experience the power of AI with{" "}
            <span className="text-gray-900 font-semibold">Muse.ai</span>. <br />
            Transform your content creation with our suite of premium AI tools.
            Write articles, generate images, and enhance your workflow.
          </p>
        </div>

        {/* === Center: Company Links === */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-4 text-lg">Company</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>
              <a href="#" className="hover:text-[#2563EB] transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#2563EB] transition">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#2563EB] transition">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#2563EB] transition">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>

        {/* === Right: Newsletter === */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-4 text-lg">
            Subscribe to our newsletter
          </h3>
          <p className="text-gray-500 text-sm mb-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-md bg-gray-100 text-gray-700 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
            />
            <button
              type="submit"
              className="bg-[#2563EB] hover:bg-[#1E4FD8] text-white px-4 py-2 rounded-r-md text-sm font-medium transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* === Copyright Section === */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          {/* Left Side */}
          <p>
            &copy; {new Date().getFullYear()} Muse.ai. All rights reserved.
          </p>

          {/* Right Side */}
          <p className="mt-2 md:mt-0">
            Made with <span className="text-red-500">❤️</span> by{" "}
            <span className="text-[#2563EB] font-medium">Team VA</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
