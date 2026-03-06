"use client";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "$699",
    period: "/month",
    desc: "For agencies getting started with automation",
    features: ["24/7 Auto-Responses (calls + texts)", "Lead Enrichment (up to 200/mo)", "Basic Renewal Alerts", "Email Support", "1 User"],
    cta: "Apply Now",
    highlighted: false,
  },
  {
    name: "Regular",
    price: "$2,499",
    period: "/month",
    desc: "Full automation suite for growing agencies",
    features: ["Everything in Starter", "Unlimited Lead Enrichment", "Renewal Management + Re-quoting", "Proposal Generator", "Outreach Bot Sequences", "Agency Analytics Dashboard", "Priority Support", "Up to 10 Users"],
    cta: "Apply Now",
    highlighted: true,
  },
  {
    name: "Custom",
    price: "Let's Talk",
    period: "",
    desc: "Enterprise agencies & multi-location groups",
    features: ["Everything in Regular", "Custom Workflow Design", "Carrier API Integrations", "Dedicated Account Manager", "Custom Reporting", "Unlimited Users", "SLA Guarantee"],
    cta: "Contact Us",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Transparent Pricing</h2>
          <p className="text-gray-400 max-w-xl mx-auto">No hidden fees. No surprise invoices. Most of our competitors won&apos;t even show you pricing until a sales call. We think that&apos;s backwards.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              className={`rounded-2xl p-8 flex flex-col ${p.highlighted ? "bg-gradient-to-b from-primary-600/20 to-accent-600/10 border-2 border-primary-500/40 relative" : "glass"}`}>
              {p.highlighted && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">Most Popular</div>}
              <h3 className="text-xl font-semibold text-white">{p.name}</h3>
              <div className="mt-4 mb-2">
                <span className="text-4xl font-bold text-white">{p.price}</span>
                <span className="text-gray-400">{p.period}</span>
              </div>
              <p className="text-gray-400 text-sm mb-6">{p.desc}</p>
              <ul className="flex-1 space-y-3 mb-8">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-primary-400 mt-0.5">✓</span> {f}
                  </li>
                ))}
              </ul>
              <a href="https://2026-03-06-lead-magnet.vercel.app"
                className={`block text-center py-3 rounded-xl font-semibold transition ${p.highlighted ? "bg-primary-600 hover:bg-primary-500 text-white" : "glass hover:bg-white/10 text-white"}`}>
                {p.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
