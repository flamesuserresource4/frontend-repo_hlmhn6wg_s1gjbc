import Navbar from './components/Navbar'
import Hero3D from './components/Hero3D'
import Tours from './components/Tours'
import Destinations from './components/Destinations'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="pt-16">
        <Hero3D />
        <Tours />
        <Destinations />
        <Contact />
        <footer className="py-10 text-center text-white/60 border-t border-white/10 bg-slate-950/60">
          © {new Date().getFullYear()} Maroc Immersion — Tourisme au Maroc
        </footer>
      </main>
    </div>
  )
}

export default App
