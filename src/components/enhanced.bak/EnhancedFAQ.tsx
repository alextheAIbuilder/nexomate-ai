"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheckIcon, 
  DocumentCheckIcon, 
  BanknotesIcon, 
  ClockIcon,
  UserGroupIcon,
  ExclamationTriangleIcon,
  CheckBadgeIcon
} from "@heroicons/react/24/solid";

const faqCategories = [
  {
    title: "Compliance & Liability",
    icon: ShieldCheckIcon,
    color: "text-red-400",
    faqs: [
      { 
        q: "How do you ensure AI communications comply with state insurance regulations?", 
        a: "All automated communications use pre-approved templates that comply with state insurance regulations across all 50 states. We maintain template libraries reviewed by insurance regulatory attorneys and updated for regulatory changes. Every message includes required disclaimers, licensing information, and opt-out mechanisms. You retain full approval control over all client-facing communications.",
        compliance: "50-state regulatory compliance verified"
      },
      { 
        q: "What about E&O liability when AI handles client communications?", 
        a: "Our platform actually reduces E&O exposure through consistent, compliant communication and detailed audit trails. All AI interactions are logged with timestamps, client consent records, and regulatory compliance verification. We provide comprehensive E&O documentation and work directly with major insurance carriers' risk management teams. Many clients report 10-15% E&O premium reductions due to improved documentation and compliance.",
        compliance: "E&O risk reduction documentation provided"
      },
      { 
        q: "How do you handle HIPAA compliance for health insurance data?", 
        a: "We're HIPAA-ready with Business Associate Agreements (BAA), encrypted PHI handling, and audit trail logging. All health insurance data is processed in HIPAA-compliant data centers with role-based access controls. We provide detailed compliance documentation for state health insurance audits and maintain SOC 2 Type II certification specifically covering healthcare data processing.",
        compliance: "HIPAA BAA included, SOC 2 Type II certified"
      },
      { 
        q: "What happens during state insurance audits or regulatory reviews?", 
        a: "We provide comprehensive audit support including detailed communication logs, compliance verification reports, and regulatory documentation. Our platform generates automatic compliance reports for state audits. We've supported 50+ successful state audits with zero compliance violations. Our legal team provides audit assistance and regulatory correspondence support at no additional charge.",
        compliance: "100% audit success rate, free audit support"
      },
      { 
        q: "How do you ensure agent licensing compliance across states?", 
        a: "Our system verifies agent licensing status and restricts communications to properly licensed jurisdictions. We maintain integrations with state licensing databases and automatically flag licensing renewals. Cross-border client communications include appropriate licensing disclaimers and referral protocols to licensed agents in the client's state.",
        compliance: "Real-time licensing verification and compliance"
      }
    ]
  },
  {
    title: "Data Security & Privacy",
    icon: DocumentCheckIcon,
    color: "text-blue-400",
    faqs: [
      { 
        q: "Where is our client data stored and how is it protected?", 
        a: "Client data is stored in SOC 2 Type II certified data centers with bank-grade encryption (AES-256 at rest, TLS 1.3 in transit). Data is geographically distributed across multiple secure facilities with 24/7 monitoring. We never store data outside the United States and provide detailed data location documentation for compliance requirements.",
        compliance: "US-only data storage, SOC 2 Type II certified"
      },
      { 
        q: "Do you use our client data to train AI models?", 
        a: "Absolutely not. Your client data is never used for AI training or shared with third parties. We use isolated processing environments with strict data segregation. All AI processing uses anonymized, synthetic training data specifically developed for insurance workflows. We provide contractual guarantees and technical documentation of data isolation.",
        compliance: "Contractual guarantee: zero data training use"
      },
      { 
        q: "What cyber security insurance do you carry?", 
        a: "We maintain $10M cyber liability coverage through AIG specifically covering AI systems and insurance data processing. Coverage includes data breach response, business interruption, and client notification costs. We also carry $5M professional liability and $2M general liability coverage. Full insurance certificates available for agency risk management review.",
        compliance: "$10M cyber liability, $5M professional liability"
      },
      { 
        q: "How do you handle data breaches or security incidents?", 
        a: "We have a comprehensive incident response plan with 1-hour detection, 4-hour containment, and 24-hour client notification protocols. Our security team includes certified incident responders and forensic analysts. We provide immediate breach notification, forensic investigation support, and client communication assistance. Zero data breaches in our 3+ year operating history.",
        compliance: "1-hour detection, 24-hour notification protocol"
      },
      { 
        q: "Can we control what data is shared with the AI system?", 
        a: "Yes, you have granular control over data sharing. You can specify which data fields, client segments, and communication types the AI can access. All data sharing is opt-in by default with role-based permissions. You can exclude sensitive clients, restrict PII access, and maintain full audit logs of data usage.",
        compliance: "Granular data controls, opt-in default settings"
      }
    ]
  },
  {
    title: "Implementation & Operations",
    icon: ClockIcon,
    color: "text-green-400",
    faqs: [
      { 
        q: "Do we need to change our current AMS or CRM systems?", 
        a: "No system changes required. We integrate seamlessly with Applied Epic, HawkSoft, AMS360, QQCatalyst, Salesforce, and 50+ other platforms through certified API connections. Implementation preserves your existing workflows while adding AI automation layers. Zero downtime during integration with parallel processing during transition.",
        compliance: "50+ AMS integrations, zero downtime deployment"
      },
      { 
        q: "What's the actual timeline from contract to go-live?", 
        a: "Standard implementation is 21 business days: Week 1 (integration and data sync), Week 2 (workflow configuration and training), Week 3 (go-live with monitoring). Complex agencies may require 4-6 weeks. We provide daily progress updates, dedicated project management, and guaranteed go-live dates with service level commitments.",
        compliance: "21-day standard implementation, SLA guaranteed"
      },
      { 
        q: "What level of training and support do you provide?", 
        a: "Comprehensive training includes live onboarding sessions, role-specific training for agents/CSRs/managers, video libraries, and documentation. Ongoing support includes dedicated Customer Success Manager, 24/7 technical support, monthly optimization reviews, and quarterly business reviews. We also provide industry best practices and compliance updates.",
        compliance: "24/7 support, dedicated success management"
      },
      { 
        q: "How do you handle system downtime or technical failures?", 
        a: "We maintain 99.97% uptime with redundant systems, automatic failover, and 24/7 monitoring. In rare outages, we provide immediate notification, status updates every 30 minutes, and fallback procedures to maintain operations. We offer SLA credits for any downtime exceeding our 99.9% guarantee.",
        compliance: "99.97% uptime, SLA credits for downtime"
      },
      { 
        q: "Can we start with specific workflows and add more later?", 
        a: "Absolutely. Most agencies start with auto-responses and lead management, then add renewal automation, cross-selling, and advanced analytics. You can upgrade modules anytime with no setup fees. Our modular approach allows you to see ROI on basic features before expanding to comprehensive automation.",
        compliance: "Modular implementation, no upgrade fees"
      }
    ]
  },
  {
    title: "ROI & Business Impact",
    icon: BanknotesIcon,
    color: "text-yellow-400",
    faqs: [
      { 
        q: "What's the typical ROI timeline and how is it measured?", 
        a: "Most agencies see positive ROI within 30-45 days. We track lead response improvement (immediate), conversion rate increases (2-3 weeks), and revenue growth (4-6 weeks). Our average client breaks even in month 2 and achieves 600%+ ROI by year-end. We provide detailed ROI reporting with before/after metrics and third-party verification available.",
        compliance: "30-45 day ROI, third-party verification available"
      },
      { 
        q: "How do you prove the additional revenue came from AI automation?", 
        a: "We implement detailed attribution tracking with before/after performance baselines. Our analytics identify AI-assisted leads, automated follow-ups that convert, and retention improvements from automated touchpoints. We provide monthly ROI reports with specific revenue attribution and can facilitate third-party performance audits.",
        compliance: "Detailed attribution tracking, audit-ready reporting"
      },
      { 
        q: "What happens if we don't see the promised results?", 
        a: "We offer a 90-day performance guarantee. If you don't see measurable improvement in lead response time, conversion rates, or operational efficiency within 90 days, we'll refund your investment and help transition your workflows back. Our client success rate is 94% within the first 90 days.",
        compliance: "90-day performance guarantee, 94% success rate"
      },
      { 
        q: "How does pricing scale as our agency grows?", 
        a: "Our plans grow with your success. Starter ($1,999/month) handles agencies up to $3M premiums. Growth ($3,999/month) scales to $10M premiums. Enterprise (custom pricing) for larger operations. No per-agent fees or surprise charges. Many clients fund upgrades with additional revenue generated by the platform.",
        compliance: "Scalable pricing, no per-agent fees"
      },
      { 
        q: "Can you provide references from similar agencies?", 
        a: "Yes, we can connect you with similar agencies who've achieved measurable results. We have references across all agency types: independent agents, commercial specialists, personal lines agencies, and multi-location enterprises. Reference agencies are pre-qualified for similar size, market, and challenges to provide relevant insights.",
        compliance: "Qualified references available, similar agency types"
      }
    ]
  }
];

export default function EnhancedFAQ() {
  const [open, setOpen] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="faq" className="py-24 px-4 bg-background-100">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4 text-text-primary">
            Insurance Industry <span className="gradient-text">Concerns Addressed</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto font-body">
            Comprehensive answers to compliance, security, liability, and implementation questions from insurance industry decision-makers.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {faqCategories.map((category, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(i)}
              className={`flex items-center px-6 py-3 rounded-xl font-medium transition ${
                activeCategory === i 
                  ? 'bg-primary-600 text-white' 
                  : 'glass text-gray-300 hover:bg-white/10'
              }`}
            >
              <category.icon className={`w-5 h-5 mr-2 ${activeCategory === i ? 'text-white' : category.color}`} />
              {category.title}
            </button>
          ))}
        </motion.div>

        {/* FAQ Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-4"
        >
          {faqCategories[activeCategory].faqs.map((faq, i) => {
            const faqId = `${activeCategory}-${i}`;
            return (
              <div key={faqId} className="card-light rounded-xl overflow-hidden hover:shadow-lg transition-all">
                <button 
                  onClick={() => setOpen(open === faqId ? null : faqId)} 
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-background-100 transition-colors"
                >
                  <span className="text-text-primary font-medium font-body pr-4">{faq.q}</span>
                  <span className="text-primary-500 flex-shrink-0 text-xl font-display font-bold">
                    {open === faqId ? "−" : "+"}
                  </span>
                </button>
                {open === faqId && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <div className="bg-background-100/50 rounded-lg p-4">
                      <p className="text-text-secondary text-sm leading-relaxed font-body mb-4">
                        {faq.a}
                      </p>
                      <div className="flex items-center text-xs text-green-400 bg-green-500/10 border border-green-500/30 rounded px-3 py-2">
                        <CheckBadgeIcon className="w-4 h-4 mr-2" />
                        <span className="font-medium">{faq.compliance}</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </motion.div>

        {/* Compliance Guarantee */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-500/30 rounded-xl p-8 text-center"
        >
          <div className="flex justify-center mb-4">
            <div className="bg-green-500/20 border border-green-400/40 rounded-full p-4">
              <ShieldCheckIcon className="w-12 h-12 text-green-400" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Compliance & Risk Management Guarantee</h3>
          <p className="text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed">
            We stand behind our compliance commitment with a comprehensive guarantee. If our platform causes any regulatory violations, 
            compliance issues, or increases your E&O exposure, we'll provide immediate remediation, legal support, and coverage for 
            any resulting penalties or premium increases. Backed by $15M professional and cyber liability insurance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/5 rounded-lg p-4">
              <ExclamationTriangleIcon className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-white font-semibold">Zero Violations</div>
              <div className="text-gray-400 text-sm">3+ years, 800+ agencies</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <DocumentCheckIcon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-white font-semibold">Legal Support</div>
              <div className="text-gray-400 text-sm">Included with all plans</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <BanknotesIcon className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="text-white font-semibold">$15M Coverage</div>
              <div className="text-gray-400 text-sm">Professional & cyber liability</div>
            </div>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">Still have questions about compliance, security, or implementation?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://2026-03-06-lead-magnet.vercel.app" 
              className="inline-block px-8 py-4 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold text-lg transition shadow-lg shadow-primary-600/25"
            >
              Schedule Compliance Review →
            </a>
            <a 
              href="mailto:compliance@nexomateai.com" 
              className="inline-block px-8 py-4 rounded-xl border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-semibold text-lg transition"
            >
              Email Compliance Team
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}