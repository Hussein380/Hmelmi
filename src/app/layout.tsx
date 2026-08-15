import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.hmelmi.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "HM Elmi Limited | Fueling Your Future",
    template: "%s | HM Elmi Limited"
  },
  description: "HM Elmi Limited is a leading petroleum trading and logistics company in East Africa. We specialize in fuel transport, cross-border clearance, fleet maintenance, and seamless supply across Kenya, DRC, Uganda, Rwanda, and South Sudan.",
  keywords: [
    "Hmelmilimited", "Hmelmi", "HM Elmi", "Petroleum trading East Africa", 
    "Fuel transport logistics", "Cross-border clearance DRC", "Fuel delivery Kenya", 
    "Tanker fleet maintenance", "Wholesale petroleum supply", "Mombasa fuel logistics",
    "Kampala fuel transport", "Kigali petroleum", "Beni DRC delivery"
  ],
  authors: [{ name: "HM Elmi Limited" }],
  creator: "HM Elmi Limited",
  publisher: "HM Elmi Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "HM Elmi Limited | Fueling Your Future",
    description: "Leading petroleum trading, transport, and logistics across East & Central Africa. Reliable fuel supply and cross-border expertise.",
    url: siteUrl,
    siteName: "HM Elmi Limited",
    images: [
      {
        url: '/images/photos/storage-terminal.jpg',
        width: 1200,
        height: 630,
        alt: 'HM Elmi Limited Petroleum Terminal',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HM Elmi Limited | Petroleum & Logistics',
    description: 'Leading petroleum trading and transport across East Africa.',
    images: ['/images/photos/storage-terminal.jpg'],
  },
  appleWebApp: {
    title: "Hmelmi"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
