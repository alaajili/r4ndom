import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function Footer() {
  const [uptime, setUptime] = useState(0);
  const startDate = new Date('2024-01-01');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();
      setUptime(Math.floor(diff / 1000));
    }, 1000);

    return () => clearInterval(interval);
  });

  const formatUptime = (seconds: number) => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    return `${days}d ${hours}h ${mins}m`;
  };

  const currentDate = new Date().toLocaleString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    year: 'numeric'
  });

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="mt-12 pt-6 border-t border-[#333333]"
    >
      <div className="grid md:grid-cols-3 gap-4 mb-4 text-sm">
        <div className="space-y-1">
          <p className="text-[#00AA2B]"># System Status</p>
          <p className="text-[#E0E0E0]">
            <span className="text-[#666666]">Status:</span> <span className="text-[#00FF41]">ONLINE</span>
          </p>
          <p className="text-[#E0E0E0]">
            <span className="text-[#666666]">Uptime:</span> <span className="text-[#00FF41]">{formatUptime(uptime)}</span>
          </p>
        </div>

        <div className="space-y-1">
          <p className="text-[#00AA2B]"># Last Login</p>
          <p className="text-[#E0E0E0] text-xs">
            r4ndom@portfolio from SOMEWHERE :)
          </p>
          <p className="text-[#666666] text-xs">
            {currentDate}
          </p>
        </div>

        <div className="space-y-1">
          <p className="text-[#00AA2B]"># Version Info</p>
          <p className="text-[#E0E0E0]">
            <span className="text-[#666666]">Portfolio:</span> <span className="text-[#00FF41]">v1.0.0</span>
          </p>
          <p className="text-[#E0E0E0]">
            <span className="text-[#666666]">CreatedAt:</span> <span className="text-[#00FF41]">2025.11.15</span>
          </p>
        </div>
      </div>

      <div className="pt-4 border-t border-[#333333] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#666666]">
        <p>
          © 2025 Developer Portfolio. All rights reserved.
        </p>
        <p>
          <span className="text-[#00AA2B]">Built with L7OB using:</span> React + TypeScript + Tailwind CSS
        </p>
      </div>

      <div className="mt-4 text-xs text-[#666666]">
        <span className="text-[#00FF41]">r4ndom@portfolio</span>
        <span>:</span>
        <span className="text-[#FFB000]">~</span>
        <span>$ </span>
        <span className="text-[#E0E0E0]">echo "Thanks for visiting!"</span>
      </div>
    </motion.footer>
  );
}
