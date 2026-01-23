import { ExternalLink, Github } from 'lucide-react'

const projects = [
    {
        title: 'E-Commerce Dashboard',
        description: 'A comprehensive admin dashboard for managing online stores with real-time analytics, inventory management, and order processing.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
        tags: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
        liveUrl: '#',
        githubUrl: '#',
        featured: true
    },
    {
        title: 'Task Management App',
        description: 'A collaborative project management tool with drag-and-drop functionality, team collaboration features, and progress tracking.',
        image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71',
        tags: ['React', 'Firebase', 'Tailwind CSS'],
        liveUrl: '#',
        githubUrl: '#',
        featured: true
    },
    {
        title: 'Real Estate Platform',
        description: 'Property listing and search platform with advanced filters, map integration, and virtual tour capabilities.',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
        tags: ['PHP', 'MySQL', 'JavaScript', 'Google Maps'],
        liveUrl: '#',
        githubUrl: '#',
        featured: true
    },
    {
        title: 'Social Media Dashboard',
        description: 'Analytics dashboard for tracking social media performance across multiple platforms with detailed insights.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
        tags: ['React', 'REST API', 'D3.js'],
        liveUrl: '#',
        githubUrl: '#',
        featured: false
    },
    {
        title: 'Restaurant POS System',
        description: 'Point of sale system for restaurants with order management, table reservations, and sales reporting.',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5',
        tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
        liveUrl: '#',
        githubUrl: '#',
        featured: false
    },
    {
        title: 'Learning Management System',
        description: 'Online learning platform with course management, student progress tracking, and interactive quizzes.',
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8',
        tags: ['React', 'Node.js', 'PostgreSQL'],
        liveUrl: '#',
        githubUrl: '#',
        featured: false
    }
]

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative bg-[var(--bg-secondary)]/30">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-[var(--text-secondary)]">
                        A selection of my recent work, ranging from complex web applications to experimental personal projects.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="glass-card rounded-2xl overflow-hidden flex flex-col h-full group"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={`${project.image}?w=800&q=80`}
                                    alt={project.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                                    <a
                                        href={project.liveUrl}
                                        className="p-3 bg-white/10 rounded-full text-white hover:bg-white hover:text-black transition-all transform hover:scale-110"
                                        title="View Live"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        className="p-3 bg-white/10 rounded-full text-white hover:bg-white hover:text-black transition-all transform hover:scale-110"
                                        title="View Code"
                                    >
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--accent-cyan)] transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-[var(--text-secondary)] text-sm line-clamp-3">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="mt-auto pt-4 border-t border-white/5 flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="text-xs font-medium px-2.5 py-1 rounded-full bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] border border-[var(--accent-cyan)]/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://github.com"
                        className="btn-secondary inline-flex items-center gap-2"
                    >
                        <Github size={18} />
                        View More on GitHub
                    </a>
                </div>
            </div>
        </section>
    )
}
