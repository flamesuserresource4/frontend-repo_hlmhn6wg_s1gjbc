import { useState } from 'react'
import { Menu, X, Mountain, Map, Compass, Contact } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#tours', label: 'Circuits', icon: Compass },
    { href: '#destinations', label: 'Destinations', icon: Map },
    { href: '#contact', label: 'Contact', icon: Contact },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-slate-900/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-white">
            <Mountain className="w-6 h-6 text-amber-400" />
            <span className="font-semibold">Maroc Immersion</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-white/80 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="px-4 py-2 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold transition-colors">
              Demander un devis
            </a>
          </nav>
          <button onClick={() => setOpen(!open)} className="md:hidden text-white/90">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-slate-900/90 border-t border-white/10">
          <div className="px-4 py-3 space-y-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="flex items-center gap-3 text-white/90 py-2">
                <l.icon className="w-5 h-5 text-amber-400" /> {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="block px-4 py-2 rounded-full bg-amber-500 text-slate-900 font-semibold text-center">Devis</a>
          </div>
        </div>
      )}
    </header>
  )
}
