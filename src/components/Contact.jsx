import { useState } from 'react'
import { Mail, Send, MapPin, Phone } from 'lucide-react'

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState('idle')

    const handleSubmit = (e) => {
        e.preventDefault()
        setStatus('sending')
        setTimeout(() => {
            setStatus('success')
            setFormData({ name: '', email: '', message: '' })
        }, 1500)
    }

    return (
        <section id="contact" className="py-24 relative">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Info Side */}
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
                            Let's Work <br />
                            <span className="gradient-text">Together</span>
                        </h2>
                        <p className="text-[var(--text-secondary)] text-lg mb-12 max-w-md">
                            Have a project in mind or want to discuss the latest tech? I'm always open to new opportunities and interesting conversations.
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:hello@example.com" className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[var(--accent-cyan)] transition-all">
                                <div className="w-12 h-12 rounded-full bg-[var(--bg-tertiary)] flex items-center justify-center text-[var(--accent-cyan)] group-hover:scale-110 transition-transform">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <div className="text-sm text-[var(--text-muted)]">Email Me</div>
                                    <div className="text-white font-medium group-hover:text-[var(--accent-cyan)] transition-colors">adriansyah@example.com</div>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                                <div className="w-12 h-12 rounded-full bg-[var(--bg-tertiary)] flex items-center justify-center text-[var(--accent-purple)]">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <div className="text-sm text-[var(--text-muted)]">Location</div>
                                    <div className="text-white font-medium">Jakarta, Indonesia</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="glass-card p-8 md:p-10 rounded-3xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[var(--text-secondary)] ml-1">Name</label>
                                <input
                                    type="text"
                                    required
                                    className="form-input"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[var(--text-secondary)] ml-1">Email</label>
                                <input
                                    type="email"
                                    required
                                    className="form-input"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[var(--text-secondary)] ml-1">Message</label>
                                <textarea
                                    required
                                    className="form-input min-h-[150px] resize-none"
                                    placeholder="Tell me about your project..."
                                    value={formData.message}
                                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending' || status === 'success'}
                                className="btn-primary w-full justify-center group"
                            >
                                {status === 'idle' && (
                                    <>Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" /></>
                                )}
                                {status === 'sending' && 'Sending...'}
                                {status === 'success' && 'Message Sent!'}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}
