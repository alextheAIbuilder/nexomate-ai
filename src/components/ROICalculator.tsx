"use client";
import { useState } from "react";

export default function ROICalculator() {
  const [employees, setEmployees] = useState(3);
  const [hoursManual, setHoursManual] = useState(15);
  const [hourlyRate, setHourlyRate] = useState(25);
  const [missedLeads, setMissedLeads] = useState(10);

  const monthlyLaborCost = employees * hoursManual * hourlyRate * 4;
  const missedRevenue = missedLeads * 1200 * 4;
  const totalMonthlyWaste = monthlyLaborCost + missedRevenue;
  const annualWaste = totalMonthlyWaste * 12;

  return (
    <section id="roi-calculator" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-500/10 rounded-full mb-4">ROI Calculator</span>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 tracking-tight">How Much Is Manual Work Costing You?</h2>
          <p className="text-gray-400">Adjust the sliders to match your agency. The numbers might surprise you.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-8 sm:p-10 glow-blue">
          <div className="grid sm:grid-cols-2 gap-8 mb-10">
            {[
              { label: "Team members doing manual tasks", value: employees, set: setEmployees, min: 1, max: 20, display: `${employees}` },
              { label: "Hours/week on repetitive work (per person)", value: hoursManual, set: setHoursManual, min: 5, max: 40, display: `${hoursManual} hrs` },
              { label: "Average hourly cost (salary + overhead)", value: hourlyRate, set: setHourlyRate, min: 15, max: 75, display: `$${hourlyRate}/hr` },
              { label: "Leads lost per week (missed calls, slow follow-up)", value: missedLeads, set: setMissedLeads, min: 0, max: 50, display: `${missedLeads} leads` },
            ].map((item, i) => (
              <div key={i}>
                <label className="block text-sm text-gray-400 mb-3">{item.label}</label>
                <input type="range" min={item.min} max={item.max} value={item.value}
                  onChange={e => item.set(+e.target.value)} className="w-full" />
                <div className="text-right text-primary-400 font-bold mt-1">{item.display}</div>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 pt-8 grid sm:grid-cols-3 gap-6 text-center">
            <div className="glass rounded-xl p-5">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">Monthly Labor Waste</div>
              <div className="text-2xl font-bold text-white">${monthlyLaborCost.toLocaleString()}</div>
            </div>
            <div className="glass rounded-xl p-5">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">Monthly Missed Revenue</div>
              <div className="text-2xl font-bold text-white">${missedRevenue.toLocaleString()}</div>
            </div>
            <div className="rounded-xl p-5 bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/20">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">Annual Cost of Inaction</div>
              <div className="text-3xl font-bold gradient-text">${annualWaste.toLocaleString()}</div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a href="https://2026-03-06-lead-magnet.vercel.app"
              className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-400 hover:to-accent-400 text-white font-semibold text-lg transition-all duration-300 shadow-xl shadow-primary-500/20">
              Stop Losing Money — Get Your Free Audit →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
