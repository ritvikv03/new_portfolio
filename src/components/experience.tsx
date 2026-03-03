"use client";

import { motion } from "framer-motion";
import { Calendar, ExternalLink, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Experience() {
    const { experiences } = PORTFOLIO_DATA;

    return (
        <section id="experience" className="py-24">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-black mb-4 text-white tracking-tight italic uppercase">
                        The Chronicle
                    </h2>
                    <p className="text-white/70 font-medium max-w-2xl text-lg uppercase tracking-tight">
                        A selective history of building production-ready intelligence and high-stakes data architectures.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bento-card group h-full flex flex-col"
                        >
                            <div className="p-8 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex flex-col gap-2">
                                        <span className="text-[10px] font-black tracking-[0.2em] uppercase px-3 py-1 rounded-full bg-white/10 text-white w-fit border border-white/10">
                                            {exp.type}
                                        </span>
                                        <h3 className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors uppercase leading-tight">
                                            {exp.company}
                                        </h3>
                                        <p className="text-lg font-bold text-white/90 uppercase tracking-tight">
                                            {exp.role}
                                        </p>
                                    </div>
                                    <div className="flex gap-2">
                                        {exp.github && (
                                            <Link
                                                href={exp.github}
                                                target="_blank"
                                                className="h-9 w-9 flex items-center justify-center rounded-xl border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/40 transition-all icon-luminary shadow-sm"
                                            >
                                                <Github size={16} />
                                            </Link>
                                        )}
                                        {exp.linkedin && (
                                            <Link
                                                href={exp.linkedin}
                                                target="_blank"
                                                className="h-9 w-9 flex items-center justify-center rounded-xl border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/40 transition-all icon-luminary shadow-sm"
                                            >
                                                <Linkedin size={16} />
                                            </Link>
                                        )}
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-4 mb-6">
                                    <div className="flex items-center gap-2 text-blue-400 px-2.5 py-1 rounded-lg bg-blue-400/10 border border-blue-400/20">
                                        <Calendar size={12} />
                                        <span className="text-[10px] font-black uppercase tracking-wider">{exp.period}</span>
                                    </div>
                                    <span className="text-white/60 text-[10px] font-black uppercase tracking-widest">{exp.location}</span>
                                </div>

                                <ul className="space-y-4 mb-8 flex-grow">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex gap-4 group/item">
                                            <div className="mt-2.5 h-1.5 w-1.5 rounded-full bg-white/30 shrink-0 group-hover/item:bg-blue-400 transition-colors" />
                                            <p className="text-base text-white/80 font-medium leading-relaxed group-hover/item:text-white transition-colors">
                                                {item}
                                            </p>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10 mt-auto">
                                    {exp.technologies.slice(0, 4).map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-[10px] font-black text-white/60 uppercase tracking-widest group-hover:border-white/20 transition-all"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    <Link
                                        href={exp.linkedin || "/"}
                                        target="_blank"
                                        className="ml-auto text-blue-400 hover:text-blue-300 flex items-center gap-2 text-[9px] font-black uppercase tracking-widest group/link transition-all"
                                    >
                                        Full Report <ExternalLink size={10} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
