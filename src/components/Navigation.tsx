import { motion } from 'motion/react';
import { useState } from 'react';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems = [
    { id: 'home', command: 'cd ~', label: 'Home' },
    { id: 'about', command: 'cd /about', label: 'About' },
    { id: 'projects', command: 'ls /projects', label: 'Projects' },
    { id: 'blog', command: 'tail -f /blog', label: 'Blog' },
    { id: 'contact', command: 'echo /contact', label: 'Contact' },
  ];

  return (
    <nav className="mb-8">
      <div className="flex flex-wrap gap-4 md:gap-6">
        {navItems.map((item, index) => (
          <motion.button
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            onClick={() => onNavigate(item.id)}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
            className={`group relative text-left transition-all duration-200 cursor-pointer ${
              activeSection === item.id ? 'text-[#00FF41]' : 'text-[#00AA2B]'
            }`}
          >
            <span className="text-[#666666]">$ </span>
            <span className={`${
              hoveredItem === item.id || activeSection === item.id
                ? 'terminal-glow-strong'
                : ''
            }`}>
              {item.command}
            </span>
            {activeSection === item.id && (
              <motion.span
                layoutId="cursor"
                className="inline-block ml-1 w-2 h-4 bg-[#00FF41] cursor-blink"
              />
            )}
          </motion.button>
        ))}
      </div>
      <div className="mt-4 h-px bg-linear-to-r from-[#00FF41] via-[#00AA2B] to-transparent" />
    </nav>
  );
}
