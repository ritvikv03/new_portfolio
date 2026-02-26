"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const PROJECTS = [
    {
        title: "Data Analysis Chatbot",
        description: "Interactive Streamlit app using Google Gemini AI to simplify complex data analytics. Upload CSV/Excel/PDF/Word for instant insights.",
        tech: ["Python", "Streamlit", "Gemini AI"],
        github: "https://github.com/ritvikv03/Data_Analysis_Chatbot",
        image: "https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=800",
        status: "Featured Project"
    },
    {
        title: "Spotify Visualizer & Recommendation",
        description: "Vue-based interactive tool providing a galaxy visualization of music and playlist recommendations using the Spotify API.",
        tech: ["Vue.js", "Spotify API", "Tailwind"],
        github: "https://github.com/ritvikv03/Spotify-Visualizer-Recommendation",
        image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=800",
        status: "Featured Project"
    },
    {
        title: "Molson Coors Analytics",
        description: "Data science project for eCommerce content optimization to drive sales for Molson Coors, developed for an analytics challenge.",
        tech: ["Python", "Pandas", "Analytics"],
        github: "https://github.com/ritvikv03/Molson_Coors_Analytics_Challenge",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        status: "Featured Project"
    },
    {
        title: "Portfolio Website",
        description: "Modern, high-performance developer portfolio with glassmorphism, fluid animations, and a secure build pipeline.",
        tech: ["Next.js", "TypeScript", "Tailwind 4"],
        github: "https://github.com/ritvikv03/new_portfolio",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
        status: "Featured Project"
    }
];

export function Projects() {
    return (
        <section id="projects" className="py-24">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-black mb-4">Featured Work</h2>
                    <p className="text-white/50 max-w-xl text-sm leading-relaxed">
                        A selection of my recent technical work across AI, data science, and web engineering.
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
                            className="bento-card group flex flex-col p-0 overflow-hidden"
                        >
                            {/* Project Banner Image */}
                            <div className="aspect-video relative overflow-hidden bg-muted/20">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                    style={{ backgroundImage: `url(${project.image})` }}
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                                <div className="absolute top-4 left-4">
                                    <span className="badge bg-black/40 backdrop-blur-md border hover:bg-black transition-colors">{project.status}</span>
                                </div>
                            </div>

                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                <p className="text-sm text-white/50 mb-6 leading-relaxed line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map(t => (
                                        <span key={t} className="badge">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between mt-auto">
                                    <Link
                                        href={project.github}
                                        target="_blank"
                                        className="text-xs font-bold tracking-widest uppercase text-white/50 hover:text-white transition-colors flex items-center"
                                    >
                                        View Details <ArrowUpRight size={14} className="ml-1.5" />
                                    </Link>
                                    <div className="flex space-x-3">
                                        <Link href={project.github} target="_blank" className="text-white/30 hover:text-white transition-colors">
                                            <Github size={18} />
                                        </Link>
                                        <Link href="#" className="text-white/30 hover:text-white transition-colors">
                                            <ExternalLink size={18} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
