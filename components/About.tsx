// components/About.tsx
'use client';

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { AnimatedText } from "@/components/animations/AnimatedText";
import Image from "next/image";

const About = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/suryapavan1912", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/surya-pavan-79723b1b3", label: "LinkedIn" },
  ];

  return (
    <section id="about" className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedText 
          text="About Me"
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image 
              src="/about/surya.webp"
              alt="surya" 
              className="rounded-2xl shadow-sm w-full"
              width={800}
              height={600}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground">
              I&apos;m a full-stack developer with over 4 years of experience building fast, scalable, and reliable web applications. I focus on well-structured architectures that ensure efficiency and seamless user experiences.
            </p>
            
            <p className="text-lg text-muted-foreground">
              Beyond coding, I have a passion for design and photography, which influence how I create intuitive and visually appealing interfaces.
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ y: -5 }}
                  aria-label={label}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;