"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        <img src="/images/hero-bg.png" alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a]/70 via-[#0a0e1a]/50 to-[#0a0e1a]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-sm font-medium rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Built Exclusively for US Insurance Agencies
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
            Your Agency Loses{" "}
            <span className="gradient-text">$630K/Year</span>{" "}
            <br className="hidden sm:block" />
            to Manual Work
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Missed calls. Forgotten renewals. Data entry across 4 systems.
            We automate it all in 14 days — so your team closes deals, not copies and pastes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://2026-03-06-lead-magnet.vercel.app"
              className="group px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-400 hover:to-accent-400 text-white font-semibold text-lg transition-all duration-300 shadow-xl shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-[1.02]">
              Get Free Automation Audit
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a href="#roi-calculator" className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-lg hover:bg-white/10 transition-all duration-200">
              Calculate Your ROI
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="animate-fade-in-delayed mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { value: "14 Days", label: "From signup to fully operational" },
            { value: "30%", label: "Of insurance calls go unanswered" },
            { value: "10+ hrs", label: "Saved per week on manual tasks" },
          ].map((s, i) => (
            <div key={i} className="glass rounded-xl p-4 text-center glow-card">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">{s.value}</div>
              <div className="text-xs text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Dashboard preview */}
        <div className="mt-16 animate-fade-in-delayed-2">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl glow-blue">
            <img src="/images/dashboard-mockup.png" alt="NexomateAI Dashboard" className="w-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
