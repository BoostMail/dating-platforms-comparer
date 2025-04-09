
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
  children?: ReactNode;
}

// Manually implementing framer-motion for this component
const MotionDiv = ({ children, ...props }: any) => {
  return (
    <div className="relative overflow-hidden" {...props}>
      {children}
    </div>
  );
};

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaText = "Top-Plattformen vergleichen",
  ctaHref = "#vergleich",
  children,
}) => {
  return (
    <section className="relative pt-20 pb-28 md:pt-28 md:pb-64 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:-mt-8">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection delay={100}>
            <span className="inline-block px-3 py-1 mb-6 text-xs font-medium rounded-full bg-primary/20 text-primary">
              Dating-Plattformen für 40+ in Deutschland
            </span>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight tracking-tight">
              {title}
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={300}>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
              {subtitle}
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={400}>
            {children ? (
              children
            ) : (
              <a href={ctaHref}>
                <Button size="lg" className="rounded-full px-8 transition-all shadow-md hover:shadow-lg duration-300 hover:scale-105">
                  {ctaText}
                </Button>
              </a>
            )}
          </AnimatedSection>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <MotionDiv className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-0 pointer-events-none" />
      <MotionDiv className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <MotionDiv className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
    </section>
  );
};

export default HeroSection;
