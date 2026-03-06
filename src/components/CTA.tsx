"use client";

export default function CTA() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center glass rounded-3xl p-12 sm:p-16 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-primary-600/20 rounded-full blur-3xl" />
        <div className="relative">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Stop Leaving Money on the Table?</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Apply today. We&apos;ll review your agency within 24 hours and show you exactly which automations will have the biggest impact on your bottom line.
          </p>
          <a href="https://2026-03-06-lead-magnet.vercel.app"
            className="inline-block px-10 py-4 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold text-lg transition shadow-lg shadow-primary-600/25">
            Apply for NexomateAI →
          </a>
          <p className="text-gray-500 text-sm mt-4">No commitment required. See if your agency qualifies.</p>
        </div>
      </div>
    </section>
  );
}
