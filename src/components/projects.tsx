"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Projects() {
    const { projects } = PORTFOLIO_DATA;

    return (
        <section id="projects" className="py-24">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`bento-card group flex flex-col p-0 overflow-hidden ${project.span}`}
                        >
                            {/* Image Banner 16:9 */}
                            <div className="aspect-[16/9] relative overflow-hidden bg-[#18181b] border-b border-[#1e1e20]">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url(${project.image})` }}
                                    onError={(e) => {
                                        (e.target as HTMLDivElement).style.backgroundImage = 'none';
                                        (e.target as HTMLDivElement).style.backgroundColor = '#18181b';
                                    }}
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />

                                {/* Fallback pattern while image is missing */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
                                    <div className="w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
                                </div>
                            </div>

                            {/* Content with 2rem padding (via bento-card class) */}
                            <div className="p-10 flex flex-col flex-grow">
                                <span className="text-[10px] font-black tracking-[0.2em] uppercase text-white/20 mb-3">
                                    FEATURED PROJECT
                                </span>

                                <h3 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight">
                                    {project.title}
                                </h3>

                                <p className="text-[#a1a1aa] text-sm md:text-base leading-relaxed mb-10 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="mb-10">
                                    <h4 className="text-[10px] font-black tracking-[0.2em] uppercase text-white/20 mb-4">
                                        TECHNOLOGIES
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t) => (
                                            <span key={t} className="badge bg-[#1e1e24]/40 hover:bg-[#1e1e24] border-[#1e1e20] text-[#a1a1aa] text-[10px] px-3 py-1.5 rounded-md font-bold uppercase tracking-wider">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-auto">
                                    <Link
                                        href={project.github}
                                        target="_blank"
                                        className="inline-flex items-center text-xs font-bold tracking-[0.2em] uppercase text-white/30 hover:text-white transition-colors group"
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
