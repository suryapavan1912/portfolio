// components/Contact.tsx
'use client';

import { useState } from 'react';
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { AnimatedText } from "@/components/animations/AnimatedText";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from '@emailjs/browser';
import { toast } from "sonner"



const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "pavan222mail@gmail.com",
    href: "mailto:pavan222mail@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9361368366",
    href: "tel:+919361368366"
  }
];

const socialLinks = [
  { icon: Github, href: "https://github.com/suryapavan1912", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/surya-pavan-79723b1b3", label: "LinkedIn" },
//   { icon: Instagram, href: "https://www.instagram.com/_surya_pavan_", label: "Instagram" },
];

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsSubmitting(true);
  
      const form = e.currentTarget;
      
      try {
        const result = await emailjs.sendForm(
          'service_61alm5x', // Replace with your EmailJS service ID
          'template_puwbehh', // Replace with your EmailJS template ID
          form,
          'hXEfSdR8zCKmJpI1L' // Replace with your EmailJS public key
        );
  
        if (result.text === 'OK') {
          toast.success("Your message has been sent successfully.");
          form.reset();
        }
      } catch (e) {
        toast.error("Failed to send message. Please try again later.");
        console.error(e);
      } finally {
        setIsSubmitting(false);
      }
    };
  
  return (
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedText 
            text="Get in Touch"
            className="text-3xl md:text-4xl font-bold mb-6 text-center"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I&apos;m always excited to explore new projects, creative ideas, and opportunities to bring your vision to life. Let&apos;s connect and make something incredible!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{label}</p>
                      <p>{value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="flex gap-6">
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
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="user_name" className="text-sm font-medium mb-2 block">
                    Name
                    </label>
                    <Input
                    id="user_name"
                    name="user_name"
                    placeholder="Your name"
                    className="w-full"
                    required
                    />
                </div>

                <div>
                    <label htmlFor="user_email" className="text-sm font-medium mb-2 block">
                    Email
                    </label>
                    <Input
                    id="user_email"
                    name="user_email"
                    type="email"
                    placeholder="Your email"
                    className="w-full"
                    required
                    />
                </div>

                <div>
                    <label htmlFor="message" className="text-sm font-medium mb-2 block">
                    Message
                    </label>
                    <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    className="w-full min-h-[150px]"
                    required
                    />
                </div>

                <Button
                    type="submit"
                    className="w-full bg-black text-white hover:bg-black/90"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                </form>
            </motion.div>
          </div>
        </div>
      </section>
  );
};

export default Contact;