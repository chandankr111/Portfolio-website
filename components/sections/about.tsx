"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import clsx from "clsx";

const About = () => {
  return (
    <section id="about" className="py-8 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-10"
      >
        {/* Section Title with Download CV Button */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-0.5">
            <h2 className="text-3xl font-bold">About Me</h2>
            <div className="h-0.5 w-50 bg-primary/30 rounded-full" />
          </div>

          {/* Download CV Button */}
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-muted px-4 py-2 text-sm font-semibold text-foreground shadow-sm transition hover:bg-primary hover:text-background"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
            </svg>
            Download CV
          </a>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT: About Description */}
          <Card className="h-full shadow-md rounded-xl">
            <CardContent className="pt-6 pb-6 space-y-6 text-muted-foreground">
              <div className="space-y-4">
                <p className="text-base leading-relaxed">
                  I am a full-stack developer and system design enthusiast, currently pursuing my B.Tech at IIT Guwahati. I specialize in building scalable, secure, and high-performance web applications using modern technologies like React.js, Next.js, Node.js, Express.js and TypeScript.
                </p>
                <p className="text-base leading-relaxed">
                With hands-on experience in backend architecture, I work with Redis Pub/Sub, Kafka, WebSockets, and WebRTC to implement real-time, event-driven systems. My DevSecOps skillset includes containerized deployments via Docker and Kubernetes, CI/CD pipelines using GitHub Actions and Jenkins, infrastructure-as-code practices, monitoring with Grafana and Prometheus, and maintaining code quality with SonarQube. I also have hands-on experience deploying and managing scalable applications on AWS.
                </p>
                <p className="text-base leading-relaxed">
                I have hands-on experience in Machine Learning and AI, having completed coursework in ML, Deep Learning, and Image Processing. I’ve built projects in Deep Learning, Machine Learning, and classification using frameworks like PyTorch, TensorFlow, and Scikit-learn, often deploying them with FastAPI.                </p>
                <p className="text-base leading-relaxed">
                  I'm also skilled in data analysis and visualization with tools such as Pandas, Matplotlib, Seaborn, and Power BI.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* RIGHT: Education + Certifications + Availability */}
          <Card className="h-full shadow-md rounded-xl">
            <CardContent className="pt-3 pb-3 space-y-3">
              {/* Education Section */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Education</h3>
                <div className="space-y-1 text-sm text-muted-foreground max-h-32 overflow-y-auto pr-2">
                  <p className="font-semibold text-white">B.Tech</p>
                  <p>2022 - 2026</p>
                  <p className="font-medium text-white">
                    Indian Institute of Technology, Guwahati
                  </p>

                </div>
              </div>

              <div className="h-px bg-border" />

              {/* Certifications Section */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Certifications</h3>
                <div className="max-h-48 overflow-y-auto pr-2 space-y-4">
                  <div>
                    <a href="https://www.credly.com/badges/58c356c8-e563-4b70-a876-09b22c05f1d9/linked_in_profile" target="_blank" rel="noopener noreferrer" className="font-medium text-white hover:underline">
                      AWS Cloud Practitioner
                    </a>
                    <p className="text-sm text-muted-foreground">Amazon Web Services</p>
                  </div>
                  {/* <div>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="font-medium text-white hover:underline">
                      Full Stack Development and DevOps
                    </a>
                    <p className="text-sm text-muted-foreground">100xDevs by Harkirat Singh</p>
                  </div> */}
                  {/* <div>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="font-medium text-white hover:underline">
                      Full Stack Development and DevOps
                    </a>
                    <p className="text-sm text-muted-foreground">100xDevs by Harkirat Singh</p>
                  </div> */}
                  <div>
                    <a href="https://www.linkedin.com/in/chandan-kumar-55023524b/details/certifications/1732675100106/single-media-viewer?type=IMAGE&profileId=ACoAAD3K38wBhPZoSNyF09iV2rCh9IyFd1qllVw&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BA3z2Xm6vSMSlzvjqLXRikA%3D%3D" target="_blank" rel="noopener noreferrer" className="font-medium text-white hover:underline">
                      Full Stack Development and DevOps
                    </a>
                    <p className="text-sm text-muted-foreground">100xDevs by Harkirat Singh</p>
                  </div>
                  <div>
                    <a href="https://courses.cognitiveclass.ai/certificates/0f16e80e8030474d9f43bb8c0870d5fc" target="_blank" rel="noopener noreferrer" className="font-medium text-white hover:underline">
                      Python for Data Science
                    </a>
                    <p className="text-sm text-muted-foreground">IBM</p>
                  </div>
                  {/* Add more certifications here */}
                </div>
              </div>

              <div className="h-px bg-border" />

              {/* Availability Section */}
              <div>
                <h3 className="text-xl font-semibold mb-1">Availability</h3>
                <div className="divide-y divide-border text-sm text-muted-foreground">
                  {[
                    { type: "Freelance", status: "Available", color: "text-green-500" },
                    { type: "Full-time", status: "Available", color: "text-green-500" },
                    { type: "Part-time", status: "Limited", color: "text-yellow-500" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between py-2">
                      <span>{item.type}</span>
                      <span className={clsx("font-medium", item.color)}>{item.status}</span>
                    </div>
                  ))}
                </div>
              </div>

            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
