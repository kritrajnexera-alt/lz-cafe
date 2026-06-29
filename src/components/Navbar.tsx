"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/banquet", label: "Banquet" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-near-black/95 backdrop-blur-md shadow-lg"
          : "bg-near-black/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-heading text-2xl lg:text-3xl font-bold text-gold tracking-wide group-hover:text-gold-light transition-colors">
              La Festiva
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wider uppercase transition-colors ${
                    isActive
                      ? "text-gold"
                      : "text-text-ivory/80 hover:text-gold"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-gold"
                      transition={reduced ? { duration: 0 } : undefined}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden relative w-8 h-8 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <motion.span
                animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={reduced ? { duration: 0 } : undefined}
                className="block w-6 h-0.5 bg-gold"
              />
              <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                transition={reduced ? { duration: 0 } : undefined}
                className="block w-6 h-0.5 bg-gold"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={reduced ? { duration: 0 } : undefined}
                className="block w-6 h-0.5 bg-gold"
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduced ? {} : { opacity: 0, height: 0 }}
            animate={reduced ? {} : { opacity: 1, height: "auto" }}
            exit={reduced ? {} : { opacity: 0, height: 0 }}
            className="lg:hidden bg-near-black/98 backdrop-blur-md border-t border-gold/10 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium tracking-wider uppercase transition-colors ${
                      isActive
                        ? "text-gold bg-gold/5"
                        : "text-text-ivory/70 hover:text-gold hover:bg-gold/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
