"use client";

import React, { useEffect, useState } from "react";
import { Github, Linkedin, FileText } from "lucide-react";
import Link from "next/link";

export function Navbar() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            setTime(now.toLocaleTimeString("en-US", {
                hour12: false,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            }) + " GMT-6");
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <header className="absolute top-0 w-full z-20 py-10">
            <div className="container mx-auto px-6 max-w-5xl flex justify-between items-start">
                {/* Local Time - 2 Line Format */}
                <div className="flex flex-col">
                    <span className="text-sm font-bold text-white leading-none mb-1">
                        {time.split(" ")[0] || "00:00:00"}
                    </span>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-white/40 font-mono">
                        PST — Washington, DC
                    </span>
                </div>

                {/* Social Links as Outlined Buttons */}
                <div className="flex items-center space-x-3">
                    <Link
                        href="https://github.com/ritvikv03"
                        target="_blank"
                        className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-[#1e1e20] bg-white/5 text-[#a1a1aa] hover:text-white hover:border-[#3f3f46] transition-all"
                    >
                        <Github size={14} />
                        <span className="text-[10px] font-bold tracking-widest uppercase">Github</span>
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/ritvikvasikarla/"
                        target="_blank"
                        className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-[#1e1e20] bg-white/5 text-[#a1a1aa] hover:text-white hover:border-[#3f3f46] transition-all"
                    >
                        <Linkedin size={14} />
                        <span className="text-[10px] font-bold tracking-widest uppercase">LinkedIn</span>
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-[#1e1e20] bg-white/5 text-[#a1a1aa] hover:text-white hover:border-[#3f3f46] transition-all"
                    >
                        <FileText size={14} />
                        <span className="text-[10px] font-bold tracking-widest uppercase">Resume</span>
                    </Link>
                </div>
            </div>
        </header>
    );
}
