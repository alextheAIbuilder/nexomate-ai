export default function Integrations() {
  const integrations = [
    { name: "Applied Epic", desc: "Full AMS sync" },
    { name: "Vertafore AMS360", desc: "Two-way data flow" },
    { name: "HawkSoft", desc: "Policy & client sync" },
    { name: "EZLynx", desc: "Rating & management" },
    { name: "QQCatalyst", desc: "Workflow automation" },
    { name: "NowCerts", desc: "Cloud AMS bridge" },
    { name: "Google Workspace", desc: "Email & calendar" },
    { name: "Microsoft 365", desc: "Outlook & Teams" },
  ];

  return (
    <section className="py-20 px-4" style={{ background: "#0d1225" }}>
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
          INTEGRATIONS
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Works With Your Existing Tools
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          No rip-and-replace. NexomateAI connects to the AMS and tools your agency already uses.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {integrations.map((item) => (
            <div
              key={item.name}
              className="rounded-xl p-5 text-center transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, rgba(59,130,246,0.08), rgba(139,92,246,0.08))",
                border: "1px solid rgba(59,130,246,0.15)",
              }}
            >
              <div
                className="w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center text-lg font-bold text-white"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                }}
              >
                {item.name.charAt(0)}
              </div>
              <h3 className="text-white font-semibold text-sm mb-1">{item.name}</h3>
              <p className="text-gray-500 text-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
