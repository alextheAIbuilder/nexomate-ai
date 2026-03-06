"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ROICalculator() {
  const [employees, setEmployees] = useState(3);
  const [hoursManual, setHoursManual] = useState(15);
  const [hourlyRate, setHourlyRate] = useState(25);
  const [missedLeads, setMissedLeads] = useState(10);

  const monthlyLaborCost = employees * hoursManual * hourlyRate * 4;
  const missedRevenue = missedLeads * 1200 * 4; // avg policy value $1200/yr
  const totalMonthlyWaste = monthlyLaborCost + missedRevenue;
  const annualWaste = totalMonthlyWaste * 12;

  return (
    <section id="roi-calculator" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How Much Is Manual Work Costing You?</h2>
          <p className="text-gray-400">Adjust the sliders to match your agency. The numbers might surprise you.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="glass rounded-2xl p-8 sm:p-10">
          <div className="grid sm:grid-cols-2 gap-8 mb-10">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Team members doing manual tasks</label>
              <input type="range" min={1} max={20} value={employees} onChange={e => setEmployees(+e.target.value)}
                className="w-full accent-primary-500" />
              <div className="text-right text-primary-400 font-semibold">{employees}</div>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Hours/week spent on repetitive work (per person)</label>
              <input type="range" min={5} max={40} value={hoursManual} onChange={e => setHoursManual(+e.target.value)}
                className="w-full accent-primary-500" />
              <div className="text-right text-primary-400 font-semibold">{hoursManual} hrs</div>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Average hourly cost (salary + overhead)</label>
              <input type="range" min={15} max={75} value={hourlyRate} onChange={e => setHourlyRate(+e.target.value)}
                className="w-full accent-primary-500" />
              <div className="text-right text-primary-400 font-semibold">${hourlyRate}/hr</div>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Leads lost per week (missed calls, slow follow-up)</label>
              <input type="range" min={0} max={50} value={missedLeads} onChange={e => setMissedLeads(+e.target.value)}
                className="w-full accent-primary-500" />
              <div className="text-right text-primary-400 font-semibold">{missedLeads} leads</div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-sm text-gray-400 mb-1">Monthly labor waste</div>
              <div className="text-2xl font-bold text-white">${monthlyLaborCost.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-1">Monthly missed revenue</div>
              <div className="text-2xl font-bold text-white">${missedRevenue.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-1">Annual cost of inaction</div>
              <div className="text-3xl font-bold gradient-text">${annualWaste.toLocaleString()}</div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a href="https://2026-03-06-lead-magnet.vercel.app" className="inline-block px-8 py-3 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold transition">
              Start Saving →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
