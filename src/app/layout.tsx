import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "../../components.tsx/Nav";
import Footer from "../../components.tsx/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Preeti Zen Fashion - Mindful Style & Sustainable Fashion",
  description: "Discover mindful fashion that speaks to your soul. Premium sustainable clothing collections where contemporary design meets timeless elegance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
