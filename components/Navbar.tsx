'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X , Download } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { title: "About", href: "#about" },
    { title: "Projects", href: "#projects" },
    { title: "Skills", href: "#skills" },
    { title: "Experience", href: "#experience" },
    { title: "Contact", href: "#contact" },
  ];
  
  const resumePath = "https://drive.usercontent.google.com/uc?id=1YCzuwEGgYduMQjeAHFTz4sTCdN-8S-hZ&export=download";

  const navAnimation = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const mobileMenuAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <motion.div 
          variants={navAnimation}
          className="text-xl font-bold"
        >
          SP
        </motion.div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              variants={navAnimation}
              transition={{ delay: index * 0.1 }}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.title}
            </motion.a>
          ))}
          <motion.a
            href={resumePath}
            target="_blank"
            variants={navAnimation}
            transition={{ delay: (navItems.length + 1) * 0.1 }}
            className="bg-black text-white hover:bg-black/90 px-4 py-1 rounded-md flex items-center gap-2"
          >
            <Download size={16} />
            Resume
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuAnimation}
            className="md:hidden bg-background border-b absolute w-full max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </a>
              ))}
              <a
                href={resumePath}
                target="_blank"
                className="bg-black text-white hover:bg-black/90 px-4 py-2 rounded-md mb-4 flex items-center justify-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <Download size={16} />
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;