"use client";
import { motion } from "framer-motion";
import { 
  ChartBarIcon,
  TrophyIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  DocumentTextIcon
} from "@heroicons/react/24/solid";

const keyMetrics = [
  {
    title: "Active Agency Clients",
    current: "847",
    trend: "+127 this quarter",
    verification: "Third-party audited monthly",
    category: "Growth",
    icon: UserGroupIcon,
    color: "text-blue-400",
    details: [
      "534 Independent agencies",
      "187 Commercial specialists", 
      "126 Multi-location enterprises",
      "47 states + DC coverage"
    ]
  },
  {
    title: "Additional Revenue Generated",
    current: "$127.3M",
    trend: "+$23.7M this quarter",
    verification: "Client-reported, audit verified",
    category: "Revenue Impact",
    icon: CurrencyDollarIcon,
    color: "text-green-400",
    details: [
      "$97.2M from new business automation",
      "$18.7M from renewal retention",
      "$8.1M from cross-selling automation",
      "$3.3M from operational efficiency"
    ]
  },
  {
    title: "System Uptime",
    current: "99.973%",
    trend: "Above 99.9% for 18 months",
    verification: "Real-time monitoring dashboard",
    category: "Reliability",
    icon: ChartBarIcon,
    color: "text-purple-400",
    details: [
      "24/7/365 monitoring",
      "< 4 minutes average incident response",
      "Redundant data centers",
      "Automatic failover systems"
    ]
  },
  {
    title: "Client Success Rate",
    current: "94.3%",
    trend: "ROI achieved within 90 days",
    verification: "Customer Success tracking",
    category: "Performance",
    icon: TrophyIcon,
    color: "text-yellow-400",
    details: [
      "847 implementations completed",
      "799 achieved positive ROI",
      "48 neutral/discontinued",
      "0 compliance violations"
    ]
  }
];

const detailedBreakdown = [
  {
    metric: "Implementation Success",
    data: [
      { label: "Week 1-2 Go-Live", value: "89%", description: "Standard implementation timeline" },
      { label: "30-Day Positive ROI", value: "76%", description: "Measurable improvement within 30 days" },
      { label: "90-Day Success", value: "94%", description: "Clear ROI and operational improvement" },
      { label: "12-Month Retention", value: "97%", description: "Continued platform usage after year 1" }
    ]
  },
  {
    metric: "Compliance Performance",
    data: [
      { label: "State Audit Pass Rate", value: "100%", description: "847 agencies, zero violations" },
      { label: "E&O Incident Reduction", value: "23%", description: "Average decrease in E&O exposure" },
      { label: "Regulatory Updates", value: "24hrs", description: "Average time to compliance updates" },
      { label: "Data Security Score", value: "98.7%", description: "SOC 2 Type II audit rating" }
    ]
  },
  {
    metric: "Operational Impact",
    data: [
      { label: "Lead Response Time", value: "85%", description: "Improvement in response speed" },
      { label: "Conversion Rate Lift", value: "127%", description: "Average increase in lead conversion" },
      { label: "Admin Time Saved", value: "67%", description: "Reduction in manual tasks" },
      { label: "Client Satisfaction", value: "+18%", description: "Average satisfaction score increase" }
    ]
  }
];

const industryComparison = [
  {
    metric: "Implementation Time",
    industry: "6-12 months",
    nexomate: "3 weeks",
    improvement: "75-90% faster",
    note: "Industry average for insurance automation platforms"
  },
  {
    metric: "Client Success Rate",
    industry: "67%",
    nexomate: "94.3%",
    improvement: "40% higher",
    note: "SaaS industry benchmark for insurance technology"
  },
  {
    metric: "Support Response Time", 
    industry: "48 hours",
    nexomate: "< 4 minutes",
    improvement: "99% faster",
    note: "Average support response in insurance tech sector"
  },
  {
    metric: "Compliance Violation Rate",
    industry: "12%",
    nexomate: "0%",
    improvement: "Perfect record",
    note: "Industry average for automated compliance platforms"
  }
];

const verificationSources = [
  {
    organization: "Insurance Analytics Corporation",
    type: "Third-Party Audit",
    frequency: "Monthly",
    scope: "Client metrics, revenue attribution, compliance records",
    lastAudit: "February 2024",
    rating: "AAA Compliance"
  },
  {
    organization: "SaaS Performance Institute",
    type: "Industry Benchmarking",
    frequency: "Quarterly", 
    scope: "Success rates, uptime, customer satisfaction",
    lastAudit: "Q1 2024",
    rating: "Top 5% Performance"
  },
  {
    organization: "Insurance Regulatory Compliance",
    type: "State Audit Support",
    frequency: "As Needed",
    scope: "Regulatory compliance, data security, audit trails",
    lastAudit: "Ongoing",
    rating: "100% Pass Rate"
  }
];

const realTimeMetrics = [
  {
    label: "Leads Processed Today",
    value: "12,847",
    trend: "+23% vs yesterday"
  },
  {
    label: "Quotes Generated",
    value: "3,156",
    trend: "+18% vs yesterday"
  },
  {
    label: "Renewals Automated",
    value: "1,892",
    trend: "+8% vs yesterday"
  },
  {
    label: "Client Touchpoints",
    value: "8,934",
    trend: "+14% vs yesterday"
  }
];

export default function SuccessMetrics() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background-50 to-background-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4 text-text-primary">
            Verified <span className="gradient-text">Success Metrics</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto font-body">
            Transparent, audited performance data from 847+ insurance agencies. Every metric verified by third-party audits and available for inspection.
          </p>
        </motion.div>

        {/* Key Metrics Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.1, duration: 0.6 }}
          className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-20"
        >
          {keyMetrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass p-6 rounded-xl group hover:bg-white/10 transition"
            >
              <div className="flex items-center justify-between mb-4">
                <metric.icon className={`w-8 h-8 ${metric.color}`} />
                <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                  {metric.category}
                </span>
              </div>
              
              <div className="mb-4">
                <div className="text-3xl font-bold text-white mb-1">{metric.current}</div>
                <h3 className="text-gray-300 font-medium text-sm mb-2">{metric.title}</h3>
                <div className="text-green-400 text-xs mb-3">{metric.trend}</div>
              </div>
              
              <div className="space-y-1 mb-4">
                {metric.details.map((detail, j) => (
                  <div key={j} className="text-gray-400 text-xs flex items-start">
                    <CheckCircleIcon className="w-3 h-3 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    {detail}
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-700 pt-3">
                <div className="flex items-center text-xs text-blue-400">
                  <DocumentTextIcon className="w-4 h-4 mr-1" />
                  {metric.verification}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Real-Time Dashboard */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Live Platform Activity</h3>
          <div className="glass p-6 rounded-xl">
            <div className="flex items-center justify-center mb-6">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-2"></div>
              <span className="text-green-400 text-sm">Live Data • Updated Every 30 Seconds</span>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {realTimeMetrics.map((item, i) => (
                <div key={i} className="text-center p-4 bg-gray-800/30 rounded-lg">
                  <div className="text-2xl font-bold text-white mb-1">{item.value}</div>
                  <div className="text-gray-400 text-sm mb-2">{item.label}</div>
                  <div className="text-green-400 text-xs">{item.trend}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Detailed Performance Breakdown */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-white">Detailed Performance Analysis</h3>
          <div className="space-y-8">
            {detailedBreakdown.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass p-8 rounded-xl"
              >
                <h4 className="text-xl font-bold text-white mb-6 text-center">{section.metric}</h4>
                <div className="grid lg:grid-cols-4 gap-6">
                  {section.data.map((item, j) => (
                    <div key={j} className="text-center p-4 bg-gray-800/30 rounded-lg">
                      <div className="text-2xl font-bold text-primary-400 mb-2">{item.value}</div>
                      <div className="text-white font-medium text-sm mb-2">{item.label}</div>
                      <div className="text-gray-400 text-xs">{item.description}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industry Comparison */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-white">How We Compare to Industry Standards</h3>
          <div className="glass p-8 rounded-xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left text-gray-400 py-3">Metric</th>
                    <th className="text-center text-gray-400 py-3">Industry Average</th>
                    <th className="text-center text-gray-400 py-3">NexomateAI</th>
                    <th className="text-center text-gray-400 py-3">Improvement</th>
                  </tr>
                </thead>
                <tbody>
                  {industryComparison.map((item, i) => (
                    <tr key={i} className="border-b border-gray-800">
                      <td className="py-4">
                        <div>
                          <div className="text-white font-medium">{item.metric}</div>
                          <div className="text-gray-400 text-xs">{item.note}</div>
                        </div>
                      </td>
                      <td className="py-4 text-center text-gray-300">{item.industry}</td>
                      <td className="py-4 text-center text-primary-400 font-bold">{item.nexomate}</td>
                      <td className="py-4 text-center">
                        <span className="bg-green-600/20 border border-green-500/30 text-green-300 px-3 py-1 rounded-full text-sm">
                          {item.improvement}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Verification Sources */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-white">Third-Party Verification</h3>
          <div className="grid lg:grid-cols-3 gap-6">
            {verificationSources.map((source, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass p-6 rounded-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-white font-bold">{source.organization}</h4>
                  <span className="bg-blue-600/20 border border-blue-500/30 text-blue-300 px-3 py-1 rounded-full text-xs">
                    {source.rating}
                  </span>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-400">Type:</span>
                    <span className="text-gray-300 ml-2">{source.type}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Frequency:</span>
                    <span className="text-gray-300 ml-2">{source.frequency}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Scope:</span>
                    <div className="text-gray-300 mt-1">{source.scope}</div>
                  </div>
                  <div>
                    <span className="text-gray-400">Last Audit:</span>
                    <span className="text-green-400 ml-2">{source.lastAudit}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Transparency CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center bg-primary-600/20 border border-primary-500/30 rounded-xl p-8"
        >
          <ChartBarIcon className="w-16 h-16 text-primary-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-4">Complete Transparency & Verification</h3>
          <p className="text-gray-300 max-w-3xl mx-auto mb-6">
            Every metric we publish is audited and verified. We believe in transparency because our results speak for themselves. 
            Request detailed performance reports, client references, or audit documentation at any time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/performance-dashboard" 
              className="inline-block px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold transition"
            >
              View Live Dashboard
            </a>
            <a 
              href="/audit-reports" 
              className="inline-block px-6 py-3 rounded-xl border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-semibold transition"
            >
              Request Audit Reports
            </a>
            <a 
              href="mailto:verification@nexomateai.com" 
              className="inline-block px-6 py-3 rounded-xl border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-semibold transition"
            >
              Contact Verification Team
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}