"use client";

import { motion } from "framer-motion";
import {
    Github,
    Linkedin,
    FileText,
    MessageSquare,
    Activity,
    Users,
    Archive,
    Target,
    Award,
    Scroll,
    Terminal,
    CircleDot,
    Trophy,
    PieChart,
    MapPin,
    Code,
    Instagram,
    Music,
    LucideIcon
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO_DATA } from "@/data/portfolio";

const ICON_MAP: Record<string, LucideIcon> = {
    activity: Activity,
    users: Users,
    archive: Archive,
    target: Target,
    award: Award,
    scroll: Scroll,
    terminal: Terminal,
    basketball: CircleDot,
    trophy: Trophy,
    "pie-chart": PieChart,
    "map-pin": MapPin,
    code: Code,
    instagram: Instagram,
    spotify: Music
};

// Custom SVGs for platforms not in Lucide
const DiscordIcon = ({ size = 20, className, strokeWidth }: { size?: number, className?: string, strokeWidth?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1971.3728.2914a.077.077 0 01-.0066.1277 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
    </svg>
);

const LeetCodeIcon = ({ size = 20, className, strokeWidth }: { size?: number, className?: string, strokeWidth?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M13.483 1.901a1.1 1.1 0 00-1.227.062L5.432 6.574a1.1 1.1 0 00-.436.883v10.518a1.1 1.1 0 00.436.883l6.824 4.61a1.1 1.1 0 001.2 0l6.824-4.61a1.1 1.1 0 00.436-.883V7.457a1.1 1.1 0 00-.436-.883l-6.824-4.611a1.1 1.1 0 00-.001-.062zM7.227 8.034l4.773-3.226 4.773 3.226v7.417l-4.773 3.226-4.773-3.226V8.034z" />
        <path d="M16.142 12s-3.008 0-3.008 0l-.824.825 2.548 2.548.825-.824v1.65l-1.65 1.65h-1.65l-2.474-2.474V13.65L8.263 12h1.65l1.65 1.65h2.474l1.242-1.242-1.242-1.242H11.56L9.914 9.516h1.65l1.65 1.65s3.008 0 3.008 0L17.79 12.825v-1.65l-1.65-1.65h-1.65l-2.474 2.474v1.65l1.65 1.65h1.65l1.65-1.65V12z" />
    </svg>
);

export function Hero() {
    const { role, bio, name, email, socials, dashboardStats, accreditations, lifestyle, highlights } = PORTFOLIO_DATA;

    const socialLinks = [
        { href: socials.github, icon: Github, label: "GitHub", color: "text-white", size: 20 },
        { href: socials.linkedin, icon: Linkedin, label: "LinkedIn", color: "text-[#0077b5]", size: 20 },
        { href: socials.instagram, icon: Instagram, label: "Instagram", color: "text-[#ff477e]", size: 28 },
        { href: `https://discord.com/users/559173897984147458`, icon: DiscordIcon, label: "Discord", color: "text-[#5865f2]", size: 20 },
        { href: socials.leetcode, icon: LeetCodeIcon, label: "LeetCode", color: "text-[#ffa116]", size: 28 },
        { href: socials.spotify, icon: Music, label: "Spotify", color: "text-[#1db954]", size: 20 },
    ];

    return (
        <section className="relative pt-32 pb-16 overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl">
                {/* 4-Module Dashboard Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                    {/* Module A: Primary Profile (Main Card) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="md:col-span-8 bento-card p-10 flex flex-col justify-center min-h-[400px]"
                    >
                        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
                            <div className="relative group shrink-0">
                                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-[2.5rem] blur-xl opacity-50 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative h-32 w-32 rounded-[2rem] overflow-hidden border-2 border-white/20 shadow-2xl">
                                    <Image
                                        src={`${socials.github}.png`}
                                        alt={name}
                                        fill
                                        className="object-cover transition-all duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="absolute -bottom-1 -right-1 h-7 w-7 rounded-full bg-[#10b981] border-4 border-[#0d0d15] shadow-xl flex items-center justify-center">
                                    <div className="h-1 w-1 bg-white rounded-full animate-pulse"></div>
                                </div>
                            </div>

                            <div className="flex-1 text-center md:text-left">
                                <div className="flex flex-col md:flex-row items-center gap-3 mb-4 justify-center md:justify-start">
                                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter">{name}</h1>
                                    <div className="relative group/verify">
                                        <svg viewBox="0 0 24 24" className="h-7 w-7 text-[#0095f6]" fill="currentColor">
                                            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7l-3.3-3.3 1.4-1.4 1.9 1.9 4.3-4.3 1.4 1.4-5.7 5.7z" />
                                        </svg>
                                        <div className="absolute left-1/2 -top-8 -translate-x-1/2 px-2 py-1 bg-white text-black text-[8px] font-black uppercase tracking-widest rounded opacity-0 group-hover/verify:opacity-100 transition-opacity whitespace-nowrap">
                                            Verified Profile
                                        </div>
                                    </div>
                                </div>
                                <p className="text-2xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent leading-tight mb-6 max-w-lg">
                                    {role}
                                </p>
                                <p className="text-white text-base leading-relaxed mb-10 max-w-md font-medium">
                                    {bio}
                                </p>

                                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                    <Link
                                        href={socials.resume}
                                        target="_blank"
                                        className="inline-flex items-center px-8 py-3.5 rounded-2xl bg-white text-black font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] active:scale-95"
                                    >
                                        <FileText size={14} className="mr-2.5" />
                                        Resume
                                    </Link>
                                    <Link
                                        href={`mailto:${email}`}
                                        className="inline-flex items-center px-8 py-3.5 rounded-2xl border-2 border-white/30 bg-white/[0.03] text-white font-black text-xs uppercase tracking-[0.2em] hover:border-white/50 hover:bg-white/5 transition-all active:scale-95"
                                    >
                                        <MessageSquare size={14} className="mr-2.5" />
                                        Connect
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Module B: Activity & Socials */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="md:col-span-4 bento-card p-8 flex flex-col justify-between"
                    >
                        <div>
                            <h2 className="text-[11px] font-black tracking-[0.25em] uppercase text-white/60 mb-8 flex items-center">
                                <Activity size={12} className="mr-2.5 text-blue-500" /> Platform Connectivity
                            </h2>
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {socialLinks.map((social) => (
                                    <Link
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        className={`flex items-center gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/10 ${social.color} transition-all group icon-luminary shadow-sm`}
                                    >
                                        <social.icon size={social.size} {...(social.label === 'Instagram' ? { strokeWidth: 2.5 } : {})} className={`transition-all ${social.label === 'Instagram' ? 'scale-110 drop-shadow-md' : ''}`} />
                                        <span className="text-[9px] font-black uppercase tracking-widest text-white/70 group-hover:text-white transition-all">{social.label}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6 pt-6 border-t border-white/10">
                            {dashboardStats.slice(0, 3).map((stat) => {
                                const Icon = ICON_MAP[stat.icon] || Activity;
                                return (
                                    <div key={stat.label} className="flex items-center gap-5 group">
                                        <div className="h-11 w-11 rounded-xl bg-white/[0.03] border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-all shadow-inner">
                                            <Icon size={20} className="text-white group-hover:scale-110 transition-all" />
                                        </div>
                                        <div>
                                            <div className="text-xl font-black text-white leading-none mb-1.5">{stat.value}</div>
                                            <div className="text-[10px] font-bold uppercase tracking-widest text-white/60">{stat.label}</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Module C: Credentials */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="md:col-span-6 bento-card p-8"
                    >
                        <h2 className="text-[11px] font-black tracking-[0.25em] uppercase text-white/60 mb-8 flex items-center">
                            <Award size={12} className="mr-2.5 text-purple-500" /> Professional Credentials
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {accreditations.map((item) => (
                                <div key={item.title} className="p-5 rounded-2xl bg-white/[0.03] border border-white/15 hover:border-white/30 transition-all flex flex-col justify-between h-full group">
                                    <div>
                                        <div className="text-white font-black text-xs mb-2 leading-snug group-hover:text-blue-400 transition-colors uppercase">{item.title}</div>
                                        <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-4">{item.provider}</div>
                                    </div>
                                    <div className="flex items-center justify-between mt-auto">
                                        <span className="px-2.5 py-1 rounded-lg bg-white/10 text-[9px] font-black text-white uppercase tracking-wider">
                                            {item.year}
                                        </span>
                                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Module D: Intelligence Mix */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="md:col-span-6 bento-card p-8"
                    >
                        <h2 className="text-[11px] font-black tracking-[0.25em] uppercase text-white/60 mb-8 flex items-center">
                            <Target size={12} className="mr-2.5 text-orange-500" /> Intelligence Mix
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            {lifestyle.map((item) => {
                                const Icon = ICON_MAP[item.icon] || Target;
                                return (
                                    <div key={item.label} className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] transition-all group shadow-sm">
                                        <div className="p-2.5 rounded-xl bg-white/5 text-white group-hover:scale-110 transition-all">
                                            <Icon size={20} />
                                        </div>
                                        <div>
                                            <div className="text-[11px] font-black text-white uppercase tracking-tight leading-none mb-1.5">{item.label}</div>
                                            <div className="text-[10px] font-medium text-white/60 leading-tight">{item.detail}</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>

                </div>

                {/* Proof Strip */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 overflow-hidden border-y border-white/20 py-6"
                >
                    <div className="flex items-center gap-16 whitespace-nowrap animate-infinite-scroll">
                        {[...highlights, ...highlights].map((item, i) => (
                            <div key={i} className="flex items-center gap-5">
                                <span className="text-[11px] font-black tracking-[0.3em] uppercase text-white/60">{item.label}</span>
                                <div className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.5)]"></div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
