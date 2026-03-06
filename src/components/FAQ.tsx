"use client";
import { useState } from "react";

const faqs = [
  { q: "Do I need to change my current AMS or CRM?", a: "No. We integrate with your existing systems — Applied Epic, HawkSoft, AMS360, Salesforce, and others. We work around your stack, not the other way around." },
  { q: "How long until I see results?", a: "Most agencies see measurable impact within the first 30 days. Auto-responses start working day one. Lead enrichment and renewal workflows typically show ROI within 2-3 weeks." },
  { q: "Is my client data secure?", a: "Yes. We follow insurance industry data handling standards with encryption at rest and in transit. Your policyholder data never trains AI models." },
  { q: "What if I only need one or two automations?", a: "The Starter plan is designed for exactly that. Start with auto-responses and lead enrichment, then add more as you see results." },
  { q: "Can I cancel anytime?", a: "Yes. Month-to-month after an initial 3-month commitment. We keep you because the ROI is obvious, not because of a contract." },
  { q: "What makes this different from generic AI tools?", a: "We're built specifically for insurance agencies. Our workflows understand policy lifecycles, carrier appetite, lines of business, and agency operations. ChatGPT can't do that." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-400 bg-primary-500/10 rounded-full mb-4">FAQ</span>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 tracking-tight">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-white/15 transition-colors duration-200">
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-5 text-left flex justify-between items-center gap-4">
                <span className="text-white font-medium">{f.q}</span>
                <span className={`text-primary-400 flex-shrink-0 transition-transform duration-300 text-xl ${open === i ? "rotate-45" : ""}`}>+</span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed">{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
