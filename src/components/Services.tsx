"use client";

const services = [
  { icon: "🔍", title: "Lead Enrichment", desc: "Automatically enrich inbound leads with public data—business type, coverage gaps, revenue signals—so your producers spend time on qualified prospects, not research." },
  { icon: "💬", title: "24/7 Auto-Responses", desc: "AI answers calls, texts, and web inquiries instantly. Qualifies the lead, books appointments, and routes hot prospects to the right producer." },
  { icon: "🔔", title: "Renewal Management", desc: "Automated tracking starts 90 days before expiry. Personalized outreach to policyholders, flagging at-risk accounts, and re-quoting when needed." },
  { icon: "📄", title: "Proposal Generator", desc: "Turn a quote into a polished, branded proposal in seconds. Coverage comparisons, carrier highlights, and e-sign ready. No more copy-paste." },
  { icon: "📨", title: "Outreach Bot", desc: "Sequences for cold leads, cross-sell opportunities, and win-back campaigns. Personalized to each prospect's coverage needs, not generic blasts." },
  { icon: "📈", title: "Agency Analytics", desc: "See close rates by producer, response times, renewal retention, and revenue per lead. The numbers you need to actually grow your book of business." },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">What We Automate</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Six core systems that replace manual busywork across your agency.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="glass rounded-2xl p-6 hover:border-primary-500/30 transition group">
              <div className="text-3xl mb-3">{s.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-white">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
