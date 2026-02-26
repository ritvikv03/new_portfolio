"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bento-card group flex flex-col p-0 overflow-hidden"
                        >
                            {/* Image Banner */}
                            <div className="aspect-[16/9] relative overflow-hidden bg-[#18181b]">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url(${project.image})` }}
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-grow">
                                <span className="text-[10px] font-bold tracking-widest uppercase text-[#a1a1aa] mb-2">
                                    {project.status}
                                </span>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-[#a1a1aa] text-sm leading-relaxed mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="mb-8">
                                    <h4 className="text-[10px] font-bold tracking-widest uppercase text-[#a1a1aa] mb-3">
                                        Technologies
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t) => (
                                            <span key={t} className="badge">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-auto">
                                    <Link
                                        href={project.github}
                                        target="_blank"
                                        className="inline-flex items-center text-xs font-bold tracking-widest uppercase text-white/50 hover:text-white transition-colors group"
                                    >
                                        View Details
                                        <ArrowUpRight size={14} className="ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
