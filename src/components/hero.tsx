"use client";

import { motion } from "framer-motion";
import { Mail, Twitter, Code2 } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative pt-48 pb-16 min-h-[60vh] flex items-center">
            <div className="container mx-auto px-6 max-w-5xl text-left">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Profile Image placeholder (User will add later) */}
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#18181b] to-[#09090b] border border-[#1e1e20] mb-10 overflow-hidden relative shadow-2xl">
                        <div className="absolute inset-0 bg-[#18181b]" />
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight text-white">
                        Ritvik Vasikarla
                    </h1>

                    <p className="text-lg md:text-xl font-bold text-white mb-6">
                        Full-stack engineer building technical software & visual products.
                    </p>

                    <div className="max-w-2xl mb-8">
                        <p className="text-[#a1a1aa] text-sm md:text-base leading-relaxed">
                            Engineering high-performance, visually stunning digital experiences.
                            Focused on AI, Computer Vision, and modern web architecture.
                        </p>
                    </div>

                    <div className="flex flex-col space-y-8">
                        {/* Status Pill below bio */}
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#18181b] border border-[#1e1e20] w-fit">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-[10px] font-bold tracking-widest uppercase text-white/50">
                                Building <span className="text-white">Solar Station</span>
                            </span>
                        </div>

                        {/* Email & Small Socials */}
                        <div className="flex items-center space-x-4">
                            <Link
                                href="mailto:ritvik.vasikarla@gmail.com"
                                className="text-sm font-bold border-b border-[#1e1e20] hover:border-white transition-opacity text-white"
                            >
                                ritvik.vasikarla@gmail.com
                            </Link>
                            <div className="flex items-center space-x-3 text-[#a1a1aa]">
                                <Link href="#" className="hover:text-white transition-colors">
                                    <Twitter size={16} />
                                </Link>
                                <Link href="#" className="hover:text-white transition-colors">
                                    <Code2 size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
