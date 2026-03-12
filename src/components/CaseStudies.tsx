"use client";
import { motion } from "framer-motion";
import { ArrowUpIcon, ClockIcon, DocumentTextIcon, UserGroupIcon } from "@heroicons/react/24/solid";

const caseStudies = [
  {
    id: 1,
    agencyName: "Midwest Insurance Partners",
    location: "Cleveland, OH",
    agencyType: "Multi-line Independent Agency",
    teamSize: "12 agents, 3 CSRs",
    challenge: "Missing 40% of inbound calls during busy periods, spending 6+ hours daily on renewal reminders",
    solution: "Implemented AI auto-response system with renewal automation workflow",
    timeToResults: "3 weeks",
    metrics: [
      { label: "Call Response Rate", before: "60%", after: "97%", improvement: "+37%" },
      { label: "Renewal Retention", before: "73%", after: "89%", improvement: "+16%" },
      { label: "Time on Admin Tasks", before: "6 hrs/day", after: "1.5 hrs/day", improvement: "-75%" },
      { label: "Monthly Revenue Growth", before: "$0", after: "+$28K", improvement: "New" }
    ],
    quote: {
      text: "In three weeks, we went from scrambling to keep up with calls to having prospects compliment our &apos;instant&apos; response times. The renewal automation alone freed up our CSRs to focus on actually helping clients instead of chasing paperwork.",
      author: "Sarah Mitchell",
      title: "Agency Principal"
    },
    roi: "847%"
  },
  {
    id: 2,
    agencyName: "Coastal Risk Advisors",
    location: "Tampa, FL",
    agencyType: "Commercial Property Specialist",
    teamSize: "8 agents, 2 support staff",
    challenge: "High-value commercial prospects going to competitors due to slow quote turnaround and poor lead follow-up",
    solution: "Deployed lead enrichment system with automated prospect nurturing and quote workflow acceleration",
    timeToResults: "5 weeks",
    metrics: [
      { label: "Lead to Quote Time", before: "3.2 days", after: "4.5 hours", improvement: "-86%" },
      { label: "Conversion Rate", before: "12%", after: "31%", improvement: "+19%" },
      { label: "Average Policy Value", before: "$2,300", after: "$4,100", improvement: "+78%" },
      { label: "Agent Productivity", before: "2.1 quotes/day", after: "5.7 quotes/day", improvement: "+171%" }
    ],
    quote: {
      text: "We&apos;re closing deals with Fortune 500 companies now because we can respond like a Fortune 500 company. The AI handles all the initial legwork so we show up to prospect meetings with complete risk profiles and preliminary quotes. Game changer.",
      author: "Marcus Rodriguez",
      title: "Commercial Lines Manager"
    },
    roi: "1,240%"
  },
  {
    id: 3,
    agencyName: "Heritage Family Insurance",
    location: "Des Moines, IA",
    agencyType: "Personal Lines & Life Insurance",
    teamSize: "5 agents, 1 assistant",
    challenge: "Aging client base requiring frequent touch points, difficulty cross-selling additional products",
    solution: "Implemented client lifecycle automation with personalized outreach and cross-sell opportunity detection",
    timeToResults: "4 weeks",
    metrics: [
      { label: "Client Touchpoints", before: "2.1/year", after: "8.3/year", improvement: "+295%" },
      { label: "Cross-sell Success", before: "8%", after: "34%", improvement: "+26%" },
      { label: "Client Satisfaction", before: "76%", after: "94%", improvement: "+18%" },
      { label: "Revenue per Client", before: "$480", after: "$780", improvement: "+63%" }
    ],
    quote: {
      text: "Our clients love getting birthday wishes, policy anniversary reminders, and helpful insurance tips—and they love that it feels personal even though it&apos;s automated. We&apos;ve built stronger relationships while writing 60% more policies per client.",
      author: "Jennifer Walsh",
      title: "Agency Owner"
    },
    roi: "634%"
  }
];

export default function CaseStudies() {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
            Real Agencies, <span className="text-primary-600">Real Results</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            From struggling independents to thriving enterprises—see how insurance agencies across America are using AI automation to grow revenue and reclaim their time.
          </p>
        </motion.div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="grid lg:grid-cols-3 gap-8 p-8">
                {/* Agency Info & Image */}
                <div className="space-y-6">
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <UserGroupIcon className="w-16 h-16 text-primary-600 mx-auto mb-2" />
                      <p className="text-gray-600 text-sm">Professional Agency Photo</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{study.agencyName}</h3>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>📍 {study.location}</p>
                      <p>🏢 {study.agencyType}</p>
                      <p>👥 {study.teamSize}</p>
                    </div>
                  </div>

                  <div className="bg-primary-100 border border-primary-300 rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-700 mb-1">{study.roi}%</div>
                      <div className="text-xs text-gray-600">ROI in First Year</div>
                    </div>
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <DocumentTextIcon className="w-5 h-5 text-red-500 mr-2" />
                      Challenge
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{study.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <ArrowUpIcon className="w-5 h-5 text-green-500 mr-2" />
                      Solution Deployed
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{study.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <ClockIcon className="w-5 h-5 text-blue-500 mr-2" />
                      Time to Results
                    </h4>
                    <p className="text-primary-600 font-semibold">{study.timeToResults}</p>
                  </div>

                  <div className="bg-gray-100 rounded-lg p-4">
                    <blockquote className="text-gray-700 text-sm italic leading-relaxed mb-3">
                      &quot;{study.quote.text}&quot;
                    </blockquote>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 text-sm">{study.quote.author}</div>
                      <div className="text-gray-600 text-xs">{study.quote.title}</div>
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Key Metrics Improved</h4>
                  <div className="space-y-4">
                    {study.metrics.map((metric, i) => (
                      <div key={i} className="bg-gray-50 rounded-lg p-3">
                        <div className="text-sm text-gray-700 font-medium mb-2">{metric.label}</div>
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-gray-500">Before: {metric.before}</span>
                          <span className="text-green-600 font-semibold">{metric.improvement}</span>
                        </div>
                        <div className="text-right text-xs text-gray-900 mt-1">After: {metric.after}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">Ready to write your agency's success story?</p>
          <a 
            href="https://2026-03-06-lead-magnet.vercel.app" 
            className="inline-block px-8 py-4 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold text-lg transition shadow-lg"
          >
            See Your Agency's AI Transformation →
          </a>
        </motion.div>
      </div>
    </section>
  );
}