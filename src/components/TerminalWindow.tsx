import { motion } from 'motion/react';
import { Minus, Square, X } from 'lucide-react';

interface TerminalWindowProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export function TerminalWindow({ children, title = "r4ndom@portfolio:~$", className = "" }: TerminalWindowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-[#0a0a0a] border border-[#333333] rounded-lg overflow-hidden shadow-lg ${className}`}
      style={{
        boxShadow: '0 0 20px rgba(0, 255, 65, 0.15), 0 0 40px rgba(0, 255, 65, 0.05)'
      }}
    >
      {/* Terminal header */}
      <div className="bg-[#1a1a1a] border-b border-[#333333] px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <button className="w-3 h-3 rounded-full bg-[#FF5F56] hover:bg-[#FF5F56]/80 transition-colors" aria-label="Close">
              <X className="w-2 h-2 opacity-0 hover:opacity-100" />
            </button>
            <button className="w-3 h-3 rounded-full bg-[#FFBD2E] hover:bg-[#FFBD2E]/80 transition-colors" aria-label="Minimize">
              <Minus className="w-2 h-2 opacity-0 hover:opacity-100" />
            </button>
            <button className="w-3 h-3 rounded-full bg-[#27C93F] hover:bg-[#27C93F]/80 transition-colors" aria-label="Maximize">
              <Square className="w-2 h-2 opacity-0 hover:opacity-100" />
            </button>
          </div>
          <span className="text-[#00FF41] text-sm ml-4 terminal-glow">{title}</span>
        </div>
        <div className="text-[#666666] text-xs">bash</div>
      </div>
      
      {/* Terminal content */}
      <div className="p-6">
        {children}
      </div>
    </motion.div>
  );
}
