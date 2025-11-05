import React from "react";
import { ArrowRight } from "lucide-react";
import { assets } from "../../assets/assets";

// Corrected import: Removed the 'userClerk' typo
import { UserButton, useUser, useClerk } from '@clerk/clerk-react';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn } = useClerk(); // This is needed for the "Get Started" button

  return (
    <>
      {/* This is the main div from your text code.
        I've added 'backdrop-blur-2xl' from your image for the glass effect.
      */}
      <div className="fixed z-50 w-full flex justify-between items-center py-3 px-6 sm:px-12 lg:px-20 bg-transparent backdrop-blur-2xl">
        
        {/* Logo (Kept exactly as you requested) */}
        <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
          <img alt="logo" src={assets.logo} className="w-8 sm:w-10 object-contain" />
          <span className="ml-1 text-lg sm:text-xl font-semibold text-purple-700">
            Muse.ai
          </span>
        </div>

        {/* NEW: Navigation Links (as requested) */}
        {/* These are hidden on mobile (md:) and appear on medium screens and up */}
        <div className="hidden md:flex items-center gap-x-6 text-sm font-medium text-gray-700">
          <span 
            className="cursor-pointer hover:text-purple-700 transition-colors" 
            onClick={() => navigate('/#features')}
          >
            Features
          </span>
          <span 
            className="cursor-pointer hover:text-purple-700 transition-colors" 
            onClick={() => navigate('/#pricing')}
          >
            Pricing
          </span>
          <span 
            className="cursor-pointer hover:text-purple-700 transition-colors" 
            onClick={() => navigate('/#testimonials')}
          >
            Testimonials
          </span>
        </div>

        {/* Right Side: Auth logic from your image */}
        <div className="flex items-center">
          {user ? (
            // If user is logged in, show the UserButton
            <UserButton afterSignOutUrl="/" />
          ) : (
            // If user is logged out, show the "Get Started" button
            <button
              onClick={() => openSignIn()}
              // These classes are taken directly from your image
              className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>
    </>
  );
};

export default Navbar;