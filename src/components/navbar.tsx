"use client";

import * as React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Navbar() {
    const [time, setTime] = React.useState<string>("");

    React.useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const gmtString = now.toLocaleTimeString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                timeZone: "GMT",
            });
            setTime(gmtString);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <header className="fixed top-0 w-full z-50 py-6">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between bg-card/10 backdrop-blur-md border border-white/5 rounded-full px-6 py-3">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-[10px] font-bold tracking-widest uppercase text-white/50">GMT {time}</span>
                        </div>
                        <span className="hidden sm:inline-block text-[10px] font-bold tracking-widest uppercase text-white/30">• Pune, India</span>
                    </div>

                    <nav className="flex items-center space-x-6">
                        <Link href="https://github.com/ritvikv03" target="_blank" className="text-white/50 hover:text-white transition-colors">
                            <Github size={18} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/ritvikvasikarla/" target="_blank" className="text-white/50 hover:text-white transition-colors">
                            <Linkedin size={18} />
                        </Link>
                        <Link href="mailto:ritvik.vasikarla@gmail.com" className="text-white/50 hover:text-white transition-colors">
                            <Mail size={18} />
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
