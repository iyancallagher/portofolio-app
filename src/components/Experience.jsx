import { Briefcase, Calendar, GraduationCap } from 'lucide-react'

const experienceData = [
    {
        type: 'work',
        title: 'Senior Full Stack Developer',
        org: 'Tech Solutions Inc.',
        period: '2023 - Present',
        desc: 'Leading a team of developers in building scalable web applications. Implemented CI/CD pipelines and optimized database performance by 40%.',
        tags: ['React', 'Node.js', 'AWS']
    },
    {
        type: 'work',
        title: 'Frontend Developer',
        org: 'Creative Digital Agency',
        period: '2021 - 2023',
        desc: 'Developed responsive user interfaces for high-profile clients. Collaborated closely with designers to ensure pixel-perfect implementation.',
        tags: ['Vue.js', 'SCSS', 'GSAP']
    },
    {
        type: 'education',
        title: 'Bachelor of Computer Science',
        org: 'University of Technology',
        period: '2017 - 2021',
        desc: 'Specialized in Software Engineering and Artificial Intelligence. Graduated with First Class Honors.',
        tags: ['Algorithms', 'Data Structures']
    }
]

export default function Experience() {
    return (
        <section id="experience" className="py-24 relative">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
                        Experience & <span className="gradient-text">Education</span>
                    </h2>
                    <p className="text-[var(--text-secondary)]">
                        My professional journey and academic background.
                    </p>
                </div>

                <div className="relative space-y-12">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent-cyan)]/50 via-[var(--accent-purple)]/50 to-transparent md:-translate-x-1/2"></div>

                    {experienceData.map((item, index) => (
                        <div key={index} className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                            {/* Timeline Dot */}
                            <div className="absolute left-8 md:left-1/2 top-0 w-4 h-4 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--accent-cyan)] z-10 -translate-x-1/2 md:translate-x-[-50%] shadow-[0_0_10px_var(--accent-cyan)]"></div>

                            {/* Content Card */}
                            <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-right'}`}>
                                <div className={`p-6 glass-card rounded-2xl hover:border-[var(--accent-cyan)]/30 transition-all group ${index % 2 === 0 ? 'text-left' : 'md:text-right text-left'}`}>
                                    <div className={`flex items-center gap-3 mb-4 text-[var(--accent-cyan)] ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                                        {item.type === 'work' ? <Briefcase size={18} /> : <GraduationCap size={18} />}
                                        <span className="text-xs font-bold tracking-wider uppercase">{item.type}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[var(--accent-cyan)] transition-colors">{item.title}</h3>
                                    <div className={`text-sm text-[var(--text-secondary)] font-medium mb-4 flex items-center gap-2 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                                        <span>{item.org}</span>
                                        <span className="w-1 h-1 rounded-full bg-white/30"></span>
                                        <span className="flex items-center gap-1"><Calendar size={12} /> {item.period}</span>
                                    </div>

                                    <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4">
                                        {item.desc}
                                    </p>

                                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                                        {item.tags.map((tag, i) => (
                                            <span key={i} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/5 text-[var(--text-secondary)]">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
