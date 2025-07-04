"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import clsx from "clsx";

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
        {/* Section Title */}
        <div className="space-y-3">
          <h2 className="text-3xl font-bold">About Me</h2>
          <div className="h-1 w-20 bg-primary/30 rounded-full" />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT: About Description + Availability */}
          <Card className="h-full shadow-md rounded-xl">
            <CardContent className="pt-6 pb-6 space-y-6 text-muted-foreground">
              <div className="space-y-4">
                <p className="text-base leading-relaxed">
                  I am a software engineer passionate about crafting dynamic and
                  user-centric web applications. With experience in modern
                  technologies, I thrive on building scalable and intuitive web
                  solutions. I embrace challenges as opportunities to learn and
                  grow as a developer.
                </p>
                <p className="text-base leading-relaxed">
                  My expertise spans across AI/ML solutions and full-stack
                  development with a focus on creating efficient, robust, and
                  user-friendly applications. I constantly explore new
                  technologies and methodologies to enhance my skillset and
                  deliver exceptional results.
                </p>
              </div>

              <div className="h-px bg-border" />

              {/* Availability Section */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Availability</h3>
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

          {/* RIGHT: Education + Certifications */}
          <Card className="h-full shadow-md rounded-xl">
            <CardContent className="pt-6 pb-6 space-y-6">
              {/* Education Section */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Education</h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p className="font-semibold text-white">B.Tech</p>
                  <p>2022 - 2026</p>
                  <p className="font-medium text-white">
                    Indian Institute of Technology, Guwahati
                  </p>
                  <p>Civil Engineering</p>
                </div>
              </div>

              <div className="h-px bg-border" />

              {/* Certifications Section */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Certifications</h3>
                <div className="max-h-48 overflow-y-auto pr-2 space-y-4">
                  <div>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="font-medium text-white hover:underline">
                      AWS Cloud Practitioner
                    </a>
                    <p className="text-sm text-muted-foreground">Amazon Web Services</p>
                  </div>
                  <div>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="font-medium text-white hover:underline">
                      Full Stack Development and DevOps
                    </a>
                    <p className="text-sm text-muted-foreground">100xDevs by Harkirat Singh</p>
                  </div>
                  <div>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="font-medium text-white hover:underline">
                      Python for Data Science
                    </a>
                    <p className="text-sm text-muted-foreground">IBM</p>
                  </div>
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
