import React, { useState, useEffect } from 'react';
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
  const [isFlipped, setIsFlipped] = useState(false);

  // Auto flip every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped(prev => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Background Images for Front and Back
  const frontBgImage = "https://st2.depositphotos.com/40244300/42948/v/450/depositphotos_429482554-stock-illustration-dark-blue-vector-gradient-blur.jpg";
  const backBgImage = "https://st2.depositphotos.com/40244300/42948/v/450/depositphotos_429482554-stock-illustration-dark-blue-vector-gradient-blur.jpg";
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-white to-pink-100 overflow-hidden"
    >
      {/* Sparkles */}
      <Sparkle className="top-10 left-10" delay="0s" />
      <Sparkle className="top-[25%] left-[20%]" delay="0.7s" />
      <Sparkle className="bottom-10 right-12" delay="1.2s" />
      <Sparkle className="top-[15%] right-[25%]" delay="1.8s" />
      <Sparkle className="bottom-[10%] left-[50%]" delay="2.4s" />

      {/* Flip Card Container */}
      <div className="w-full max-w-4xl perspective">
        <motion.div
          className="relative w-full h-[500px] transition-transform duration-700 transform-style-preserve-3d"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Front Side */}
          <div
            className="absolute  mx-3 inset-0 backface-hidden bg-cover bg-center rounded-xl shadow-lg p-10 flex flex-col items-center justify-center text-center"
            style={{ backgroundImage: `url(${frontBgImage})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-30 rounded-xl z-0" />
            <div className="relative z-10 flex items-center justify-center flex-col">
              <p className="text-sm w-[300px] text-white font-extrabold bg-opacity-50 px-2 py-1 rounded">
                SAVINGS APP
              </p>
              <h1 className="text-4xl font-bold mt-4 text-white drop-shadow-md">
                Welcome to <span className="text-pink-300">Offersholic</span><br/><p className='text-2xl'> Your Savings Companion</p>
              </h1>
               
              <p className="text-white text-center mt-6 max-w-xl bg-black bg-opacity-40 px-4 py-2 rounded">
                Explore unbeatable real-time offers, exclusive discounts, and personalized savings tailored just for you throughout the city. Discover, save, and enjoy.
              </p>
            </div>
          </div>

          {/* Back Side */}
          <div
            className="absolute mx-3 inset-0 backface-hidden bg-cover bg-center rounded-xl shadow-lg p-10 flex flex-col items-center justify-center text-center transform rotate-y-180"
            style={{ backgroundImage: `url(${backBgImage})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-30 rounded-xl z-0" />
            <div className="relative z-10">
              <h1 className="md:text-4xl text-lg font-bold text-white drop-shadow-md">
                Unlock <span className="underline decoration-white">Sales Growth</span> with Us
              </h1>
              <p className="text-white mt-10 max-w-xl bg-black bg-opacity-40 md:px-4 md:py-2 py-1  rounded">
                Join Offersholic and tap into a vast user base eager for the latest deals. Our app connects merchants with customers, driving increased sales and brand visibility.
              </p>
            </div>
          </div>
        </motion.div>

        {/* App Store Buttons */}
        <div className="flex justify-center gap-4 mt-8 z-10 relative">
          <a
            href="https://apps.apple.com/in/app/offersholic/id6736408497"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-white hover:text-black border transition"
          >
            <FaApple className="text-2xl" />
            <span className="text-sm font-semibold">App Store</span>
          </a>

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
        .perspective {
          perspective: 1500px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
};

export default HeaderSection;
