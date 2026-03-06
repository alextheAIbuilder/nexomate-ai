"use client";

export default function CTA() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center relative">
        {/* Glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary-500/10 rounded-full blur-3xl" />
        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-12 sm:p-16 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 tracking-tight">Stop Losing Money to <span className="gradient-text">Manual Work</span></h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
            Apply today. We&apos;ll review your agency within 24 hours and show you exactly which automations will have the biggest impact on your bottom line.
          </p>
          <a href="https://2026-03-06-lead-magnet.vercel.app"
            className="inline-block px-10 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-400 hover:to-accent-400 text-white font-semibold text-lg transition-all duration-300 shadow-xl shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-[1.02]">
            Get Free Automation Audit →
          </a>
          <p className="text-gray-600 text-sm mt-4">No commitment required. See if your agency qualifies.</p>
        </div>
      </div>
    </section>
  );
}
