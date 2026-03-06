"use client";

const services = [
  { img: "/images/service-lead.png", title: "Lead Enrichment", desc: "Automatically enrich inbound leads with public data—business type, coverage gaps, revenue signals—so your producers spend time on qualified prospects, not research." },
  { img: "/images/service-autorespond.png", title: "24/7 Auto-Responses", desc: "AI answers calls, texts, and web inquiries instantly. Qualifies the lead, books appointments, and routes hot prospects to the right producer." },
  { img: "/images/service-renewal.png", title: "Renewal Management", desc: "Automated tracking starts 90 days before expiry. Personalized outreach to policyholders, flagging at-risk accounts, and re-quoting when needed." },
  { img: "/images/service-proposal.png", title: "Proposal Generator", desc: "Turn a quote into a polished, branded proposal in seconds. Coverage comparisons, carrier highlights, and e-sign ready." },
  { img: "/images/service-outreach.png", title: "Outreach Bot", desc: "Sequences for cold leads, cross-sell opportunities, and win-back campaigns. Personalized to each prospect's coverage needs." },
  { img: "/images/service-analytics.png", title: "Agency Analytics", desc: "See close rates by producer, response times, renewal retention, and revenue per lead. The numbers you need to grow your book." },
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
            <div key={i} className="glass rounded-2xl overflow-hidden hover:border-primary-500/30 transition group hover:scale-[1.02] duration-200">
              <div className="h-48 overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-white">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
