"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Skills() {
    const { stack } = PORTFOLIO_DATA;

    return (
        <section id="stack" className="py-24">
            <div className="container mx-auto px-6 max-w-5xl">
                <h2 className="text-3xl md:text-5xl font-black mb-12 text-white tracking-tight">
                    Stack
                </h2>

                <div className="flex flex-wrap gap-2 md:gap-3">
                    {stack.map((item, index) => {
                        const IconComponent = (LucideIcons as any)[item.icon] || LucideIcons.Zap;

                        return (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="badge py-2.5 px-5 flex items-center space-x-2.5 bg-[#18181b]/30 border border-[#1e1e20] hover:border-[#3f3f46] hover:bg-[#1e1e24] transition-all cursor-default shadow-sm"
                            >
                                <span className="text-white/30 group-hover:text-white/60 transition-colors">
                                    <IconComponent size={14} />
                                </span>
                                <span className="text-[11px] font-bold tracking-widest uppercase text-[#a1a1aa] group-hover:text-white transition-colors">
                                    {item.name}
                                </span>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
