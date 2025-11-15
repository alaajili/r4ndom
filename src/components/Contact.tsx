import { motion } from 'motion/react';
import { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';

export function Contact() {
  const [output, setOutput] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    { icon: Github, label: 'GitHub', url: 'https://github.com/alaajili', handle: '@alaajili' },
    { icon: Linkedin, label: 'LinkedIn', url: '#', handle: '/in/username' },
    { icon: Twitter, label: 'Twitter', url: '#', handle: '@username' },
    { icon: Mail, label: 'Email', url: 'mailto:abderrahmanelaajili0@gmail.com', handle: 'abderrahmanelaajili0@gmail.com' },
  ];

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const loadingOutput = [
      `$ send-message --from="${formData.name}" --email="${formData.email}"`,
      `[INFO] Establishing connection...`,
      `[INFO] Encrypting message...`,
    ];
    setOutput(loadingOutput);

    try {
      // Get environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      
      console.log(serviceId, templateId, publicKey)

      // EmailJS implementation
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          }
        })
      });

      if (response.ok) {
        const successOutput = [
          ...loadingOutput,
          `[SUCCESS] Message sent successfully!`,
          `[INFO] Response time: ${Math.floor(Math.random() * 100)}ms`,
        ];
        setOutput(successOutput);
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      const errorOutput = [
        ...loadingOutput,
        `[ERROR] Failed to send message. Please try again or contact directly at abderrahmanelaajili0@gmail.com`,
        JSON.stringify(error)
      ];
      setOutput(errorOutput);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setOutput([]);
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 font-mono">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-4"
      >
        <span className="text-[#00FF41]">r4ndom@portfolio</span>
        <span className="text-[#666666]">:</span>
        <span className="text-[#FFB000]">~/contact</span>
        <span className="text-[#666666]">$ </span>
        <span className="text-[#E0E0E0]">./connect.sh</span>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="mb-4">
            <p className="text-[#00AA2B] mb-2"># Initialize contact form</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-[#00FF41] text-sm mb-2">
                <span className="text-[#666666]">$ </span>enter --name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                disabled={isSubmitting}
                className="w-full bg-[#0a0a0a] border border-[#333333] text-[#E0E0E0] px-3 py-2 rounded focus:border-[#00FF41] focus:outline-none focus:ring-1 focus:ring-[#00FF41] transition-all disabled:opacity-50"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-[#00FF41] text-sm mb-2">
                <span className="text-[#666666]">$ </span>enter --email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                disabled={isSubmitting}
                className="w-full bg-[#0a0a0a] border border-[#333333] text-[#E0E0E0] px-3 py-2 rounded focus:border-[#00FF41] focus:outline-none focus:ring-1 focus:ring-[#00FF41] transition-all disabled:opacity-50"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-[#00FF41] text-sm mb-2">
                <span className="text-[#666666]">$ </span>enter --message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                disabled={isSubmitting}
                className="w-full bg-[#0a0a0a] border border-[#333333] text-[#E0E0E0] px-3 py-2 rounded focus:border-[#00FF41] focus:outline-none focus:ring-1 focus:ring-[#00FF41] transition-all resize-none disabled:opacity-50"
                placeholder="Your message here..."
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
              className="w-full flex items-center justify-center gap-2 bg-[#0a0a0a] border border-[#00FF41] text-[#00FF41] px-4 py-2 rounded hover:bg-[#00FF41] hover:text-[#0a0a0a] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? '$ sending...' : '$ ./send-message.sh'}</span>
            </button>
          </div>

          {/* Command Output */}
          {output.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-3 bg-[#1a1a1a] border border-[#333333] rounded space-y-1"
            >
              {output.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`text-sm ${
                    line.includes('SUCCESS') ? 'text-[#00FF41]' : 
                    line.includes('ERROR') ? 'text-[#FF0000]' :
                    line.includes('INFO') ? 'text-[#00AA2B]' : 
                    'text-[#E0E0E0]'
                  }`}
                >
                  {line}
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="mb-4">
            <p className="text-[#00AA2B] mb-2"># Available connection protocols</p>
          </div>

          <div className="space-y-3">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.url}
                target='_blank'
                rel='noopener noreferrer'
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-3 p-3 border border-[#333333] rounded hover:border-[#00FF41] hover:bg-[#1a1a1a] transition-all duration-200 group"
              >
                <link.icon className="w-5 h-5 text-[#00FF41] transition-all" />
                <div className="flex-1">
                  <div className="text-[#00FF41] text-sm mb-1">{link.label}</div>
                  <div className="text-[#666666] text-xs">{link.handle}</div>
                </div>
                <span className="text-[#666666] text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  [connect]
                </span>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 p-4 bg-[#1a1a1a] border border-[#333333] rounded"
          >
            <p className="text-[#00AA2B] text-sm mb-2"># System Information</p>
            <div className="space-y-1 text-xs text-[#E0E0E0]">
              <p><span className="text-[#666666]">Status:</span> <span className="text-[#00FF41]">Highly available</span></p>
              <p><span className="text-[#666666]">Response Time:</span> <span className="text-[#00FF41]">~24h</span></p>
              <p><span className="text-[#666666]">Location:</span> <span className="text-[#00FF41]">Morocco, Remote</span></p>
              <p><span className="text-[#666666]">Timezone:</span> <span className="text-[#00FF41]">UTC+1</span></p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="text-[#666666]"
      >
        <span className="text-[#00FF41]">r4ndom@portfolio</span>
        <span className="text-[#666666]">:</span>
        <span className="text-[#FFB000]">~/contact</span>
        <span className="text-[#666666]">$ </span>
        <span className="inline-block ml-1 w-2 h-4 bg-[#00FF41] animate-pulse" />
      </motion.div>
    </div>
  );
}
