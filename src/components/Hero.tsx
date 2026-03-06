"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src="/images/hero-bg.png" alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a]/60 via-[#0a0e1a]/40 to-[#0a0e1a]" />
      </div>
      
      <div className="relative max-w-5xl mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full glass text-primary-400">
            Built Exclusively for US Insurance Agencies
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
            Your Agency Loses{" "}
            <span className="gradient-text">$630K/Year</span>{" "}
            to Manual Work
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Missed calls. Forgotten renewals. Data entry across 4 systems. 
            We automate it all in 14 days—so your team closes, not copies and pastes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://2026-03-06-lead-magnet.vercel.app" className="px-8 py-4 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold text-lg transition shadow-lg shadow-primary-600/25 hover:scale-105 duration-200">
              See What AI Can Do For Your Agency →
            </a>
            <a href="#roi-calculator" className="px-8 py-4 rounded-xl glass text-white font-semibold text-lg hover:bg-white/10 transition">
              Calculate Your ROI
            </a>
          </div>
        </div>
        
        {/* Stats */}
        <div className="animate-fade-in-delayed mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8">
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
        </div>

        {/* Dashboard preview */}
        <div className="mt-16 animate-fade-in-delayed">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-primary-600/10">
            <img src="/images/dashboard-mockup.png" alt="NexomateAI Dashboard" className="w-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
