"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  type: string;
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  technologies: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const allProjects = [
  {
    type: "fullstack",
    title: "E-Commerce Platform",
    description: "Inventory, payments, analytics—all in one e-com dashboard.",
    image: "https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg",
    liveUrl: "#",
    githubUrl: "#",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"]
  },
  {
    type: "fullstack",
    title: "Task Management App",
    description: "Kanban + real-time collaboration + role-based control.",
    image: "https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg",
    liveUrl: "#",
    githubUrl: "#",
    technologies: ["React", "Express", "PostgreSQL", "Socket.io"]
  },
  {
    type: "fullstack",
    title: "Cloud CI/CD Platform",
    description: "Infrastructure as Code + Monitoring + One-click deploy.",
    image: "https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg",
    liveUrl: "#",
    githubUrl: "#",
    technologies: ["Kubernetes", "Terraform", "AWS", "Go", "Vue.js"]
  },
  {
    type: "ml",
    title: "Sentiment Analysis API",
    description: "BERT model for analyzing customer sentiments accurately.",
    image: "https://images.pexels.com/photos/590037/pexels-photo-590037.jpeg",
    liveUrl: "#",
    githubUrl: "#",
    technologies: ["PyTorch", "FastAPI", "Hugging Face", "Docker", "React"]
  },
  {
    type: "ml",
    title: "Computer Vision Detector",
    description: "YOLOv5 based detector with real-time custom training.",
    image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg",
    liveUrl: "#",
    githubUrl: "#",
    technologies: ["TensorFlow", "OpenCV", "Flask", "JavaScript"]
  },
  {
    type: "ml",
    title: "NLP Document Classifier",
    description: "System to auto-classify legal docs using NLP pipelines.",
    image: "https://images.pexels.com/photos/1181279/pexels-photo-1181279.jpeg",
    liveUrl: "#",
    githubUrl: "#",
    technologies: ["SpaCy", "NLTK", "scikit-learn", "MongoDB"]
  }
];

const fullstackSkills = [
  "Next.js", "React", "Node.js", "Express", "MongoDB", "PostgreSQL",
  "FastAPI", "Flask", "TypeScript", "JavaScript", "Redis", "Redis Pub/Sub",
  "Kafka", "WebSockets", "WebRTC", "Docker", "Kubernetes", "AWS", "CI/CD",
  "GitHub Actions", "Jenkins", "SonarQube", "Terraform", "Stripe", "Socket.io",
  "Vue.js", "System Design", "Infrastructure as Code", "Prometheus", "Grafana"
];


const mlSkills = [
  "Python", "C", "C++",
  "PyTorch", "TensorFlow", "scikit-learn", "OpenCV", "Pandas", "NumPy", "Matplotlib",
  "Seaborn", "Langchain", "SpaCy", "NLTK",
  "Power BI", "Google Sheets", "Data Structures & Algorithms",
  "Machine Learning", "Deep Learning", "Image Processing", "NLP", "Computer Vision"
];


const ProjectCard = ({ project, index }: ProjectCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="h-full"
  >
    <Card className="h-full flex flex-col overflow-hidden group shadow-lg rounded-xl">
      <div className="relative h-40 overflow-hidden">
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

const Projects = () => {
  const [selected, setSelected] = useState("fullstack");
  const filtered = selected === "all" ? allProjects : allProjects.filter(p => p.type === selected);

  return (
    <section id="projects" className="py-10 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-10"
      >
        {/* Section Heading */}
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Projects</h2>
          <div className="h-1 w-20 bg-primary/30 rounded-full"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4">
          <Button variant={selected === "fullstack" ? "default" : "outline"} onClick={() => setSelected("fullstack")}>Full Stack & DevOps</Button>
          <Button variant={selected === "ml" ? "default" : "outline"} onClick={() => setSelected("ml")}>ML/AI</Button>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Projects 3/4 */}
          <div className="md:col-span-3 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>

            {/* View All Button BELOW project cards */}
            <div className="flex justify-center pt-2">
              <Link href="/projects">
                <Button size="lg" variant="outline" className="gap-2">
                  View All Projects <ExternalLink className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Skills */}
          <div className="md:col-span-1">
            <div className="sticky top-20 space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Full Stack & DevOps</h3>
                <div className="flex flex-wrap gap-2">
                  {fullstackSkills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs px-2 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">ML / AI</h3>
                <div className="flex flex-wrap gap-2">
                  {mlSkills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs px-2 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
