"use client";

const pains = [
  {
    img: "/images/pain-missed-call.png",
    title: "30% of Calls Go Unanswered",
    description: "Every missed call is a missed policy. Your competitors pick up. With AI auto-responses, you never miss a lead — even at 2 AM.",
    color: "from-red-500/20 to-red-600/5",
    border: "border-red-500/10",
  },
  {
    img: "/images/pain-spreadsheet.png",
    title: "Renewals Tracked in Spreadsheets",
    description: "If your renewal process lives in Excel, policies are slipping through the cracks. Automated tracking catches every one, 90 days out.",
    color: "from-orange-500/20 to-orange-600/5",
    border: "border-orange-500/10",
  },
  {
    img: "/images/pain-data-entry.png",
    title: "Manual Entry Across 4+ Systems",
    description: "AMS, rater, CRM, carrier portals — same data, typed four times. AI syncs it all so your team enters it once (or never).",
    color: "from-yellow-500/20 to-yellow-600/5",
    border: "border-yellow-500/10",
  },
  {
    img: "/images/pain-expensive.png",
    title: "Overpaying for CRM ($300-500/mo)",
    description: "Enterprise CRMs charge a fortune for features you don't use. Our automations plug into what you already have — no expensive swap needed.",
    color: "from-purple-500/20 to-purple-600/5",
    border: "border-purple-500/10",
  },
];

export default function PainPoints() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-red-400 bg-red-500/10 rounded-full mb-4">The Problem</span>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 tracking-tight">Sound Familiar?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            These problems cost independent agencies thousands every month. Most accept it as &ldquo;just how it is.&rdquo; It doesn&apos;t have to be.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pains.map((p, i) => (
            <div key={i} className={`rounded-2xl overflow-hidden bg-gradient-to-b ${p.color} border ${p.border} hover:scale-[1.03] transition-all duration-300 group`}>
              <div className="h-40 overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-white">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
