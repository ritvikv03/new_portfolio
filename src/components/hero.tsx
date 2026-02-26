"use client";

import { motion } from "framer-motion";
import { Twitter, Code2 } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative pt-48 pb-16 flex flex-col items-center">
            <div className="container mx-auto px-6 max-w-5xl">
                {/* Main Hero Container */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bento-card max-w-2xl mx-auto flex flex-col items-center text-center mb-8"
                >
                    {/* Squircle Avatar */}
                    <div className="w-24 h-24 rounded-[2rem] bg-gradient-to-br from-[#18181b] to-[#09090b] border border-[#1e1e20] mb-8 overflow-hidden relative shadow-2xl flex-shrink-0">
                        <div className="absolute inset-0 bg-[#18181b]" />
                    </div>

                    <div className="flex items-baseline space-x-3 mb-4">
                        <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                            Ritvik Vasikarla
                        </h1>
                        <div className="flex items-center space-x-2 text-[#a1a1aa]">
                            <Link href="#" className="hover:text-white transition-colors">
                                <Twitter size={18} />
                            </Link>
                            <Link href="#" className="hover:text-white transition-colors">
                                <Code2 size={18} />
                            </Link>
                        </div>
                    </div>

                    <p className="text-lg font-bold text-white mb-4">
                        Full-stack engineer building technical software & visual products.
                    </p>

                    <p className="text-[#a1a1aa] text-sm md:text-base leading-relaxed mb-8">
                        Engineering high-performance, visually stunning digital experiences.
                        Focused on AI, Computer Vision, and modern web architecture.
                    </p>

                    <Link
                        href="mailto:ritvik.vasikarla@gmail.com"
                        className="text-sm font-bold border-b border-[#1e1e20] hover:border-white transition-colors text-white"
                    >
                        ritvik.vasikarla@gmail.com
                    </Link>
                </motion.div>

                {/* Centered Activity Pill */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex justify-center"
                >
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#18181b] border border-[#1e1e20]">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-[10px] font-bold tracking-widest uppercase text-white/50">
                            Building <span className="text-white">Solar Station</span>
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
