"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Code2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/data/portfolio";

const TAG_COLORS: Record<string, string> = {
    "Machine Learning": "text-indigo-400 border-indigo-500/30 bg-indigo-500/5",
    "Analytics": "text-emerald-400 border-emerald-500/30 bg-emerald-500/5",
    "LLM / Agents": "text-amber-400 border-amber-500/30 bg-amber-500/5",
    "Full-Stack": "text-cyan-400 border-cyan-500/30 bg-cyan-500/5",
};

export function Projects() {
    const { projects } = PORTFOLIO_DATA;

    return (
        <section id="projects" className="py-32">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="flex flex-col mb-16 px-4">
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
                        Featured Lab Work
                    </h2>
                    <p className="text-[#d1d1d6] text-lg font-medium max-w-2xl leading-relaxed">
                        A collection of technical proofs across ML architecture, visual analytics, and high-performance engineering.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bento-card group flex flex-col p-0 overflow-hidden border-white/10 hover:border-white/30"
                        >
                            {/* Image Container */}
                            <div className="aspect-[16/10] relative overflow-hidden bg-[#0d0d15] border-b border-white/10">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover object-top transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100 grayscale-[0.5] group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d15] via-transparent to-transparent opacity-60" />

                                {/* Status badge */}
                                <div className="absolute top-6 left-6">
                                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-black/80 backdrop-blur-xl border border-white/20 text-[10px] font-black tracking-[0.2em] uppercase text-white">
                                        <span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                                        {project.status}
                                    </span>
                                </div>

                                {/* Tag badge */}
                                {project.tag && (
                                    <div className="absolute top-6 right-6">
                                        <span className={`inline-flex px-4 py-1.5 rounded-xl border-2 text-[10px] font-black tracking-[0.2em] uppercase backdrop-blur-xl bg-black/40 ${TAG_COLORS[project.tag] ?? "text-white/60 border-white/10"}`}>
                                            {project.tag}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Card Content */}
                            <div className="p-10 flex flex-col flex-grow">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 rounded-lg bg-white/5 text-white/40">
                                        <Code2 size={16} />
                                    </div>
                                    <h3 className="text-2xl font-black text-white tracking-tight">
                                        {project.title}
                                    </h3>
                                </div>

                                {/* Hook line */}
                                <p className="text-blue-400 text-sm font-bold tracking-wide mb-6">
                                    {project.hook}
                                </p>

                                {/* Bullet highlights */}
                                <ul className="space-y-4 mb-8">
                                    {project.highlights.map((h: string, i: number) => (
                                        <li key={i} className="flex items-start text-[#d1d1d6] text-sm leading-relaxed font-medium">
                                            <span className="mr-3 mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500/40" />
                                            {h}
                                        </li>
                                    ))}
                                </ul>

                                {/* Stack & Metric Row */}
                                <div className="mt-auto pt-8 border-t border-white/10 space-y-6">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t: string) => (
                                            <span
                                                key={t}
                                                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[#a1a1aa] text-[9px] font-black uppercase tracking-widest hover:border-white/20 hover:text-white transition-all"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="inline-flex items-center px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-[10px] font-black tracking-[0.15em] uppercase text-blue-400 shadow-inner">
                                            {project.metric}
                                        </div>

                                        <div className="flex items-center gap-6">
                                            <Link
                                                href={project.github}
                                                target="_blank"
                                                className="flex items-center text-[10px] font-black tracking-[0.2em] uppercase text-white/40 hover:text-white transition-all group/link"
                                            >
                                                Github
                                                <ArrowUpRight size={14} className="ml-1 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                                            </Link>
                                            {project.live && (
                                                <Link
                                                    href={project.live}
                                                    target="_blank"
                                                    className="flex items-center text-[10px] font-black tracking-[0.2em] uppercase text-white/20 hover:text-white/80 transition-all"
                                                >
                                                    Live
                                                    <ExternalLink size={12} className="ml-1" />
                                                </Link>
                                            )}
                                        </div>
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
