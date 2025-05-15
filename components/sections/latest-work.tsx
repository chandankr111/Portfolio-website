"use client"

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Cpu } from 'lucide-react';
import Image from 'next/image';

const LatestWork = () => {
  return (
    <section id="latest-work" className="py-10 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-10"
      >
        <div className="space-y-3">
          <h2 className="text-3xl font-bold">Latest Work</h2>
          <div className="h-1 w-20 bg-primary/30 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-video rounded-xl overflow-hidden border border-border">
              <Image 
                src="https://images.pexels.com/photos/4974920/pexels-photo-4974920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="AI Recommendation Engine"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent flex flex-col justify-end p-6">
                <Badge className="w-fit mb-2">Featured Project</Badge>
                <h3 className="text-2xl font-bold mb-2">AI Recommendation Engine</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4 max-w-md">
                  A sophisticated recommendation system using collaborative filtering and deep learning to provide 
                  personalized suggestions based on user behavior and preferences.
                </p>
                <div className="flex gap-3 text-sm">
                  <a href="#" className="flex items-center gap-1 hover:text-primary transition-colors">
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                  <a href="#" className="flex items-center gap-1 hover:text-primary transition-colors">
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Project Highlights</h3>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-md bg-muted">
                    <Cpu className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Neural Network Architecture</h4>
                    <p className="text-muted-foreground text-sm">
                      Custom neural network with embeddings layer and attention mechanisms to capture complex user-item interactions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-md bg-muted">
                    <Cpu className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Real-time Processing</h4>
                    <p className="text-muted-foreground text-sm">
                      Distributed data processing pipeline for real-time user behavior analysis and recommendation updates.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-md bg-muted">
                    <Cpu className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">A/B Testing Framework</h4>
                    <p className="text-muted-foreground text-sm">
                      Integrated system for testing different recommendation algorithms and automatically optimizing for engagement metrics.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">TensorFlow</Badge>
              <Badge variant="secondary">PyTorch</Badge>
              <Badge variant="secondary">FastAPI</Badge>
              <Badge variant="secondary">Redis</Badge>
              <Badge variant="secondary">Kafka</Badge>
              <Badge variant="secondary">React</Badge>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default LatestWork;