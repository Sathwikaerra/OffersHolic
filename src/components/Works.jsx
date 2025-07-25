import React from 'react';
import { motion } from 'framer-motion';

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

const MirrorSection = () => {
  return (
    <section
      id="works"
      className="relative w-full overflow-hidden min-h-[100vh] bg-gradient-to-r from-slate-300 via-pink-100 to-slate-100 py-12 px-6 md:px-16"
    >
      {/* Sparkles */}
      <Sparkle className="top-12 left-16" delay="0s" />
      <Sparkle className="top-[28%] left-[30%]" delay="0.5s" />
      <Sparkle className="bottom-20 right-12" delay="1s" />
      <Sparkle className="top-[45%] right-[25%]" delay="1.5s" />
      <Sparkle className="bottom-[20%] left-[50%]" delay="2s" />

      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Top Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h2 className="text-5xl font-bold text-gray-800 mb-4 leading-tight text-3d">
            How Offersholic Works
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            At Offersholic, we make discovering and sharing great deals effortless for both users and businesses. Here's how our platform works.
          </p>
        </motion.div>

        {/* Middle Section */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <img
              src="https://zephyrapps.in/offersholic/wp-content/uploads/2024/10/Untitled_design__12_-removebg-preview.png"
              alt="OffersHolic Demo"
              className="w-full max-w-md mx-auto rounded-xl"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-lg text-pink-600 font-bold mb-2">Step 01</p>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-snug text-3d">
              A Step-by-Step Guide to Discovering the Best Offers Around You
            </h3>
            <p className="text-lg text-gray-700">
              Explore amazing deals and offers near you anytime, anywhere through the Offersholic mobile app. With an intuitive interface, easily browse, save, and redeem offers with just a few taps. Stay updated and shop smart, all in the palm of your hand!
            </p>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-lg text-pink-600 font-bold mb-2">Step 02</p>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-snug text-3d">
              A Fully Integrated Suite of Offers & Promotions
            </h3>
            <p className="text-lg text-gray-700">
              Offersholic’s platform allows you to manage all your offers, ads, and posts in one centralized hub. Keep your promotions organized, stay connected, and ensure your updates are always just a click away for your customers.
            </p>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <img
              src="https://zephyrapps.in/offersholic/wp-content/uploads/2024/10/Untitled_design__10_-removebg-preview-3.png"
              alt="Live Updates"
              className="w-full max-w-md mx-auto rounded-xl"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>

      {/* Custom CSS */}
      <style>
        {`
          @keyframes twinkle {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.2; transform: scale(1.3); }
          }
          .animate-twinkle {
            animation: twinkle 2.5s infinite ease-in-out;
          }
          .text-3d {
            text-shadow:
              1px 1px 0 #ccc,
              2px 2px 0 #bbb,
              3px 3px 0 #aaa;
          }
        `}
      </style>
    </section>
  );
};

export default MirrorSection;
