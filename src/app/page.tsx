import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Scenarios from "@/components/Scenarios";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import ROICalculator from "@/components/ROICalculator";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PainPoints />
      <Scenarios />
      <Services />
      <HowItWorks />
      <ROICalculator />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
