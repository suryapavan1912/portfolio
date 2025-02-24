'use client';

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { AnimatedText } from "@/components/animations/AnimatedText";
import Image from "next/image";

interface Technology {
  name: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  demoUrl?: string;
  type: 'freelance' | 'personal' | 'corporate';
}

const projects: Project[] = [
  {
    title: "AllEvents Event Pages",
    description: "Redesigned and developed event pages from scratch with a completely new user interface. Optimized the codebase to significantly improve page speed and performance through modern development practices.",
    image: "/projects/allevents.webp",
    technologies: [
      { name: "PHP" },
      { name: "jQuery" },
      { name: "Performance Optimization" },
      { name: "Legacy Code Migration" }
    ],
    type: "corporate",
    demoUrl: "https://allevents.in/",

  },
  {
    title: "Vardhan Enterprises",
    description: "Developed a fully static website for a food industry consultancy firm. This project focused on creating a professional web presence while implementing comprehensive SEO optimization to ensure optimal search engine visibility.",
    image: "/projects/vardhan.webp",
    technologies: [
      { name: "Next.js" },
      { name: "SEO" },
      { name: "Responsive Design" }
    ],
    demoUrl: "https://vardhanenterprises.co/",
    type: "freelance"
  },
  {
    title: "E-commerce Platform",
    description: "Built a comprehensive e-commerce platform with MERN stack featuring user authentication, wishlist and cart functionality. Created an intuitive and seamless shopping experience with robust backend integration.",
    image: "/projects/lousy.webp",
    technologies: [
      { name: "React" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" }
    ],
    demoUrl: "#",
    type: "personal"
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
    >
      <div className="relative group overflow-hidden">
        <Image 
          src={project.image} 
          alt={project.title}
          width={300}
          height={200}
          className="w-full aspect-[2/1] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
        {/* <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm ${
          project.type === 'freelance' ? 'bg-blue-100 text-blue-700' :
          project.type === 'corporate' ? 'bg-purple-100 text-purple-700' :
          'bg-green-100 text-green-700'
        }`}>
          {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
        </span> */}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <span className={`px-3 py-1 rounded-full text-sm ${
            project.type === 'freelance' ? 'bg-blue-100 text-blue-700' :
            project.type === 'corporate' ? 'bg-purple-100 text-purple-700' :
            'bg-green-100 text-green-700'
          }`}>
            {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
          </span>
        </div>

        {/* <h3 className="text-xl font-semibold">{project.title}</h3> */}
        <p className="text-muted-foreground mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <span
              key={tech.name}
              className="px-3 py-1 bg-gray-50 rounded-full text-sm text-gray-700"
            >
              {tech.name}
            </span>
          ))}
        </div>
        
        <div className="flex justify-start  gap-5">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              className="flex items-center gap-2 text-foreground transition-colors hover:text-gray-600"
              target="_blank"
            >
              <ExternalLink size={20} />
              Visit Website
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* A glimpse of my development journey */}
        <AnimatedText 
          text="Featured Projects"
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;