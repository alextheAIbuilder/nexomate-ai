import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NexomateAI - AI Automation for Insurance Agencies",
  description: "Automate your insurance agency with AI. Lead enrichment, auto-responses, renewal management, and more. Built for US insurance agencies.",
  keywords: "insurance automation, AI insurance, insurance agency software, lead enrichment, renewal management",
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
