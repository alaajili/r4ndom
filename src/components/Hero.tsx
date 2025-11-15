import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Welcome to my terminal...';
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  const asciiArt = `
   ____             _                       
  |  _ \\  _____   _(_) ___  _ __   ___ _ __ 
  | | | |/ _ \\ \\ / / |/ _ \\| '_ \\ / _ \\ '__|
  | |_| |  __/\\ V /| | (_) | |_) |  __/ |   
  |____/ \\___| \\_/ |_|\\___/| .__/ \\___|_|   
                           |_|              
  `;

  return (
    <div className="mb-12">
      <pre className="text-[#00AA2B] text-xs md:text-sm overflow-x-auto mb-6 terminal-glow leading-tight">
        {asciiArt}
      </pre>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="mb-4">
          <span className="text-[#00FF41] terminal-glow-strong">root@portfolio</span>
          <span className="text-[#666666]">:</span>
          <span className="text-[#FFB000]">~</span>
          <span className="text-[#666666]">$ </span>
          <span className="text-[#E0E0E0]">{displayedText}</span>
          <span className="inline-block ml-1 w-2 h-4 bg-[#00FF41] cursor-blink" />
        </div>
        
        <div className="space-y-2 text-[#E0E0E0]">
          <p>
            <span className="text-[#00AA2B]">[INFO]</span> System Status: <span className="text-[#00FF41]">ONLINE</span>
          </p>
          <p>
            <span className="text-[#00AA2B]">[INFO]</span> Role: <span className="text-[#00FF41]">Full Stack Developer</span>
          </p>
          <p>
            <span className="text-[#00AA2B]">[INFO]</span> Location: <span className="text-[#00FF41]">/home/developer</span>
          </p>
          <p className="mt-4 text-[#666666]">
            # Type commands above to navigate through the portfolio
          </p>
        </div>
      </motion.div>
    </div>
  );
}
