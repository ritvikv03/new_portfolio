import { Github, Linkedin, Mail, Instagram, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="py-24 border-t border-white/5">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="bento-card p-12 text-center flex flex-col items-center">
                    <h2 className="text-4xl md:text-6xl font-black mb-8">
                        Let&apos;s <span className="text-gradient">connect!</span>
                    </h2>
                    <p className="text-white/50 mb-12 max-w-md">
                        I&apos;m currently open to new opportunities and interesting projects.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="mailto:ritvik.vasikarla@gmail.com"
                            className="px-8 py-4 rounded-full bg-white text-black font-bold flex items-center hover:bg-white/90 transition-all active:scale-95"
                        >
                            Email Me <Mail className="ml-2" size={18} />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/ritvikvasikarla/"
                            target="_blank"
                            className="px-8 py-4 rounded-full bg-white/5 border border-white/10 font-bold flex items-center hover:bg-white/10 transition-all active:scale-95"
                        >
                            Résumé <ArrowUpRight className="ml-2" size={18} />
                        </Link>
                    </div>

                    <div className="mt-24 pt-8 border-t border-white/5 w-full flex flex-col md:flex-row justify-between items-center text-[10px] font-bold tracking-widest uppercase text-white/20 gap-4">
                        <p>© {new Date().getFullYear()} Ritvik Vasikarla</p>
                        <div className="flex space-x-6">
                            <Link href="https://github.com/ritvikv03" target="_blank" className="hover:text-white transition-colors">GITHUB</Link>
                            <Link href="https://www.linkedin.com/in/ritvikvasikarla/" target="_blank" className="hover:text-white transition-colors">LINKEDIN</Link>
                            <Link href="https://www.instagram.com/ritvikvasikarla/" target="_blank" className="hover:text-white transition-colors">INSTAGRAM</Link>
                        </div>
                        <p>Built with Next.js</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
