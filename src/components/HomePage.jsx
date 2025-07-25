import React from 'react';
import { motion } from 'framer-motion';
import { FaGooglePlay, FaApple } from "react-icons/fa";

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

const HeaderSection = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex gap-4 items-center bg-gradient-to-br from-pink-200 via-white to-pink-100 overflow-hidden"
    >
      {/* Sparkles */}
      <Sparkle className="top-10 left-10" delay="0s" />
      <Sparkle className="top-[25%] left-[20%]" delay="0.7s" />
      <Sparkle className="bottom-10 right-12" delay="1.2s" />
      <Sparkle className="top-[15%] right-[25%]" delay="1.8s" />
      <Sparkle className="bottom-[10%] left-[50%]" delay="2.4s" />

      <div className="max-w-7xl w-full px-8 mx-auto flex flex-col gap-4 md:flex-row items-center justify-between z-10">
        {/* Text Section */}
        <motion.div
          className="md:w-1/2 text-center md:text-left space-y-6"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 drop-shadow-lg">
            Welcome to <span className="text-pink-600">OffersHolic</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-xl">
            Discover the best deals, discounts, and exclusive offers in your city with OffersHolic, the ultimate mobile application designed to save you money and time.
          </p>

          <div className="flex justify-center md:justify-start gap-4 mt-6 flex-wrap">
            {/* App Store */}
            <a
              href="https://apps.apple.com/in/app/offersholic/id6736408497"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-white hover:text-black border transition"
            >
              <FaApple className="text-2xl" />
              <span className="text-sm font-semibold">App Store</span>
            </a>

            {/* Google Play */}
            <a
              href="https://play.google.com/store/apps/details?id=com.zephyr.offersholic"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-white hover:text-black border transition"
            >
              <FaGooglePlay className="text-2xl" />
              <span className="text-sm font-semibold">Google Play</span>
            </a>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <img
            src="/icon.jpeg"
            alt="OffersHolic Preview"
            className="w-full max-w-sm mx-auto rounded-xl shadow-xl"
          />
        </motion.div>
      </div>

      {/* Sparkle Animation Style */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.3); }
        }
        .animate-twinkle {
          animation: twinkle 2.5s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default HeaderSection;
