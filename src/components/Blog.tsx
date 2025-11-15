import { motion } from 'motion/react';
import { FileText } from 'lucide-react';
import { useState } from 'react';

interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  timestamp: string;
  excerpt: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable React Applications',
    category: '/blogs/tech',
    date: '2025-11-10',
    timestamp: '14:23:45',
    excerpt: 'Deep dive into architectural patterns for large-scale React applications...',
    tags: ['React', 'Architecture', 'Performance']
  },
  {
    id: '2',
    title: 'Understanding Kubernetes Networking',
    category: '/blogs/devops',
    date: '2025-11-01',
    timestamp: '09:15:22',
    excerpt: 'Comprehensive guide to networking in Kubernetes clusters...',
    tags: ['Kubernetes', 'DevOps', 'Networking']
  },
  {
    id: '3',
    title: 'PostgreSQL Query Optimization Techniques',
    category: '/blogs/database',
    date: '2025-10-28',
    timestamp: '16:42:10',
    excerpt: 'Advanced techniques for optimizing database queries and improving performance...',
    tags: ['PostgreSQL', 'Database', 'Performance']
  },
  {
    id: '4',
    title: 'The Art of Writing Clean Code',
    category: '/blogs/tutorials',
    date: '2025-10-15',
    timestamp: '11:30:55',
    excerpt: 'Best practices and principles for writing maintainable, clean code...',
    tags: ['Best Practices', 'Clean Code', 'Development']
  },
  {
    id: '5',
    title: 'Getting Started with Web Performance',
    category: '/blogs/tutorials',
    date: '2025-10-05',
    timestamp: '13:18:33',
    excerpt: 'Essential techniques for measuring and improving web application performance...',
    tags: ['Performance', 'Web', 'Optimization']
  }
];

export function Blog() {
  const [showAll, setShowAll] = useState(false);
  const displayedPosts = showAll ? blogPosts : blogPosts.slice(0, 3);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-4"
      >
        <span className="text-[#00FF41]">r4ndom@portfolio</span>
        <span className="text-[#666666]">:</span>
        <span className="text-[#FFB000]">~/blog</span>
        <span className="text-[#666666]">$ </span>
        <span className="text-[#E0E0E0]">tail -f /var/log/blog.log</span>
      </motion.div>

      <div className="mb-4 text-[#666666] text-sm">
        <p>Monitoring blog posts... Press Ctrl+C to exit</p>
        <p className="text-[#00AA2B]">[LOG] Found {blogPosts.length} entries</p>
      </div>

      <div className="space-y-4">
        {displayedPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
          >
            <div className="p-4 rounded border border-[#333333] bg-[#0a0a0a] hover:bg-[#1a1a1a] transition-all duration-200 glow-on-hover">
              {/* Log-style header */}
              <div className="flex flex-wrap items-center gap-2 mb-2 text-xs text-[#666666]">
                <span className="text-[#00AA2B]">[{post.date} {post.timestamp}]</span>
                <span className="text-[#FFB000]">{post.category}</span>
                <span className="text-[#666666]">-</span>
                <FileText className="w-3 h-3 text-[#00FF41]" />
              </div>

              {/* Post content */}
              <h3 className="text-[#00FF41] mb-2 terminal-glow group-hover:terminal-glow-strong transition-all">
                {post.title}
              </h3>
              <p className="text-[#E0E0E0] text-sm mb-3">{post.excerpt}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-[#1a1a1a] border border-[#333333] text-[#00AA2B] rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {!showAll && blogPosts.length > 3 && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          onClick={() => setShowAll(true)}
          className="mt-6 w-full p-3 border border-[#333333] bg-[#0a0a0a] hover:bg-[#1a1a1a] text-[#00FF41] rounded transition-all duration-200 glow-on-hover"
        >
          <span className="text-[#666666]">---</span> Press any key to continue <span className="text-[#666666]">---</span>
          <span className="inline-block ml-2 w-2 h-4 bg-[#00FF41] cursor-blink" />
        </motion.button>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-[#666666]"
      >
        <span className="text-[#00FF41]">r4ndom@portfolio</span>
        <span className="text-[#666666]">:</span>
        <span className="text-[#FFB000]">~/blog</span>
        <span className="text-[#666666]">$ </span>
        <span className="inline-block ml-1 w-2 h-4 bg-[#00FF41] cursor-blink" />
      </motion.div>
    </div>
  );
}
