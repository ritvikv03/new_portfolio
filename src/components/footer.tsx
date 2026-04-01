"use client";

import { Github, Linkedin, ArrowUpCircle, Instagram, Music } from "lucide-react";
import Link from "next/link";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Footer() {
    const { socials, name } = PORTFOLIO_DATA;

    return (
        <footer className="py-24 border-t border-white/10 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-16">
                    <div className="max-w-md">
                        <h2 className="text-4xl md:text-7xl font-black mb-6 text-white tracking-tighter leading-none">
                            Ready for the <span className="text-blue-400">Next.</span>
                        </h2>
                        <p className="text-white/80 font-medium text-lg md:text-xl leading-relaxed max-w-lg mb-10">
                            Open to strategic roles in AI, Machine Learning Engineering, and Data Architecting. Based in Austin—available globally.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href={`mailto:${PORTFOLIO_DATA.email}`}
                                className="px-8 py-4 rounded-2xl bg-white text-black font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] active:scale-95"
                            >
                                Send Message
                            </Link>
                            <Link
                                href={socials.linkedin}
                                target="_blank"
                                className="px-8 py-4 rounded-2xl border-2 border-white/30 bg-white/[0.03] text-white font-black text-xs uppercase tracking-[0.2em] hover:border-white/50 hover:bg-white/5 transition-all active:scale-95"
                            >
                                LinkedIn
                            </Link>
                        </div>
                    </div>

                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="h-24 w-24 rounded-full bg-white text-black flex items-center justify-center border-8 border-white/10 hover:border-white/30 transition-all group active:scale-90 shadow-2xl"
                        aria-label="Back to top"
                    >
                        <ArrowUpCircle size={32} strokeWidth={2.5} className="group-hover:-translate-y-1 transition-transform" />
                    </button>

                    {/* Centered Profile Identity */}
                    <div className="flex flex-col items-center md:items-end text-center md:text-right">
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 mb-2">Developed By</span>
                        <span className="text-2xl md:text-3xl font-black text-white italic tracking-tighter uppercase">{name}</span>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-8">
                        <Link href={socials.github} target="_blank" className="flex items-center gap-2 text-white/60 hover:text-white transition-all group icon-luminary">
                            <Github size={16} />
                            <span className="text-[10px] font-black uppercase tracking-widest group-hover:tracking-[0.15em] transition-all">GitHub</span>
                        </Link>
                        <Link href={socials.linkedin} target="_blank" className="flex items-center gap-2 text-white/60 hover:text-white transition-all group icon-luminary">
                            <Linkedin size={16} />
                            <span className="text-[10px] font-black uppercase tracking-widest group-hover:tracking-[0.15em] transition-all">LinkedIn</span>
                        </Link>
                        <Link href={socials.instagram} target="_blank" className="flex items-center gap-2 text-white/60 hover:text-white transition-all group icon-luminary">
                            <Instagram size={16} />
                            <span className="text-[10px] font-black uppercase tracking-widest group-hover:tracking-[0.15em] transition-all">Instagram</span>
                        </Link>
                        <Link href={socials.spotify} target="_blank" className="flex items-center gap-2 text-white/60 hover:text-white transition-all group icon-luminary">
                            <Music size={16} />
                            <span className="text-[10px] font-black uppercase tracking-widest group-hover:tracking-[0.15em] transition-all">Spotify</span>
                        </Link>
                    </div>

                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
                        © 2026 — Building the Future of Data.
                    </div>
                </div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)] rounded-full -z-10"></div>
        </footer>
    );
}
