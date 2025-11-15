import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';

export function About() {
  const skills = {
    'Frontend': ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'],
    'Backend': ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'],
    'DevOps': ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'GitHub Actions'],
    'Tools': ['Git', 'Linux', 'Vim', 'VSCode', 'Figma']
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-4"
      >
        <span className="text-[#00FF41]">r4ndom@portfolio</span>
        <span className="text-[#666666]">:</span>
        <span className="text-[#FFB000]">~/about</span>
        <span className="text-[#666666]">$ </span>
        <span className="text-[#E0E0E0]">cat profile.txt</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6 p-4 bg-[#1a1a1a] border border-[#333333] rounded"
      >
        <div className="flex items-start gap-3 mb-4">
          <Terminal className="w-5 h-5 text-[#00FF41] shrink-0 mt-1" />
          <div className="space-y-2 text-[#E0E0E0]">
            <p>
              Hi! I'm a passionate full-stack developer who loves crafting elegant solutions 
              to complex problems. With a strong foundation in both frontend and backend 
              technologies, I specialize in building scalable web applications.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open-source projects, or diving deep into system architecture and performance 
              optimization.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-6"
      >
        <div className="mb-3">
          <span className="text-[#00FF41]">r4ndom@portfolio</span>
          <span className="text-[#666666]">:</span>
          <span className="text-[#FFB000]">~/about</span>
          <span className="text-[#666666]">$ </span>
          <span className="text-[#E0E0E0]">apt list --installed</span>
        </div>

        <div className="text-sm">
          <p className="text-[#666666] mb-3">Listing... Done</p>
          
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + categoryIndex * 0.1 }}
              className="mb-4"
            >
              <div className="text-[#FFB000] mb-2">
                # {category}
              </div>
              <div className="space-y-1 ml-4">
                {items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-[#00FF41]">├──</span>
                    <span className="text-[#E0E0E0]">{skill}</span>
                    <span className="text-[#666666]">[installed]</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-[#666666]"
      >
        <span className="text-[#00FF41]">r4ndom@portfolio</span>
        <span className="text-[#666666]">:</span>
        <span className="text-[#FFB000]">~/about</span>
        <span className="text-[#666666]">$ </span>
        <span className="inline-block ml-1 w-2 h-4 bg-[#00FF41] cursor-blink" />
      </motion.div>
    </div>
  );
}
