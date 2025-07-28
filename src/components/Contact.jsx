import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';

const Sparkle = ({ className, style, delay }) => (
  <svg
    className={`absolute ${className} animate-twinkle`}
    viewBox="0 0 24 24"
    fill="white"
    width="25"
    height="20"
    style={{ animationDelay: delay || '0s', ...style }}
  >
    <path d="M12 0l2.4 6 6 2.4-6 2.4-2.4 6-2.4-6-6-2.4 6-2.4L12 0z" />
  </svg>
);

const HeaderContactLocation = () => {
  return (
    <footer
      id="contact"
      className="relative w-full overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200 pt-12 pb-6 px-6 md:px-16"
    >
      {/* Star Sparkles */}
      <Sparkle className="top-10 left-10" delay="0s" />
      <Sparkle className="top-[30%] left-[25%]" delay="0.5s" />
      <Sparkle className="bottom-16 right-16" delay="1s" />
      <Sparkle className="top-[40%] right-[20%]" delay="1.5s" />
      <Sparkle className="bottom-[25%] left-[40%]" delay="2s" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start h-full z-10 relative">
        {/* Contact Info */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h2 className="text-3xl font-semibold text-white mb-4">Contact Us</h2>
          <p className="text-base text-gray-300 mb-4">
            We'd love to hear from you! Reach out anytime and we’ll happily answer your questions.
          </p>
          <a
            href="mailto:admin@zephyrapps.in"
            className="inline-flex items-center gap-2 bg-pink-600 text-white px-5 py-2 rounded-md shadow hover:bg-pink-700 transition"
          >
            <Mail className="w-5 h-5" />
            Email Us
          </a>
        </motion.div>

        {/* Location Info */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h2 className="text-3xl font-semibold text-white mb-4">
            <MapPin className="inline-block w-6 h-6 mr-2 text-pink-400" />
            Office Location
          </h2>
          <p className="text-base text-gray-300 leading-relaxed">
            Hyderabad, India<br />
            PL.NO.35, SY NO.207, Palace View Col, Ali Nagar,<br />
            CRP Camp (Hyderabad), Bandlaguda,<br />
            Hyderabad - 500005, Telangana
          </p>
        </motion.div>
      </div>

      {/* Footer bottom text */}
      <div className="mt-12 border-t border-gray-700 pt-6  text-center text-sm text-gray-400">
        Owned by &copy; {new Date().getFullYear()} Zephyr Apps. All rights reserved.
      </div>

      {/* Twinkle animation style */}
      <style>
        {`
          @keyframes twinkle {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.2; transform: scale(1.3); }
          }
          .animate-twinkle {
            animation: twinkle 2.5s infinite ease-in-out;
          }
        `}
      </style>
    </footer>
  );
};

export default HeaderContactLocation;
