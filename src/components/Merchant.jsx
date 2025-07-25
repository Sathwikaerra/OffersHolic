import React from 'react';
import { motion } from 'framer-motion';

const DualFeatureSectionTwo = () => {
  return (
    <section id='merchant' className="relative w-full overflow-hidden min-h-[100vh] bg-gradient-to-r from-slate-300 via-pink-100 to-slate-100 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Top Heading */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h2 className="text-5xl font-semibold text-pink-800  mb-4 leading-tight text-3d">
            Merchant Opportunities
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join Offersholic and tap into a vast user base eager for the latest deals. Our app connects merchants with customers, driving increased sales and brand visibility.
          </p>
        </motion.div>

        {/* First Row of Cards */}
        <div className="flex flex-col md:flex-row gap-10 items-stretch">
          {/* Left Card */}
          <motion.div
            className="md:w-1/2 bg-gradient-to-r from-orange-100 via-white to-red-200 rounded-2xl p-6 shadow-lg flex flex-col md:flex-row gap-6 items-center"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.4 }}
          >
            <img
              src="https://zephyrapps.in/offersholic/wp-content/uploads/2025/02/IMG-20250224-WA0008.jpg"
              alt="Real-time Updates"
              className="w-full md:w-1/2 rounded-xl object-cover"
              loading="lazy"
            />
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-pink-800  mb-2 ">
                Engage more customers
              </h3>
              <p className="text-gray-700 text-lg">
                Our 15-day promotional plan helps merchants attract a larger audience, increasing foot traffic and sales.
              </p>
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            className="md:w-1/2 bg-gradient-to-r from-red-100 via-amber-100 to-pink-200 rounded-2xl p-6 shadow-lg flex flex-col md:flex-row gap-6 items-center"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.4 }}
          >
            <img
              src="https://zephyrapps.in/offersholic/wp-content/uploads/2025/02/IMG-20250224-WA0006.jpg"
              alt="Offer Sharing"
              className="w-full md:w-1/2 rounded-xl object-cover"
              loading="lazy"
            />
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-pink-800  mb-2">
                Easy Offer Listing
              </h3>
              <p className="text-gray-700 text-lg">
                Merchants can effortlessly list their offers on Offersholic, reaching a wider audience with just a few clicks.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Second Row of Cards */}
        <div className="flex flex-col md:flex-row gap-10 items-stretch">
          {/* Left Card */}
          <motion.div
            className="md:w-1/2 bg-gradient-to-r from-orange-100 via-white to-red-200 rounded-2xl p-6 shadow-lg flex flex-col md:flex-row gap-6 items-center"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.4 }}
          >
            <img
              src="https://zephyrapps.in/offersholic/wp-content/uploads/2025/02/IMG-20250224-WA0002.jpg"
              alt="Wider Audience"
              className="w-full md:w-1/2 rounded-xl object-cover"
              loading="lazy"
            />
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-pink-800  mb-2 ">
                Reach a Wider Audience
              </h3>
              <p className="text-gray-700 text-lg">
                Offersholic connects merchants with a diverse customer base, enhancing visibility and potential sales.
              </p>
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            className="md:w-1/2 bg-gradient-to-r from-red-100 via-amber-100 to-pink-200 rounded-2xl p-6 shadow-lg flex flex-col md:flex-row gap-6 items-center"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.4 }}
          >
            <img
              src="https://zephyrapps.in/offersholic/wp-content/uploads/2025/02/IMG-20250224-WA0001.jpg"
              alt="Data Insights"
              className="w-full md:w-1/2 rounded-xl object-cover"
              loading="lazy"
            />
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-pink-800 mb-2 ">
                Data-Driven Insights
              </h3>
              <p className="text-gray-700 text-lg">
                Gain valuable insights into customer behavior and preferences, helping to tailor offers and maximize impact.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Custom CSS for font effects */}
     
    </section>
  );
};

export default DualFeatureSectionTwo;
