"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const values = [
  {
    title: "Pure Vegetarian",
    description:
      "We are 100% pure vegetarian. Every dish reflects our commitment to quality ingredients and traditional recipes passed down through generations.",
  },
  {
    title: "Family First",
    description:
      "La Festiva is built around the idea of family. Our warm ambience and private seating ensure every visit feels like a gathering at home.",
  },
  {
    title: "Memorable Occasions",
    description:
      "From casual dinners to grand celebrations, we believe every meal should be an occasion worth remembering.",
  },
  {
    title: "Community Rooted",
    description:
      "Proudly serving Ankleshwar since our founding, we are deeply connected to our community and committed to the highest standards of hospitality.",
  },
];

export default function AboutPage() {
  const reduced = useReducedMotion();
  return (
    <>
      <section className="pt-28 pb-20 lg:pb-28 bg-near-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy/10 via-near-black to-near-black" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            {...(reduced ? {} : {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
            })}
          >
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
              Our Story
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-text-light mt-4 mb-6">
              About La Festiva
            </h1>
            <div className="max-w-3xl mx-auto space-y-4 text-text-ivory/60 text-sm leading-relaxed">
              <p>
                La Festiva Restaurant & Banquet was born from a simple vision — to
                create a space where families and friends could come together over
                exceptional vegetarian food in an atmosphere of warmth and elegance.
              </p>
              <p>
                Located in the heart of Ankleshwar, we have become a beloved
                destination for those who appreciate fine dining in a setting that
                feels both refined and welcoming. Our restaurant offers cozy family
                dining with private seating, while our banquet hall hosts
                celebrations of all kinds.
              </p>
              <p>
                Ranked #15 of 569 restaurants in Ankleshwar with a 4.7/5 rating,
                we take pride in every dish we serve and every event we host.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            {...(reduced ? {} : {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
            })}
          >
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
              What We Stand For
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-burgundy mt-3">
              Our Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                {...(reduced ? {} : {
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.5, delay: index * 0.1 },
                })}
                className="bg-white border border-ivory-dark rounded-sm p-8 hover:border-gold/20 hover:shadow-lg transition-all duration-500"
              >
                <h3 className="font-heading text-xl font-bold text-burgundy mb-3">
                  {value.title}
                </h3>
                <p className="text-text-dark/50 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-near-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            {...(reduced ? {} : {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
            })}
          >
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
            Visit Us
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light mt-3">
              Our Location
            </h2>
          </motion.div>

          <motion.div
            {...(reduced ? {} : {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
            })}
            className="max-w-3xl mx-auto bg-dark-card border border-gold/10 rounded-sm p-8 lg:p-10"
          >
            <div className="flex items-start gap-4 mb-6">
              <svg className="w-5 h-5 text-gold mt-1 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <h3 className="font-heading text-lg font-semibold text-gold mb-1">
                  Address
                </h3>
                <p className="text-text-ivory/60 text-sm leading-relaxed">
                  2nd Floor, Ganesh Plaza,
                  <br />
                  Above Reliance Trends, Timber Market,
                  <br />
                  GIDC, Ankleshwar - 393002
                </p>
              </div>
            </div>
            <div className="w-full h-48 bg-dark-surface rounded-sm flex items-center justify-center border border-gold/5">
              <div className="text-center">
                <svg className="w-8 h-8 mx-auto mb-2 text-gold/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <p className="text-text-ivory/20 text-xs">Map placeholder</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
