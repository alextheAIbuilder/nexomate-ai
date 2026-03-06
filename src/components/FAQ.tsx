"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "Do I need to change my current AMS or CRM?", a: "No. We integrate with your existing systems—Applied Epic, HawkSoft, AMS360, Salesforce, and others. We work around your stack, not the other way around." },
  { q: "How long until I see results?", a: "Most agencies see measurable impact within the first 30 days. Auto-responses start working day one. Lead enrichment and renewal workflows typically show ROI within 2-3 weeks of launch." },
  { q: "Is my client data secure?", a: "Yes. We're SOC 2 compliant and follow insurance industry data handling standards. Your policyholder data never trains AI models and is encrypted at rest and in transit." },
  { q: "What if I only need one or two automations?", a: "The Starter plan is designed for exactly that. Start with auto-responses and lead enrichment, then add more as you see results. No pressure to buy the full suite." },
  { q: "Can I cancel anytime?", a: "Yes. Month-to-month after an initial 3-month commitment. We keep you because the ROI is obvious, not because of a contract." },
  { q: "What makes this different from generic AI tools?", a: "We're built specifically for insurance agencies. Our workflows understand policy lifecycles, carrier appetite, lines of business, and agency operations. ChatGPT can't do that." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        </motion.div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="glass rounded-xl overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full px-6 py-4 text-left flex justify-between items-center">
                <span className="text-white font-medium">{f.q}</span>
                <span className="text-primary-400 ml-4 flex-shrink-0">{open === i ? "−" : "+"}</span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                    <div className="px-6 pb-4 text-gray-400 text-sm leading-relaxed">{f.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
