import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TerminalWindow } from './components/TerminalWindow';
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ProjectList } from './components/ProjectList';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero />;
      case 'about':
        return <About />;
      case 'projects':
        return <ProjectList />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Terminal Window */}
        <TerminalWindow title="r4ndom@portfolio:~$ portfolio-v1.0.0">
          {/* Navigation */}
          <Navigation activeSection={activeSection} onNavigate={setActiveSection} />

          {/* Content Area with Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderSection()}
            </motion.div>
          </AnimatePresence>

          {/* Footer */}
          <Footer />
        </TerminalWindow>

        {/* Additional Terminal-style Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-4 text-center text-xs text-[#666666]"
        >
          <p>Terminal session active | Press Ctrl+C to exit (just kidding)</p>
        </motion.div>
      </div>
    </div>
  );
}
