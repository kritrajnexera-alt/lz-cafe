"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const stats = [
  { label: "Rating", value: "⭐ 4.7" },
  { label: "Reviews", value: "99+" },
  { label: "Location", value: "Ankleshwar" },
  { label: "Type", value: "Pure Veg" },
  { label: "Hall", value: "Banquet" },
];

export default function StatsBar() {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <section className="bg-burgundy overflow-hidden py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center flex-wrap gap-6 py-1">
            {stats.map((stat) => (
              <span
                key={stat.label}
                className="flex items-center gap-2 text-ivory/90 text-sm font-medium tracking-wide"
              >
                <span className="text-gold font-semibold">{stat.value}</span>
                <span className="text-ivory/50">·</span>
                <span>{stat.label}</span>
              </span>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-burgundy overflow-hidden py-4">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex items-center gap-12 shrink-0"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {[...stats, ...stats, ...stats].map((stat, i) => (
            <span
              key={i}
              className="flex items-center gap-2 text-ivory/90 text-sm font-medium tracking-wide"
            >
              <span className="text-gold font-semibold">{stat.value}</span>
              <span className="text-ivory/50">·</span>
              <span>{stat.label}</span>
            </span>
          ))}
        </motion.div>
        <motion.div
          className="flex items-center gap-12 shrink-0"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {[...stats, ...stats, ...stats].map((stat, i) => (
            <span
              key={`dup-${i}`}
              className="flex items-center gap-2 text-ivory/90 text-sm font-medium tracking-wide"
            >
              <span className="text-gold font-semibold">{stat.value}</span>
              <span className="text-ivory/50">·</span>
              <span>{stat.label}</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
