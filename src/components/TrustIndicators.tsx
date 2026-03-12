"use client";
import { motion } from "framer-motion";
import { ShieldCheckIcon, CheckBadgeIcon, DocumentCheckIcon, UsersIcon } from "@heroicons/react/24/solid";

const certifications = [
  { icon: ShieldCheckIcon, title: "SOC 2 Type II", desc: "Enterprise-grade security certified" },
  { icon: DocumentCheckIcon, title: "GDPR Compliant", desc: "Data protection & privacy assured" },
  { icon: CheckBadgeIcon, title: "SSL Encrypted", desc: "256-bit encryption for all data" },
  { icon: UsersIcon, title: "HIPAA Ready", desc: "Health insurance data compliant" },
];

const stats = [
  { number: "500+", label: "Insurance Agencies Trust Us", highlight: true },
  { number: "2M+", label: "Leads Processed Monthly" },
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "24/7", label: "White-Glove Support" },
];

const clientLogos = [
  { name: "Liberty Mutual Partner Agency", logo: "LM" },
  { name: "State Farm Agency Network", logo: "SF" },
  { name: "Allstate Premier Partner", logo: "AS" },
  { name: "Progressive Agent Program", logo: "PG" },
  { name: "Nationwide Agency", logo: "NW" },
  { name: "Farmers Insurance Group", logo: "FI" },
];

export default function TrustIndicators() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Trust Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4 text-gray-900">
            Trusted by <span className="text-primary-600">Insurance Leaders</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto font-body">
            From independent agencies to multi-location enterprises, we&apos;re the automation partner that insurance professionals rely on.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, i) => (
            <div key={i} className={`text-center p-6 rounded-xl bg-white shadow-md ${stat.highlight ? 'ring-2 ring-primary-500 ring-opacity-50' : ''}`}>
              <div className={`text-3xl font-bold mb-2 ${stat.highlight ? 'text-primary-600' : 'text-gray-900'}`}>
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Security Certifications */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-900">Enterprise Security Standards</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, i) => (
              <div key={i} className="bg-white p-6 rounded-xl text-center group hover:shadow-lg transition shadow-md">
                <cert.icon className="w-12 h-12 text-primary-600 mx-auto mb-4 group-hover:scale-110 transition" />
                <h4 className="font-semibold text-gray-900 mb-2">{cert.title}</h4>
                <p className="text-gray-600 text-sm">{cert.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Client Logos */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.6, duration: 0.6 }}
          className="border-t border-gray-300 pt-12"
        >
          <p className="text-center text-gray-600 mb-8">Agencies powered by NexomateAI</p>
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((client, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 rounded-lg bg-white shadow-md flex items-center justify-center text-primary-600 font-bold text-xl mx-auto mb-2 group-hover:shadow-lg transition">
                  {client.logo}
                </div>
                <p className="text-xs text-gray-500">{client.name}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-xs mt-6">
            *Representative agency types. Individual results may vary. Agency names shown for illustration purposes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}