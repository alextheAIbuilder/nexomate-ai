"use client";

const steps = [
  { step: "01", title: "Apply", desc: "Tell us about your agency—size, lines of business, current tech stack, and biggest bottlenecks. We'll assess fit within 24 hours." },
  { step: "02", title: "Plan", desc: "We map your workflows and design automations specific to your agency. No cookie-cutter setups. You approve every workflow before we build." },
  { step: "03", title: "Build & Launch", desc: "We build, test, and deploy your automations. Full training for your team. Live in 14 days—with ongoing support after launch." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-400">Three steps. Fourteen days. Fully operational.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="relative text-center">
              <div className="text-6xl font-bold text-primary-600/20 mb-4">{s.step}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed">{s.desc}</p>
              {i < 2 && <div className="hidden md:block absolute top-8 -right-4 text-primary-600/30 text-3xl">→</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
