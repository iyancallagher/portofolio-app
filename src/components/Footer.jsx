import { Github, Linkedin, Twitter, Heart } from 'lucide-react'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t border-white/5 bg-[var(--bg-tertiary)]/30 pt-16 pb-8">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <a href="#home" className="text-2xl font-bold font-display tracking-tight mb-4 inline-block">
                            <span className="text-[var(--accent-cyan)]">&lt;</span>
                            <span className="text-white">Adriansyah</span>
                            <span className="text-[var(--accent-cyan)]">/&gt;</span>
                        </a>
                        <p className="text-[var(--text-secondary)] mb-6 max-w-sm leading-relaxed">
                            Crafting digital experiences with code and creativity.
                            Focused on building accessible, performant, and beautiful web applications.
                        </p>
                        <div className="flex gap-4">
                            {[Github, Linkedin, Twitter].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[var(--text-secondary)] hover:bg-[var(--accent-cyan)] hover:text-[var(--bg-primary)] transition-all"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Navigation</h4>
                        <ul className="space-y-4">
                            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Legal</h4>
                        <ul className="space-y-4">
                            {['Privacy Policy', 'Terms of Service'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--text-muted)]">
                    <p>© {currentYear} Adriansyah Amir. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Made with <Heart size={14} className="text-red-500 fill-red-500" /> in Indonesia
                    </p>
                </div>
            </div>
        </footer>
    )
}
