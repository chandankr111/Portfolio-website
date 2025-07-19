"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
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
    title: "Exchange-project",
    description: "Built a scalable Exchange Trading App with real-time orderbooks, in-memory matching engine, WebSocket-based data streams, and TimescaleDB-backed time-series persistence. Designed using a microservices architecture with Redis for messaging and Next.js for frontend.",
    image: "https://pub-c89890c107e04de0afc474300dbac3da.r2.dev/Screenshot%202025-05-21%20231752.png",
    liveUrl: "https://youtu.be/7fwSKeKwXTI",
    githubUrl: "https://github.com/chandankr111/Exchange-Final-project",
    technologies: ["Next.js", "Node.js", "Redis", "WebSockets", "Microservices"]
  },
  {
    type: "fullstack",
    title: "Automation-Project",
    description: "Developed a no-code automation platform to create trigger-based workflows, using Kafka, Redis, and PostgreSQL for real-time event processing and Dockerized deployment.",
    image: "https://pub-c89890c107e04de0afc474300dbac3da.r2.dev/Screenshot%202025-07-19%20153607.png",
    liveUrl: "https://youtu.be/PT17EJ6hyK4",
    githubUrl: "https://github.com/chandankr111/Automation-Platform.git",
    technologies: [
      "Next.js", "Node.js", "Express", "JWT", "Kafka",
      "PostgreSQL", "Prisma", "Docker", "TypeScript",
      "Tailwind CSS", "Webhooks", 
    ]
    
  },

  {
    type: "fullstack",
    title: "Netflix-clone Deploy on AWS",
    description: "Its complete DEV + SEC + OPS project deploy on netflix",
    image: "https://pub-c89890c107e04de0afc474300dbac3da.r2.dev/Screenshot 2025-06-20 181024.png",
    liveUrl: "https://www.linkedin.com/posts/chandan-kumar-55023524b_aws-eks-kubernetes-activity-7342199743327997952-tgPm",
    githubUrl: "https://github.com/chandankr111/DevSecOps-Project-netflix",
    technologies: [
      "Kubernetes", "AWS", "Docker", "Jenkins", "SonarQube", "Trivy", "Prometheus", "Grafana",
      "EKS", "Helm", "ArgoCD", "GitHub Actions"
    ]
  },
  // {
  //   type: "fullstack",
  //   title: "Deployment Application",
  //   description: "Built a full-stack deployment platform inspired by Vercel that enables users to deploy GitHub repositories with real-time status tracking, automated builds, and static hosting via Cloudflare R2. It features Redis for live deployment state management and Dockerized infrastructure for ease of development.",
  //   image: "https://pub-c89890c107e04de0afc474300dbac3da.r2.dev/Screenshot%202025-07-19%20160450.png",
  //   liveUrl: "https://youtu.be/lGC6XQhYClM",
  //   githubUrl: "https://github.com/chandankr111/Deployment-application.git",
  //   technologies: [
  //     "Next.js", "Node.js", "Express", "Docker", "Redis",
  //     "Cloudflare R2", "TypeScript", "Tailwind CSS",
  //     "GitHub API", "Vite", "Webhooks"
  //   ]
  // },
  {
    type: "ml",
    title: "Crypto-Metrics-Analyzer",
    description: "Built a Bitcoin price prediction model using Gradient Boosting and other ML algorithms, achieving low MAE scores through advanced tuning, feature engineering, and data visualization.",

    image: "https://pub-c89890c107e04de0afc474300dbac3da.r2.dev/download.jpg",
    liveUrl: "#",
    githubUrl: "https://github.com/chandankr111/Crypto-Metrics-Analyzer.git",
    technologies: ["Python", "Scikit-learn", "Gradient Boosting", "Random Forest", "Linear Regression", "Decision Tree", "GridSearchCV", "Pandas", "Matplotlib", "Seaborn"]
  
  },
  {
    type: "ml",
    title: "Image-Segmentation",
    description: "Implemented an image segmentation model using U-Net with EfficientNet-B0 encoder, optimized with Dice Loss and BCEWithLogitsLoss using PyTorch and SMP.",

    image: "https://pub-c89890c107e04de0afc474300dbac3da.r2.dev/Image-SEgmentation.png",
    liveUrl: "#",
    githubUrl: "https://github.com/chandankr111/Image_Segmentation",
    technologies: [
      "Python", "PyTorch", "U-Net", "EfficientNet-B0", "ImageNet", "Segmentation Models PyTorch",
      "OpenCV", "Dice Loss", "BCEWithLogitsLoss", "Adam Optimizer"
    ]
  },
  {
    type: "ml",
    title: "Diabetes-prediction",
    description: "Built a logistic regression model to predict diabetes using health metrics like glucose and BMI, with EDA, preprocessing, and evaluation via precision-recall and confusion matrix.",

    image: "https://pub-c89890c107e04de0afc474300dbac3da.r2.dev/diabetes.jpg",
    liveUrl: "#",
    githubUrl: "https://github.com/chandankr111/Diabetes_pridiction.git",
    technologies: [
      "Python", "Logistic Regression", "Pandas", "NumPy", "Matplotlib", "Seaborn",
      "Scikit-learn", "EDA", "Normalization", "Confusion Matrix", "Precision-Recall"
    ]
  }
];

const programmingSkills = [
  "C++", "Python", "Data Structures", "Algorithms", "Competitive Programming"
];

const fullstackSkills = [
  "Next.js", "React", "Node.js", "Express", "MongoDB", "PostgreSQL",
  "FastAPI", "TypeScript", "JavaScript",  "Redis" , "Pub/Sub",
  "Kafka", "WebSockets", "WebRTC", "Docker", "Kubernetes", "AWS", "CI/CD",
   "System Design"
];

const mlSkills = [
  "Python", "Machine Learning", "Deep Learning",  "Image Processing", "NLP",
  "PyTorch", "TensorFlow", "scikit-learn", "OpenCV", "Pandas", "NumPy", "Matplotlib",
  "Seaborn", "Langchain", 
  "Power BI",  "Data Structures & Algorithms",
 
];

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        <CardContent className="flex-grow pt-4 pb-2 px-4">
          <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
          <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
          <div className="flex flex-wrap gap-2 items-center">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <Badge key={i} variant="outline" className="text-xs px-2 py-1">{tech}</Badge>
            ))}

            {project.technologies.length > 3 && (
              <Popover>
                <PopoverTrigger asChild>
                  <button className="text-xs px-2 py-1 border rounded-md border-muted-foreground text-muted-foreground hover:bg-muted cursor-pointer">
                    +{project.technologies.length - 3}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto max-w-xs max-h-40 overflow-y-auto flex flex-wrap gap-2 z-50 p-3 animate-in fade-in zoom-in-95">
                  {project.technologies.slice(3).map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs px-2 py-1">
                      {tech}
                    </Badge>
                  ))}
                </PopoverContent>
              </Popover>
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
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Projects</h2>
          <div className="h-1 w-20 bg-primary/30 rounded-full"></div>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button variant={selected === "fullstack" ? "default" : "outline"} onClick={() => setSelected("fullstack")}>Full Stack & DevOps</Button>
          <Button variant={selected === "ml" ? "default" : "outline"} onClick={() => setSelected("ml")}>ML/AI</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-3 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
            <div className="flex justify-center pt-2">
              <Link href="/projects">
                <Button size="lg" variant="outline" className="gap-2">
                  View All Projects <ExternalLink className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="sticky top-20 space-y-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Programming & CP</h3>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {programmingSkills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs px-2 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <a href="https://leetcode.com/chandankr111/" target="_blank" rel="noopener noreferrer" className="gap-1">
                      Visit LeetCode <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
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
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;

