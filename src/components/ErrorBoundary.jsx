import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    console.error('UI Error:', error, info)
  }

  disable3DAndReload = () => {
    try {
      localStorage.setItem('disable3d', '1')
    } catch {}
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
          <div className="max-w-lg text-center">
            <h1 className="text-2xl font-bold">Un problème est survenu</h1>
            <p className="mt-3 text-white/80">Nous avons rencontré une erreur d'affichage. Essayez d'actualiser la page. Si le problème persiste, utilisez le bouton ci-dessous pour recharger l'application sans la section 3D.</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <button onClick={() => window.location.reload()} className="px-5 py-3 rounded-full bg-amber-500 text-slate-900 font-semibold">Recharger</button>
              <button onClick={this.disable3DAndReload} className="px-5 py-3 rounded-full border border-white/30 text-white/90 hover:bg-white/10">Recharger sans 3D</button>
            </div>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <pre className="mt-4 text-left text-xs text-red-300/90 bg-red-950/40 p-3 rounded-md overflow-auto">
                {String(this.state.error)}
              </pre>
            )}
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
