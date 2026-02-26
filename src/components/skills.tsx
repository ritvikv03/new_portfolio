"use client";

import { motion } from "framer-motion";
import {
    Code2,
    Cpu,
    Database,
    Globe,
    Layers,
    Layout,
    Smartphone,
    Zap
} from "lucide-react";

const SKILLS = [
    { name: "Frontend", icon: Layout, items: ["React", "Next.js", "Tailwind CSS", "TypeScript"] },
    { name: "Backend", icon: Database, items: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
    { name: "AI/ML", icon: Cpu, items: ["OpenCV", "TensorFlow", "PyTorch", "Computer Vision"] },
    { name: "Tools", icon: Zap, items: ["Git", "Docker", "Vercel", "AWS"] },
];

export function Skills() {
    return (
        <section id="skills" className="py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Prowess</h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        A comprehensive toolkit built through years of learning and building complex systems.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {SKILLS.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-3xl border bg-background/50 hover:bg-background transition-colors group"
                        >
                            <skill.icon className="w-10 h-10 mb-6 text-primary group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
                            <ul className="space-y-2">
                                {skill.items.map(item => (
                                    <li key={item} className="text-muted-foreground flex items-center text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-2" />
                                        {item}
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
