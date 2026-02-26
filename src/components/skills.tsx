"use client";

import { motion } from "framer-motion";
import {
    Database, Layout, Server, Brain, Terminal,
    Code2, Cpu, Search,
    Cloud, Layers, GitBranch,
    Box, Zap, Wand2
} from "lucide-react";

const STACK = [
    { name: "Python", icon: <Code2 size={12} /> },
    { name: "SQL", icon: <Database size={12} /> },
    { name: "Next.js", icon: <Layout size={12} /> },
    { name: "Node.js", icon: <Server size={12} /> },
    { name: "TensorFlow", icon: <Brain size={12} /> },
    { name: "TypeScript", icon: <Terminal size={12} /> },
    { name: "React", icon: <Layers size={12} /> },
    { name: "Git", icon: <GitBranch size={12} /> },
    { name: "Docker", icon: <Box size={12} /> },
    { name: "Vercel", icon: <Zap size={12} /> },
    { name: "FastAPI", icon: <Zap size={12} /> },
    { name: "PyTorch", icon: <Brain size={12} /> },
    { name: "Scikit-learn", icon: <Cpu size={12} /> },
    { name: "PostgreSQL", icon: <Database size={12} /> },
    { name: "Tailwind CSS", icon: <Wand2 size={12} /> },
    { name: "Supabase", icon: <Cloud size={12} /> },
    { name: "OpenCV", icon: <Search size={12} /> },
    { name: "Linux", icon: <Terminal size={12} /> }
];

export function Skills() {
    return (
        <section id="stack" className="py-24">
            <div className="container mx-auto px-6 max-w-5xl">
                <h2 className="text-3xl md:text-5xl font-black mb-12 text-white tracking-tight">
                    Stack
                </h2>

                <div className="flex flex-wrap gap-2 md:gap-3">
                    {STACK.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="badge py-2 px-4 flex items-center space-x-2 bg-[#18181b]/40 border border-[#1e1e20] hover:border-[#3f3f46] transition-all cursor-default"
                        >
                            <span className="text-white/40 group-hover:text-white/70 transition-colors">{item.icon}</span>
                            <span className="text-[11px] font-bold tracking-widest uppercase text-[#a1a1aa] group-hover:text-white transition-colors">
                                {item.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
