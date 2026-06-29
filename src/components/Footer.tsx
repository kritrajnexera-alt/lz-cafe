import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-near-black text-text-ivory/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <h3 className="font-heading text-2xl font-bold text-gold mb-4">
              La Festiva
            </h3>
            <p className="text-sm leading-relaxed text-text-ivory/60">
              100% Pure Vegetarian restaurant and banquet hall in Ankleshwar.
              Where every meal becomes a celebration.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold text-gold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/menu", label: "Menu" },
                { href: "/banquet", label: "Banquet" },
                { href: "/gallery", label: "Gallery" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold text-gold mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="block text-text-ivory/40 text-xs uppercase tracking-wider mb-1">
                  Address
                </span>
                2nd Floor, Ganesh Plaza,
                <br />
                Above Reliance Trends, Timber Market,
                <br />
                GIDC, Ankleshwar - 393002
              </li>
              <li>
                <span className="block text-text-ivory/40 text-xs uppercase tracking-wider mb-1">
                  Restaurant
                </span>
                +91 875 875 2371
              </li>
              <li>
                <span className="block text-text-ivory/40 text-xs uppercase tracking-wider mb-1">
                  Banquet
                </span>
                +91 875 875 2370
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold text-gold mb-4">
              Hours
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="block text-text-ivory/40 text-xs uppercase tracking-wider mb-1">
                  Lunch
                </span>
                11:00 AM – 3:00 PM
              </li>
              <li>
                <span className="block text-text-ivory/40 text-xs uppercase tracking-wider mb-1">
                  Dinner
                </span>
                6:30 PM – 10:30 PM
              </li>
              <li className="text-gold text-xs font-medium">
                Open Daily
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gold/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-ivory/40">
            &copy; {new Date().getFullYear()} La Festiva Restaurant & Banquet. All rights reserved.
          </p>
          <p className="text-xs text-text-ivory/30">
            100% Pure Vegetarian · Ankleshwar, Gujarat
          </p>
        </div>
      </div>
    </footer>
  );
}
