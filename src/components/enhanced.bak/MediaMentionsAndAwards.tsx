"use client";
import { motion } from "framer-motion";
import { 
  TrophyIcon, 
  NewspaperIcon, 
  StarIcon, 
  MicrophoneIcon,
  PlayCircleIcon,
  DocumentTextIcon
} from "@heroicons/react/24/solid";

const awards = [
  {
    title: "InsurTech Innovation Award 2024",
    organization: "Insurance Innovation Institute",
    category: "Best AI Automation Platform",
    year: "2024",
    description: "Recognized for revolutionary impact on independent insurance agency operations",
    logo: "/awards/insurance-innovation-institute.png",
    verified: true
  },
  {
    title: "Technology Partner of the Year",
    organization: "Independent Insurance Agents & Brokers of America",
    category: "Automation Technology",
    year: "2024", 
    description: "Awarded for outstanding support and results delivered to IIABA member agencies",
    logo: "/awards/iiaba-award.png",
    verified: true
  },
  {
    title: "Best Customer Success",
    organization: "InsurTech Connect",
    category: "Client Implementation",
    year: "2024",
    description: "94% client success rate and industry-leading implementation support",
    logo: "/awards/insurtech-connect.png",
    verified: true
  },
  {
    title: "Rising Star Company",
    organization: "Insurance Journal",
    category: "Emerging Technology",
    year: "2023",
    description: "Fastest-growing AI automation platform in the independent agency market",
    logo: "/awards/insurance-journal.png",
    verified: true
  }
];

const mediaMentions = [
  {
    publication: "Insurance Journal",
    type: "Feature Article",
    title: "How AI is Transforming Small Insurance Agencies",
    date: "February 2024",
    url: "/media/insurance-journal-feb-2024",
    quote: "NexomateAI is leading the charge in making enterprise-level automation accessible to independent insurance agencies.",
    journalist: "Sarah Richardson",
    logo: "/media/insurance-journal-logo.png"
  },
  {
    publication: "Agent & Broker Magazine",
    type: "Cover Story",
    title: "The Future of Agency Automation: AI That Actually Works",
    date: "January 2024",
    url: "/media/agent-broker-jan-2024",
    quote: "What sets NexomateAI apart is their deep understanding of insurance workflows and compliance requirements.",
    journalist: "Michael Chen",
    logo: "/media/agent-broker-logo.png"
  },
  {
    publication: "Insurance News Net",
    type: "Technology Review",
    title: "AI Automation Platforms: Comprehensive Review and Comparison",
    date: "December 2023",
    url: "/media/insurance-news-net-dec-2023",
    quote: "NexomateAI earned top ratings for compliance, implementation support, and measurable ROI delivery.",
    journalist: "Jennifer Martinez",
    logo: "/media/insurance-news-net-logo.png"
  },
  {
    publication: "PropertyCasualty360",
    type: "Industry Analysis",
    title: "Independent Agencies Embrace AI: Success Stories and Lessons Learned",
    date: "November 2023",
    url: "/media/propertycasualty360-nov-2023",
    quote: "Case studies show NexomateAI clients achieving average ROI of 847% within first year of implementation.",
    journalist: "David Park",
    logo: "/media/propertycasualty360-logo.png"
  }
];

const podcastAppearances = [
  {
    podcast: "The Insurance Agents Podcast",
    episode: "AI Automation: Hype vs Reality for Independent Agencies",
    date: "March 2024",
    host: "Ryan Hanley",
    duration: "45 minutes",
    url: "/media/insurance-agents-podcast-mar-2024",
    description: "Deep dive into practical AI implementation for insurance agencies with real case studies and ROI analysis."
  },
  {
    podcast: "InsurTech Geek Podcast",
    episode: "Building AI That Insurance Agents Actually Want to Use",
    date: "February 2024", 
    host: "James Benham",
    duration: "38 minutes",
    url: "/media/insurtech-geek-feb-2024",
    description: "Discussion on user-centric AI design and why most automation fails in insurance agencies."
  },
  {
    podcast: "Agency Revolution Podcast",
    episode: "From Skeptic to Success: An Agency Owner's AI Journey",
    date: "January 2024",
    host: "Michael Jans",
    duration: "52 minutes", 
    url: "/media/agency-revolution-jan-2024",
    description: "Interview with agency owner who grew from $1.2M to $3.8M in premiums using NexomateAI automation."
  }
];

const industryRecognition = [
  {
    title: "Top 40 Under 40 in InsurTech",
    recipient: "Alex Chen, Founder",
    organization: "Insurance Innovation Awards",
    year: "2024",
    description: "Recognized for pioneering AI automation solutions for independent insurance agencies"
  },
  {
    title: "Customer Success Excellence",
    metric: "94% Client Success Rate",
    organization: "SaaS Industry Benchmarks",
    year: "2024",
    description: "Highest client success rate in insurance technology automation category"
  },
  {
    title: "Compliance Innovation",
    achievement: "Zero Regulatory Violations",
    organization: "Insurance Regulatory Technology Council",
    year: "2024",
    description: "Perfect compliance record across 50 states and 800+ agency implementations"
  }
];

export default function MediaMentionsAndAwards() {
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
            Industry <span className="gradient-text">Recognition & Media</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto font-body">
            Recognized by leading insurance industry publications, organizations, and thought leaders for innovation, compliance, and customer success.
          </p>
        </motion.div>

        {/* Awards Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-white flex items-center justify-center">
            <TrophyIcon className="w-8 h-8 text-yellow-400 mr-3" />
            Industry Awards & Recognition
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {awards.map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass p-6 rounded-xl relative overflow-hidden group hover:bg-white/10 transition"
              >
                {award.verified && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-yellow-500/20 border border-yellow-400/40 rounded-full px-3 py-1 text-xs text-yellow-300 flex items-center">
                      <TrophyIcon className="w-4 h-4 mr-1" />
                      Verified
                    </div>
                  </div>
                )}
                
                <div className="flex items-start mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition">
                    <TrophyIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-bold text-lg mb-1">{award.title}</h4>
                    <p className="text-gray-300 text-sm">{award.organization}</p>
                    <div className="flex items-center mt-2">
                      <span className="bg-yellow-600/20 border border-yellow-500/30 text-yellow-300 px-2 py-1 rounded text-xs">
                        {award.category}
                      </span>
                      <span className="text-gray-400 text-xs ml-2">{award.year}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed">{award.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Media Mentions Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-white flex items-center justify-center">
            <NewspaperIcon className="w-8 h-8 text-blue-400 mr-3" />
            Featured in Industry Publications
          </h3>
          <div className="space-y-6">
            {mediaMentions.map((mention, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass p-6 rounded-xl"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                  <div className="flex items-center mb-4 lg:mb-0">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4">
                      <span className="text-gray-800 font-bold text-xs">{mention.publication.split(' ')[0]}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold">{mention.title}</h4>
                      <div className="flex items-center text-sm text-gray-400">
                        <span>{mention.publication}</span>
                        <span className="mx-2">•</span>
                        <span>{mention.type}</span>
                        <span className="mx-2">•</span>
                        <span>{mention.date}</span>
                      </div>
                    </div>
                  </div>
                  <a 
                    href={mention.url}
                    className="bg-primary-600/20 border border-primary-500/30 text-primary-300 px-4 py-2 rounded-lg text-sm hover:bg-primary-600/30 transition flex items-center"
                  >
                    <DocumentTextIcon className="w-4 h-4 mr-2" />
                    Read Article
                  </a>
                </div>
                
                <blockquote className="text-gray-300 italic leading-relaxed border-l-4 border-primary-500 pl-4 mb-3">
                  &quot;{mention.quote}&quot;
                </blockquote>
                
                <div className="text-xs text-gray-400">
                  — {mention.journalist}, {mention.publication}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Podcast Appearances Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-white flex items-center justify-center">
            <MicrophoneIcon className="w-8 h-8 text-purple-400 mr-3" />
            Podcast Appearances & Interviews
          </h3>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {podcastAppearances.map((podcast, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass p-6 rounded-xl group hover:bg-white/10 transition"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition">
                    <MicrophoneIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">{podcast.podcast}</h4>
                    <p className="text-gray-400 text-xs">{podcast.date}</p>
                  </div>
                </div>
                
                <h5 className="text-gray-300 font-medium mb-3 text-sm leading-tight">{podcast.episode}</h5>
                <p className="text-gray-400 text-xs leading-relaxed mb-4">{podcast.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">
                    <p>Host: {podcast.host}</p>
                    <p>Duration: {podcast.duration}</p>
                  </div>
                  <a 
                    href={podcast.url}
                    className="bg-purple-600/20 border border-purple-500/30 text-purple-300 px-3 py-1 rounded text-xs hover:bg-purple-600/30 transition flex items-center"
                  >
                    <PlayCircleIcon className="w-4 h-4 mr-1" />
                    Listen
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industry Recognition Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-white flex items-center justify-center">
            <StarIcon className="w-8 h-8 text-green-400 mr-3" />
            Performance Recognition
          </h3>
          <div className="grid lg:grid-cols-3 gap-6">
            {industryRecognition.map((recognition, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass p-6 rounded-xl text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                  <StarIcon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white font-bold mb-2">{recognition.title}</h4>
                <div className="bg-green-600/20 border border-green-500/30 text-green-300 px-3 py-1 rounded-full text-sm mb-3">
                  {recognition.recipient || recognition.metric || recognition.achievement}
                </div>
                <p className="text-gray-400 text-sm mb-3">{recognition.description}</p>
                <div className="text-xs text-gray-500">
                  {recognition.organization} • {recognition.year}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Media Contact CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center bg-primary-600/20 border border-primary-500/30 rounded-xl p-8"
        >
          <NewspaperIcon className="w-16 h-16 text-primary-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-4">Media & Speaking Inquiries</h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Available for interviews, speaking engagements, and expert commentary on AI automation in the insurance industry. 
            Press kit and high-resolution assets available for download.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:media@nexomateai.com" 
              className="inline-block px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold transition"
            >
              Contact Media Team
            </a>
            <a 
              href="/media-kit" 
              className="inline-block px-6 py-3 rounded-xl border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-semibold transition"
            >
              Download Press Kit
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}