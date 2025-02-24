// components/Photography.tsx
'use client';

import Image from 'next/image';
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/animations/AnimatedText";

type Photo = {
  src: string;
  alt: string;
};

const photos: Photo[] = [
  {
    src: "/photography/landscape.webp",
    alt: "landscape",
  },
  {
    src: "/photography/sky.webp",
    alt: "sky",
  },
  {
    src: "/photography/fort.webp",
    alt: "fort",
  },
  {
    src: "/photography/sky2.webp",
    alt: "sky2",
  },
  {
    src: "/photography/lamp.webp",
    alt: "lamp",
  },
  {
    src: "/photography/bridge.webp",
    alt: "bridge",
  },
  {
    src: "/photography/horse.webp",
    alt: "horse",
  },
  {
    src: "/photography/sky3.webp",
    alt: "sky3",
  },
  {
    src: "/photography/temple.webp",
    alt: "temple",
  },
];

export default function Photography() {
  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <AnimatedText 
            text="Through My Lens"
            className="text-3xl md:text-4xl font-bold mb-6 text-center"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground text-center max-w-3xl"
          >
            Where everyday life becomes art, revealing beauty in quiet moments
          </motion.p>
        </div>

        <div className="relative overflow-x-auto overflow-y-hidden no-scrollbar">
           <motion.div 
              className="flex gap-8 pb-4" 
              style={{ minWidth: 'max-content' }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl overflow-hidden"
                  style={{ flex: '0 0 250px' }}
                >
                  <div className="aspect-[3/4] relative">
                    <Image 
                      src={photo.src} 
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 transition-colors duration-300" />
                  </div>
                </div>
              ))}
            </motion.div>
        </div>
      </div>
    </section>
  );
}