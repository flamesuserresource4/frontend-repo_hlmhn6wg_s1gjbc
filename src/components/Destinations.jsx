import { useEffect, useState } from 'react'

export default function Destinations() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/destinations`)
        const data = await res.json()
        setItems(data.items || [])
      } catch {
        setItems([])
      }
    }
    load()
  }, [])

  const fallback = [
    {
      name: 'Marrakech',
      region: 'Marrakesh-Safi',
      description: 'La ville ocre, ses souks, ses jardins et la place Jemaa el-Fna',
      hero_image: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNYXJyYWtlY2h8ZW58MHwwfHx8MTc2MzQ3MTIxMXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
    },
    {
      name: 'Merzouga',
      region: 'Drâa-Tafilalet',
      description: 'Les dunes dorées de l’Erg Chebbi et le désert saharien',
      hero_image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop'
    },
    {
      name: 'Chefchaouen',
      region: 'Tanger-Tétouan-Al Hoceïma',
      description: 'La ville bleue nichée dans le Rif',
      hero_image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1600&auto=format&fit=crop'
    },
  ]

  const list = items.length ? items : fallback

  return (
    <section id="destinations" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">Destinations phares</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((d, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              {d.hero_image && (
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={d.hero_image} alt={d.name} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white">{d.name}</h3>
                <p className="text-white/60 text-sm">{d.region}</p>
                <p className="mt-2 text-white/80 text-sm">{d.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
