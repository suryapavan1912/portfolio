// components/Experience.tsx
'use client';

import { motion } from "framer-motion";
import { AnimatedText } from "@/components/animations/AnimatedText";

interface Experience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

const experiences: Experience[] = [
  {
    title: "Full Stack Developer",
    company: "AllEvents",
    period: "May 2023 - Jul 2025",
    responsibilities: [
      "Gained versatile experience by working on numerous projects like dashboards, email services and internal automations.",
      "Revamped landing, category, and event pages—lighter code, faster loads, better user experience, and higher engagement.",
      "Shipped and maintained REST and mobile APIs while rolling out new features and fixing bugs on a weekly cycle.",
      "Managed a team of 2 developers, handling planning, code reviews, and delivery without missing a deadline.",
    ]
  },
  {
    title: "Full Stack Intern",
    company: "Academix",
    period: "Dec 2022 - Mar 2023",
    responsibilities: [
      "Developed high-quality, user-friendly features for Academix course marketplace using React JS, improving existing functionality and enhancing overall platform performance.",
      "Collaborated within the core team to translate project requirements into new features, conducting thorough testing to ensure best-practice code quality \& stability.",
      "Continuously enhanced technical skills through self-driven learning, staying current with industry trends and emerging technologies.",
    ]
  }
];

const ExperienceCard = ({ experience, index }: { experience: Experience; index: number }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.21, 0.47, 0.32, 0.98]
      }
    }
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: index * 0.2 + 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="bg-white rounded-xl p-8 shadow-sm"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold">{experience.title}</h3>
          <p className="text-muted-foreground">{experience.company}</p>
        </div>
        <p className="text-muted-foreground mt-2 md:mt-0">{experience.period}</p>
      </div>

      <motion.ul 
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-3 mt-4"
      >
        {experience.responsibilities.map((responsibility, i) => (
          <motion.li
            key={i}
            variants={itemVariants}
            className="flex items-start gap-3 text-muted-foreground"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-black flex-shrink-0 mt-2" />
            {responsibility}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

const Experience = () => {
  return (
      <section id="experience" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedText 
            text="Professional Experience"
            className="text-3xl md:text-4xl font-bold mb-16 text-center"
          />
          
          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((experience, index) => (
              <ExperienceCard 
                key={experience.company} 
                experience={experience} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>
  );
};

export default Experience;