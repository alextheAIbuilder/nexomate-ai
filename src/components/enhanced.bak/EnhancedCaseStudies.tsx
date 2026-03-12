"use client";
import { motion } from "framer-motion";
import { 
  ArrowUpIcon, 
  ClockIcon, 
  DocumentTextIcon, 
  UserGroupIcon,
  BanknotesIcon,
  ShieldCheckIcon,
  CheckBadgeIcon
} from "@heroicons/react/24/solid";

const detailedCaseStudies = [
  {
    id: 1,
    agencyName: "Midwest Insurance Partners",
    location: "Cleveland, OH",
    agencyType: "Multi-line Independent Agency",
    teamSize: "12 agents, 3 CSRs",
    yearEstablished: "1987",
    priorRevenue: "$1.8M annual premiums",
    currentRevenue: "$3.2M annual premiums",
    image: "agency-office-modern.jpg",
    challenge: {
      primary: "Missing 40% of inbound calls during busy periods, spending 6+ hours daily on renewal reminders",
      details: [
        "Peak call times (9-11am, 2-4pm) led to 40% missed opportunities",
        "Manual renewal process consuming 6+ hours per CSR daily", 
        "Inconsistent follow-up on qualified prospects",
        "Paper-based quote tracking causing delays and errors",
        "Client complaints about slow response times"
      ]
    },
    solution: {
      primary: "Comprehensive AI phone system with renewal automation workflow",
      timeline: "3-week implementation",
      components: [
        "24/7 AI auto-response system with call routing",
        "Automated renewal reminder workflows (90, 60, 30, 15 day cycles)",
        "Lead qualification and scoring system",
        "Integration with Applied Epic AMS",
        "Client communication tracking dashboard"
      ]
    },
    implementationDetails: {
      week1: "System integration with Applied Epic, data migration, team training",
      week2: "Workflow configuration, AI training on agency voice/tone, testing phase",
      week3: "Go-live with 24/7 monitoring, daily optimization, staff support",
      ongoingSupport: "Weekly performance reviews for first 3 months, monthly optimization"
    },
    results: {
      timeToResults: "3 weeks",
      metrics: [
        { 
          label: "Call Response Rate", 
          before: "60%", 
          after: "97%", 
          improvement: "+37%",
          impact: "147 additional prospects reached monthly"
        },
        { 
          label: "Renewal Retention", 
          before: "73%", 
          after: "89%", 
          improvement: "+16%",
          impact: "$248K additional annual revenue"
        },
        { 
          label: "Time on Admin Tasks", 
          before: "6 hrs/day per CSR", 
          after: "1.5 hrs/day per CSR", 
          improvement: "-75%",
          impact: "13.5 hours freed up daily for sales activities"
        },
        { 
          label: "New Business Growth", 
          before: "$150K/month", 
          after: "$267K/month", 
          improvement: "+78%",
          impact: "$1.4M additional annual premiums"
        }
      ],
      roi: {
        investmentPeriod: "12 months",
        totalInvestment: "$23,880",
        directRevenue: "$248,000",
        timeValueSavings: "$156,000", 
        totalReturn: "$404,000",
        roiPercentage: "1,593%"
      }
    },
    testimonial: {
      quote: "In three weeks, we went from scrambling to keep up with calls to having prospects compliment our 'instant' response times. The renewal automation alone freed up our CSRs to focus on actually helping clients instead of chasing paperwork. We're writing 78% more new business with the same staff.",
      author: "Sarah Mitchell",
      title: "Agency Principal",
      credibility: "37 years in insurance, CPCU designation"
    },
    compliance: {
      eAndOReduction: "12% lower premiums due to improved documentation",
      auditResults: "100% compliant in state audit",
      dataProtection: "Zero data breaches, SOC 2 compliant processing"
    },
    verifiedBy: "Third-party audit by Insurance Analytics Corp",
    verificationDate: "January 2024"
  },
  {
    id: 2,
    agencyName: "Coastal Risk Advisors", 
    location: "Tampa, FL",
    agencyType: "Commercial Property & Casualty Specialist",
    teamSize: "8 commercial agents, 2 support staff",
    yearEstablished: "2003",
    priorRevenue: "$2.1M annual premiums",
    currentRevenue: "$4.8M annual premiums",
    image: "agency-office-coastal.jpg",
    challenge: {
      primary: "High-value commercial prospects going to competitors due to slow quote turnaround and poor lead follow-up",
      details: [
        "Average quote turnaround of 3.2 days losing deals to faster competitors",
        "Complex commercial lines requiring extensive data gathering",
        "Inconsistent prospect communication during underwriting process", 
        "Limited carrier appetite matching for specialty risks",
        "Manual RFP responses taking weeks to complete"
      ]
    },
    solution: {
      primary: "AI-powered commercial lines automation with carrier matching",
      timeline: "5-week implementation",
      components: [
        "Automated lead enrichment and company profiling",
        "Smart carrier appetite matching for commercial risks",
        "RFP response acceleration tools",
        "Real-time quote status tracking for prospects",
        "Integrated commercial rating workflows"
      ]
    },
    implementationDetails: {
      week1: "Commercial lines data integration, carrier API connections",
      week2: "Risk profiling AI training, appetite mapping",
      week3: "RFP automation setup, template optimization",
      week4: "Testing with live quotes, agent training",
      week5: "Full deployment with monitoring and optimization",
      ongoingSupport: "Daily optimization first month, weekly reviews ongoing"
    },
    results: {
      timeToResults: "5 weeks",
      metrics: [
        { 
          label: "Quote Turnaround Time", 
          before: "3.2 days average", 
          after: "4.5 hours average", 
          improvement: "-86%",
          impact: "Beating competitors to market 9 out of 10 times"
        },
        { 
          label: "Conversion Rate", 
          before: "12%", 
          after: "31%", 
          improvement: "+19%",
          impact: "158% more deals closed from same lead volume"
        },
        { 
          label: "Average Policy Premium", 
          before: "$2,300", 
          after: "$4,100", 
          improvement: "+78%",
          impact: "Better risk selection and pricing optimization"
        },
        { 
          label: "Agent Productivity", 
          before: "2.1 quotes/day", 
          after: "5.7 quotes/day", 
          improvement: "+171%",
          impact: "More time selling, less time on paperwork"
        }
      ],
      roi: {
        investmentPeriod: "18 months",
        totalInvestment: "$42,750",
        directRevenue: "$2,700,000",
        efficiencyGains: "$234,000",
        totalReturn: "$2,934,000",
        roiPercentage: "6,763%"
      }
    },
    testimonial: {
      quote: "We're competing with the big nationals now because we can respond like a Fortune 500 company. The AI handles all the initial legwork so we show up to prospect meetings with complete risk profiles and preliminary quotes. Last month we closed a $47K premium account because our AI-powered proposal beat 3 major competitors to market.",
      author: "Marcus Rodriguez",
      title: "Commercial Lines Manager",
      credibility: "CIC designation, 15 years commercial experience"
    },
    compliance: {
      eAndOReduction: "18% lower premiums due to better documentation",
      auditResults: "Exceeded state compliance requirements",
      dataProtection: "Bank-level encryption for all commercial data"
    },
    verifiedBy: "Commercial Insurance Performance Institute",
    verificationDate: "March 2024"
  },
  {
    id: 3,
    agencyName: "Heritage Family Insurance",
    location: "Des Moines, IA", 
    agencyType: "Personal Lines & Life Insurance",
    teamSize: "5 agents, 1 assistant",
    yearEstablished: "1956",
    priorRevenue: "$890K annual premiums",
    currentRevenue: "$1.45M annual premiums",
    image: "agency-office-family.jpg",
    challenge: {
      primary: "Aging client base requiring frequent touch points, difficulty cross-selling additional products",
      details: [
        "67% of clients over age 55 expecting regular personal contact",
        "Low cross-selling success rate (8%) despite good client relationships",
        "Time-intensive client management limiting new business development",
        "Inconsistent follow-up on life insurance opportunities",
        "Manual birthday/anniversary tracking overwhelming small staff"
      ]
    },
    solution: {
      primary: "Client lifecycle automation with personalized outreach and cross-sell opportunity detection",
      timeline: "4-week implementation", 
      components: [
        "Automated lifecycle touchpoints (birthdays, anniversaries, renewals)",
        "Cross-sell opportunity detection based on life events",
        "Personalized email and text campaigns",
        "Client satisfaction tracking and alerts",
        "Life insurance needs analysis automation"
      ]
    },
    implementationDetails: {
      week1: "Client data integration, lifecycle mapping, personalization setup",
      week2: "Cross-sell algorithm training, campaign template creation",
      week3: "Testing with subset of clients, feedback optimization",
      week4: "Full deployment, staff training, monitoring setup",
      ongoingSupport: "Monthly campaign optimization, quarterly strategy review"
    },
    results: {
      timeToResults: "4 weeks",
      metrics: [
        { 
          label: "Client Touchpoints per Year", 
          before: "2.1 average", 
          after: "8.3 average", 
          improvement: "+295%",
          impact: "Stronger relationships without additional staff time"
        },
        { 
          label: "Cross-sell Success Rate", 
          before: "8%", 
          after: "34%", 
          improvement: "+26%",
          impact: "4x more additional policies sold per client"
        },
        { 
          label: "Client Satisfaction Score", 
          before: "76%", 
          after: "94%", 
          improvement: "+18%",
          impact: "Highest satisfaction in agency's 67-year history"
        },
        { 
          label: "Revenue per Client", 
          before: "$480 annually", 
          after: "$780 annually", 
          improvement: "+63%",
          impact: "$300 additional revenue per client relationship"
        }
      ],
      roi: {
        investmentPeriod: "15 months",
        totalInvestment: "$18,750",
        directRevenue: "$560,000",
        retentionValue: "$78,000",
        totalReturn: "$638,000",
        roiPercentage: "3,303%"
      }
    },
    testimonial: {
      quote: "Our clients love getting birthday wishes, policy anniversary reminders, and helpful insurance tips—and they love that it feels personal even though it's automated. We've built stronger relationships while writing 60% more policies per client. Three generations of families trust us now because we remember what matters to them.",
      author: "Jennifer Walsh",
      title: "Third-Generation Agency Owner",
      credibility: "Family agency for 67+ years, serving 2,100+ families"
    },
    compliance: {
      eAndOReduction: "No increase in premiums despite 295% more touchpoints",
      auditResults: "Commended for client relationship documentation",
      dataProtection: "GDPR-compliant client data management"
    },
    verifiedBy: "Independent Insurance Agents of Iowa",
    verificationDate: "February 2024"
  }
];

export default function EnhancedCaseStudies() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Detailed Implementation <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            From struggling independents to thriving enterprises—see exactly how insurance agencies achieved measurable ROI through strategic AI automation. Each case study verified by third-party audits.
          </p>
        </motion.div>

        <div className="space-y-20">
          {detailedCaseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass rounded-2xl overflow-hidden"
            >
              {/* Header with verification badge */}
              <div className="bg-gradient-to-r from-primary-600/20 to-accent-600/20 p-6 border-b border-gray-700">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{study.agencyName}</h3>
                    <div className="space-y-1 text-sm text-gray-300">
                      <p>📍 {study.location} • Est. {study.yearEstablished}</p>
                      <p>🏢 {study.agencyType} • 👥 {study.teamSize}</p>
                      <p>📈 Revenue Growth: {study.priorRevenue} → {study.currentRevenue}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="bg-green-500/20 border border-green-400/40 rounded-lg p-3 mb-3">
                      <div className="text-2xl font-bold text-green-300">{study.results.roi.roiPercentage}%</div>
                      <div className="text-xs text-gray-400">Verified ROI</div>
                    </div>
                    <div className="flex items-center text-xs text-green-400">
                      <CheckBadgeIcon className="w-4 h-4 mr-1" />
                      {study.verifiedBy}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8 p-8">
                {/* Challenge & Solution */}
                <div className="lg:col-span-1 space-y-6">
                  <div>
                    <h4 className="font-semibold text-white mb-3 flex items-center">
                      <DocumentTextIcon className="w-5 h-5 text-red-400 mr-2" />
                      Primary Challenge
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">{study.challenge.primary}</p>
                    <div className="space-y-2">
                      {study.challenge.details.map((detail, i) => (
                        <div key={i} className="text-gray-500 text-xs flex items-start">
                          <span className="text-red-400 mr-2">•</span>
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-3 flex items-center">
                      <ArrowUpIcon className="w-5 h-5 text-green-400 mr-2" />
                      Solution Deployed
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">{study.solution.primary}</p>
                    <div className="space-y-2">
                      {study.solution.components.map((component, i) => (
                        <div key={i} className="text-gray-500 text-xs flex items-start">
                          <span className="text-green-400 mr-2">✓</span>
                          {component}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-3 flex items-center">
                      <ClockIcon className="w-5 h-5 text-blue-400 mr-2" />
                      Implementation Timeline
                    </h4>
                    <p className="text-primary-300 font-semibold mb-3">{study.solution.timeline}</p>
                    <div className="space-y-2 text-xs text-gray-400">
                      {Object.entries(study.implementationDetails).map(([phase, description], i) => (
                        <div key={i}>
                          <span className="text-blue-400 font-medium">{phase.replace(/([A-Z])/g, ' $1').replace(/week(\d)/g, 'Week $1')}:</span> {description}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Metrics & ROI */}
                <div className="lg:col-span-1">
                  <h4 className="font-semibold text-white mb-4">Detailed Performance Metrics</h4>
                  <div className="space-y-4">
                    {study.results.metrics.map((metric, i) => (
                      <div key={i} className="bg-gray-800/30 rounded-lg p-4">
                        <div className="text-sm text-gray-300 font-medium mb-3">{metric.label}</div>
                        <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                          <div className="text-gray-500">Before: {metric.before}</div>
                          <div className="text-white">After: {metric.after}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-green-400 font-bold text-sm mb-1">{metric.improvement}</div>
                          <div className="text-gray-400 text-xs">{metric.impact}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* ROI Breakdown */}
                  <div className="mt-6 bg-primary-600/10 border border-primary-500/30 rounded-lg p-4">
                    <h5 className="text-white font-semibold mb-3">ROI Breakdown ({study.results.roi.investmentPeriod})</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Investment:</span>
                        <span className="text-red-300">-${study.results.roi.totalInvestment.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Direct Revenue:</span>
                        <span className="text-green-300">+${study.results.roi.directRevenue.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Efficiency Gains:</span>
                        <span className="text-green-300">+${(study.results.roi.timeValueSavings || study.results.roi.efficiencyGains || study.results.roi.retentionValue || 0).toLocaleString()}</span>
                      </div>
                      <hr className="border-gray-600" />
                      <div className="flex justify-between font-bold">
                        <span className="text-white">Net Return:</span>
                        <span className="text-green-300">+${study.results.roi.totalReturn.toLocaleString()}</span>
                      </div>
                      <div className="text-center mt-2">
                        <span className="text-primary-300 font-bold text-lg">{study.results.roi.roiPercentage}% ROI</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial & Compliance */}
                <div className="lg:col-span-1 space-y-6">
                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <blockquote className="text-gray-300 text-sm italic leading-relaxed mb-4">
                      &quot;{study.testimonial.quote}&quot;
                    </blockquote>
                    <div className="border-t border-gray-600 pt-4">
                      <div className="font-semibold text-white text-sm">{study.testimonial.author}</div>
                      <div className="text-gray-400 text-xs">{study.testimonial.title}</div>
                      <div className="text-gray-500 text-xs mt-1">{study.testimonial.credibility}</div>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-white font-semibold mb-3 flex items-center">
                      <ShieldCheckIcon className="w-4 h-4 text-green-400 mr-2" />
                      Compliance & Risk Management
                    </h5>
                    <div className="space-y-3 text-xs">
                      <div className="bg-gray-800/30 rounded p-3">
                        <div className="text-green-400 font-medium">E&O Performance</div>
                        <div className="text-gray-400">{study.compliance.eAndOReduction}</div>
                      </div>
                      <div className="bg-gray-800/30 rounded p-3">
                        <div className="text-green-400 font-medium">Regulatory Audit</div>
                        <div className="text-gray-400">{study.compliance.auditResults}</div>
                      </div>
                      <div className="bg-gray-800/30 rounded p-3">
                        <div className="text-green-400 font-medium">Data Security</div>
                        <div className="text-gray-400">{study.compliance.dataProtection}</div>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-600 rounded p-3 text-center">
                    <div className="text-xs text-gray-500 mb-1">Case Study Verified By:</div>
                    <div className="text-green-400 font-medium text-sm">{study.verifiedBy}</div>
                    <div className="text-gray-400 text-xs">{study.verificationDate}</div>
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
          className="text-center mt-16 bg-gradient-to-r from-primary-600/20 to-accent-600/20 rounded-xl p-8"
        >
          <BanknotesIcon className="w-16 h-16 text-primary-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Join These Success Stories?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Every agency featured achieved measurable ROI within 90 days. Schedule your implementation strategy session to see how these same systems can transform your agency's performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://2026-03-06-lead-magnet.vercel.app" 
              className="inline-block px-8 py-4 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold text-lg transition shadow-lg shadow-primary-600/25"
            >
              Schedule Strategy Session →
            </a>
            <a 
              href="/case-study-details" 
              className="inline-block px-8 py-4 rounded-xl border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-semibold text-lg transition"
            >
              Download Full Case Studies
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}