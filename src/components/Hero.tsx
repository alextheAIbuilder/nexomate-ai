"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-600/20 rounded-full blur-3xl" />
      
      <div className="relative max-w-5xl mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full glass text-primary-400">
            Built for US Insurance Agencies
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
            Automate Your Insurance{" "}
            <span className="gradient-text">Agency with AI</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Stop losing leads to missed calls. Stop tracking renewals in spreadsheets. 
            Let AI handle the repetitive work so you can focus on closing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://2026-03-06-lead-magnet.vercel.app" className="px-8 py-4 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold text-lg transition shadow-lg shadow-primary-600/25">
              See What AI Can Do For Your Agency →
            </a>
            <a href="#roi-calculator" className="px-8 py-4 rounded-xl glass text-white font-semibold text-lg hover:bg-white/10 transition">
              Calculate Your ROI
            </a>
          </div>
        </motion.div>
        
        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { value: "14 Days", label: "From signup to fully operational" },
            { value: "30%", label: "Of insurance calls go unanswered" },
            { value: "10+ hrs", label: "Saved per week on manual tasks" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold gradient-text">{s.value}</div>
              <div className="text-sm text-gray-400 mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
