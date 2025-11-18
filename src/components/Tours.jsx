import { useEffect, useState } from 'react'

export default function Tours() {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/tours`)
        const data = await res.json()
        setTours(data.items || [])
      } catch (e) {
        setTours([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const placeholder = [
    {
      title: 'Désert & Kasbahs',
      summary: 'Dunes de Merzouga, vallées verdoyantes et nuits sous les étoiles',
      duration_days: 5,
      price_eur: 790,
      thumbnail: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop'
    },
    {
      title: 'Villes Impériales',
      summary: 'Rabat, Fès, Meknès et Marrakech – histoire et artisanat',
      duration_days: 7,
      price_eur: 990,
      thumbnail: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop'
    },
    {
      title: 'Atlas & Océan',
      summary: 'Randonnées dans le Haut Atlas et détente à Essaouira',
      duration_days: 6,
      price_eur: 840,
      thumbnail: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop'
    },
  ]

  const list = tours.length ? tours : placeholder

  return (
    <section id="tours" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Nos circuits immersifs</h2>
          <p className="text-white/70">Inspirations prêtes à voyager</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((t, i) => (
            <article key={i} className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-amber-400/50 transition">
              {t.thumbnail && (
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={t.thumbnail} alt={t.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              )}
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white">{t.title}</h3>
                <p className="mt-2 text-white/70 text-sm">{t.summary}</p>
                <div className="mt-4 flex items-center justify-between text-white/80 text-sm">
                  <span>{t.duration_days} jours</span>
                  <span>à partir de <strong className="text-amber-400">{Math.round(t.price_eur)}€</strong></span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
