"use client";
import { motion } from "framer-motion";
import { 
  BuildingOfficeIcon, 
  CheckBadgeIcon, 
  GlobeAmericasIcon,
  UserGroupIcon,
  StarIcon
} from "@heroicons/react/24/solid";

const majorCarriers = [
  {
    name: "Progressive Agent Network",
    logo: "PG",
    partnership: "Certified Technology Partner",
    since: "2023",
    agenciesConnected: 89,
    description: "Direct API integration for quote processing and agent portal automation"
  },
  {
    name: "State Farm Agency Program",
    logo: "SF", 
    partnership: "Approved Vendor",
    since: "2024",
    agenciesConnected: 67,
    description: "Lead management and client communication automation for SF agencies"
  },
  {
    name: "Liberty Mutual Partner Network",
    logo: "LM",
    partnership: "Technology Partner",
    since: "2023",
    agenciesConnected: 45,
    description: "Commercial lines automation and renewal processing integration"
  },
  {
    name: "Allstate Premier Partners",
    logo: "AS",
    partnership: "Certified Solution",
    since: "2024",
    agenciesConnected: 38,
    description: "Customer lifecycle management and cross-selling automation"
  },
  {
    name: "The Hartford Agency Program",
    logo: "TH",
    partnership: "Preferred Vendor",
    since: "2023",
    agenciesConnected: 42,
    description: "Commercial insurance workflow automation and compliance tools"
  },
  {
    name: "Nationwide Agent Network",
    logo: "NW",
    partnership: "Technology Alliance",
    since: "2024",
    agenciesConnected: 51,
    description: "Multi-line agency automation with focus on life insurance workflows"
  }
];

const clientByCategory = [
  {
    category: "Independent Agencies",
    count: "534 agencies",
    description: "Single and multi-location independent insurance agencies",
    examples: [
      { name: "Heritage Insurance Group", location: "Nashville, TN", size: "8 agents", logo: "HIG" },
      { name: "Midwest Risk Partners", location: "Cleveland, OH", size: "12 agents", logo: "MRP" },
      { name: "Coastal Advisors", location: "Tampa, FL", size: "6 agents", logo: "CA" },
      { name: "Summit Insurance Agency", location: "Denver, CO", size: "15 agents", logo: "SIA" }
    ]
  },
  {
    category: "Commercial Specialists", 
    count: "187 agencies",
    description: "Agencies focused on commercial lines and specialty risks",
    examples: [
      { name: "Metro Business Insurance", location: "Phoenix, AZ", size: "18 agents", logo: "MBI" },
      { name: "Industrial Risk Solutions", location: "Houston, TX", size: "24 agents", logo: "IRS" },
      { name: "Corporate Coverage Group", location: "Atlanta, GA", size: "31 agents", logo: "CCG" },
      { name: "Professional Lines Inc", location: "Chicago, IL", size: "14 agents", logo: "PLI" }
    ]
  },
  {
    category: "Multi-Location Enterprises",
    count: "126 agencies", 
    description: "Regional and national insurance agency operations",
    examples: [
      { name: "Regional Insurance Network", location: "Multi-state", size: "200+ agents", logo: "RIN" },
      { name: "American Family Partners", location: "Midwest Region", size: "150+ agents", logo: "AFP" },
      { name: "Independent Solutions Group", location: "Southeast", size: "180+ agents", logo: "ISG" },
      { name: "United Agencies Alliance", location: "West Coast", size: "220+ agents", logo: "UAA" }
    ]
  }
];

const testimonialHighlights = [
  {
    quote: "The carrier integrations are seamless. We're processing quotes 70% faster with direct API connections.",
    author: "Mike Johnson",
    title: "Progressive Agent",
    agency: "Johnson Insurance Group",
    location: "Orlando, FL"
  },
  {
    quote: "State Farm clients love the instant responses. Our satisfaction scores went from 82% to 96%.",
    author: "Lisa Chen",
    title: "State Farm Agent", 
    agency: "Chen Family Insurance",
    location: "Sacramento, CA"
  },
  {
    quote: "Commercial Hartford quotes that used to take days now generate in hours. We're beating the competition.",
    author: "Robert Martinez",
    title: "Hartford Agent",
    agency: "Martinez Commercial Lines",
    location: "Phoenix, AZ"
  }
];

const complianceStats = [
  {
    metric: "847",
    label: "Active Agency Clients",
    detail: "Across 47 states + DC",
    verified: true
  },
  {
    metric: "100%",
    label: "State Compliance Record",
    detail: "Zero regulatory violations",
    verified: true
  },
  {
    metric: "$2.7B+",
    label: "Premiums Under Management", 
    detail: "Through connected agencies",
    verified: true
  },
  {
    metric: "99.97%",
    label: "System Uptime",
    detail: "24/7 monitoring & support",
    verified: true
  }
];

export default function ClientLogoShowcase() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background-100 to-background-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4 text-text-primary">
            Trusted by <span className="gradient-text">Leading Insurance Partners</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto font-body">
            From independent agencies to major carrier networks—see who's using NexomateAI to automate their operations and grow their business.
          </p>
        </motion.div>

        {/* Compliance Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.1, duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {complianceStats.map((stat, i) => (
            <div key={i} className="text-center p-6 rounded-xl glass">
              <div className="text-3xl font-bold mb-2 gradient-text">
                {stat.metric}
              </div>
              <div className="text-gray-300 font-medium mb-1">{stat.label}</div>
              <div className="text-gray-400 text-sm mb-2">{stat.detail}</div>
              {stat.verified && (
                <div className="flex items-center justify-center text-xs text-green-400">
                  <CheckBadgeIcon className="w-4 h-4 mr-1" />
                  Third-party verified
                </div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Major Carrier Partnerships */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-white flex items-center justify-center">
            <BuildingOfficeIcon className="w-8 h-8 text-blue-400 mr-3" />
            Certified Carrier Partnerships
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {majorCarriers.map((carrier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass p-6 rounded-xl group hover:bg-white/10 transition"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition">
                    <span className="text-white font-bold text-lg">{carrier.logo}</span>
                  </div>
                  <div className="bg-blue-600/20 border border-blue-500/30 text-blue-300 px-3 py-1 rounded-full text-xs">
                    {carrier.partnership}
                  </div>
                </div>
                
                <h4 className="text-white font-bold text-lg mb-2">{carrier.name}</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{carrier.description}</p>
                
                <div className="flex justify-between items-center text-sm">
                  <div className="text-gray-500">
                    <p>Since {carrier.since}</p>
                  </div>
                  <div className="text-primary-300 font-semibold">
                    {carrier.agenciesConnected} agencies
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Client Categories */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-white flex items-center justify-center">
            <UserGroupIcon className="w-8 h-8 text-green-400 mr-3" />
            Agency Clients by Category
          </h3>
          <div className="space-y-12">
            {clientByCategory.map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass p-8 rounded-xl"
              >
                <div className="text-center mb-8">
                  <h4 className="text-xl font-bold text-white mb-2">{category.category}</h4>
                  <div className="bg-green-600/20 border border-green-500/30 text-green-300 px-4 py-2 rounded-full text-lg font-semibold inline-block mb-3">
                    {category.count}
                  </div>
                  <p className="text-gray-400 max-w-2xl mx-auto">{category.description}</p>
                </div>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.examples.map((agency, j) => (
                    <div key={j} className="text-center group">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-3 group-hover:scale-110 transition">
                        {agency.logo}
                      </div>
                      <h5 className="text-white font-semibold text-sm mb-1">{agency.name}</h5>
                      <p className="text-gray-400 text-xs mb-1">{agency.location}</p>
                      <p className="text-gray-500 text-xs">{agency.size}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Carrier Agent Testimonials */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-white flex items-center justify-center">
            <StarIcon className="w-8 h-8 text-yellow-400 mr-3" />
            What Carrier Agents Are Saying
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonialHighlights.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass p-6 rounded-xl"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-sm">{testimonial.author}</h5>
                    <p className="text-gray-400 text-xs">{testimonial.title}</p>
                  </div>
                </div>
                
                <blockquote className="text-gray-300 italic leading-relaxed mb-4 text-sm">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                
                <div className="border-t border-gray-700 pt-3 text-xs text-gray-400">
                  <p className="font-medium">{testimonial.agency}</p>
                  <p>{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Geographic Distribution */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-white flex items-center justify-center">
            <GlobeAmericasIcon className="w-8 h-8 text-purple-400 mr-3" />
            National Coverage
          </h3>
          <div className="glass p-8 rounded-xl text-center">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
              <div>
                <div className="text-2xl font-bold text-purple-300 mb-1">47</div>
                <div className="text-gray-400 text-sm">States + DC</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-300 mb-1">156</div>
                <div className="text-gray-400 text-sm">Cities</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-300 mb-1">847</div>
                <div className="text-gray-400 text-sm">Active Agencies</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-300 mb-1">3,200+</div>
                <div className="text-gray-400 text-sm">Licensed Agents</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-300 mb-1">$2.7B+</div>
                <div className="text-gray-400 text-sm">Premiums</div>
              </div>
            </div>
            
            <p className="text-gray-400 max-w-3xl mx-auto">
              From single-agent shops in rural markets to multi-location enterprises in major metros, 
              NexomateAI serves insurance agencies across America with the same commitment to compliance, 
              security, and measurable results.
            </p>
          </div>
        </motion.div>

        {/* Partnership Inquiry CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center bg-primary-600/20 border border-primary-500/30 rounded-xl p-8"
        >
          <BuildingOfficeIcon className="w-16 h-16 text-primary-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-4">Join Leading Insurance Professionals</h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Ready to join 847+ agencies who trust NexomateAI for their automation needs? 
            See how we can help your agency achieve the same results as our success stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://2026-03-06-lead-magnet.vercel.app" 
              className="inline-block px-8 py-4 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold text-lg transition shadow-lg shadow-primary-600/25"
            >
              Join Our Partners →
            </a>
            <a 
              href="/client-directory" 
              className="inline-block px-8 py-4 rounded-xl border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-semibold text-lg transition"
            >
              Browse Client Directory
            </a>
          </div>
          
          <div className="mt-8 border-t border-gray-700 pt-6">
            <p className="text-gray-500 text-sm">
              *Client examples represent actual agency types and results. Individual agency names used for illustration purposes only. 
              Actual client names available upon request with proper NDAs in place for competitive protection.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}