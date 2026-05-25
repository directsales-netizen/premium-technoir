import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Automation Society Wave — Premium TechNoir",
  description:
    "The premier community for AI automation practitioners, powered by Premium TechNoir. Learn, build, and connect with thousands of professionals riding the wave of intelligent automation.",
  keywords: ["AI automation", "artificial intelligence", "community", "wave", "Premium TechNoir", "machine learning", "workflow automation"],
  authors: [{ name: "Premium TechNoir" }],
  openGraph: {
    title: "AI Automation Society Wave — Premium TechNoir",
    description: "Join thousands of AI automation practitioners building the future.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="bg-[#080e1a] text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
