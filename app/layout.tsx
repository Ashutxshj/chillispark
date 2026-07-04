import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/data";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ChilliSpark | Websites that win customers",
    template: "%s · ChilliSpark",
  },
  description:
    "Fast, modern, affordable websites that help local businesses build trust, rank on Google, and turn visitors into paying customers. Delhi-based web design & development studio.",
  keywords: [
    "web design Delhi",
    "website development",
    "local business website",
    "dental clinic website",
    "restaurant website",
    "website redesign",
    "SEO",
  ],
  openGraph: {
    title: "ChilliSpark | Websites that win customers",
    description:
      "Fast, modern, affordable websites that help local businesses grow.",
    url: SITE_URL,
    siteName: "ChilliSpark",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
