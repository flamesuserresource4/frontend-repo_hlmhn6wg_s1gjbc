import { useEffect, useRef, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { motion, useMotionValue, useTransform } from 'framer-motion'

export default function Hero3D() {
  const [splineOk, setSplineOk] = useState(true)
  const [loaded, setLoaded] = useState(false)
  const sceneUrl = 'https://prod.spline.design/vqv1o2R0b50pLVjQ/scene.splinecode'

  // Subtle parallax for the headline block
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useTransform(my, [-50, 50], [8, -8])
  const rotateY = useTransform(mx, [-50, 50], [-8, 8])

  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - (rect.left + rect.width / 2)
      const y = e.clientY - (rect.top + rect.height / 2)
      mx.set(Math.max(-50, Math.min(50, x / 10)))
      my.set(Math.max(-50, Math.min(50, y / 10)))
    }
    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [mx, my])

  return (
    <section id="home" className="relative min-h-[95vh] flex items-center overflow-hidden">
      {/* 3D background */}
      <div className="absolute inset-0 -z-10">
        {splineOk ? (
          <Spline
            scene={sceneUrl}
            onLoad={() => setLoaded(true)}
            onError={() => setSplineOk(false)}
          />
        ) : (
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
        )}
      </div>

      {/* Ambient overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
        <div className="absolute -top-20 -left-20 w-[40rem] h-[40rem] bg-amber-500/10 blur-3xl rounded-full" />
        <div className="absolute -bottom-32 -right-10 w-[45rem] h-[45rem] bg-blue-500/10 blur-3xl rounded-full" />
      </div>

      {/* Content */}
      <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <motion.div
          style={{ rotateX, rotateY }}
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-2xl will-change-transform"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs backdrop-blur"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Expérience 3D immersive
          </motion.div>
          <h1 className="mt-5 text-4xl sm:text-6xl font-bold tracking-tight text-white drop-shadow-xl">
            Vivez le Maroc en 3D
          </h1>
          <p className="mt-6 text-lg text-white/85 max-w-xl">
            Déserts, médinas, montagnes et océans — explorez nos circuits immersifs et
            concevez votre voyage sur mesure.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <motion.a
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#tours"
              className="px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold shadow-lg shadow-amber-500/20"
            >
              Découvrir les circuits
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="#contact"
              className="px-6 py-3 rounded-full border border-white/30 text-white/90 hover:bg-white/10 backdrop-blur"
            >
              Demander un devis
            </motion.a>
          </div>
        </motion.div>

        {/* Floating badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="hidden md:block absolute right-6 bottom-10"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="px-4 py-2 rounded-xl bg-white/10 border border-white/20 backdrop-blur text-white/80"
          >
            <span className="text-sm">Survolez pour animer la scène</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
