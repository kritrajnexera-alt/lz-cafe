"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const restaurantCategories = [
  {
    name: "Starters",
    items: [
      { name: "Paneer Tikka", description: "Cottage cheese marinated in spices, grilled in clay oven" },
      { name: "Veg Seekh Kebab", description: "Minced vegetable patties with aromatic herbs" },
      { name: "Hara Bhara Kebab", description: "Spinach and potato patties with a hint of mint" },
      { name: "Crispy Corn", description: "Golden fried corn tossed with chaat masala" },
      { name: "Spring Rolls", description: "Crispy rolls stuffed with seasoned vegetables" },
      { name: "Mushroom Galouti", description: "Spiced minced mushroom patties, melt-in-mouth" },
    ],
  },
  {
    name: "Main Course",
    items: [
      { name: "Paneer Butter Masala", description: "Rich creamy tomato gravy with cottage cheese" },
      { name: "Dal Makhani", description: "Slow cooked black lentils in creamy gravy" },
      { name: "Kadai Vegetable", description: "Mixed vegetables in peppery kadai gravy" },
      { name: "Malai Kofta", description: "Fried potato-paneer dumplings in rich gravy" },
      { name: "Mushroom Matar", description: "Green peas and mushrooms in onion-tomato gravy" },
      { name: "Bhindi Do Pyaza", description: "Okra sautéed with double the onions" },
      { name: "Shahi Paneer", description: "Royal cottage cheese in nutty cream gravy" },
      { name: "Veg Jalfrezi", description: "Stir-fried vegetables in soy-ginger sauce" },
    ],
  },
  {
    name: "Breads",
    items: [
      { name: "Tandoori Roti", description: "Whole wheat bread baked in clay oven" },
      { name: "Butter Naan", description: "Fluffy leavened bread brushed with butter" },
      { name: "Garlic Naan", description: "Naan topped with garlic and herbs" },
      { name: "Laccha Paratha", description: "Layered whole wheat flaky bread" },
      { name: "Cheese Naan", description: "Naan stuffed with melted cheese" },
      { name: "Pudina Paratha", description: "Mint flavored stuffed paratha" },
    ],
  },
  {
    name: "Rice & Biryani",
    items: [
      { name: "Veg Biryani", description: "Fragrant basmati layered with spiced vegetables" },
      { name: "Paneer Biryani", description: "Biryani with marinated cottage cheese" },
      { name: "Jeera Rice", description: "Steamed basmati tempered with cumin" },
      { name: "Veg Pulao", description: "Rice with mixed vegetables and whole spices" },
      { name: "Dal Khichdi", description: "Comforting rice and lentil porridge" },
    ],
  },
  {
    name: "Desserts",
    items: [
      { name: "Gulab Jamun", description: "Deep fried milk dumplings in rose syrup" },
      { name: "Rasmalai", description: "Soft paneer discs in sweetened milk" },
      { name: "Gajar Halwa", description: "Classic carrot pudding with nuts" },
      { name: "Kheer", description: "Creamy rice pudding with cardamom" },
      { name: "Ice Cream", description: "Assorted flavors available" },
    ],
  },
  {
    name: "Beverages",
    items: [
      { name: "Mango Lassi", description: "Creamy yogurt drink with mango pulp" },
      { name: "Sweet Lassi", description: "Traditional sweet yogurt drink" },
      { name: "Masala Chai", description: "Spiced Indian tea" },
      { name: "Fresh Lime Soda", description: "Sweet or salted lime soda" },
      { name: "Buttermilk", description: "Spiced refreshing buttermilk" },
    ],
  },
];

const banquetPackages = [
  {
    title: "Package Menu",
    description: "Pre-set curated menus for your event. Choose from our selection of complete meal packages designed for groups.",
    features: [
      "Multiple vegetarian menu options",
      "Customizable course selection",
      "Starter, main course, dessert included",
      "Complimentary welcome drink",
      "Dedicated serving staff",
    ],
  },
  {
    title: "Choice Menu",
    description: "Build your own menu from our à la carte selection. Perfect for events where you want full control over every dish.",
    features: [
      "Pick any items from our restaurant menu",
      "Mix and match cuisines",
      "Flexible per-plate pricing",
      "Custom dietary preferences accommodated",
      "Chef consultation included",
    ],
  },
];

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState<"restaurant" | "banquet">("restaurant");
  const reduced = useReducedMotion();

  return (
    <>
      <section className="pt-28 pb-12 bg-near-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            className="text-gold text-sm tracking-[0.2em] uppercase font-medium"
            {...(reduced ? {} : {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5 },
            })}
          >
            Our Offerings
          </motion.span>
          <motion.h1
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-text-light mt-3"
            {...(reduced ? {} : {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: 0.1 },
            })}
          >
            Explore Our Menu
          </motion.h1>
          <motion.p
            className="text-text-ivory/50 mt-4 max-w-xl mx-auto text-sm"
            {...(reduced ? {} : {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: 0.2 },
            })}
          >
            From everyday dining to grand celebrations, discover flavors crafted with care.
          </motion.p>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-8 border-b border-ivory-dark">
            {[
              { key: "restaurant" as const, label: "Restaurant Menu" },
              { key: "banquet" as const, label: "Banquet Menu" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative pb-4 pt-6 text-sm font-medium uppercase tracking-widest transition-colors ${
                  activeTab === tab.key ? "text-burgundy" : "text-text-dark/40 hover:text-burgundy/60"
                }`}
              >
                {tab.label}
                {activeTab === tab.key && (
                  <motion.span
                    layoutId="menu-tab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                    transition={reduced ? { duration: 0 } : undefined}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence mode="wait">
        {activeTab === "restaurant" ? (
          <motion.section
            key="restaurant"
            {...(reduced ? {} : {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -10 },
              transition: { duration: 0.3 },
            })}
            className="py-16 lg:py-20 bg-ivory"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                {restaurantCategories.map((category) => (
                  <motion.div
                    key={category.name}
                    {...(reduced ? {} : {
                      initial: { opacity: 0, y: 20 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true },
                      transition: { duration: 0.5 },
                    })}
                  >
                    <h3 className="font-heading text-xl font-bold text-burgundy mb-6 pb-3 border-b border-gold/30 uppercase tracking-wide">
                      {category.name}
                    </h3>
                    <ul className="space-y-5">
                      {category.items.map((item) => (
                        <li key={item.name}>
                          <span className="block text-text-dark font-medium text-sm">
                            {item.name}
                          </span>
                          <span className="block text-text-dark/40 text-xs mt-0.5 leading-relaxed">
                            {item.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        ) : (
          <motion.section
            key="banquet"
            {...(reduced ? {} : {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -10 },
              transition: { duration: 0.3 },
            })}
            className="py-16 lg:py-20 bg-ivory"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <p className="text-text-dark/50 text-sm leading-relaxed">
                  Choose from our curated banquet packages or customize your own menu.
                  Every event is unique, and we tailor every detail to your taste.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {banquetPackages.map((pkg, index) => (
                  <motion.div
                    key={pkg.title}
                    {...(reduced ? {} : {
                      initial: { opacity: 0, y: 30 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true },
                      transition: { duration: 0.5, delay: index * 0.1 },
                    })}
                    className="bg-white border border-ivory-dark rounded-sm p-8 hover:border-gold/20 hover:shadow-xl transition-all duration-500"
                  >
                    <h3 className="font-heading text-2xl font-bold text-burgundy mb-3">
                      {pkg.title}
                    </h3>
                    <p className="text-text-dark/50 text-sm leading-relaxed mb-6">
                      {pkg.description}
                    </p>
                    <ul className="space-y-3">
                      {pkg.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm text-text-dark/70"
                        >
                          <svg
                            className="w-4 h-4 text-gold mt-0.5 shrink-0"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="text-center mt-12"
                {...(reduced ? {} : {
                  initial: { opacity: 0 },
                  whileInView: { opacity: 1 },
                  viewport: { once: true },
                  transition: { duration: 0.5, delay: 0.3 },
                })}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-burgundy text-ivory text-sm font-medium uppercase tracking-widest rounded-sm hover:bg-burgundy-light transition-colors"
                >
                  Inquire About Banquet
                </Link>
              </motion.div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <section className="py-12 bg-near-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-text-ivory/50 text-sm mb-4">
            Want the complete menu on the go?
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gold text-gold text-sm font-medium uppercase tracking-widest rounded-sm hover:bg-gold/10 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Full Menu PDF
          </a>
        </div>
      </section>
    </>
  );
}
