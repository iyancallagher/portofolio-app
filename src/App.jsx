import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-[var(--bg-primary)] overflow-hidden selection:bg-[var(--accent-cyan)] selection:text-[var(--bg-primary)]">
      {/* Background Layer */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        <div className="glow-orb w-[500px] h-[500px] top-[-100px] left-[-100px] bg-[rgba(0,212,255,0.08)]"></div>
        <div className="glow-orb w-[600px] h-[600px] bottom-[0] right-[-100px] bg-[rgba(139,92,246,0.08)]"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 font-[var(--font-primary)]">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
