"use client";

import { motion } from "framer-motion";
import { Github, Code2, CheckCircle2, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Hero() {
    const { name, role, bio, email, socials, activity } = PORTFOLIO_DATA;

    return (
        <section className="relative pt-48 pb-16 flex flex-col items-center">
            <div className="container mx-auto px-6 max-w-5xl">
                {/* Main Hero Container - Boxed with border */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bento-card max-w-2xl mx-auto p-10 relative overflow-hidden mb-12"
                >
                    {/* Top-Right Social Icons */}
                    <div className="absolute top-8 right-8 flex items-center space-x-4 text-[#a1a1aa]">
                        <Link href={socials.github} target="_blank" className="hover:text-white transition-colors">
                            <Github size={20} />
                        </Link>
                        <Link href={socials.leetcode} target="_blank" className="hover:text-white transition-colors">
                            <Code2 size={20} />
                        </Link>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start gap-8">
                        {/* Left-Aligned Avatar - Squircle/Rounded-XL */}
                        <div className="w-24 h-24 rounded-2xl bg-[#18181b] border border-[#1e1e20] overflow-hidden relative shadow-2xl flex-shrink-0">
                            <Image
                                src="https://github.com/ritvikv03.png"
                                alt={name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        <div className="flex-grow text-left">
                            <div className="flex items-center space-x-2 mb-4">
                                <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
                                    {name}
                                </h1>
                                <CheckCircle2 size={24} className="text-[#3b82f6] fill-[#3b82f6]/10" />
                            </div>

                            <p className="text-lg font-bold text-white mb-4">
                                {role}
                            </p>

                            <p className="text-[#a1a1aa] text-sm md:text-base leading-relaxed mb-6">
                                {bio}
                            </p>

                            <div className="flex items-center space-x-2 text-white/50 hover:text-white transition-colors">
                                <Mail size={16} />
                                <Link
                                    href={`mailto:${email}`}
                                    className="text-sm font-bold border-b border-transparent hover:border-white transition-all"
                                >
                                    {email}
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Centered Activity Pill below container */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex justify-center"
                >
                    <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-[#18181b] border border-[#1e1e20] shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-[11px] font-bold tracking-widest uppercase text-white/40">
                            {activity.status} <span className="text-white ml-2">{activity.project}</span>
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
