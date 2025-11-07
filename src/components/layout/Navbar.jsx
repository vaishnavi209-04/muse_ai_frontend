import React from "react";
import { ArrowRight } from "lucide-react";
import { assets } from "../../assets/assets";
import { UserButton, useUser, useClerk } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn } = useClerk();

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-white/10 backdrop-blur-2xl border-b border-white/20 flex justify-between items-center px-6 sm:px-12 lg:px-20 py-3 md:py-4">
      
      {/* ✅ Logo Section */}
      <div
        className="flex items-center gap-2 cursor-pointer select-none"
        onClick={() => navigate("/")}
      >
        <img
          src={assets.logo}
          alt="Muse.ai logo"
          className="h-8 sm:h-10 w-auto object-contain transition-transform hover:scale-105"
        />
      </div>

      {/* ✅ Nav Links */}
      <div className="hidden md:flex items-center gap-x-8 text-sm font-medium text-gray-700">
        <span
          onClick={() => handleScroll("features")}
          className="cursor-pointer hover:text-blue-600 transition-colors"
        >
          Features
        </span>
        <span
          onClick={() => handleScroll("pricing")}
          className="cursor-pointer hover:text-blue-600 transition-colors"
        >
          Pricing
        </span>
        <span
          onClick={() => handleScroll("testimonials")}
          className="cursor-pointer hover:text-blue-600 transition-colors"
        >
          Testimonials
        </span>
      </div>

      {/* ✅ Auth Section */}
      <div className="flex items-center">
        {user ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="flex items-center gap-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
