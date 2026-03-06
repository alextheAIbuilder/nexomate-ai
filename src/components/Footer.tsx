export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        <div>
          <div className="text-xl font-bold gradient-text mb-1">NexomateAI</div>
          <p className="text-gray-500 text-sm">AI Automation for US Insurance Agencies</p>
        </div>
        <div className="flex flex-col sm:items-end gap-2 text-sm text-gray-400">
          <a href="mailto:contact@nexomateai.com" className="hover:text-white transition">contact@nexomateai.com</a>
          <div>© {new Date().getFullYear()} NexomateAI. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
