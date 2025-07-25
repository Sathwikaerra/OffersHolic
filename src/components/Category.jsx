import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Dining & Restaurants',
    desc: 'Special deals at cafes, restaurants, and fast-food chains.',

    img: 'https://zephyrapps.in/offersholic/wp-content/uploads/2025/02/5offers.jpg',
  },
  {
    title: 'Fashion & Clothing',
    desc: 'Discounts at clothing stores.',
    img: '/clothing.jpeg',
  },
  {
    title: 'Jewellery',
    desc: 'Offers on gold or fancy ornament jewellery.',
    img: 'https://zephyrapps.in/offersholic/wp-content/uploads/2025/02/IMG-20250221-WA0040-e1740227658805.jpg',
  },
  {
    title: 'Electronics',
    desc: 'Offers on electronics like TV, fridge washing machine and appliances.',
    img: 'https://img.freepik.com/premium-photo/home-appliances-gas-cooker-tv-cinema-refrigerator-air-conditioner-microwave-laptop-washing-machine_252025-693.jpg',
  },
  {
    title: 'Health & Fitness',
    desc: 'Discounts at gyms, spas, and wellness centers.',
    img: '/health.jpeg',
  },
  {
    title: 'Travel & Transportation',
    desc: 'Deals on flights, train tickets, car rentals, and ride-sharing services.',
    img: '/travel.jpeg',
  },
  {
    title: 'Grocery & Essentials',
    desc: 'Offers on groceries, household items, and personal care products.',
    img: 'https://zephyrapps.in/offersholic/wp-content/uploads/2025/02/IMG-20250221-WA0044.jpg',
  },
  {
    title: 'Footwear',
    desc: 'Discounts on footwear shoes and accessories.',
    img: 'https://zephyrapps.in/offersholic/wp-content/uploads/2025/02/IMG-20250221-WA0032.jpg',
  },
  {
    title: 'Beauty & Personal Care',
    desc: 'Offers on beauty salons, skincare products, and cosmetics.',
    img: 'https://zephyrapps.in/offersholic/wp-content/uploads/2025/02/IMG-20250221-WA0031.jpg',
  },
  {
    title: 'Tech & Gadgets',
    desc: 'Discounts on electronics, gadgets, and tech accessories.',
    img: 'https://zephyrapps.in/offersholic/wp-content/uploads/2025/02/IMG-20250221-WA0047.jpg',
  },
  {
    title: 'Home & Living ',
    desc: 'Deals on furniture, home decor.',
    img: 'https://zephyrapps.in/offersholic/wp-content/uploads/2025/02/IMG-20250221-WA0042.jpg',
  },
  {
    title: 'Events & Activities',
    desc: 'Discounts on local events, workshops, and classes.',
    img: 'https://zephyrapps.in/offersholic/wp-content/uploads/2025/02/IMG-20250221-WA0029.jpg',
  },
  {
    title: 'Education & Courses',
    desc: 'Discounts on online courses, workshops, and educational materials.',
    img: 'https://zephyrapps.in/offersholic/wp-content/uploads/2025/02/IMG-20250221-WA0034.jpg',
  },
  {
    title: 'Kids & Toys',
    desc: 'Offers on toys, children\'s clothing, and baby products.',
    img: 'https://zephyrapps.in/offersholic/wp-content/uploads/2025/02/IMG-20250221-WA0035.jpg',
  },
];

const DualFeatureSectionTwo = () => {
  return (
    <section
      id="category"
      className="relative w-full overflow-hidden min-h-[100vh] bg-gradient-to-r from-slate-300 via-pink-100 to-slate-100 py-18 px-6 md:px-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Top Heading */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-playfair drop-shadow-md tracking-tight leading-tight">
            More Than 10+ Business Categories
          </h2>
        </motion.div>

        {/* Cards Grid */}
        {Array.from({ length: 7 }).map((_, rowIndex) => {
          const left = features[rowIndex * 2];
          const right = features[rowIndex * 2 + 1];

          return (
            <div key={rowIndex} className="flex flex-col md:flex-row gap-10 items-stretch">
              {/* Left Card */}
              <motion.div
                className="md:w-1/2 bg-gradient-to-r from-orange-100 via-white to-red-200 rounded-2xl p-6 shadow-lg flex flex-col md:flex-row gap-6 items-center"
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.4 }}
              >
                <img
                  src={left.img}
                  alt={left.title}
                  className="w-full md:w-1/2 rounded-xl object-cover"
                  loading="lazy"
                />
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-semibold text-pink-800 font-playfair mb-1 tracking-tight leading-snug">
                    {left.title}
                  </h3>
                  <p className="text-gray-700 text-md font-poppins">{left.desc}</p>
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
                  src={right.img}
                  alt={right.title}
                  className="w-full md:w-1/2 rounded-xl object-cover"
                  loading="lazy"
                />
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-semibold text-red-800 font-playfair mb-1 tracking-tight leading-snug">
                    {right.title}
                  </h3>
                  <p className="text-gray-700 text-md font-poppins">{right.desc}</p>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DualFeatureSectionTwo;
