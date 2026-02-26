"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, GithubIcon, Terminal } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/30 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-teal-500/20 rounded-full blur-[120px] animate-pulse delay-700" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-muted/50 border border-white/5 mb-6">
                        <Terminal size={14} className="text-blue-400" />
                        <span className="text-xs font-mono">Available for projects</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8">
                        Building the <span className="text-gradient">Future</span> <br />
                        of Web Technology.
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                        I'm a full-stack engineer specializing in building high-performance,
                        visually stunning digital experiences. Transforming complex problems
                        into elegant solutions.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="#projects"
                            className="group relative px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold overflow-hidden transition-all hover:scale-105 active:scale-95"
                        >
                            <span className="relative z-10 flex items-center">
                                View My Work
                                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </span>
                        </Link>

                        <Link
                            href="https://github.com/ritvikv03"
                            target="_blank"
                            className="inline-flex items-center px-8 py-3 rounded-full border bg-background/5 transition-all hover:bg-muted font-semibold"
                        >
                            <GithubIcon className="mr-2 w-5 h-5" />
                            GitHub
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scrolling indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
            >
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent" />
            </motion.div>
        </section>
    );
}
