export default function SocialProof() {
  const stats = [
    { value: "50+", label: "Agencies Automated" },
    { value: "$2.4M", label: "Revenue Recovered" },
    { value: "98%", label: "Client Retention" },
    { value: "4.9★", label: "Avg Satisfaction" },
  ];

  return (
    <section className="py-16 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-transparent to-accent-500/5" />
      <div className="max-w-6xl mx-auto relative">
        <p className="text-center text-sm text-gray-500 uppercase tracking-[0.2em] mb-10 font-medium">
          Trusted by Independent Agencies Across the US
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="text-center glass rounded-xl p-6 glow-card hover:bg-white/[0.08] transition-colors duration-300">
              <div className="text-3xl sm:text-4xl font-bold gradient-text">{s.value}</div>
              <div className="text-xs text-gray-500 mt-2 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
