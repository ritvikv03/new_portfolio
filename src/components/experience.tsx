"use client";

import { motion } from "framer-motion";

const EXPERIENCE = [
    {
        title: "Full Stack Engineer",
        company: "Self-Employed",
        period: "2024 — Present",
        description: "Developing modern web applications using Next.js, TypeScript, and AI integrations. Focused on performance and high-end aesthetics."
    },
    {
        title: "AI Research Fellow",
        company: "Academic Project",
        period: "2023 — 2024",
        description: "Implemented deep learning models for computer vision tasks, specializing in object detection and facial feature analysis."
    },
    {
        title: "Frontend Developer Intern",
        company: "Tech Start-up",
        period: "2022 — 2023",
        description: "Collaborated with cross-functional teams to build responsive user interfaces and interactive dashboards."
    }
];

export function Experience() {
    return (
        <section id="experience" className="py-24">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-black mb-4">Journey</h2>
                    <p className="text-white/50 max-w-xl text-sm leading-relaxed">
                        My professional trajectory and the experiences that have shaped my technical expertise.
                    </p>
                </div>

                <div className="space-y-6">
                    {EXPERIENCE.map((exp, index) => (
                        <motion.div
                            key={exp.title + index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bento-card group flex flex-col md:flex-row md:items-center justify-between gap-4 p-8"
                        >
                            <div className="flex-grow">
                                <span className="text-[10px] font-bold tracking-widest uppercase text-white/30 mb-2 block">{exp.period}</span>
                                <h3 className="text-xl font-bold group-hover:text-white transition-colors">{exp.title}</h3>
                                <p className="text-white/50 text-sm mt-1">{exp.company}</p>
                            </div>
                            <div className="md:max-w-md">
                                <p className="text-sm text-white/40 leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
