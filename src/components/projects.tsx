"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import Link from "next/link";

const PROJECTS = [
    {
        title: "3D-Reconstruction",
        description: "Point-cloud generation using stereovision with OpenCV. Features disparity image training and real-time visualization.",
        tech: ["OpenCV", "C++", "Computer Vision"],
        github: "https://github.com/ritvikv03/3D-Reconstruction",
        stars: 12
    },
    {
        title: "EAST-Text-Detection",
        description: "Robust text detection in complex images using the EAST algorithm. Implemented for high-speed document processing.",
        tech: ["Python", "Deep Learning", "OpenCV"],
        github: "https://github.com/ritvikv03/EAST-Text-Detection",
        stars: 8
    },
    {
        title: "Image-Stitching",
        description: "Real-time digital image stitching using SURF feature extractor and OpenPano. Seamless panoramas from video streams.",
        tech: ["C++", "OpenPano", "Image Processing"],
        github: "https://github.com/ritvikv03/Image-Stitching",
        stars: 5
    },
    {
        title: "Age-Gender Prediction",
        description: "WideResNet model trained on IMDB-WIKI dataset for real-time age and gender classification from facial features.",
        tech: ["TensorFlow", "Keras", "Python"],
        github: "https://github.com/ritvikv03/Age-Gender_Prediction",
        stars: 15
    }
];

export function Projects() {
    return (
        <section id="projects" className="py-24 bg-muted/30">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-muted-foreground max-w-xl">
                        A selection of my recent technical work across computer vision, deep learning, and software engineering.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative glass p-8 rounded-3xl transition-all hover:-translate-y-2 hover:bg-background/80"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <Github size={24} />
                                </div>
                                <div className="flex space-x-4 text-muted-foreground text-sm font-mono">
                                    <span className="flex items-center"><Star size={14} className="mr-1" /> {project.stars}</span>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                            <p className="text-muted-foreground mb-6 line-clamp-2">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tech.map(t => (
                                    <span key={t} className="px-3 py-1 rounded-full bg-muted text-[10px] font-bold tracking-wider uppercase">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex space-x-4">
                                <Link
                                    href={project.github}
                                    target="_blank"
                                    className="flex items-center text-sm font-bold hover:text-primary transition-colors"
                                >
                                    <Github size={16} className="mr-2" /> Code
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center text-sm font-bold hover:text-primary transition-colors"
                                >
                                    <ExternalLink size={16} className="mr-2" /> Demo
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
