"use client";

const scenarios = [
  {
    title: "The After-Hours Lead",
    before: "A prospect calls at 7:30 PM about commercial auto insurance. Voicemail. They call the next agency on Google.",
    after: "AI answers instantly, qualifies the lead, captures fleet size and current carrier, and books a meeting for 9 AM.",
  },
  {
    title: "The Forgotten Renewal",
    before: "A $15,000 commercial policy lapses because the renewal reminder was buried in a spreadsheet.",
    after: "Automated workflow flags the renewal 90 days out, sends personalized outreach, and alerts the account manager.",
  },
  {
    title: "The Cross-Sell Opportunity",
    before: "An auto-only client also owns a home. Nobody notices for 2 years.",
    after: "AI scans your book, identifies mono-line clients, and triggers a personalized email sequence.",
  },
];

export default function BeforeAfter() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 rounded-full mb-4">The Transformation</span>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 tracking-tight">Before & After Automation</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Real scenarios — not fake testimonials. Just what&apos;s possible when you stop doing everything manually.</p>
        </div>

        {/* Visual comparison */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          <div className="relative rounded-2xl overflow-hidden border border-red-500/20 group hover:border-red-500/40 transition-all duration-300">
            <img src="/images/before-chaos.png" alt="Before automation" className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="inline-block px-2 py-0.5 bg-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest rounded mb-2">Without Automation</div>
              <p className="text-white font-semibold text-lg">Drowning in spreadsheets, sticky notes, and missed calls</p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-emerald-500/20 group hover:border-emerald-500/40 transition-all duration-300">
            <img src="/images/after-clean.png" alt="After automation" className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="inline-block px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest rounded mb-2">With NexomateAI</div>
              <p className="text-white font-semibold text-lg">Everything automated, nothing falls through the cracks</p>
            </div>
          </div>
        </div>

        {/* Scenario cards */}
        <div className="space-y-4">
          {scenarios.map((s, i) => (
            <div key={i} className="glass rounded-2xl p-8 hover:border-primary-500/20 transition-all duration-300 hover:bg-white/[0.03]">
              <h3 className="text-lg font-semibold text-white mb-4">{s.title}</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-1 rounded-full bg-red-500/40" />
                  <div>
                    <div className="text-red-400/80 text-xs font-bold uppercase tracking-widest mb-2">Before</div>
                    <p className="text-gray-400 text-sm leading-relaxed">{s.before}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-1 rounded-full bg-emerald-500/40" />
                  <div>
                    <div className="text-emerald-400/80 text-xs font-bold uppercase tracking-widest mb-2">After</div>
                    <p className="text-gray-300 text-sm leading-relaxed">{s.after}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
