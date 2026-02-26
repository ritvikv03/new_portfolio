"use client";

import { motion } from "framer-motion";
import { Github, Globe, Twitter, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-32 pb-16">
            <div className="container mx-auto px-6 max-w-2xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="bento-card relative overflow-hidden flex flex-col items-center text-center"
                >
                    {/* Verified Badge */}
                    <div className="absolute top-6 right-6 flex items-center bg-white/5 border border-white/10 rounded-full px-3 py-1 scale-90">
                        <CheckCircle2 size={12} className="text-blue-400 mr-1.5" />
                        <span className="text-[10px] font-bold tracking-widest text-white/50 uppercase">Verified Portfolio</span>
                    </div>

                    {/* Profile Image placeholder (User will add later) */}
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/10 mb-6 flex items-center justify-center overflow-hidden">
                        <div className="w-full h-full bg-muted/20" />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black mb-4">
                        Ritvik Vasikarla
                    </h1>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-md">
                        Full-stack engineer building high-performance, visually stunning digital experiences.
                        Focused on AI, Computer Vision, and modern web architecture.
                    </p>

                    <div className="flex items-center space-x-6">
                        <Link href="https://github.com/ritvikv03" target="_blank" className="text-white/30 hover:text-white transition-colors">
                            <Github size={20} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/ritvikvasikarla/" target="_blank" className="text-white/30 hover:text-white transition-colors">
                            <Twitter size={20} />
                        </Link>
                        <Link href="mailto:ritvik.vasikarla@gmail.com" className="text-white/30 hover:text-white transition-colors">
                            <Mail size={20} />
                        </Link>
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/5 w-full">
                        <Link
                            href="#projects"
                            className="inline-flex items-center text-xs font-bold tracking-widest uppercase text-white/50 hover:text-white transition-colors group"
                        >
                            View Projects
                            <ArrowUpRight size={14} className="ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

import { Mail } from "lucide-react";
