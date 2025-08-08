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
    title: "Deployment Application",
    description: `Built a full-stack deployment platform inspired by Vercel that enables users to deploy GitHub repositories with real-time status tracking, automated builds, and static hosting via Cloudflare R2. It features Redis for live deployment state management and Dockerized infrastructure for ease of development.`, 
    image: "https://pub-c89890c107e04de0afc474300dbac3da.r2.dev/Screenshot%202025-07-19%20160450.png",
    liveUrl: "https://youtu.be/lGC6XQhYClM",
    githubUrl: "https://github.com/chandankr111/Deployment-application.git",
    technologies: [
      "Next.js", "Node.js", "Express", "Docker", "Redis",
      "Cloudflare R2", "TypeScript", "Tailwind CSS",
      "GitHub API", "Vite", "Webhooks"
    ]
  }
  
  ,
  
  {
    type: "fullstack",
    title: "Netflix-clone Deploy on AWS",
    description: "Its complete DEV + SEC + OPS project deploy on AWS",
    image: "https://pub-c89890c107e04de0afc474300dbac3da.r2.dev/Screenshot 2025-06-20 181024.png",
    liveUrl: "https://www.linkedin.com/posts/chandan-kumar-55023524b_aws-eks-kubernetes-activity-7342199743327997952-tgPm",
    githubUrl: "https://github.com/chandankr111/DevSecOps-Project-netflix",
    technologies: [
      "Kubernetes", "AWS", "Docker", "Jenkins", "SonarQube", "Trivy", "Prometheus", "Grafana",
      "EKS", "Helm", "ArgoCD", "GitHub Actions"
    ]
      },
      {
        type: "fullstack",
        title: "DevSecOps Pipeline for 0-X game",
        description: "Implemented a complete DevSecOps pipeline for a React-based Tic Tac Toe game with real-time game state, score tracking, and responsive UI. The CI/CD pipeline integrates GitHub Actions, Trivy, Docker, and Argo CD with GitOps practices to ensure secure and automated deployments on Kubernetes. Includes vulnerability scanning, containerization, and secrets management for production-grade delivery.",
      
        image: "https://pub-c89890c107e04de0afc474300dbac3da.r2.dev/1748607674446.jpeg",
        liveUrl: "https://www.linkedin.com/posts/chandan-kumar-55023524b_devsecops-ci_cd-kubernetes-activity-7342199743327997952-tgPm",
        githubUrl: "https://github.com/chandankr111/devsecops-demo",
        technologies: [
          "GitHub Actions", "Docker", "Trivy", "GHCR", "Kubernetes", "ArgoCD",
          "React", "TypeScript", "Tailwind CSS"
        ]
      }
      ,
      {
        type: "fullstack",
        title: "NetBanking-app",
        description: "Build a NetBanking app where user can do transaction and see the history of transaction.",
        image: "#",
        liveUrl: "#",
        githubUrl: "https://github.com/chandankr111/Net-banking--app.git",
        technologies: [
          "Next.js",
          "React.js",
          "TypeScript",
          "Node.js",
          "Express",
          "Tailwind CSS",
          "PostgreSQL",
          "Prisma ORM",
          "Turborepo",
          "Docker",
          "JWT"
        ]
      },
  {
    type: "fullstack",
    title: "Blog-live",
    description: "Developed a dynamic blogging platform allowing users to share stories, create posts, and interact with the community. Implemented a modular architecture with a custom NPM package for seamless frontend-backend integration. Backend deployed on Cloudflare.",
    image: "",
    liveUrl: "https://blog-git-main-chandan-kumars-projects-f7f9d157.vercel.app/signup",
    githubUrl: "https://github.com/chandankr111/blog-live.git",
    "technologies": [
      "React.js",
      "TypeScript",
      "Node.js",
      "HONO",
      "Zod",
      "Tailwind CSS",
      "PostgreSQL (Neon Cloud)",
      "Prisma ORM",
      "Cloudflare",
      
    ]
  },
  {
    type: "fullstack",
    title: "Image-Generation-Model",
    description: "Developed the backend for an image generation system that allows users to train the model with custom images and generate outputs based on those. The system also supports text-to-image generation.",
    image: "#",
    liveUrl: "#",
    githubUrl: "https://github.com/chandankr111/Image-Generation-Model.git",
    technologies: [ " Turbo", "Next.js", "TypeScript", "React", "Node.js", "Express", "Cloudflare", "R2-Bucket" , "Fal-AI API"]
  },
  {
    type: "fullstack",
    title: "Video-conference-app",
    description: "Build a video confernece app where user can join meeting in same room.",
    image: "#",
    liveUrl: "#",
    githubUrl: "https://github.com/chandankr111/Video-Conferencing-app.git",
    technologies: [ "React.js", "TypeScript", "Node.js", "Express", "WebRTC", "Socket.io", "WebSockets"]
  },
  {
    type: "fullstack",
    title: "Scalable-chat-app",
    description: "Implement a scalable backend for chat app",
    image: "#",
    liveUrl: "#",
    githubUrl: "https://github.com/chandankr111/Scalable-chat-app.git",
    technologies: [ "Bun", "TypeScript", "Node.js", "Express", "WebSockets"]
  },
  {
    type: "fullstack",
    title: "Simple gRpc-Implementation",
    description: "Implement a simple gRpc-Implementation",
    image: "#",
    liveUrl: "#",
    githubUrl: "https://github.com/chandankr111/gRPC-implementation.git",
    technologies: [ "gRPC", "protobuf", "Bun" ,  "TypeScript", "Node.js", "Express"]
  },
  {
    type: "fullstack",
    title: "Simple pub-sub sensor-data-broadcasting-application",
    description: "Implement a PUB-SUB microservices to sensor-data-broadcasting-application",
    image: "#",
    liveUrl: "#",
    githubUrl: "https://github.com/chandankr111/sensor-data-broadcasting--implementing-using-redis-pubsub---backend-.git",
    technologies: [ "redis pub-sub" , "docker" , "TypeScript", "Node.js", "Express"]
  },

  


  {
    type: "fullstack",
    title: "Simple rpc-Implementation",
    description: "Implement a simple rpc-Implementation",
    image: "#",
    liveUrl: "#",
    githubUrl: "https://github.com/chandankr111/RPC-simple-implementation.git",
    technologies: [ "TypeScript", "Node.js", "Express", "WebSockets"]
  },

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

const ProjectCard = ({ project, index }: { project: typeof allProjects[0]; index: number }) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

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
              <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                <PopoverTrigger asChild>
                  <button
                    className="text-xs px-2 py-1 border rounded-md border-muted-foreground text-muted-foreground hover:bg-muted cursor-pointer"
                    onMouseEnter={() => setPopoverOpen(true)}
                    onMouseLeave={() => setPopoverOpen(false)}
                  >
                    +{project.technologies.length - 3}
                  </button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto max-w-xs max-h-40 overflow-y-auto flex flex-wrap gap-2 z-50 p-3 animate-in fade-in zoom-in-95"
                  onMouseEnter={() => setPopoverOpen(true)}
                  onMouseLeave={() => setPopoverOpen(false)}
                >
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
  const [filter, setFilter] = useState("fullstack");
  const filteredProjects = allProjects.filter(project => project.type === filter);

  return (
    <section id="projects" className="py-20 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-10 max-w-7xl mx-auto px-4"
      >
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant={filter === "fullstack" ? "default" : "outline"} onClick={() => setFilter("fullstack")}>Full Stack & DevOps</Button>
          <Button variant={filter === "ml" ? "default" : "outline"} onClick={() => setFilter("ml")}>ML / AI</Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
