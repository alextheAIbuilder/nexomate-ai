"use client";

const services = [
  { icon: "🎯", title: "Lead Enrichment", desc: "Automatically enrich inbound leads with public data — business type, coverage gaps, revenue signals — so your producers spend time on qualified prospects.", color: "from-blue-500/20 to-blue-600/5" },
  { icon: "📞", title: "24/7 Auto-Responses", desc: "AI answers calls, texts, and web inquiries instantly. Qualifies the lead, books appointments, and routes hot prospects to the right producer.", color: "from-emerald-500/20 to-emerald-600/5" },
  { icon: "🔄", title: "Renewal Management", desc: "Automated tracking starts 90 days before expiry. Personalized outreach to policyholders, flagging at-risk accounts, and re-quoting when needed.", color: "from-purple-500/20 to-purple-600/5" },
  { icon: "📋", title: "Proposal Generator", desc: "Turn a quote into a polished, branded proposal in seconds. Coverage comparisons, carrier highlights, and e-sign ready.", color: "from-amber-500/20 to-amber-600/5" },
  { icon: "🚀", title: "Outreach Bot", desc: "Sequences for cold leads, cross-sell opportunities, and win-back campaigns. Personalized to each prospect's coverage needs.", color: "from-pink-500/20 to-pink-600/5" },
  { icon: "📊", title: "Agency Analytics", desc: "See close rates by producer, response times, renewal retention, and revenue per lead. The numbers you need to grow your book.", color: "from-cyan-500/20 to-cyan-600/5" },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/[0.03] to-transparent" />
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-400 bg-primary-500/10 rounded-full mb-4">Solutions</span>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 tracking-tight">What We Automate</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Six core systems that replace manual busywork across your entire agency.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className={`rounded-2xl p-8 bg-gradient-to-b ${s.color} border border-white/5 hover:border-white/10 transition-all duration-300 group hover:scale-[1.02]`}>
              <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
