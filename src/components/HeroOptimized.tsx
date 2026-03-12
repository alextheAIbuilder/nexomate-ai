"use client";
import { useEffect, useState } from 'react';

// CSS-based animations instead of framer-motion

export default function HeroOptimized() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsLoaded(true);
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .hero-animate {
          opacity: 0;
          transform: translateY(30px);
        }
        
        .hero-animate.loaded {
          animation: fadeInUp 0.7s ease-out forwards;
        }
        
        .hero-animate-delayed {
          opacity: 0;
          transform: translateY(20px);
        }
        
        .hero-animate-delayed.loaded {
          animation: fadeInUp 0.6s ease-out 0.4s forwards;
        }
      `}</style>
      
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-background-50 to-background-100">
        {/* Gradient orbs - subtle light theme */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary-500/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <div className={`hero-animate ${isLoaded ? 'loaded' : ''}`}>
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary-50 border border-primary-200 text-primary-600">
              Built for US Insurance Agencies
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold leading-tight mb-6 text-text-primary">
              Automate Your Insurance{" "}
              <span className="gradient-text">Agency with AI</span>
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10 font-body">
              Stop losing leads to missed calls. Stop tracking renewals in spreadsheets. 
              Let AI handle the repetitive work so you can focus on closing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://2026-03-06-lead-magnet.vercel.app" 
                className="px-8 py-4 rounded-xl btn-primary font-semibold text-lg shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                See What AI Can Do For Your Agency →
              </a>
              <a 
                href="#roi-calculator" 
                className="px-8 py-4 rounded-xl bg-white border border-gray-200 text-text-primary font-semibold text-lg hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Calculate Your ROI
              </a>
            </div>
          </div>
          
          {/* Stats */}
          <div className={`hero-animate-delayed ${isLoaded ? 'loaded' : ''} mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8`}>
            {[
              { value: "14 Days", label: "From signup to fully operational" },
              { value: "30%", label: "Of insurance calls go unanswered" },
              { value: "10+ hrs", label: "Saved per week on manual tasks" },
            ].map((s, i) => (
              <div key={i} className="text-center p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200/50 hover:bg-white/80 transition-all duration-300">
                <div className="text-3xl font-display font-bold gradient-text">{s.value}</div>
                <div className="text-sm text-text-muted mt-1 font-body">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}