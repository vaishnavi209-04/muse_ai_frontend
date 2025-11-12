import React from "react";
import { assets } from "../../assets/assets";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#6D28D9] via-[#6366F1] to-[#8B5CF6] text-white">
      {/* === Main Footer === */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col md:flex-row border-b border-white/20">
        
        {/* === Left Section === */}
        <div className="w-1/3 pr-8">
          <img
            src={assets.logo}
            alt="Muse.ai Logo"
            className="h-12 mb-6 brightness-0 invert"
          />
          <p className="text-white/90 text-base leading-relaxed">
            Experience the power of AI with{" "}
            <span className="text-white font-semibold">Muse.ai</span>. <br />
            Transform your content creation with our suite of premium AI tools —
            write articles, generate images, and enhance your workflow.
          </p>
        </div>

        {/* === Middle Section === */}
        <div className="w-1/3 flex justify-center">
          <div>
            <h3 className="text-white font-semibold mb-5 text-xl">Company</h3>
            <ul className="space-y-3 text-base text-white/80">
              <li>
                <a href="#" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* === Right Section === */}
        <div className="w-1/3 flex flex-col items-end">
          <h3 className="text-white font-semibold mb-5 text-xl">
            Connect with us
          </h3>
          <div className="flex space-x-6 text-2xl text-white/80">
            <a href="#" className="hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* === Bottom Bar === */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center text-base text-white/80">
          <p>&copy; {new Date().getFullYear()} Muse.ai. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Made with <span className="text-red-400">❤️</span> by{" "}
            <span className="text-white font-medium">Team VA</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
