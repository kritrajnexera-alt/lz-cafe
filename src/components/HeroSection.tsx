"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function HeroSection() {
  const reduced = useReducedMotion();
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-near-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-burgundy/20 via-near-black to-near-black" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #C9A84C 1px, transparent 1px), radial-gradient(circle at 75% 75%, #C9A84C 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 40 }}
          animate={reduced ? {} : { opacity: 1, y: 0 }}
          transition={reduced ? { duration: 0 } : { duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            className="inline-block text-gold text-sm lg:text-base tracking-[0.3em] uppercase mb-6 font-medium"
            initial={reduced ? {} : { opacity: 0, y: 20 }}
            animate={reduced ? {} : { opacity: 1, y: 0 }}
            transition={reduced ? { duration: 0 } : { duration: 0.6, delay: 0.2 }}
          >
            100% Pure Vegetarian · Ankleshwar
          </motion.span>

          <motion.h1
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-text-light leading-tight mb-6"
            initial={reduced ? {} : { opacity: 0, y: 30 }}
            animate={reduced ? {} : { opacity: 1, y: 0 }}
            transition={reduced ? { duration: 0 } : { duration: 0.8, delay: 0.3 }}
          >
            Make Your Occasion
            <br />
            <span className="text-gold">An Event to Remember</span>
          </motion.h1>

          <motion.p
            className="text-text-ivory/60 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={reduced ? {} : { opacity: 0, y: 20 }}
            animate={reduced ? {} : { opacity: 1, y: 0 }}
            transition={reduced ? { duration: 0 } : { duration: 0.6, delay: 0.5 }}
          >
            Experience Ankleshwar&apos;s finest pure vegetarian dining and
            celebrate your special moments in our elegant banquet hall.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={reduced ? {} : { opacity: 0, y: 20 }}
            animate={reduced ? {} : { opacity: 1, y: 0 }}
            transition={reduced ? { duration: 0 } : { duration: 0.6, delay: 0.7 }}
          >
            <Link
              href="/menu"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-gold text-near-black font-semibold text-sm uppercase tracking-widest rounded-sm hover:bg-gold-light transition-all duration-300 min-w-[200px]"
            >
              View Menu
            </Link>
            <Link
              href="/banquet"
              className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-gold text-gold font-semibold text-sm uppercase tracking-widest rounded-sm hover:bg-gold/10 transition-all duration-300 min-w-[200px]"
            >
              Book Banquet
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {!reduced && (
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#C9A84C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.div>
      </motion.div>
      )}
    </section>
  );
}
