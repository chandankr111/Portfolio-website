"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const projectsData = {
  ai: [
    {
      title: "Sentiment Analysis API",
      description: "A fine-tuned BERT model for sentiment analysis of customer reviews with high accuracy and low latency.",
      image: "https://images.pexels.com/photos/590037/pexels-photo-590037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      liveUrl: "#",
      githubUrl: "#",
      technologies: ["PyTorch", "FastAPI", "Hugging Face", "Docker", "React"]
    },
    {
      title: "Computer Vision Object Detector",
      description: "Real-time object detection system using YOLOv5 with custom dataset training capabilities and web interface.",
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      liveUrl: "#",
      githubUrl: "#",
      technologies: ["TensorFlow", "OpenCV", "Python", "Flask", "JavaScript"]
    },
    {
      title: "NLP Document Classifier",
      description: "Automated document classification and information extraction system for legal documents.",
      image: "https://images.pexels.com/photos/1181279/pexels-photo-1181279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      liveUrl: "#",
      githubUrl: "#",
      technologies: ["SpaCy", "NLTK", "scikit-learn", "MongoDB", "FastAPI"]
    },
  ],
  fullstack: [
    {
      title: "E-Commerce Platform",
      description: "Feature-rich e-commerce platform with real-time inventory management, payment processing, and analytics dashboard.",
      image: "https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      liveUrl: "#",
      githubUrl: "#",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "Redis"]
    },
    {
      title: "Task Management System",
      description: "Collaborative task management application with real-time updates, role-based access control, and Kanban boards.",
      image: "https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      liveUrl: "#",
      githubUrl: "#",
      technologies: ["React", "Express", "PostgreSQL", "Socket.io", "Docker"]
    },
    {
      title: "Cloud Deployment Platform",
      description: "One-click deployment platform with CI/CD pipeline integration, infrastructure as code, and monitoring dashboard.",
      image: "https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      liveUrl: "#",
      githubUrl: "#",
      technologies: ["Kubernetes", "Terraform", "AWS", "Go", "Vue.js"]
    },
  ]
};

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden group">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
        </div>
        <CardContent className="flex-grow pt-6">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <Badge key={i} variant="outline">{tech}</Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge variant="outline">+{project.technologies.length - 3}</Badge>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between gap-4 border-t pt-4">
          <Button variant="outline" size="sm" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="gap-1">
              <Github className="h-4 w-4" /> Code
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="gap-1">
              Demo <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState("ai");

  return (
    <section id="projects" className="py-10 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-10"
      >
        <div className="space-y-3">
          <h2 className="text-3xl font-bold">Projects</h2>
          <div className="h-1 w-20 bg-primary/30 rounded-full"></div>
        </div>
        
        <Tabs defaultValue="ai" value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <div className="flex justify-center">
            <TabsList className="grid grid-cols-2 w-full max-w-md">
              <TabsTrigger value="ai" className={cn("text-base", activeTab === "ai" && "font-medium")}>
                AI/ML Projects
              </TabsTrigger>
              <TabsTrigger value="fullstack" className={cn("text-base", activeTab === "fullstack" && "font-medium")}>
                Full Stack & DevOps
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="ai" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectsData.ai.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="fullstack" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectsData.fullstack.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-center">
          <Button variant="outline" size="lg" className="gap-2">
            View All Projects <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;