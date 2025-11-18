import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    try {
      const res = await fetch(`${base}/api/inquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (res.ok) setStatus({ ok: true })
      else setStatus({ ok: false, error: data.detail || 'Erreur' })
    } catch (e) {
      setStatus({ ok: false, error: e.message })
    }
  }

  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Parlez-nous de votre projet</h2>
            <p className="mt-3 text-white/80 max-w-prose">Dites-nous vos dates, envies et budget. Nous revenons vers vous en moins de 24h avec une proposition personnalisée.</p>
            <ul className="mt-6 space-y-2 text-white/70 text-sm list-disc list-inside">
              <li>Voyages privés et sur-mesure</li>
              <li>Guides locaux certifiés</li>
              <li>Assistance 7j/7 sur place</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-white/80 text-sm mb-1">Nom</label>
                <input name="name" required className="w-full rounded-lg bg-white/10 border border-white/20 px-3 py-2 text-white" />
              </div>
              <div>
                <label className="block text-white/80 text-sm mb-1">Email</label>
                <input name="email" type="email" required className="w-full rounded-lg bg-white/10 border border-white/20 px-3 py-2 text-white" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-white/80 text-sm mb-1">Message</label>
              <textarea name="message" rows="4" required className="w-full rounded-lg bg-white/10 border border-white/20 px-3 py-2 text-white" />
            </div>
            <button className="mt-4 px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold">Envoyer</button>
            {status && (
              <p className={`mt-3 text-sm ${status.ok ? 'text-emerald-400' : 'text-red-400'}`}>
                {status.ok ? 'Message envoyé. Nous vous recontactons très vite.' : `Erreur: ${status.error}`}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
