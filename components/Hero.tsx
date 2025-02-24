'use client';

import { AnimatedText } from "@/components/animations/AnimatedText";
import { FadeIn } from "@/components/animations/FadeIn";
import ScrollIndicator from "./ScrollIndicator";

const Hero = () => {
  return (
    <section className="min-h-[100svh] flex items-center justify-center bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedText 
            text="Hi, I'm Surya"
            className="text-6xl md:text-7xl font-bold mb-4"
          />
          
          <FadeIn delay={0.4}>
            <p className="text-xl text-muted-foreground mb-8">
              Transform your ideas into powerful applications
            </p>
          </FadeIn>

          <FadeIn delay={0.6} className="flex gap-4 justify-center">
            <a 
              href="#projects" 
              className="bg-black text-white hover:bg-black/90 h-11 px-8 rounded-md inline-flex items-center justify-center font-medium"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="border-2 h-11 px-8 rounded-md inline-flex items-center justify-center font-medium"
            >
              Contact Me
            </a>
          </FadeIn>
        </div>
      </div>
      <ScrollIndicator />
    </section>
  );
};

export default Hero;