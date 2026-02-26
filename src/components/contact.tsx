"use client";

import { motion } from "framer-motion";
import { ArrowRight, GithubIcon, Terminal } from "lucide-react";
import Link from "next/link";

export function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-black mb-8">
                        Let&apos;s build something <span className="text-gradient">extraordinary</span>.
                    </h2>
                    <p className="text-xl text-muted-foreground mb-12">
                        I&apos;m currently open to new opportunities and collaborations.
                        Whether you have a question or just want to say hi, my inbox is always open!
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                        <Link
                            href="mailto:ritvik@example.com"
                            className="flex items-center px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold hover:scale-105 transition-all"
                        >
                            <Mail className="mr-2" size={20} /> Say Hello
                        </Link>

                        <Link
                            href="https://github.com/ritvikv03"
                            target="_blank"
                            className="flex items-center px-8 py-4 rounded-2xl border bg-background hover:bg-muted font-bold transition-all"
                        >
                            <Github className="mr-2" size={20} /> GitHub <ArrowUpRight size={16} className="ml-1" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
