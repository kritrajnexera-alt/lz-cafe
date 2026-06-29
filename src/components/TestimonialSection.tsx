"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function TestimonialSection() {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  return (
    <section className="py-20 lg:py-28 bg-near-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-burgundy/10 to-transparent" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, #C9A84C 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          {...(reduced ? {} : {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.8 },
          })}
        >
          <svg
            className="w-10 h-10 mx-auto mb-6 text-gold/30"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>

          <blockquote className="font-heading text-xl sm:text-2xl lg:text-3xl font-medium text-text-ivory leading-relaxed mb-8">
            &ldquo;The ambience is incredibly cozy and the food is absolutely
            delicious. Every dish tastes fresh and full of flavor. Perfect place
            for family dinners and celebrations.&rdquo;
          </blockquote>

          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-heading font-bold text-lg">
              P
            </div>
            <div className="text-left">
              <p className="text-text-ivory font-medium text-sm">Priya S.</p>
              <p className="text-text-ivory/40 text-xs">Regular Guest</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-1 mt-6">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 text-gold"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
