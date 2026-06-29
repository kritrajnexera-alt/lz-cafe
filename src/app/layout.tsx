import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: {
    default: "La Festiva Restaurant & Banquet | Ankleshwar's Finest Dining",
    template: "%s | La Festiva",
  },
  description:
    "100% Pure Vegetarian restaurant and banquet hall in Ankleshwar, Gujarat. Family dining, event hosting, and premium vegetarian cuisine.",
  keywords: [
    "La Festiva",
    "Restaurant Ankleshwar",
    "Banquet Hall Ankleshwar",
    "Pure Vegetarian",
    "Gujarat Dining",
    "Family Restaurant",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
