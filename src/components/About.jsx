import { Code2, Palette, Server, Zap } from 'lucide-react'
import profileImage from '../assets/iyan.jpeg'

const highlights = [
    {
        icon: Code2,
        title: 'Clean Code',
        description: 'Writing maintainable, scalable software solutions.'
    },
    {
        icon: Palette,
        title: 'Modern Design',
        description: 'Crafting pixel-perfect, accessible user interfaces.'
    },
    {
        icon: Server,
        title: 'Robust Backend',
        description: 'Building secure and efficient server-side logic.'
    },
    {
        icon: Zap,
        title: 'Performance',
        description: 'Optimizing applications for speed and efficiency.'
    }
]

export default function About() {
    return (
        <section id="about" className="py-24 relative">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-16 items-center justify-center">

                    {/* Visual Side */}
                    <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1 relative">
                        <div className="relative w-full max-w-md aspect-[3/4] md:aspect-square lg:aspect-[3/4]">
                            {/* Abstract decorative elements */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--glass-border)] to-transparent rounded-2xl border border-white/5 transform translate-x-4 translate-y-4 -z-10"></div>

                            {/* Main Card */}
                            <div className="absolute inset-0 glass-card rounded-2xl p-8 flex flex-col items-center justify-center text-center overflow-hidden">
                                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[var(--accent-cyan)] to-[var(--accent-purple)] p-[2px] mb-6">
                                    <div className="w-full h-full rounded-full bg-[var(--bg-tertiary)] flex items-center justify-center text-3xl font-bold text-white">
                                        <img src={profileImage} alt="Profile" className="w-full h-full rounded-full object-cover" />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2">Adriansyah Amir</h3>
                                <div className="h-1 w-12 bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] rounded-full mb-4"></div>
                                <p className="text-[var(--text-secondary)] mb-6">Full Stack Developer based in Indonesia</p>

                                <div className="grid grid-cols-2 gap-4 w-full">
                                    <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                                        <div className="text-2xl font-bold text-white">5+</div>
                                        <div className="text-xs text-[var(--accent-cyan)]">Years Exp.</div>
                                    </div>
                                    <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                                        <div className="text-2xl font-bold text-white">12+</div>
                                        <div className="text-xs text-[var(--accent-purple)]">Projects</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 order-1 lg:order-2">
                        <div className="mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
                                About <span className="gradient-text">Me</span>
                            </h2>
                            <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-6">
                                I'm a passionate developer who bridges the gap between design and functionality.
                                My journey began with a curiosity for how things work on the web, which evolved into a
                                career building sophisticated applications.
                            </p>
                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                I specialize in the JavaScript ecosystem, particularly React and Node.js, but I'm always
                                exploring new technologies to find the best tools for the job. I believe in writing code
                                that is not only functional but also clean, maintainable, and easy to understand.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {highlights.map((item, index) => (
                                <div key={index} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[var(--glass-border)] transition-colors">
                                    <div className="w-10 h-10 rounded-lg bg-[var(--bg-tertiary)] flex items-center justify-center text-[var(--accent-cyan)] mb-3">
                                        <item.icon size={20} />
                                    </div>
                                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                                    <p className="text-sm text-[var(--text-muted)]">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
