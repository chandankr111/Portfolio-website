"use client"

import { motion } from 'framer-motion';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const education = [
  {
    degree: "B.Tech",
    institution: "Indian Institute of Technology, Guwahati",
    period: "2022 - 2026",
    specialization: "Civil Engineering"
  }
];

const certifications = [
  
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024"
  },
  {
    title: "Full Stack Development and DevOps",
    issuer: "100xDevs by Harkirat Singh",
    date: "2023"
  },
  {
    title: "Python for Data Science",
    issuer: "IBM",
    date: "2025"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-10 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <div className="space-y-3">
          <h2 className="text-3xl font-bold">Education & Certifications</h2>
          <div className="h-1 w-20 bg-primary/30 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-semibold">Education</h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={`${edu.institution}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex flex-col gap-2 mb-1">
                        <CardTitle className="text-lg">{edu.degree}</CardTitle>
                        <span className="text-sm text-muted-foreground">{edu.period}</span>
                      </div>
                      <CardDescription className="text-base font-medium text-primary/90">
                        {edu.institution}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>{edu.specialization}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Certifications</h3>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="pt-6 pb-4">
                  <ul className="space-y-4">
                    {certifications.map((cert, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className={`h-2 w-2 rounded-full bg-chart-${index + 1}`}></div>
                        <div>
                          <p className="font-medium">{cert.title}</p>
                          <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;