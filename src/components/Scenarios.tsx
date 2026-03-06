"use client";
import { motion } from "framer-motion";

const scenarios = [
  {
    title: "The After-Hours Lead",
    before: "A prospect calls at 7:30 PM about commercial auto insurance. Voicemail. They call the next agency on Google.",
    after: "AI answers instantly, qualifies the lead, captures fleet size and current carrier, and books a meeting for 9 AM. Producer walks in with a warm lead ready to quote.",
  },
  {
    title: "The Forgotten Renewal",
    before: "A $15,000 commercial policy lapses because the renewal reminder was buried in a spreadsheet. The client moves to a competitor.",
    after: "Automated workflow flags the renewal 90 days out, sends personalized outreach at 60 and 30 days, and alerts the account manager if no response by day 21.",
  },
  {
    title: "The Cross-Sell Opportunity",
    before: "An auto-only client also owns a home. Nobody notices for 2 years.",
    after: "AI scans your book, identifies mono-line clients with cross-sell potential, and triggers a personalized email sequence. Revenue per client goes up without cold calling.",
  },
];

export default function Scenarios() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Automation Could Do for Your Agency</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Real scenarios. Not fake testimonials—just what&apos;s possible when you stop doing everything manually.</p>
        </motion.div>
        <div className="space-y-8">
          {scenarios.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-white mb-4">{s.title}</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <div className="text-red-400/80 text-xs font-semibold uppercase tracking-wider mb-2">Without Automation</div>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.before}</p>
                </div>
                <div>
                  <div className="text-emerald-400/80 text-xs font-semibold uppercase tracking-wider mb-2">With NexomateAI</div>
                  <p className="text-gray-300 text-sm leading-relaxed">{s.after}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
