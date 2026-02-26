"use client";

import { motion } from "framer-motion";

const EXPERIENCE = [
    {
        company: "Self-Employed",
        title: "Full Stack Engineer",
        type: "Freelance",
        period: "2024 — Present",
        points: [
            "Developing modern web applications using Next.js, TypeScript, and AI integrations.",
            "Focused on high-performance architecture and premium user experience design."
        ]
    },
    {
        company: "Academic Project",
        title: "AI Research Fellow",
        type: "Fellowship",
        period: "2023 — 2024",
        points: [
            "Implemented deep learning models for computer vision tasks using TensorFlow and PyTorch.",
            "Specialized in object detection and facial feature analysis for research datasets."
        ]
    },
    {
        company: "Tech Start-up",
        title: "Frontend Developer Intern",
        type: "Internship",
        period: "2022 — 2023",
        points: [
            "Collaborated with cross-functional teams to build responsive user interfaces.",
            "optimized dashboard performance and implemented real-time data visualization."
        ]
    }
];

export function Experience() {
    return (
        <section id="experience" className="py-24">
            <div className="container mx-auto px-6 max-w-5xl">
                <h2 className="text-3xl md:text-5xl font-black mb-12 text-white">
                    Work experience
                </h2>

                <div className="space-y-12">
                    {EXPERIENCE.map((exp, index) => (
                        <motion.div
                            key={exp.company + index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-start"
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                                {exp.company}
                            </h3>

                            <div className="flex flex-wrap items-center gap-2 mb-4">
                                <div className="flex items-center text-[#a1a1aa] text-sm">
                                    <span className="font-mono mr-2">{"</>"}</span>
                                    <span className="font-bold">{exp.title}</span>
                                </div>
                                <span className="text-[10px] font-bold tracking-widest uppercase text-[#a1a1aa]/60 border border-[#1e1e20] px-2 py-0.5 rounded-md">
                                    {exp.type}
                                </span>
                                <span className="text-[10px] font-bold tracking-widest uppercase text-[#a1a1aa]/40">
                                    | {exp.period}
                                </span>
                            </div>

                            <ul className="space-y-3 max-w-3xl">
                                {exp.points.map((point, i) => (
                                    <li key={i} className="flex items-start text-[#a1a1aa] text-sm leading-relaxed">
                                        <span className="mr-3 mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#a1a1aa]/40" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
