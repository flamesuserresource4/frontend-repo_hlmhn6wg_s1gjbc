import Spline from '@splinetool/react-spline'

export default function Hero3D() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Spline scene="https://prod.spline.design/vqv1o2R0b50pLVjQ/scene.splinecode" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
            Vivez le Maroc en 3D
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-xl">
            Déserts, médinas, montagnes et océans – explorez nos circuits immersifs et
            concevez votre voyage sur mesure.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#tours" className="px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold">
              Découvrir les circuits
            </a>
            <a href="#contact" className="px-6 py-3 rounded-full border border-white/30 text-white/90 hover:bg-white/10">
              Demander un devis
            </a>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-900/60" />
    </section>
  )
}
