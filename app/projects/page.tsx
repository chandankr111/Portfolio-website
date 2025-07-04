"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const allProjects = [
  {
    title: "Sentiment Analysis API",
    description: "BERT model for analyzing customer sentiments accurately.",
    image: "https://images.pexels.com/photos/590037/pexels-photo-590037.jpeg",
    liveUrl: "#",
    githubUrl: "#",
    technologies: ["PyTorch", "FastAPI", "Hugging Face", "Docker", "React"]
  },
  {
    title: "Computer Vision Detector",
    description: "YOLOv5 based detector with real-time custom training.",
    image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg",
    liveUrl: "#",
    githubUrl: "#",
    technologies: ["TensorFlow", "OpenCV", "Flask", "JavaScript"]
  },
  {
    title: "NLP Document Classifier",
    description: "System to auto-classify legal docs using NLP pipelines.",
    image: "https://images.pexels.com/photos/1181279/pexels-photo-1181279.jpeg",
    liveUrl: "#",
    githubUrl: "#",
    technologies: ["SpaCy", "NLTK", "scikit-learn", "MongoDB"]
  },
  {
    title: "E-Commerce Platform",
    description: "Inventory, payments, analytics—all in one e-com dashboard.",
    image: "https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg",
    liveUrl: "#",
    githubUrl: "#",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"]
  },
  {
    title: "Task Management App",
    description: "Kanban + real-time collaboration + role-based control.",
    image: "https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg",
    liveUrl: "#",
    githubUrl: "#",
    technologies: ["React", "Express", "PostgreSQL", "Socket.io"]
  },
  {
    title: "Cloud CI/CD Platform",
    description: "Infrastructure as Code + Monitoring + One-click deploy.",
    image: "https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg",
    liveUrl: "#",
    githubUrl: "#",
    technologies: ["Kubernetes", "Terraform", "AWS", "Go", "Vue.js"]
  }
];

const ProjectCard = ({ project, index }: { project: typeof allProjects[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden group shadow-lg rounded-xl min-h-[400px]">
        <div className="relative h-52 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        <CardContent className="flex-grow pt-4 pb-2 px-4">
          <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
          <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <Badge key={i} variant="outline" className="text-xs px-2 py-1">{tech}</Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge variant="outline" className="text-xs px-2 py-1">
                +{project.technologies.length - 3}
              </Badge>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between gap-2 border-t px-4 py-2">
          <Button variant="outline" size="sm" asChild className="w-full">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="gap-1">
              <Github className="h-4 w-4" /> Code
            </a>
          </Button>
          <Button size="sm" asChild className="w-full">
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
  return (
    <section id="projects" className="py-10 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-10 max-w-7xl mx-auto px-4"
      >
        {/* Section Heading */}
        <div className="text-center space-y-2">
         
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* View All Projects Button */}
       
      </motion.div>
    </section>
  );
};

export default Projects;
