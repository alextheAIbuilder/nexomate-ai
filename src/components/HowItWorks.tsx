"use client";

const steps = [
  { step: "01", title: "Apply & Assess", desc: "Tell us about your agency — size, lines of business, current tech stack, and biggest bottlenecks. We'll assess fit within 24 hours.", icon: "📝" },
  { step: "02", title: "Design & Plan", desc: "We map your workflows and design automations specific to your agency. No cookie-cutter setups. You approve every workflow before we build.", icon: "🔧" },
  { step: "03", title: "Build & Launch", desc: "We build, test, and deploy your automations. Full training for your team. Live in 14 days — with ongoing support after launch.", icon: "🚀" },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-400 bg-accent-500/10 rounded-full mb-4">Process</span>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 tracking-tight">How It Works</h2>
          <p className="text-gray-400">Three steps. Fourteen days. Fully operational.</p>
        </div>
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-24 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-primary-500/30 via-accent-500/30 to-primary-500/30" />
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="relative text-center group">
                <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 border border-white/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{s.icon}</span>
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-xs font-bold text-white">{s.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{s.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
