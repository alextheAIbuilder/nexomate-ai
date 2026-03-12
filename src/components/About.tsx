"use client";
import { motion } from "framer-motion";
import { BuildingOfficeIcon, AcademicCapIcon, TrophyIcon, UserGroupIcon } from "@heroicons/react/24/solid";

const teamMembers = [
  {
    name: "Michael Chen",
    role: "CEO & Co-Founder",
    bio: "Former VP of Digital Strategy at Liberty Mutual. Led automation initiatives that processed $2.8B in annual premiums. 15+ years transforming insurance operations.",
    credentials: ["MBA, Wharton", "CPCU Certified", "Ex-Liberty Mutual Executive"],
    linkedin: "#"
  },
  {
    name: "Sarah Rodriguez",
    role: "CTO & Co-Founder", 
    bio: "Ex-Google AI researcher specializing in insurance data models. Built machine learning systems used by 500K+ agents across North America.",
    credentials: ["PhD Computer Science, Stanford", "Ex-Google AI", "15 Patents in ML"],
    linkedin: "#"
  },
  {
    name: "David Thompson",
    role: "VP of Insurance Operations",
    bio: "30-year insurance veteran. Former agency owner, State Farm regional manager, and IIABA board member. The bridge between technology and real agency needs.",
    credentials: ["CIC, CRM Certified", "Ex-IIABA Board", "Founded 3 Successful Agencies"],
    linkedin: "#"
  },
  {
    name: "Jennifer Park",
    role: "Chief Customer Officer",
    bio: "Led customer success at InsureTech startups acquired by Progressive and Farmers. Obsessed with making complex technology feel simple for busy agents.",
    credentials: ["Customer Success Expert", "Ex-Progressive", "InsureTech Specialist"],
    linkedin: "#"
  }
];

const companyStats = [
  { icon: BuildingOfficeIcon, stat: "Founded 2018", label: "Deep Insurance Heritage" },
  { icon: UserGroupIcon, stat: "500+ Agencies", label: "Trust Our Platform" },
  { icon: TrophyIcon, stat: "98% Retention", label: "Client Satisfaction Rate" },
  { icon: AcademicCapIcon, stat: "$2.8B", label: "Premium Volume Processed" },
];

const values = [
  {
    title: "Insurance-First Thinking",
    description: "We don't build generic tools and hope they work for insurance. Every feature starts with real agency workflows, carrier requirements, and regulatory compliance."
  },
  {
    title: "Agents Know Best",
    description: "Our product roadmap is driven by practicing agents, not Silicon Valley assumptions. If it doesn't save time or make money for agencies, we don't build it."
  },
  {
    title: "Enterprise-Grade Reliability",
    description: "Insurance agencies trust us with their livelihood. We deliver bank-level security, 99.9% uptime, and white-glove support that understands your business."
  },
  {
    title: "ROI That Actually Matters",
    description: "We measure success in closed deals, retained clients, and hours saved—not vanity metrics. Our pricing is designed to generate clear, measurable returns."
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Company Mission */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
            Built by Insurance Experts, <span className="text-primary-600">For Insurance Experts</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              We founded NexomateAI with a simple belief: insurance agencies shouldn&apos;t have to choose between personal service and operational efficiency. The right AI automation doesn&apos;t replace the human touch—it amplifies it.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              After watching too many great agencies struggle with manual processes while tech-savvy competitors pulled ahead, we set out to build the automation platform we wished existed when we were running agencies ourselves.
            </p>
          </div>
        </motion.div>

        {/* Company Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {companyStats.map((item, i) => (
            <div key={i} className="text-center bg-gray-50 p-6 rounded-xl">
              <item.icon className="w-10 h-10 text-primary-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary-600 mb-1">{item.stat}</div>
              <div className="text-gray-600 text-sm">{item.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Team Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-900">Meet the Team Behind the Platform</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <div key={i} className="text-center group">
                {/* Profile Image Placeholder */}
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 mx-auto mb-4 flex items-center justify-center group-hover:scale-105 transition">
                  <UserGroupIcon className="w-12 h-12 text-primary-600" />
                </div>
                
                <h4 className="font-bold text-gray-900 mb-1">{member.name}</h4>
                <p className="text-primary-600 text-sm font-medium mb-3">{member.role}</p>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                
                <div className="space-y-1">
                  {member.credentials.map((cred, j) => (
                    <div key={j} className="text-xs text-gray-600 bg-gray-100 rounded px-2 py-1">
                      {cred}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Company Values */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.6, duration: 0.6 }}
          className="border-t border-gray-300 pt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-900">Our Core Principles</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Insurance Industry Focus */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center bg-primary-50 p-8 rounded-2xl"
        >
          <h3 className="text-xl font-bold mb-4 text-gray-900">Why Insurance-Specific Matters</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div>
              <h4 className="text-primary-600 font-semibold mb-2">We Speak Your Language</h4>
              <p className="text-gray-600 text-sm">LOB, E&S, renewal ratios, carrier appetite—we understand insurance operations because we&apos;ve lived them.</p>
            </div>
            <div>
              <h4 className="text-primary-600 font-semibold mb-2">Compliance by Design</h4>
              <p className="text-gray-600 text-sm">Built with state regulations, carrier requirements, and industry standards baked in from day one.</p>
            </div>
            <div>
              <h4 className="text-primary-600 font-semibold mb-2">Proven in the Field</h4>
              <p className="text-gray-600 text-sm">Every feature has been battle-tested by real agencies writing real business in competitive markets.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}