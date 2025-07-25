import React, { useState } from 'react';
import { motion } from 'framer-motion';

const faqData = [
  {
    question: 'What is Offersholic?',
    answer: 'You can view offers by allowing location access, or by entering your location manually in the app.',
  },
  {
    question: 'How do I find offers near me?',
    answer: 'You can view offers by allowing location access, or by entering your location manually in the app.',
  },
  {
    question: 'How do I register my business on OffersHolic ?',
    answer: "Go to the 'Create Business Profile' section, fill out the required details, and start posting offers and ads for your business.",
  },
  {
    question: 'Is there a fee to register my business ?',
    answer: 'Basic registration is free, but we offer premium plans for advanced advertising features.',
  },
  {
    question: 'How do I contact customer support?',
    answer: "You can reach our support team through the 'Help & Support' section in the app or by emailing support@offersholic.com.",
  },
  {
    question: 'What Makes OffersHolic Unique?',
    answer: `1. Real-Time Offers & Discounts Never miss out on a great deal again! OffersHolic aggregates real-time offers, promotions, and discounts from merchants and brands across the city. From restaurants and retail stores to entertainment and services, we’ve got you covered.
2. GPS Navigation Found an amazing deal? Use our built-in GPS navigation to easily locate the store or restaurant offering the discount. No more wasting time searching for addresses – we’ll guide you there seamlessly.
3. Like, Share, and Save Love a deal? Like it to save it for later or share it with friends and family via social media, messaging apps, or email. Spread the word and help others save too!
4. Personalized Recommendations Get tailored recommendations based on your preferences and location. Whether you’re looking for food, fashion, or fun, OffersHolic ensures you find exactly what you’re looking for.`,
  },
  {
    question: 'How OffersHolic Benefits End Users/Customers?',
    answer: `1. Save Money With real-time access to the best deals and discounts, you’ll never have to pay full price again.
2. Save Time No more scouring multiple websites or social media pages for deals.
3. Discover New Places Explore new restaurants, stores, and experiences in your city.
4. Share and Connect Share your favorite deals with friends and family.`,
  },
  {
    question: 'How OffersHolic Helps Merchants and Brands?',
    answer: `1. Pure Branding Platform OffersHolic is designed exclusively to help merchants and brands enhance their visibility and reach.
2. Cost-Effective Promotion Traditional advertising can be expensive.
3. Increased Foot Traffic and Sales Drive more customers to your store.
4. Enhanced Customer Engagement Shareable deals spread organically.
5. Data-Driven Insights Learn customer behavior and optimize offers.
6. Build Brand Loyalty Stay top of mind with consistent deals.`,
  },
  {
    question: 'Can I customize the notifications I receive?',
    answer: 'Yes, you can customize your notification preferences in the settings menu, including offer categories and specific businesses.',
  },
  {
    question: 'Are the offers shown in real-time?',
    answer: 'Yes, OffersHolic provides real-time updates on new offers and discounts from nearby businesses.',
  },
  {
    question: 'Can I share offers with friends?',
    answer: 'Yes, you can share offers via social media or messaging apps directly from the app.',
  },
  {
    question: 'What if I encounter an issue with an offer?',
    answer: "If you face any issues, you can report the offer through the 'Report Issue' button on the offer details page.",
  },
  {
    question: 'How OffersHolic Helps Merchants and Brands?',
    answer: `1. Cost-Effective Promotion Reach targeted users at low cost.
2. Increased Foot Traffic Use GPS and offers to bring more visitors.
3. Enhanced Customer Engagement Get likes and shares organically.
4. Data-Driven Insights Adjust offers using analytics.`,
  },
  {
    question: 'Join the OffersHolic Community Today?',
    answer: `Whether you’re a merchant or a customer, OffersHolic is your go-to app for local savings.
For Merchants: Partner with us to grow visibility.
For Customers: Save money and explore deals near you.`,
  },
  {
    question: 'Why Choose OffersHolic Over Affiliate Marketing?',
    answer: `Unlike affiliate platforms that charge commissions, OffersHolic is free of hidden fees.
We’re a brand promotion platform, not a sales cut model.`,
  },
];

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const middleIndex = Math.ceil(faqData.length / 2);
  const leftFaqs = faqData.slice(0, middleIndex);
  const rightFaqs = faqData.slice(middleIndex);

  const renderAnswer = (answer) => {
    const parts = answer.split(/\d+\.\s/).filter(Boolean);
    const isNumberedList = parts.length > 1;

    return isNumberedList ? (
      <ol className="list-decimal pl-5 space-y-2">
        {parts.map((point, idx) => (
          <li key={idx}>{point.trim()}</li>
        ))}
      </ol>
    ) : (
      <p>{answer}</p>
    );
  };

  return (
    <section id="faq" className="bg-gradient-to-r from-slate-300 via-pink-100 to-slate-100 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h2 className="text-5xl font-semibold text-pink-800  mb-4 leading-tight text-3d">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            
We've been working really hard to improve the OffersHolic with this amazing new features that you aked for! Check out the OffersHolic's new amazing features.
          </p>
        
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6 mt-10">
          {[leftFaqs, rightFaqs].map((column, colIndex) => (
            <div key={colIndex} className="w-full md:w-1/2 space-y-4">
              {column.map((item, index) => {
                const globalIndex = colIndex === 0 ? index : index + middleIndex;
                const isActive = activeIndex === globalIndex;

                return (
                  <div
                    key={globalIndex}
                    className={`border rounded-xl shadow-sm transition duration-300 ${
                      isActive ? 'bg-indigo-100 border-indigo-300' : 'border-gray-300'
                    }`}
                  >
                    <button
                      onClick={() => toggleFAQ(globalIndex)}
                      className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-800"
                    >
                      {item.question}
                      <span
                        className={`transition-transform duration-300 ${
                          isActive ? 'rotate-180' : ''
                        }`}
                      >
                        ▼
                      </span>
                    </button>
                    {isActive && (
                      <div className="px-6 py-4 text-gray-700 bg-white border-t border-gray-200">
                        {renderAnswer(item.answer)}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Anchor Link at the Bottom */}
        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-block text-black hover:text-indigo-800 text-lg font-medium transition duration-300"
          >
            Have more questions? Contact us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
