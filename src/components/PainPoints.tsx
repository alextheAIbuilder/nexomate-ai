"use client";
import { motion } from "framer-motion";

const pains = [
  {
    icon: "📞",
    title: "30% of Calls Go Unanswered",
    description: "Every missed call is a missed policy. Your competitors pick up. With AI auto-responses, you never miss a lead—even at 2 AM.",
  },
  {
    icon: "📊",
    title: "Renewals Tracked in Spreadsheets",
    description: "If your renewal process lives in Excel, policies are slipping through the cracks. Automated renewal tracking catches every one, 90 days out.",
  },
  {
    icon: "🔄",
    title: "Manual Entry Across 4+ Systems",
    description: "AMS, rater, CRM, carrier portals—same data, typed four times. AI pulls, syncs, and updates so your team enters it once (or never).",
  },
];

export default function PainPoints() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Sound Familiar?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            These problems cost independent agencies thousands every month. Most accept it as &ldquo;just how it is.&rdquo; It doesn&apos;t have to be.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {pains.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              className="glass rounded-2xl p-8 hover:bg-white/10 transition group">
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{p.title}</h3>
              <p className="text-gray-400 leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
