import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Analytics from "../components/analytics";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "JKT48 Career Destiny",
  description: "Tentukan takdir karir member JKT48!",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        {/* Preload critical icons or images if needed */}
        <Analytics />
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-black text-white antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
