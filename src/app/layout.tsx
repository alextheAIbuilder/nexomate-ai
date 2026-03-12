import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NexomateAI - AI Automation for Insurance Agencies",
  description: "Automate your insurance agency with AI. Lead enrichment, auto-responses, renewal management, and more. Built for US insurance agencies.",
  keywords: "insurance automation, AI insurance, insurance agency software, lead enrichment, renewal management",
  manifest: '/manifest.json',
  themeColor: '#1e40af',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nexomateai.com',
    title: 'NexomateAI - AI Automation for Insurance Agencies',
    description: 'Automate your insurance agency with AI. Lead enrichment, auto-responses, renewal management, and more.',
    siteName: 'NexomateAI',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'NexomateAI - AI Insurance Automation',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NexomateAI - AI Automation for Insurance Agencies',
    description: 'Automate your insurance agency with AI. Stop losing leads to missed calls.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://nexomateai.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
