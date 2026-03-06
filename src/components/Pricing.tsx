"use client";

const plans = [
  {
    name: "Starter",
    price: "$699",
    period: "/month",
    desc: "For agencies getting started with automation",
    features: ["24/7 Auto-Responses (calls + texts)", "Lead Enrichment (up to 200/mo)", "Basic Renewal Alerts", "Email Support", "1 User"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$2,499",
    period: "/month",
    desc: "Full automation suite for growing agencies",
    features: ["Everything in Starter", "Unlimited Lead Enrichment", "Renewal Management + Re-quoting", "Proposal Generator", "Outreach Bot Sequences", "Agency Analytics Dashboard", "Priority Support", "Up to 10 Users"],
    cta: "Get Free Automation Audit",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "Multi-location groups & large agencies",
    features: ["Everything in Professional", "Custom Workflow Design", "Carrier API Integrations", "Dedicated Account Manager", "Custom Reporting", "Unlimited Users", "SLA Guarantee"],
    cta: "Contact Us",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-500/[0.03] to-transparent" />
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-400 bg-primary-500/10 rounded-full mb-4">Pricing</span>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 tracking-tight">Transparent Pricing</h2>
          <p className="text-gray-400 max-w-xl mx-auto">No hidden fees. No surprise invoices. Most competitors won&apos;t even show pricing until a sales call.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((p, i) => (
            <div key={i}
              className={`rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                p.highlighted
                  ? "bg-gradient-to-b from-primary-500/15 to-accent-500/10 border-2 border-primary-500/30 relative scale-[1.02] shadow-2xl shadow-primary-500/10 md:-mt-4 md:mb-[-16px] md:py-12"
                  : "glass hover:bg-white/[0.08]"
              }`}>
              {p.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-lg">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-semibold text-white">{p.name}</h3>
              <div className="mt-4 mb-2">
                <span className="text-4xl font-bold text-white">{p.price}</span>
                <span className="text-gray-500">{p.period}</span>
              </div>
              <p className="text-gray-500 text-sm mb-8">{p.desc}</p>
              <ul className="flex-1 space-y-3 mb-8">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="text-emerald-400 mt-0.5 flex-shrink-0">✓</span> {f}
                  </li>
                ))}
              </ul>
              <a href="https://2026-03-06-lead-magnet.vercel.app"
                className={`block text-center py-3.5 rounded-xl font-semibold transition-all duration-300 ${
                  p.highlighted
                    ? "bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-400 hover:to-accent-400 text-white shadow-lg shadow-primary-500/20"
                    : "glass hover:bg-white/10 text-white"
                }`}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 text-sm mt-8">All plans include a 3-month initial commitment. Cancel anytime after.</p>
      </div>
    </section>
  );
}
