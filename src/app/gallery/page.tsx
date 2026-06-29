"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const categories = ["All", "Food", "Ambience"] as const;
type Category = (typeof categories)[number];

const galleryItems = [
  { src: "/gallery/food-1.jpg", alt: "Paneer Butter Masala", category: "Food" as const },
  { src: "/gallery/food-2.jpg", alt: "Veg Biryani", category: "Food" as const },
  { src: "/gallery/food-3.jpg", alt: "Dessert Platter", category: "Food" as const },
  { src: "/gallery/food-4.jpg", alt: "Tandoori Selection", category: "Food" as const },
  { src: "/gallery/interior-1.jpg", alt: "Main Dining Hall", category: "Ambience" as const },
  { src: "/gallery/interior-2.jpg", alt: "Banquet Hall Setup", category: "Ambience" as const },
  { src: "/gallery/interior-3.jpg", alt: "Private Seating Area", category: "Ambience" as const },
  { src: "/gallery/interior-4.jpg", alt: "Restaurant Entrance", category: "Ambience" as const },
  { src: "/gallery/food-5.jpg", alt: "Gulab Jamun", category: "Food" as const },
  { src: "/gallery/interior-5.jpg", alt: "Event Decoration", category: "Ambience" as const },
  { src: "/gallery/food-6.jpg", alt: "Fresh Beverages", category: "Food" as const },
  { src: "/gallery/interior-6.jpg", alt: "Bar Setup", category: "Ambience" as const },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const reduced = useReducedMotion();

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

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
            Our Space
          </motion.span>
          <motion.h1
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-text-light mt-3"
            {...(reduced ? {} : {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: 0.1 },
            })}
          >
            Gallery
          </motion.h1>
          <motion.p
            className="text-text-ivory/50 mt-4 max-w-xl mx-auto text-sm"
            {...(reduced ? {} : {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: 0.2 },
            })}
          >
            A glimpse into our restaurant and banquet hall.
          </motion.p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-near-black min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-6 py-2 text-sm font-medium uppercase tracking-widest transition-colors ${
                  activeCategory === category
                    ? "text-gold"
                    : "text-text-ivory/40 hover:text-text-ivory/70"
                }`}
              >
                {category}
                {activeCategory === category && (
                  <motion.span
                    layoutId="gallery-filter"
                    className="absolute bottom-0 left-6 right-6 h-0.5 bg-gold"
                    transition={reduced ? { duration: 0 } : undefined}
                  />
                )}
              </button>
            ))}
          </div>

          <motion.div layout={reduced ? false : true} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {filtered.map((item, index) => (
              <motion.div
                key={item.alt}
                layout={reduced ? false : true}
                {...(reduced ? {} : {
                  initial: { opacity: 0, scale: 0.95 },
                  animate: { opacity: 1, scale: 1 },
                  exit: { opacity: 0, scale: 0.95 },
                  transition: { duration: 0.4, delay: index * 0.05 },
                })}
                className="group relative aspect-[4/3] bg-dark-card rounded-sm overflow-hidden border border-gold/5"
              >
                <div className="absolute inset-0 flex items-center justify-center bg-dark-surface">
                  <div className="text-center p-6">
                    <svg className="w-10 h-10 mx-auto mb-3 text-gold/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                    <p className="text-text-ivory/30 text-xs font-medium uppercase tracking-wider">
                      {item.alt}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-near-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-text-ivory text-sm font-medium">
                    {item.alt}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-text-ivory/30 text-sm">
                No images found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
