import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

/**
 * Absolute base for OG/Twitter image URLs.
 * - Set NEXT_PUBLIC_SITE_URL in Vercel once a custom domain is attached.
 * - Otherwise VERCEL_URL covers preview and production deploys automatically.
 * - Falls back to localhost for local dev.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Texas Accelerate",
  description:
    "We connect UT students with real work at Austin startups, nonprofits, and campaigns.",
  openGraph: {
    title: "Texas Accelerate",
    description:
      "We connect UT students with real work at Austin startups, nonprofits, and campaigns.",
    images: ["/og.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} antialiased`}>
      <body className="bg-bg text-white">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
