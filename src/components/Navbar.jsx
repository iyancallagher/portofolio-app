import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'py-4 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/5 shadow-lg'
                    : 'py-6 bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#home"
                    className="text-2xl font-bold font-['Poppins'] tracking-tight flex items-center gap-1 group"
                >
                    <span className="text-[var(--accent-cyan)] group-hover:text-white transition-colors">&lt;</span>
                    <span className="text-white group-hover:tracking-wider transition-all duration-300">Adriansyah</span>
                    <span className="text-[var(--accent-cyan)] group-hover:text-white transition-colors">/&gt;</span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors duration-200"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <a
                        href="#contact"
                        className="px-5 py-2.5 text-sm font-semibold text-white bg-[var(--bg-tertiary)] border border-white/10 rounded-full hover:bg-white/5 hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] transition-all duration-300"
                    >
                        Let's Talk
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation Dropdown */}
            <div
                className={`md:hidden absolute top-full left-0 right-0 bg-[#0a0a0f] border-b border-white/5 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[100vh] opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-lg font-medium text-[var(--text-primary)] hover:text-[var(--accent-cyan)] border-b border-white/5 pb-4 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                        className="w-full text-center py-3 mt-2 font-semibold text-[var(--bg-primary)] bg-[var(--accent-cyan)] rounded-lg hover:bg-[var(--accent-blue)] transition-colors"
                    >
                        Let's Talk
                    </a>
                </div>
            </div>
        </nav>
    )
}
