import React from "react";
import { motion } from "framer-motion";

const icons = ["💰", "📈", "📣", "🐷", "🎯", "👥", "⚡", "📢", "📊"];

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

const extraFeatures = [
  {
    title: "Engage More Customers",
    description:
      "Our 15-day promotional plan helps merchants attract a larger audience, increasing foot traffic and sales.",
    image:
      "https://zephyrapps.in/offersholic/wp-content/uploads/2025/02/IMG-20250224-WA0008.jpg",
    color: "bg-orange-500",
  },
  {
    title: "Easy Offer Listing",
    description:
      "Merchants can effortlessly list their offers on Offersholic, reaching a wider audience with just a few clicks.",
    image:
      "https://zephyrapps.in/offersholic/wp-content/uploads/2025/02/IMG-20250224-WA0006.jpg",
    color: "bg-pink-600",
  },
  {
    title: "Reach a Wider Audience",
    description:
      "Offersholic connects merchants with a diverse customer base, enhancing visibility and potential sales.",
    image:
      "https://zephyrapps.in/offersholic/wp-content/uploads/2025/02/IMG-20250224-WA0002.jpg",
    color: "bg-violet-500",
  },
  {
    title: "Data-Driven Insights",
    description:
      "Gain valuable insights into customer behavior and preferences, helping to tailor offers and maximize impact.",
    image:
      "https://zephyrapps.in/offersholic/wp-content/uploads/2025/02/IMG-20250224-WA0001.jpg",
    color: "bg-blue-600",
  },
];

const painPoints = [
  "Missed Deals, Lost Opportunities",
  "Consumers often miss out on real-time deals around them",
  "Businesses struggle to promote time-sensitive offers effectively",
  "Continuous outbound calling to convert potential audiences",
  "Affiliate platforms dilute direct merchant-customer relationships",
  "Real-time, GPS-driven offers",
  "Pan-India reach with a user-first design",
  "End to Endless SMS or WhatsApp Commercials",
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
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

const SectionWrapper = ({ children }) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.1 }}
    variants={containerVariants}
  >
    {children}
  </motion.div>
);

const Merchant = () => {
  return (
    <>
      <section id="merchant" className="w-full py-20 bg-white px-6 md:px-16">
        <SectionWrapper>
          <motion.div className="text-center mb-10">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
              variants={cardVariants}
            >
              Merchant Opportunities
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              variants={cardVariants}
            >
              Explore more ways Offersholic helps you grow your business
            </motion.p>
          </motion.div>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {extraFeatures.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`text-white p-6 rounded-xl flex flex-col justify-center items-center ${item.color}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[200px] h-[100px] object-contain mb-4"
                />
                <h4 className="text-lg font-bold mb-2 text-center">
                  {item.title}
                </h4>
                <p className="text-sm leading-snug text-center">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </SectionWrapper>
      </section>

      <section className="w-full py-20 bg-gradient-to-r from-white to-slate-100 px-6 md:px-16">
        <SectionWrapper>
          <motion.div className="text-center mb-10">
           
            <motion.p
              className="text-2xl text-gray-600 max-w-3xl mx-auto"
              variants={cardVariants}
            >
              Discover the benefits of using Offersholic for your brand
            </motion.p>
          </motion.div>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
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

          <motion.h2
              className="text-2xl text-gray-600 text-center max-w-3xl mx-auto mb-6"
              variants={cardVariants}
            >
              Why Choose Offersholic Over Affiliate Marketing?
            </motion.h2>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
             
            {features.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`text-white p-6 rounded-xl flex flex-col justify-center items-center ${item.color}`}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-lg font-bold mb-2 text-center">
                  {item.title}
                </h4>
                <p className="text-sm leading-snug text-center">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </SectionWrapper>
      </section>
    </>
  );
};

export default Merchant;
