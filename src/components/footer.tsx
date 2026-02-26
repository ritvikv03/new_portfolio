"use client";

import { Mail, Github, Twitter, Linkedin, Code2, FileText } from "lucide-react";
import Link from "next/link";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Footer() {
    const { socials, name } = PORTFOLIO_DATA;

    return (
        <footer className="py-32">
            <div className="container mx-auto px-6 max-w-5xl text-center">
                {/* Connect Section */}
                <div className="mb-24">
                    <h2 className="text-3xl md:text-5xl font-black mb-12 text-white tracking-tight">
                        Let&apos;s connect!
                    </h2>

                    <div className="max-w-xl mx-auto mb-12">
                        <p className="text-[#a1a1aa] text-sm md:text-base leading-relaxed mb-6">
                            Appreciate you stopping by. If a project sparked something or you
                            just want to jam on builds, drop me a line.
                        </p>
                        <p className="text-white text-lg md:text-xl font-bold leading-tight">
                            Always keen to collaborate, learn, and ship new ideas.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href={`mailto:${PORTFOLIO_DATA.email}`}
                            className="flex items-center space-x-2 px-8 py-4 rounded-full bg-white text-black hover:bg-white/90 transition-all font-bold text-sm shadow-xl"
                        >
                            <Mail size={16} />
                            <span>Email Me</span>
                        </Link>
                        <Link
                            href={socials.resume}
                            target="_blank"
                            className="flex items-center space-x-2 px-8 py-4 rounded-full bg-transparent border border-[#1e1e20] hover:border-[#3f3f46] hover:bg-white/5 transition-all text-white font-bold text-sm"
                        >
                            <FileText size={16} />
                            <span>Resume</span>
                        </Link>
                    </div>
                </div>

                {/* Bottom Social Row */}
                <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 pt-12 border-t border-[#1e1e20]">
                    <Link href={`mailto:${PORTFOLIO_DATA.email}`} className="flex items-center space-x-2 text-[#a1a1aa] hover:text-white transition-colors group">
                        <Mail size={14} className="opacity-40 group-hover:opacity-100" />
                        <span className="text-[10px] font-bold tracking-widest uppercase">Mail</span>
                    </Link>
                    <Link href={socials.github} target="_blank" className="flex items-center space-x-2 text-[#a1a1aa] hover:text-white transition-colors group">
                        <Github size={14} className="opacity-40 group-hover:opacity-100" />
                        <span className="text-[10px] font-bold tracking-widest uppercase">Github</span>
                    </Link>
                    <Link href={socials.twitter} target="_blank" className="flex items-center space-x-2 text-[#a1a1aa] hover:text-white transition-colors group">
                        <Twitter size={14} className="opacity-40 group-hover:opacity-100" />
                        <span className="text-[10px] font-bold tracking-widest uppercase">Twitter</span>
                    </Link>
                    <Link href={socials.linkedin} target="_blank" className="flex items-center space-x-2 text-[#a1a1aa] hover:text-white transition-colors group">
                        <Linkedin size={14} className="opacity-40 group-hover:opacity-100" />
                        <span className="text-[10px] font-bold tracking-widest uppercase">LinkedIn</span>
                    </Link>
                    <Link href={socials.leetcode} target="_blank" className="flex items-center space-x-2 text-[#a1a1aa] hover:text-white transition-colors group">
                        <Code2 size={14} className="opacity-40 group-hover:opacity-100" />
                        <span className="text-[10px] font-bold tracking-widest uppercase">LeetCode</span>
                    </Link>
                </div>

                <div className="mt-16 text-[10px] font-bold tracking-[0.2em] uppercase text-white/5">
                    © {new Date().getFullYear()} {name} — 1:1 Replica Design
                </div>
            </div>
        </footer>
    );
}
