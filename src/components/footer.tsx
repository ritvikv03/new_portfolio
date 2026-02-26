import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-8 md:mb-0 text-center md:text-left">
                        <h3 className="text-xl font-bold tracking-tighter mb-2">RITVIK</h3>
                        <p className="text-muted-foreground max-w-xs">
                            Building modern web experiences with focus on performance and aesthetics.
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        <Link href="https://github.com/ritvikv03" target="_blank" className="hover:text-primary">
                            <Github size={20} />
                        </Link>
                        <Link href="#" className="hover:text-primary">
                            <Linkedin size={20} />
                        </Link>
                        <Link href="#" className="hover:text-primary">
                            <Twitter size={20} />
                        </Link>
                        <Link href="mailto:contact@example.com" className="hover:text-primary">
                            <Mail size={20} />
                        </Link>
                    </div>
                </div>
                <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Ritvik. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
