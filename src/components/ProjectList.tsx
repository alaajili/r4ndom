import { motion } from 'motion/react';
import { Folder, ExternalLink, Github } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  timestamp: string;
  size: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: '1',
    name: 'e-commerce-platform',
    description: 'Full-stack e-commerce solution with React and Node.js',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
    timestamp: '2025-10-15 14:32',
    size: '24.5M',
    github: '#',
    demo: '#'
  },
  {
    id: '2',
    name: 'real-time-chat-app',
    description: 'WebSocket-based chat application with end-to-end encryption',
    tech: ['React', 'Socket.io', 'Express', 'MongoDB'],
    timestamp: '2025-09-03 09:18',
    size: '18.2M',
    github: '#',
    demo: '#'
  },
  {
    id: '3',
    name: 'ml-image-classifier',
    description: 'Machine learning model for image classification',
    tech: ['Python', 'TensorFlow', 'Flask', 'Docker'],
    timestamp: '2025-08-22 16:45',
    size: '156.8M',
    github: '#'
  },
  {
    id: '4',
    name: 'portfolio-builder',
    description: 'Drag-and-drop portfolio website builder',
    tech: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    timestamp: '2025-07-10 11:20',
    size: '12.1M',
    github: '#',
    demo: '#'
  }
];

export function ProjectList() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-4"
      >
        <span className="text-[#00FF41]">r4ndom@portfolio</span>
        <span className="text-[#666666]">:</span>
        <span className="text-[#FFB000]">~/projects</span>
        <span className="text-[#666666]">$ </span>
        <span className="text-[#E0E0E0]">ls -lah</span>
      </motion.div>

      <div className="mb-6 text-[#666666] text-sm">
        <p>total {projects.length} projects</p>
      </div>

      <div className="space-y-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4 p-3 rounded border border-transparent hover:border-[#333333] hover:bg-[#1a1a1a] transition-all duration-200 glow-on-hover">
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <Folder className="w-4 h-4 text-[#FFB000] shrink-0 mt-1" />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-[#00FF41] terminal-glow">{project.name}</span>
                    <span className="text-[#666666] text-xs">{project.timestamp}</span>
                    <span className="text-[#666666] text-xs">{project.size}</span>
                  </div>
                  <p className="text-[#E0E0E0] text-sm mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-[#1a1a1a] border border-[#333333] text-[#00AA2B] rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 text-sm">
                    {project.github && (
                      <a
                        href={project.github}
                        className="flex items-center gap-1 text-[#00AA2B] hover:text-[#00FF41] transition-colors"
                      >
                        <Github className="w-3 h-3" />
                        <span>GitHub</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="flex items-center gap-1 text-[#00AA2B] hover:text-[#00FF41] transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-[#666666]"
      >
        <span className="text-[#00FF41]">r4ndom@portfolio</span>
        <span className="text-[#666666]">:</span>
        <span className="text-[#FFB000]">~/projects</span>
        <span className="text-[#666666]">$ </span>
        <span className="inline-block ml-1 w-2 h-4 bg-[#00FF41] cursor-blink" />
      </motion.div>
    </div>
  );
}
