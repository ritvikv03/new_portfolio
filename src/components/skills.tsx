"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Zap, Database, Cpu, Layout, LucideIcon } from "lucide-react";

const PILLAR_COLORS: Record<string, string> = {
    "Data Science": "text-indigo-400",
    "Data Engineering": "text-emerald-400",
    "ML / LLM Engineering": "text-amber-400",
    "App + Visualization": "text-cyan-400",
};

const PILLAR_ICONS: Record<string, LucideIcon> = {
    "Data Science": Database,
    "Data Engineering": Cpu,
    "ML / LLM Engineering": Zap,
    "App + Visualization": Layout,
};

export function Skills() {
    const { stackPillars, toolbelt } = PORTFOLIO_DATA;

    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div className="mb-20">
                    <h2 className="text-3xl md:text-5xl font-black mb-4 text-white tracking-tight italic uppercase">
                        Capability Domains
                    </h2>
                    <p className="text-white/70 font-medium max-w-2xl text-lg uppercase tracking-tight">
                        Deep technical expertise across the high-performance data lifecycle.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {stackPillars.map((pillar: { label: string, items: { name: string }[] }, idx: number) => {
                        const Icon = PILLAR_ICONS[pillar.label] || Zap;
                        return (
                            <motion.div
                                key={pillar.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bento-card p-8 group flex flex-col items-center text-center hover:scale-[1.02] transition-transform"
                            >
                                <div className={`mb-6 p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-white/30 transition-all ${PILLAR_COLORS[pillar.label]}`}>
                                    <Icon size={32} strokeWidth={2.5} />
                                </div>
                                <h3 className="text-xl font-black text-white mb-6 uppercase tracking-tight group-hover:text-blue-400 transition-colors">
                                    {pillar.label}
                                </h3>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {pillar.items.map((skill: { name: string }) => (
                                        <span
                                            key={skill.name}
                                            className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-black text-white uppercase tracking-widest group-hover:border-white/20 transition-all"
                                        >
                                            {skill.name}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Toolbelt & Environment */}
                <div className="bento-card p-10 overflow-hidden relative group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[100px] group-hover:bg-blue-500/20 transition-all -z-10"></div>
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="shrink-0 flex flex-col items-center md:items-start text-center md:text-left">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 mb-2">Environment</h4>
                            <span className="text-2xl font-black text-white uppercase tracking-tighter italic">Toolbelt</span>
                        </div>
                        <div className="h-[2px] w-12 bg-white/10 md:h-12 md:w-[2px] hidden md:block" />
                        <div className="flex flex-wrap justify-center md:justify-start gap-x-12 gap-y-6">
                            {toolbelt.filter((tool: { name: string }) => tool.name !== "VS Code").map((tool: { name: string, category: string }) => (
                                <div key={tool.name} className="flex flex-col items-center md:items-start group/tool">
                                    <span className="text-[9px] font-black text-white/50 uppercase tracking-[0.2em] mb-1.5 transition-colors group-hover/tool:text-blue-400">
                                        {tool.category}
                                    </span>
                                    <span className="text-sm font-black text-white uppercase tracking-tight group-hover/tool:scale-105 transition-all">
                                        {tool.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
