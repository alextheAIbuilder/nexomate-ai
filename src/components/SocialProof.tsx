export default function SocialProof() {
  const stats = [
    { value: "50+", label: "Agencies Automated" },
    { value: "$2.4M", label: "Revenue Recovered" },
    { value: "98%", label: "Client Retention" },
    { value: "4.9★", label: "Avg Satisfaction" },
  ];

  return (
    <section className="py-12 px-4 border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm text-gray-500 uppercase tracking-widest mb-8">
          Trusted by Independent Agencies Across the US
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">{s.value}</div>
              <div className="text-xs text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
