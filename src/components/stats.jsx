import React from "react";
import { motion } from "framer-motion";

const icons = ["💰", "📈", "📣", "🐷", "🎯"];

const features = [
  {
    title: "No Hidden Fees or Commissions",
    description:
      "Unlike affiliate marketing, Offersholic ensures no deductions from your sales, maximizing your profits.",
    color: "bg-red-600",
    icon: icons[0],
  },
  {
    title: "Focus on Brand Growth",
    description:
      "Offersholic is dedicated to helping you enhance your brand presence without financial barriers.",
    color: "bg-red-500",
    icon: icons[1],
  },
  {
    title: "Win-Win Situation",
    description:
      "Our platform fosters a beneficial environment for both merchants and customers, promoting shared success.",
    color: "bg-yellow-400",
    icon: icons[2],
  },
  {
    title: "Genuine Savings for Customers",
    description:
      "Customers can enjoy real savings without the influence of affiliate commissions, enhancing their shopping experience.",
    color: "bg-cyan-700",
    icon: icons[3],
  },
  {
    title: "Connect with the Right Audience",
    description:
      "We facilitate meaningful connections between your brand and your target audience, driving engagement and loyalty.",
    color: "bg-red-600",
    icon: icons[4],
  },
];

const painPoints = [
  "Missed Deals, Lost Opportunities",
  "Consumers often miss out on real-time deals around them",
  "Businesses struggle to promote time-sensitive offers effectively",
  "Continuous outbound calling to convert potential audiences",
  "Affiliate platforms dilute direct merchant-customer relationships",
 " Real-time, GPS-driven offers",
 "Pan-India reach with a user-first design",
 "End to Endless SMS or WhatsApp Commercials"

];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const WhyChooseOffersholic = () => {
  return (
    <section
      id="why"
      className="w-full py-20 bg-gradient-to-r from-white to-slate-100 px-6 md:px-16"
    >
      {/* Animated Heading */}
      <motion.div
        className="text-center mb-10"
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
        viewport={{ once: false, amount: 0.5 }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          variants={cardVariants}
        >
          Why Choose Offersholic Over Affiliate Marketing?
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 max-w-3xl mx-auto"
          variants={cardVariants}
        >
          Discover the benefits of using Offersholic for your brand
        </motion.p>
          <motion.p
          className="text-lg text-gray-600 max-w-3xl mx-auto"
          variants={cardVariants}
        >
          

        </motion.p>
      </motion.div>

      {/* Pain Points */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
      >
        {painPoints.map((point, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="bg-blue-400 text-black px-5 py-4 text-center font-bold rounded-xl shadow-sm text-sm"
          >
            {point}
          </motion.div>
        ))}
      </motion.div>

      {/* Feature Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.4 }}
      >
        {features.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className={`text-white p-6 rounded-xl  flex flex-col justify-center items-center relative ${item.color}`}
            style={{ willChange: "transform, opacity" }}
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h4 className="text-lg font-bold mb-2">{item.title}</h4>
            <p className="text-sm leading-snug">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhyChooseOffersholic;
