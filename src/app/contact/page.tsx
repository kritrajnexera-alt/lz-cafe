"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const contactDetails = [
  {
    title: "Address",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    content: (
      <>
        2nd Floor, Ganesh Plaza,
        <br />
        Above Reliance Trends, Timber Market,
        <br />
        GIDC, Ankleshwar - 393002
      </>
    ),
  },
  {
    title: "Restaurant",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    content: "+91 875 875 2371",
  },
  {
    title: "Banquet",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    content: "+91 875 875 2370",
  },
  {
    title: "Email",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    content: "laFestiva143@gmail.com",
  },
];

const WHATSAPP_NUMBER = "918758752370";
const WHATSAPP_MESSAGE = "Hello! I have a question about La Festiva.";

export default function ContactPage() {
  const reduced = useReducedMotion();
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

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
              Get In Touch
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-text-light mt-4 mb-6">
              Contact Us
            </h1>
            <p className="text-text-ivory/50 max-w-xl mx-auto text-sm leading-relaxed">
              We&apos;d love to hear from you. Whether it&apos;s a reservation inquiry
              or banquet booking, reach out anytime.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              {...(reduced ? {} : {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { duration: 0.5 },
              })}
            >
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-burgundy mb-8">
                Reach Out to Us
              </h2>

              <div className="space-y-6">
                {contactDetails.map((detail) => (
                  <div
                    key={detail.title}
                    className="flex items-start gap-4"
                  >
                    <div className="text-gold mt-0.5">{detail.icon}</div>
                    <div>
                      <h3 className="font-medium text-burgundy text-sm uppercase tracking-wider mb-1">
                        {detail.title}
                      </h3>
                      <p className="text-text-dark/60 text-sm leading-relaxed">
                        {detail.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-ivory-dark">
                <h3 className="font-heading text-lg font-semibold text-burgundy mb-4">
                  Operating Hours
                </h3>
                <div className="space-y-2 text-sm text-text-dark/60">
                  <div className="flex justify-between max-w-xs">
                    <span className="font-medium text-text-dark">Lunch</span>
                    <span>11:00 AM – 3:00 PM</span>
                  </div>
                  <div className="flex justify-between max-w-xs">
                    <span className="font-medium text-text-dark">Dinner</span>
                    <span>6:30 PM – 10:30 PM</span>
                  </div>
                  <p className="text-gold text-xs font-medium mt-3">
                    Open 7 Days a Week
                  </p>
                </div>
              </div>

              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 bg-green-600 text-white text-sm font-medium uppercase tracking-widest rounded-sm hover:bg-green-700 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </motion.a>
            </motion.div>

            <motion.div
              {...(reduced ? {} : {
                initial: { opacity: 0, x: 20 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { duration: 0.5 },
              })}
            >
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-burgundy mb-8">
                Find Us
              </h2>
              <div className="w-full h-[400px] bg-ivory-dark rounded-sm flex items-center justify-center border border-gold/10">
                <div className="text-center p-8">
                  <svg className="w-12 h-12 mx-auto mb-4 text-burgundy/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <p className="font-heading text-lg font-semibold text-burgundy mb-2">
                    Google Maps
                  </p>
                  <p className="text-text-dark/40 text-xs leading-relaxed">
                    2nd Floor, Ganesh Plaza,
                    <br />
                    Above Reliance Trends, Timber Market,
                    <br />
                    GIDC, Ankleshwar - 393002
                  </p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent("2nd Floor, Ganesh Plaza, Above Reliance Trends, Timber Market, GIDC, Ankleshwar - 393002")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-6 py-2 bg-burgundy text-ivory text-xs font-medium uppercase tracking-wider rounded-sm hover:bg-burgundy-light transition-colors"
                  >
                    Open in Maps
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
