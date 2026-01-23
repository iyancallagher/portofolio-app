import { useState, useEffect, useRef } from 'react'
import { Code, Database, Terminal, Cpu, Globe, Layout } from 'lucide-react'

const skillCategories = [
    {
        title: 'Frontend Development',
        icon: Layout,
        color: 'text-cyan-400',
        skills: [
            { name: 'React', level: 90 },
            { name: 'TypeScript', level: 85 },
            { name: 'Tailwind CSS', level: 95 },
            { name: 'Next.js', level: 80 }
        ]
    },
    {
        title: 'Backend Engineering',
        icon: ServerIcon,
        color: 'text-purple-400',
        skills: [
            { name: 'Node.js', level: 85 },
            { name: 'PostgreSQL', level: 80 },
            { name: 'GraphQL', level: 75 },
            { name: 'Redis', level: 70 }
        ]
    },
    {
        title: 'DevOps & Tools',
        icon: Terminal,
        color: 'text-pink-400',
        skills: [
            { name: 'Docker', level: 75 },
            { name: 'AWS', level: 70 },
            { name: 'Git / CI/CD', level: 90 },
            { name: 'Linux', level: 80 }
        ]
    }
]

function ServerIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
            <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
            <line x1="6" x2="6.01" y1="6" y2="6" />
            <line x1="6" x2="6.01" y1="18" y2="18" />
        </svg>
    )
}

function SkillBar({ skill, animate }) {
    const [width, setWidth] = useState(0)

    useEffect(() => {
        if (animate) {
            setTimeout(() => setWidth(skill.level), 200)
        }
    }, [animate, skill.level])

    return (
        <div className="mb-4 last:mb-0">
            <div className="flex justify-between mb-1 text-sm font-medium">
                <span className="text-white">{skill.name}</span>
                <span className="text-[var(--text-muted)]">{skill.level}%</span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${width}%` }}
                ></div>
            </div>
        </div>
    )
}

export default function Skills() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true)
            },
            { threshold: 0.2 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section id="skills" className="py-24 relative" ref={sectionRef}>
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
                        Technical <span className="gradient-text">Proficiency</span>
                    </h2>
                    <p className="text-[var(--text-secondary)]">
                        A breakdown of my technical skills and range of experience.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <div
                            key={idx}
                            className="glass-card p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className={`p-3 rounded-lg bg-white/5 ${category.color}`}>
                                    <category.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white">{category.title}</h3>
                            </div>

                            <div>
                                {category.skills.map((skill, skillIdx) => (
                                    <SkillBar key={skillIdx} skill={skill} animate={isVisible} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
