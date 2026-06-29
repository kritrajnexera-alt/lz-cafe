"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const features = [
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Family Dining",
    description:
      "Warm, elegant ambiance with private seating. Enjoy handcrafted vegetarian cuisine in a space designed for memorable family gatherings.",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M12 3V1" />
      </svg>
    ),
    title: "Banquet Hall",
    description:
      "A grand space for weddings, receptions, and corporate events. Fully customizable packages with pure vegetarian catering.",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
      </svg>
    ),
    title: "100% Pure Vegetarian",
    description:
      "We take pride in serving only pure vegetarian cuisine. Every dish is crafted with fresh ingredients and traditional recipes.",
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      {...(reduced ? {
        initial: { opacity: 1, y: 0 },
        animate: { opacity: 1, y: 0 },
      } : {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" as const },
        transition: { duration: 0.6, delay: index * 0.15, ease: "easeOut" as const },
      })}
      className="group bg-white border border-ivory-dark rounded-sm p-8 lg:p-10 hover:shadow-xl hover:border-gold/20 transition-all duration-500"
    >
      <div className="text-burgundy mb-6 group-hover:text-gold transition-colors duration-500">
        {feature.icon}
      </div>
      <h3 className="font-heading text-2xl font-semibold text-burgundy mb-3">
        {feature.title}
      </h3>
      <p className="text-text-dark/60 leading-relaxed text-sm">
        {feature.description}
      </p>
    </motion.div>
  );
}

export default function FeaturesSection() {
  const reduced = useReducedMotion();
  return (
    <section className="py-20 lg:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          {...(reduced ? {} : {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6 },
          })}
        >
          <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-burgundy mt-3">
            The Finest Dining Experience
          </h2>
          <p className="text-text-dark/50 max-w-2xl mx-auto mt-4 text-sm leading-relaxed">
            From intimate family dinners to grand celebrations, we bring
            elegance and flavor to every occasion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
