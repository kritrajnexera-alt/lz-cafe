"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const features = [
  {
    title: "Grand Hall",
    description:
      "Our spacious banquet hall accommodates large gatherings with elegance. Tastefully decorated with modern lighting and acoustics.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    ),
  },
  {
    title: "Group Reservations",
    description:
      "We welcome groups of all sizes. Our team coordinates every detail — from seating arrangements to personalized menus.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: "Custom Packages",
    description:
      "Choose from our curated packages or customize every course. We work with you to create the perfect menu for your occasion.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Pure Veg Catering",
    description:
      "All our banquet catering is 100% pure vegetarian. Every dish prepared fresh with premium ingredients and traditional recipes.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
      </svg>
    ),
  },
];

const packages = [
  {
    title: "Package Menu",
    description:
      "Pre-set vegetarian menus curated by our chefs. Choose from multiple tiers to match your event and budget.",
    items: [
      "Welcome drink on arrival",
      "4-6 starter options",
      "3-4 main course selections",
      "Choice of breads & rice",
      "Dessert course included",
      "Complimentary tasting session",
    ],
  },
  {
    title: "Choice Menu",
    description:
      "Full flexibility to build your own menu. Pick individual dishes from our restaurant menu for a personalized experience.",
    items: [
      "Select any starters & main course",
      "Mix cuisines freely",
      "Per-plate pricing model",
      "Dietary preferences honored",
      "Chef consultation included",
      "Customized plating available",
    ],
  },
];

const WHATSAPP_NUMBER = "918758752370";
const WHATSAPP_MESSAGE =
  "Hello! I'd like to inquire about booking the banquet hall at La Festiva.";

export default function BanquetPage() {
  const reduced = useReducedMotion();
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <>
      <section className="relative pt-28 pb-20 lg:pb-28 bg-near-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy/20 via-near-black to-near-black" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 75% 25%, #C9A84C 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            {...(reduced ? {} : {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
            })}
          >
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
              Celebrate With Us
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-text-light mt-4 mb-6">
              Host Your Dream Event
              <br />
              <span className="text-gold">With Us</span>
            </h1>
            <p className="text-text-ivory/50 max-w-2xl mx-auto text-sm leading-relaxed">
              From intimate family gatherings to grand celebrations, our banquet
              hall offers the perfect setting for your special moments.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                {...(reduced ? {} : {
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.5, delay: index * 0.1 },
                })}
                className="bg-white border border-ivory-dark rounded-sm p-6 lg:p-8 hover:border-gold/20 hover:shadow-xl transition-all duration-500"
              >
                <div className="text-burgundy mb-4">{feature.icon}</div>
                <h3 className="font-heading text-xl font-semibold text-burgundy mb-2">
                  {feature.title}
                </h3>
                <p className="text-text-dark/50 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-near-black">
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
              Our Packages
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light mt-3">
              Choose Your Plan
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.title}
                {...(reduced ? {} : {
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.5, delay: index * 0.15 },
                })}
                className="bg-dark-card border border-gold/10 rounded-sm p-8 lg:p-10 hover:border-gold/30 transition-all duration-500"
              >
                <h3 className="font-heading text-2xl font-bold text-gold mb-3">
                  {pkg.title}
                </h3>
                <p className="text-text-ivory/50 text-sm leading-relaxed mb-6">
                  {pkg.description}
                </p>
                <ul className="space-y-3">
                  {pkg.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-text-ivory/70"
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
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-burgundy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            {...(reduced ? {} : {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
            })}
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ivory mb-4">
              Ready to Book Your Event?
            </h2>
            <p className="text-ivory/60 text-sm mb-8 max-w-lg mx-auto">
              Call us or send a WhatsApp message to start planning your perfect celebration.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-near-black font-semibold text-sm uppercase tracking-widest rounded-sm hover:bg-gold-light transition-all"
                {...(reduced ? {} : {
                  animate: {
                    boxShadow: [
                      "0 0 0 0 rgba(201, 168, 76, 0.4)",
                      "0 0 0 20px rgba(201, 168, 76, 0)",
                    ],
                  },
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                })}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Inquiry
              </motion.a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-ivory/30 text-ivory text-sm font-medium uppercase tracking-widest rounded-sm hover:bg-ivory/5 transition-colors"
              >
                Contact Us
              </Link>
            </div>
            <p className="text-ivory/40 text-xs mt-6">
              Or call us directly: +91 875 875 2370
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
