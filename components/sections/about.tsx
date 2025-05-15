"use client"

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Code, Server, Brain } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-10 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-10"
      >
        <div className="space-y-3">
          <h2 className="text-3xl font-bold">About Me</h2>
          <div className="h-1 w-20 bg-primary/30 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2">
            <CardContent className="pt-6 pb-6">
              <p className="text-lg leading-relaxed">
                I am a software engineer passionate about crafting dynamic and user-centric web applications. 
                With experience in modern technologies, I thrive on building scalable and intuitive web solutions. 
                I embrace challenges as opportunities to learn and grow as a developer.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                My expertise spans across AI/ML solutions and full-stack development with a focus on creating 
                efficient, robust, and user-friendly applications. I constantly explore new technologies and 
                methodologies to enhance my skillset and deliver exceptional results.
              </p>
            </CardContent>
          </Card>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-muted-foreground">Bangalore, India</p>
              </div>
            </div>
            
            <div className="h-px bg-border"></div>
            
            <div className="space-y-4">
              <h3 className="font-medium">Specializations</h3>
              
              <div className="flex items-start gap-3">
                <Brain className="h-5 w-5 text-chart-1 mt-0.5" />
                <div>
                  <h4 className="font-medium">AI/ML Development</h4>
                  <p className="text-sm text-muted-foreground">Machine learning models, NLP, computer vision</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Code className="h-5 w-5 text-chart-2 mt-0.5" />
                <div>
                  <h4 className="font-medium">Full Stack Development</h4>
                  <p className="text-sm text-muted-foreground">Web applications, RESTful APIs, databases</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Server className="h-5 w-5 text-chart-3 mt-0.5" />
                <div>
                  <h4 className="font-medium">DevOps</h4>
                  <p className="text-sm text-muted-foreground">CI/CD pipelines, Docker, Kubernetes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;