export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-4 bg-[#060912]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div>
            <div className="text-xl font-bold gradient-text mb-1">NexomateAI</div>
            <p className="text-gray-600 text-sm">AI-Powered Automation for US Insurance Agencies</p>
          </div>
          <div className="flex flex-col sm:items-end gap-2 text-sm text-gray-500">
            <a href="mailto:contact@nexomateai.com" className="hover:text-white transition-colors duration-200">contact@nexomateai.com</a>
            <div>© {new Date().getFullYear()} NexomateAI. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
