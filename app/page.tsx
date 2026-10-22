import Link from "next/link"
import Image from "next/image"
import { Search, ShoppingBag, User, Trophy, ShieldCheck, Truck, CreditCard, Sparkles, MapPin } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Top Banner Promo */}
      <div className="bg-red-600 text-white text-xs py-2 px-4 text-center font-bold tracking-wide shadow-inner">
        ⚡ PLANET FUN ROVATO • Games & Collectibles • Spedizioni veloci & Tornei ufficiali in negozio!
      </div>

      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          
          {/* Brand Logo Image */}
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/logo.png" 
              alt="Planet Fun Rovato Logo" 
              width={200} 
              height={50} 
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-md hidden md:block relative">
            <input 
              type="text" 
              placeholder="Cerca Pokémon, One Piece, Magic, Board Games..." 
              className="w-full bg-slate-800 border border-slate-700 rounded-full py-2 pl-4 pr-10 text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition"
            />
            <Search className="absolute right-3 top-2.5 text-slate-400 w-4 h-4" />
          </div>

          {/* User & Cart Actions */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-sm text-slate-300 hover:text-blue-400 transition font-medium">
              <User className="w-5 h-5" />
              <span className="hidden sm:inline">Accedi</span>
            </button>
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold px-4 py-2 rounded-full transition shadow-md shadow-blue-600/30">
              <ShoppingBag className="w-4 h-4" />
              <span>Carrello (0)</span>
            </button>
          </div>
        </div>

        {/* Menu Categorie */}
        <nav className="border-t border-slate-800/80 bg-slate-900/60">
          <div className="max-w-7xl mx-auto px-4 flex items-center gap-6 overflow-x-auto text-sm font-medium py-2.5 no-scrollbar">
            <Link href="#" className="text-red-500 hover:text-red-400 font-bold flex items-center gap-1 shrink-0">
              <Sparkles className="w-4 h-4" /> Novità & Preordini
            </Link>
            <Link href="#" className="text-slate-300 hover:text-white shrink-0 transition">Pokémon TCG</Link>
            <Link href="#" className="text-slate-300 hover:text-white shrink-0 transition">One Piece TCG</Link>
            <Link href="#" className="text-slate-300 hover:text-white shrink-0 transition">Magic: The Gathering</Link>
            <Link href="#" className="text-slate-300 hover:text-white shrink-0 transition">Lorcana & Altri TCG</Link>
            <Link href="#" className="text-slate-300 hover:text-white shrink-0 transition">Giochi da Tavolo</Link>
            <Link href="#" className="text-slate-300 hover:text-white shrink-0 transition">Accessori & Sleeves</Link>
            <Link href="#" className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 shrink-0 ml-auto">
              <Trophy className="w-4 h-4" /> Tornei Rovato
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 px-4 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <span className="bg-blue-500/10 text-blue-400 border border-blue-500/30 text-xs font-bold px-3 py-1 rounded-full inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-red-500" /> Store Ufficiale a Rovato (BS)
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              GAMES & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">COLLECTIBLES</span>
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Il tuo negozio di fiducia a Rovato per carte collezionabili, giochi da tavolo, accessori e tornei ufficiali.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl transition shadow-lg shadow-blue-600/30">
                Esplora Catalogo
              </button>
              <button className="bg-red-600 hover:bg-red-500 text-white font-bold px-6 py-3 rounded-xl transition shadow-lg shadow-red-600/20">
                Calendario Tornei
              </button>
            </div>
          </div>

          {/* Banner Promo / Torneo */}
          <div className="bg-gradient-to-tr from-slate-900 via-slate-900 to-slate-800 border border-slate-800 rounded-2xl p-8 text-center flex flex-col items-center justify-center min-h-[300px] relative shadow-2xl">
            <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase">
              Eventi In Store
            </div>
            <p className="text-blue-400 font-bold text-xs tracking-widest uppercase mb-2">Pianeta Tornei</p>
            <h3 className="text-2xl font-black text-white mb-3">Partecipa ai Tornei Ufficiali</h3>
            <p className="text-slate-400 text-sm max-w-sm mb-6">
              Sfida gli altri allenatori a Pokémon, One Piece e Magic direttamente nel nostro locale a Rovato.
            </p>
            <a 
              href="https://www.instagram.com/planetfun_rovato/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-slate-900 border border-slate-700 hover:border-red-500 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition flex items-center gap-2"
            >
              <svg className="w-4 h-4 text-red-500 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Seguici su Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-slate-900/50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center gap-2">
            <Truck className="w-6 h-6 text-blue-500" />
            <h4 className="font-bold text-sm text-white">Spedizioni Veloci</h4>
            <p className="text-xs text-slate-400">In tutta Italia</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-red-500" />
            <h4 className="font-bold text-sm text-white">Prodotti Ufficiali</h4>
            <p className="text-xs text-slate-400">100% Originali</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CreditCard className="w-6 h-6 text-blue-500" />
            <h4 className="font-bold text-sm text-white">Pagamenti Sicuri</h4>
            <p className="text-xs text-slate-400">Carte e PayPal</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Trophy className="w-6 h-6 text-red-500" />
            <h4 className="font-bold text-sm text-white">Tornei in Negozio</h4>
            <p className="text-xs text-slate-400">Rovato (BS)</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800 text-center text-xs text-slate-500 space-y-2">
        <p className="font-semibold text-slate-400">Planet Fun Rovato • Games & Collectibles</p>
        <p>© 2026 Planet Fun. Tutti i diritti riservati.</p>
      </footer>
    </div>
  )
}