import { ArrowRight, ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Hero() {
    const [activeLine, setActiveLine] = useState(0)

    // Simulate code typing effect for the visual side
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveLine(prev => (prev + 1) % 4)
        }, 2000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left z-10 w-full animate-slide-up">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[var(--accent-cyan)] text-sm font-medium mb-6 animate-fade-in">
                            <span className="w-2 h-2 rounded-full bg-[var(--accent-cyan)] animate-pulse"></span>
                            Available for new projects
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.1] mb-6 tracking-tight">
                            Building <span className="gradient-text">Digital</span> <br />
                            <span className="text-white">Experiences.</span>
                        </h1>

                        <p className="text-[var(--text-secondary)] text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                            I'm <span className="text-white font-medium">Adriansyah Amir</span>, a Full Stack Developer transforming ideas into accessible, high-performance web applications.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
                            <a href="#projects" className="btn-primary w-full sm:w-auto justify-center">
                                View My Work
                                <ArrowRight size={18} />
                            </a>
                            <a href="#contact" className="px-8 py-3.5 rounded-full border border-white/10 text-white font-medium hover:bg-white/5 hover:border-white/20 transition-all w-full sm:w-auto text-center flex items-center justify-center gap-2">
                                Contact Me
                            </a>
                        </div>

                        {/* Social Proof / Links */}
                        <div className="flex items-center justify-center lg:justify-start gap-6 border-t border-white/5 pt-8">
                            <span className="text-sm text-[var(--text-muted)] font-medium uppercase tracking-wider">Connect:</span>
                            <div className="flex gap-4">
                                {[
                                    { icon: Github, href: '#' },
                                    { icon: Linkedin, href: '#' },
                                    { icon: Mail, href: '#' }
                                ].map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.href}
                                        className="text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors"
                                    >
                                        <social.icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Visual - Code Block */}
                    <div className="flex-1 w-full max-w-[500px] lg:max-w-none relative animate-float">
                        <div className="relative z-10 glass rounded-xl border-white/10 shadow-2xl backdrop-blur-xl overflow-hidden aspect-square md:aspect-[4/3] flex flex-col">
                            {/* Window Header */}
                            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                </div>
                                <div className="ml-4 text-xs text-[var(--text-muted)] font-mono">Developer.jsx</div>
                            </div>

                            {/* Code Content */}
                            <div className="p-6 font-mono text-sm md:text-base leading-relaxed overflow-hidden">
                                <div className="grid grid-cols-[auto_1fr] gap-4">
                                    <div className="text-[var(--text-muted)] text-right select-none opacity-50 flex flex-col">
                                        {Array.from({ length: 12 }).map((_, i) => <span key={i}>{i + 1}</span>)}
                                    </div>
                                    <div className="text-[var(--text-secondary)]">
                                        <div><span className="text-purple-400">const</span> <span className="text-yellow-300">Developer</span> = <span className="text-blue-300">()</span> <span className="text-purple-400">=&gt;</span> {'{'}</div>
                                        <div className="pl-4">
                                            <span className="text-purple-400">const</span> <span className="text-[var(--accent-cyan)]">skills</span> = [
                                        </div>
                                        <div className={`pl-8 transition-colors duration-300 ${activeLine === 0 ? 'bg-white/5' : ''}`}>
                                            <span className="text-green-300">'React'</span>, <span className="text-green-300">'Node.js'</span>,
                                        </div>
                                        <div className={`pl-8 transition-colors duration-300 ${activeLine === 1 ? 'bg-white/5' : ''}`}>
                                            <span className="text-green-300">'TypeScript'</span>, <span className="text-green-300">'Tailwind'</span>
                                        </div>
                                        <div className="pl-4">];</div>
                                        <br />
                                        <div className={`pl-4 transition-colors duration-300 ${activeLine === 2 ? 'bg-white/5' : ''}`}>
                                            <span className="text-purple-400">return</span> (
                                        </div>
                                        <div className={`pl-8 transition-colors duration-300 ${activeLine === 3 ? 'bg-white/5' : ''}`}>
                                            &lt;<span className="text-red-400">Code</span> /&gt;
                                        </div>
                                        <div className="pl-4">);</div>
                                        <div>{'}'}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Glow effect behind */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[var(--accent-cyan)] opacity-10 blur-[100px] -z-10"></div>
                        </div>

                        {/* Decorative background elements */}
                        <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-[var(--accent-purple)] to-[var(--accent-pink)] rounded-full blur-[20px] opacity-20 animate-pulse-subtle"></div>
                        <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-[var(--accent-cyan)] rounded-full blur-[20px] opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
                    </div>

                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-50">
                <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)]">Scroll</span>
                <div className="w-[1px] h-10 bg-gradient-to-b from-[var(--text-muted)] to-transparent"></div>
            </div>
        </section>
    )
}
