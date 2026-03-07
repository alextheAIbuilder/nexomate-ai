import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import PainPoints from "@/components/PainPoints";
import BeforeAfter from "@/components/BeforeAfter";
import Services from "@/components/Services";
import Integrations from "@/components/Integrations";
import HowItWorks from "@/components/HowItWorks";
import ROICalculator from "@/components/ROICalculator";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <SocialProof />
      <ScrollReveal><PainPoints /></ScrollReveal>
      <ScrollReveal><BeforeAfter /></ScrollReveal>
      <ScrollReveal><Services /></ScrollReveal>
      <ScrollReveal><HowItWorks /></ScrollReveal>
      <ScrollReveal><Integrations /></ScrollReveal>
      <ScrollReveal><ROICalculator /></ScrollReveal>
      <ScrollReveal><Pricing /></ScrollReveal>
      <ScrollReveal><FAQ /></ScrollReveal>
      <ScrollReveal><CTA /></ScrollReveal>
      <Footer />
    </main>
  );
}
