import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quantum Financial Systems (QFS) | Next-Gen Secure Financial Technology",
  description:
    "Discover Quantum Financial Systems (QFS) – the future of finance powered by quantum computing. Experience unmatched security, lightning-fast transactions, and innovative financial solutions for the global economy.",
  keywords: [
    "Quantum Financial Systems",
    "QFS",
    "Quantum Banking",
    "Quantum Finance",
    "Quantum Technology",
    "Financial Security",
    "Next-Gen Finance",
    "Digital Banking Revolution",
    "Secure Global Payments",
    "Future of Banking"
  ],
  openGraph: {
    title: "Quantum Financial Systems (QFS) | Next-Gen Secure Financial Technology",
    description:
      "Revolutionizing global finance with QFS – a quantum-powered financial system delivering unmatched speed, security, and innovation for banking and payments.",
    url: "https://yourdomain.com",
    siteName: "Quantum Financial Systems",
    type: "website",
    images: [
      {
        url: "https://yourdomain.com/qfs-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Quantum Financial Systems QFS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantum Financial Systems (QFS) | Future of Finance",
    description:
      "Explore the revolutionary QFS – secure, fast, and quantum-powered financial solutions shaping the next generation of banking and payments.",
    images: ["https://yourdomain.com/qfs-banner.jpg"],
  },
  alternates: {
    canonical: "https://yourdomain.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Primary Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Quantum Financial Systems Team" />
        <meta name="publisher" content="Quantum Financial Systems" />
        <meta name="theme-color" content="#0f172a" />
        <meta
          name="google-site-verification"
          content="YOUR_GOOGLE_SITE_VERIFICATION_CODE"
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
