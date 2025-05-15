"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Mail } from 'lucide-react';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="min-h-[90vh] flex flex-col justify-center pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <div className="space-y-6">
          <div className="space-y-2">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Chandan Kumar
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Software Engineer
            </motion.p>
          </div>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Passionate about crafting innovative solutions at the intersection of AI/ML and full-stack development.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Badge variant="outline" className="text-sm py-1">Available for work</Badge>
            <Badge variant="outline" className="text-sm py-1">Remote</Badge>
            <Badge variant="outline" className="text-sm py-1">Full-time</Badge>
            <Badge variant="outline" className="text-sm py-1">Contract</Badge>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap gap-4 pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button className="group">
              View Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="gap-2">
              <FileText className="h-4 w-4" /> Download CV
            </Button>
            <Button variant="secondary" className="gap-2">
              <Mail className="h-4 w-4" /> Contact Me
            </Button>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="relative aspect-square max-w-md mx-auto lg:ml-auto rounded-xl overflow-hidden border border-border"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-chart-1/30 to-chart-3/30 mix-blend-soft-light" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="text-6xl sm:text-8xl font-bold text-primary/90"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
            >
              CK
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;