"use client";

import { motion } from "framer-motion";
import {
    Database, Layout, Server, Brain, Terminal,
    Code2, Cpu, Globe, Search, Smartphone,
    Cloud, BarChart, Layers, GitBranch,
    Box, Zap, Shield, Wand2
} from "lucide-react";

const STACK = [
    { name: "Python", icon: <Code2 size={14} /> },
    { name: "SQL", icon: <Database size={14} /> },
    { name: "Next.js", icon: <Layout size={14} /> },
    { name: "Node.js", icon: <Server size={14} /> },
    { name: "TensorFlow", icon: <Brain size={14} /> },
    { name: "TypeScript", icon: <Terminal size={14} /> },
    { name: "React", icon: <Layers size={14} /> },
    { name: "Git", icon: <GitBranch size={14} /> },
    { name: "Docker", icon: <Box size={14} /> },
    { name: "Vercel", icon: <Zap size={14} /> },
    { name: "FastAPI", icon: <Zap size={14} /> },
    { name: "PyTorch", icon: <Brain size={14} /> },
    { name: "Scikit-learn", icon: <Cpu size={14} /> },
    { name: "PostgreSQL", icon: <Database size={14} /> },
    { name: "Tailwind CSS", icon: <Wand2 size={14} /> },
    { name: "Supabase", icon: <Cloud size={14} /> },
    { name: "OpenCV", icon: <Search size={14} /> },
    { name: "Linux", icon: <Terminal size={14} /> }
];

export function Skills() {
    return (
        <section id="stack" className="py-24">
            <div className="container mx-auto px-6 max-w-5xl">
                <h2 className="text-3xl md:text-5xl font-black mb-12 text-white">
                    Stack
                </h2>

                <div className="flex flex-wrap gap-3">
                    {STACK.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="badge py-2 px-4 flex items-center space-x-2 bg-[#18181b] border border-[#1e1e20] hover:border-[#3f3f46] transition-all cursor-default"
                        >
                            <span className="text-white/70">{item.icon}</span>
                            <span className="text-sm font-medium text-[#a1a1aa] group-hover:text-white transition-colors">
                                {item.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
