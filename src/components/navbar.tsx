"use client";

import React, { useEffect, useState } from "react";
import { FileText, Globe, Instagram, Music } from "lucide-react";
import Link from "next/link";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Navbar() {
    const [time, setTime] = useState("");
    const { socials } = PORTFOLIO_DATA;

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            setTime(now.toLocaleTimeString("en-US", {
                hour12: false,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            }));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-5xl z-50">
            <div className="rounded-[2rem] p-2 flex items-center justify-between backdrop-blur-3xl bg-black/60 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.8)]">

                {/* Left: Branding + Status */}
                <Link href="/" className="flex items-center gap-4 group pl-4">
                    <div className="flex flex-col">
                        <span className="text-xs font-black text-white leading-none tracking-widest group-hover:text-blue-400 transition-colors uppercase">
                            Ritvik.V
                        </span>
                        <div className="flex items-center gap-2 mt-1.5">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
                            </span>
                            <span className="text-[7px] font-black uppercase tracking-[0.2em] text-white/70">Online Portfolio</span>
                        </div>
                    </div>
                </Link>

                {/* Center: Time (Desktop Only) */}
                <div className="hidden md:flex items-center gap-8 px-8 py-2.5 rounded-2xl bg-white/[0.05] border border-white/10 mx-4 shadow-inner">
                    <div className="flex flex-col items-center">
                        <span className="text-xs font-black text-white leading-none tracking-tighter tabular-nums">
                            {time || "00:00:00"}
                        </span>
                        <span className="text-[7px] font-bold tracking-[0.4em] uppercase text-white/60 mt-1.5">
                            Local Time
                        </span>
                    </div>
                    <div className="h-4 w-[1px] bg-white/20"></div>
                    <div className="flex items-center gap-3">
                        <Globe size={11} className="text-blue-400" />
                        <span className="text-[8px] font-black tracking-[0.2em] uppercase text-white/80">Austin, TX</span>
                    </div>
                </div>

                {/* Right: Actions */}
                <nav aria-label="Main navigation" className="flex items-center gap-2 pr-2">
                    <div className="hidden lg:flex items-center gap-1.5 mr-2">
                        <Link
                            href={socials.instagram}
                            target="_blank"
                            className="h-10 w-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-white/60 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all"
                        >
                            <Instagram size={14} />
                        </Link>
                        <Link
                            href={socials.spotify}
                            target="_blank"
                            className="h-10 w-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-white/60 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all"
                        >
                            <Music size={14} />
                        </Link>
                    </div>

                    <Link
                        href={socials.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-10 px-6 flex items-center gap-2.5 rounded-xl bg-white text-black hover:bg-blue-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] active:scale-95"
                    >
                        <FileText size={14} />
                        <span className="text-[10px] font-black tracking-[0.15em] uppercase">Resume</span>
                    </Link>
                </nav>
            </div>
        </header>
    );
}
