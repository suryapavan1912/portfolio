'use client';

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { AnimatedText } from "@/components/animations/AnimatedText";

interface Skill {
  name: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "Next.js & React.js" },
      { name: "Vue.js" },
      { name: "TypeScript" },
      { name: "jQuery" }
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js & Express" },
      { name: "PHP" },
      { name: "RESTful APIs" },
      { name: "MongoDB & MySQL" },
    ]
  },
  {
    title: "Additional Skills",
    skills: [
      { name: "Problem solving" },
      { name: "OpenAI SDK" },
      { name: "Git, Redis, SQS" },
      { name: "Memcached" },
    ]
  }
];

const SkillCard = ({ category, index }: { category: SkillCategory; index: number }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
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
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="bg-white rounded-xl p-6 shadow-sm"
    >
      <h3 className="text-xl font-semibold mb-6">{category.title}</h3>
      <div className="space-y-4">
        {category.skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            className="flex items-center gap-3"
          >
            <div className="flex-shrink-0 w-5 h-5 bg-gray-100 rounded-full text-black flex items-center justify-center">
              <Check size={12} />
            </div>
            <span className="text-gray-700">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedText 
          text="Technical Skills"
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCard 
              key={category.title} 
              category={category} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;