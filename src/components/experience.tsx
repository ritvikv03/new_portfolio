"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Experience() {
    const { experience } = PORTFOLIO_DATA;

    return (
        <section id="experience" className="py-24">
            <div className="container mx-auto px-6 max-w-5xl">
                <h2 className="text-3xl md:text-5xl font-black mb-16 text-white text-left tracking-tight">
                    Work experience
                </h2>

                <div className="relative pl-8 md:pl-12 border-l border-[#1e1e20]">
                    <div className="space-y-16">
                        {experience.map((exp, index) => (
                            <motion.div
                                key={exp.company + index}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute -left-[37px] md:-left-[53px] top-2 h-2.5 w-2.5 rounded-full bg-[#3f3f46] border border-[#1e1e20] z-10" />

                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">
                                    {exp.company}
                                </h3>

                                <div className="flex flex-wrap items-center gap-2 mb-6">
                                    <div className="flex items-center text-[#a1a1aa] text-sm font-bold">
                                        <span className="font-mono mr-2 text-[10px] opacity-40">{"</>"}</span>
                                        <span>{exp.title}</span>
                                    </div>
                                    <span className="text-[10px] font-bold tracking-widest uppercase text-white/30 border border-[#1e1e20] bg-white/[0.02] px-2 py-0.5 rounded-md">
                                        {exp.type}
                                    </span>
                                    <span className="text-[10px] font-bold tracking-widest uppercase text-white/20">
                                        | {exp.period}
                                    </span>
                                </div>

                                <ul className="space-y-4 max-w-3xl">
                                    {exp.points.map((point, i) => (
                                        <li key={i} className="flex items-start text-[#a1a1aa] text-sm md:text-base leading-relaxed">
                                            <span className="mr-3 mt-2 h-1 w-1 shrink-0 rounded-full bg-white/20" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
