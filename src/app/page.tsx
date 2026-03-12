import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ScrollReveal from "@/components/ScrollReveal";
import dynamic from 'next/dynamic';

// Dynamic imports for below-the-fold components
const PainPoints = dynamic(() => import("@/components/PainPoints"), { ssr: false });
const BeforeAfter = dynamic(() => import("@/components/BeforeAfter"), { ssr: false });
const Services = dynamic(() => import("@/components/Services"), { ssr: false });
const Integrations = dynamic(() => import("@/components/Integrations"), { ssr: false });
const HowItWorks = dynamic(() => import("@/components/HowItWorks"), { ssr: false });
const ROICalculatorLazy = dynamic(() => import("@/components/ROICalculatorLazy"), { ssr: false });

const Pricing = dynamic(() => import("@/components/Pricing"), { ssr: false });
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: false });
const TrustIndicators = dynamic(() => import("@/components/TrustIndicators"), { ssr: false });
const CaseStudies = dynamic(() => import("@/components/CaseStudies"), { ssr: false });
const About = dynamic(() => import("@/components/About"), { ssr: false });
const CTA = dynamic(() => import("@/components/CTA"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <SocialProof />
      <ScrollReveal><TrustIndicators /></ScrollReveal>
      <ScrollReveal><PainPoints /></ScrollReveal>
      <ScrollReveal><BeforeAfter /></ScrollReveal>
      <ScrollReveal><Services /></ScrollReveal>
      <ScrollReveal><HowItWorks /></ScrollReveal>
      <ScrollReveal><Integrations /></ScrollReveal>
      <ScrollReveal><CaseStudies /></ScrollReveal>
      <ScrollReveal><ROICalculatorLazy /></ScrollReveal>
      <ScrollReveal><Pricing /></ScrollReveal>
      <ScrollReveal><About /></ScrollReveal>
      <ScrollReveal><FAQ /></ScrollReveal>
      <ScrollReveal><CTA /></ScrollReveal>
      <Footer />
    </main>
  );
}