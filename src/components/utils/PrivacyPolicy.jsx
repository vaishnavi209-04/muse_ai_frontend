import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-6 md:px-20 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8"
      >
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          Last updated: November 7, 2025
        </p>

        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
            <p>
              Welcome to <strong>Muse.ai</strong> (“we”, “our”, “us”). Your
              privacy is very important to us. This Privacy Policy explains how
              we collect, use, and protect your personal information when you
              use our website and AI-based tools.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
            <p>
              We collect information that you provide directly, such as when you
              register, log in, or use any Quick.ai services. We also
              automatically collect technical data such as your IP address,
              browser type, and usage statistics to improve our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
            <ul className="list-disc ml-6">
              <li>To provide and maintain Quick.ai services</li>
              <li>To improve our tools and enhance user experience</li>
              <li>To send important updates or notifications</li>
              <li>To detect and prevent security or technical issues</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4. Data Sharing</h2>
            <p>
              We do not sell or rent your personal data. We may share limited
              information with trusted third-party service providers (like
              analytics or hosting partners) only to operate Quick.ai securely
              and effectively.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
            <p>
              We implement industry-standard measures such as HTTPS encryption
              and secured databases to protect your information. However, no
              method of transmission over the internet is 100% secure, so we
              cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. Cookies & Tracking</h2>
            <p>
              We use cookies and similar technologies to understand how you use
              Quick.ai and to improve performance. You can manage or disable
              cookies through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">7. Your Rights</h2>
            <p>
              You can request access, correction, or deletion of your data at
              any time. If you wish to delete your Quick.ai account or withdraw
              consent, contact us at{" "}
              <a
                href="mailto:2k23.cs2311803@gmail.com"
                className="text-blue-600 underline"
              >
                muse.ai@gmail.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. Any changes will
              be posted on this page with a revised “Last Updated” date. We
              encourage you to review this policy from time to time.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <a
                href="mailto:2k23.cs2311803@gmail.com"
                className="text-blue-600 underline"
              >
                muse.ai@gmail.com
              </a>
              .
            </p>
          </div>
        </section>

        <div className="mt-10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()}Muse.ai — All rights reserved.
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
