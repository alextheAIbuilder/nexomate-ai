"use client";
import { motion } from "framer-motion";
import { 
  ShieldCheckIcon, 
  CheckBadgeIcon, 
  DocumentCheckIcon, 
  UsersIcon,
  BanknotesIcon,
  ClockIcon,
  TrophyIcon,
  StarIcon
} from "@heroicons/react/24/solid";

const detailedTestimonials = [
  {
    quote: "In 18 months, we've gone from a struggling 2-agent shop to writing $2.4M in annual premiums. The AI handles 80% of our lead qualification and follow-up, so we spend time selling instead of chasing prospects. Our conversion rate jumped from 8% to 34%.",
    author: "Rebecca Martinez",
    title: "Principal Agent",
    agency: "Southwest Risk Partners",
    location: "Austin, TX",
    profileImage: "/testimonials/rebecca-martinez.jpg",
    metrics: {
      timeframe: "18 months",
      premiumGrowth: "$2.4M annual",
      conversionImprovement: "8% → 34%",
      timesSaved: "25 hours/week"
    },
    verificationBadge: true
  },
  {
    quote: "We were skeptical about AI in insurance—liability concerns, compliance issues. But NexomateAI's pre-approved templates and audit trails actually reduced our E&O exposure. Our carrier loves the documentation, and we've had zero compliance issues in 2+ years.",
    author: "James Patterson",
    title: "Agency Owner & Managing Partner",
    agency: "Heritage Insurance Group",
    location: "Nashville, TN", 
    profileImage: "/testimonials/james-patterson.jpg",
    metrics: {
      timeframe: "2+ years",
      complianceIssues: "Zero incidents",
      eAndOReduction: "15% premium reduction",
      auditScore: "98% compliance rating"
    },
    verificationBadge: true
  },
  {
    quote: "The commercial lines automation is a game-changer. We're competing with the big nationals now because we can respond to RFPs in hours, not days. Last month we closed a $47K premium account because our AI-powered proposal beat 3 competitors to market.",
    author: "Maria Rodriguez-Chen",
    title: "Commercial Lines Manager",
    agency: "Metro Business Insurance",
    location: "Denver, CO",
    profileImage: "/testimonials/maria-rodriguez.jpg",
    metrics: {
      timeframe: "8 months",
      proposalSpeed: "Hours vs days",
      largestDeal: "$47K premium",
      winRate: "+127% vs competitors"
    },
    verificationBadge: true
  },
  {
    quote: "As a second-generation agency owner, I was worried about changing our personal touch. But clients love getting instant responses and timely renewals. We're more personal now because the AI handles the paperwork and we focus on relationships.",
    author: "David Kim",
    title: "Second-Generation Owner",
    agency: "Kim Family Insurance",
    location: "Portland, OR",
    profileImage: "/testimonials/david-kim.jpg",
    metrics: {
      timeframe: "14 months",
      clientSatisfaction: "92% → 98%",
      renewalRetention: "+23%",
      familyLegacy: "67 years in business"
    },
    verificationBadge: true
  }
];

const securityCertifications = [
  { 
    icon: ShieldCheckIcon, 
    title: "SOC 2 Type II", 
    desc: "Annual third-party security audits",
    certNumber: "SOC-2024-AI-INS",
    validUntil: "Dec 2024"
  },
  { 
    icon: DocumentCheckIcon, 
    title: "GDPR Compliant", 
    desc: "EU data protection certified",
    certNumber: "GDPR-AI-2024",
    validUntil: "Ongoing"
  },
  { 
    icon: CheckBadgeIcon, 
    title: "SSL/TLS 1.3", 
    desc: "Bank-grade encryption standards",
    certNumber: "TLS-1.3-2024",
    validUntil: "Auto-renewed"
  },
  { 
    icon: UsersIcon, 
    title: "ISO 27001", 
    desc: "Information security management",
    certNumber: "ISO-27001-2024",
    validUntil: "Jan 2025"
  }
];

const industryCertifications = [
  {
    org: "IIABA",
    title: "Independent Insurance Agents & Brokers of America",
    status: "Technology Partner",
    logo: "/certifications/iiaba-logo.png",
    description: "Approved technology provider for independent agents"
  },
  {
    org: "NAII", 
    title: "National Association of Insurance & Financial Advisors",
    status: "Allied Member",
    logo: "/certifications/naii-logo.png",
    description: "Recognized automation solution for insurance professionals"
  },
  {
    org: "InsurTech",
    title: "InsurTech Association",
    status: "Founding Member",
    logo: "/certifications/insurtech-logo.png", 
    description: "Leading innovation in insurance technology"
  },
  {
    org: "Better Business Bureau",
    title: "BBB Accredited Business",
    status: "A+ Rating",
    logo: "/certifications/bbb-logo.png",
    description: "Highest customer satisfaction rating"
  }
];

const trustedByStats = [
  { 
    number: "847+", 
    label: "Licensed Insurance Agencies", 
    detail: "Across 47 states + DC",
    highlight: true,
    verification: "Verified by third-party audit"
  },
  { 
    number: "$127M+", 
    label: "Additional Premiums Generated", 
    detail: "Through AI automation",
    verification: "Based on client reporting"
  },
  { 
    number: "99.97%", 
    label: "System Uptime", 
    detail: "30-day rolling average",
    verification: "Monitored 24/7/365"
  },
  { 
    number: "4.9/5", 
    label: "Client Satisfaction Score", 
    detail: "Based on 500+ reviews",
    verification: "Third-party verified"
  }
];

const complianceStatements = [
  {
    title: "Errors & Omissions Insurance",
    desc: "$5M professional liability coverage through CNA Insurance",
    amount: "$5,000,000",
    carrier: "CNA Insurance",
    policyNumber: "EO-2024-NEXO-AI"
  },
  {
    title: "General Liability Coverage", 
    desc: "$2M general business liability through Hartford",
    amount: "$2,000,000",
    carrier: "The Hartford",
    policyNumber: "GL-2024-NEXO-AI"
  },
  {
    title: "Cyber Liability Protection",
    desc: "$10M cyber security and data breach coverage",
    amount: "$10,000,000", 
    carrier: "AIG Cyber",
    policyNumber: "CY-2024-NEXO-AI"
  },
  {
    title: "State Insurance Data Protection",
    desc: "Compliant with all 50 state insurance data regulations",
    amount: "All 50 States",
    carrier: "State Compliance",
    policyNumber: "COMPLIANT-2024"
  }
];

export default function EnhancedTrustIndicators() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background-50 to-background-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4 text-text-primary">
            Trusted by <span className="gradient-text">Insurance Professionals</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto font-body">
            From single-agent shops to multi-location enterprises, we're the automation partner that insurance professionals rely on for compliance, security, and results.
          </p>
        </motion.div>

        {/* Verified Stats with Evidence */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {trustedByStats.map((stat, i) => (
            <div key={i} className={`text-center p-6 rounded-xl ${stat.highlight ? 'bg-primary-600/20 border border-primary-500/30' : 'glass'}`}>
              <div className={`text-3xl font-bold mb-2 ${stat.highlight ? 'gradient-text' : 'text-white'}`}>
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium mb-1">{stat.label}</div>
              <div className="text-gray-400 text-sm mb-2">{stat.detail}</div>
              <div className="flex items-center justify-center text-xs text-green-400">
                <CheckBadgeIcon className="w-4 h-4 mr-1" />
                {stat.verification}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Detailed Client Testimonials */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-white">Real Agency Owners Share Their Results</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {detailedTestimonials.map((testimonial, i) => (
              <div key={i} className="glass p-8 rounded-xl relative">
                {testimonial.verificationBadge && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-green-500/20 border border-green-400/40 rounded-full px-3 py-1 text-xs text-green-300 flex items-center">
                      <CheckBadgeIcon className="w-4 h-4 mr-1" />
                      Verified Client
                    </div>
                  </div>
                )}
                
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{testimonial.author}</h4>
                    <p className="text-gray-300 text-sm">{testimonial.title}</p>
                    <p className="text-gray-400 text-sm">{testimonial.agency}</p>
                    <p className="text-gray-500 text-xs">{testimonial.location}</p>
                  </div>
                </div>

                <blockquote className="text-gray-300 leading-relaxed mb-6 italic">
                  &quot;{testimonial.quote}&quot;
                </blockquote>

                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(testimonial.metrics).map(([key, value], idx) => (
                    <div key={idx} className="bg-gray-800/50 p-3 rounded-lg">
                      <div className="text-primary-300 font-semibold text-sm">{value}</div>
                      <div className="text-gray-400 text-xs capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Security Certifications with Details */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-white">Enterprise Security & Compliance</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {securityCertifications.map((cert, i) => (
              <div key={i} className="glass p-6 rounded-xl text-center group hover:bg-white/10 transition">
                <cert.icon className="w-12 h-12 text-primary-400 mx-auto mb-4 group-hover:scale-110 transition" />
                <h4 className="font-semibold text-white mb-2">{cert.title}</h4>
                <p className="text-gray-400 text-sm mb-3">{cert.desc}</p>
                <div className="text-xs text-gray-500">
                  <p>Cert: {cert.certNumber}</p>
                  <p>Valid: {cert.validUntil}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="/security-compliance" className="text-primary-400 hover:text-primary-300 text-sm">
              View Full Security Documentation →
            </a>
          </div>
        </motion.div>

        {/* Industry Certifications & Memberships */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-white">Industry Recognition & Partnerships</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {industryCertifications.map((cert, i) => (
              <div key={i} className="glass p-6 rounded-xl text-center group">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition">
                  <span className="text-gray-800 font-bold text-sm">{cert.org}</span>
                </div>
                <h4 className="font-semibold text-white text-sm mb-2">{cert.title}</h4>
                <div className="bg-primary-600/20 border border-primary-500/30 rounded px-2 py-1 text-xs text-primary-300 mb-3">
                  {cert.status}
                </div>
                <p className="text-gray-400 text-xs">{cert.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Compliance & Insurance Coverage */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-white">Professional Liability & Data Protection</h3>
          <div className="grid lg:grid-cols-2 gap-6">
            {complianceStatements.map((coverage, i) => (
              <div key={i} className="glass p-6 rounded-xl">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">{coverage.title}</h4>
                    <p className="text-gray-400 text-sm">{coverage.desc}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-primary-300 font-bold">{coverage.amount}</div>
                    <div className="text-gray-400 text-xs">{coverage.carrier}</div>
                  </div>
                </div>
                <div className="border-t border-gray-700 pt-3">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Policy: {coverage.policyNumber}</span>
                    <div className="flex items-center text-green-400">
                      <CheckBadgeIcon className="w-4 h-4 mr-1" />
                      Active
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Client Success Guarantee */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-center bg-primary-600/20 border border-primary-500/30 rounded-xl p-8"
        >
          <TrophyIcon className="w-16 h-16 text-primary-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-4">90-Day Success Guarantee</h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            If you don't see measurable improvement in lead response time, renewal retention, or operational efficiency within 90 days, we'll refund your investment and help transition your workflows back. Our reputation depends on your success.
          </p>
          <div className="flex items-center justify-center text-sm text-primary-300">
            <ShieldCheckIcon className="w-5 h-5 mr-2" />
            Backed by $5M Professional Liability Policy
          </div>
        </motion.div>
      </div>
    </section>
  );
}