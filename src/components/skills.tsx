"use client";

import { motion } from "framer-motion";
import {
    Layout, Terminal,
    Brain, Server
} from "lucide-react";

const SKILL_GROUPS = [
    {
        name: "Frontend",
        skills: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion", "Vue.js"],
        icon: <Layout className="w-4 h-4" />
    },
    {
        name: "Backend",
        skills: ["Node.js", "Python", "PostgreSQL", "Supabase", "REST APIs", "GraphQL"],
        icon: <Server className="w-4 h-4" />
    },
    {
        name: "AI & ML",
        skills: ["TensorFlow", "PyTorch", "OpenCV", "Scikit-Learn", "Gemini API", "LLMs"],
        icon: <Brain className="w-4 h-4" />
    },
    {
        name: "Tools",
        skills: ["Git", "Docker", "Vercel", "Linux", "Unity", "Bash"],
        icon: <Terminal className="w-4 h-4" />
    }
];

export function Skills() {
    return (
        <section id="skills" className="py-24">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-black mb-4">Technical Stack</h2>
                    <p className="text-white/50 max-w-xl text-sm leading-relaxed">
                        A comprehensive overview of the technologies and tools I use to bring ideas to life.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {SKILL_GROUPS.map((group, groupIndex) => (
                        <motion.div
                            key={group.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: groupIndex * 0.1 }}
                            className="bento-card p-6"
                        >
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/70">
                                    {group.icon}
                                </div>
                                <h3 className="text-lg font-bold">{group.name}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span key={skill} className="badge bg-white/[0.03] hover:bg-white/10 transition-colors">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
