import Link from "next/link"
import Image from "next/image"
import { Search, ShoppingBag, User, Trophy, ShieldCheck, Truck, CreditCard, Sparkles, MapPin, Flame } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Top Banner Promo */}
      <div className="bg-red-600 text-white text-xs py-2 px-4 text-center font-bold tracking-wide shadow-inner">
        ⚡ PLANET FUN ROVATO • Spedizioni rapide in tutta Italia & Tornei ufficiali in negozio!
      </div>

      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/95 backdrop-blur sticky top-0 z-50">
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
              placeholder="Cerca box, bustine, One Piece, Pokémon, Magic..." 
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

        {/* Menu Categorie Stile Federicstore */}
        <nav className="border-t border-slate-800/80 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 flex items-center gap-6 overflow-x-auto text-sm font-medium py-3 no-scrollbar">
            <Link href="#" className="text-red-500 hover:text-red-400 font-bold flex items-center gap-1 shrink-0">
              <Flame className="w-4 h-4" /> Prevendite
            </Link>
            <Link href="#" className="text-slate-300 hover:text-white shrink-0 transition">Pokémon (IT)</Link>
            <Link href="#" className="text-slate-300 hover:text-white shrink-0 transition">Pokémon (JP)</Link>
            <Link href="#" className="text-slate-300 hover:text-white shrink-0 transition">One Piece TCG</Link>
            <Link href="#" className="text-slate-300 hover:text-white shrink-0 transition">Magic: The Gathering</Link>
            <Link href="#" className="text-slate-300 hover:text-white shrink-0 transition">Accessori & Sleeves</Link>
            <Link href="#" className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 shrink-0 ml-auto">
              <Trophy className="w-4 h-4" /> Tornei Rovato
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Banner Centrale */}
      <section className="py-8 px-4 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-blue-900/40 via-slate-900 to-red-950/40 border border-slate-800 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="space-y-4 max-w-xl text-center md:text-left">
            <span className="bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs font-bold px-3 py-1 rounded-full inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-red-500" /> Negozio Fisico a Rovato (BS)
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              IL PUNTO DI RIFERIMENTO PER I <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-500">COLLEZIONISTI</span>
            </h2>
            <p className="text-slate-300 text-sm md:text-base">
              Carte collezionabili originali, box, bustine, accessori e tornei ufficiali. Vivi la tua passione con Planet Fun!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3.5 rounded-xl transition shadow-lg shadow-blue-600/30">
              Scopri i Prodotti
            </button>
            <button className="bg-red-600 hover:bg-red-500 text-white font-bold px-6 py-3.5 rounded-xl transition shadow-lg shadow-red-600/20">
              Calendario Tornei
            </button>
          </div>
        </div>
      </section>

      {/* Sezione Prodotti in Evidenza (Stile E-commerce) */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-black text-white flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-red-500" /> Ultimi Arrivi & In Evidenza
            </h3>
            <p className="text-sm text-slate-400">I prodotti più richiesti della settimana</p>
          </div>
          <Link href="#" className="text-sm font-bold text-blue-400 hover:text-blue-300 transition">
            Vedi tutti →
          </Link>
        </div>

        {/* Griglia Prodotti */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          
          {/* Prodotto 1 */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between group hover:border-blue-500 transition shadow-xl">
            <div>
              <div className="relative bg-slate-950 rounded-xl h-48 mb-4 flex items-center justify-center border border-slate-800/60 overflow-hidden">
                <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-black px-2.5 py-1 rounded-md uppercase">
                  Novità
                </span>
                <span className="text-slate-600 text-xs font-semibold">Immagine Box TCG</span>
              </div>
              <h4 className="font-bold text-sm text-white group-hover:text-blue-400 transition line-clamp-2 mb-1">
                Display 36 Buste Pokémon (IT)
              </h4>
              <p className="text-xs text-slate-400 mb-3">Espansione ufficiale</p>
            </div>
            <div>
              <div className="text-lg font-black text-white mb-3">€ 179,90</div>
              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold py-2.5 rounded-xl transition shadow-md shadow-blue-600/20">
                Aggiungi al Carrello
              </button>
            </div>
          </div>

          {/* Prodotto 2 */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between group hover:border-red-500 transition shadow-xl">
            <div>
              <div className="relative bg-slate-950 rounded-xl h-48 mb-4 flex items-center justify-center border border-slate-800/60 overflow-hidden">
                <span className="absolute top-2 left-2 bg-amber-500 text-slate-950 text-[10px] font-black px-2.5 py-1 rounded-md uppercase">
                  Prevendita
                </span>
                <span className="text-slate-600 text-xs font-semibold">Immagine One Piece</span>
              </div>
              <h4 className="font-bold text-sm text-white group-hover:text-red-400 transition line-clamp-2 mb-1">
                One Piece TCG - Booster Box
              </h4>
              <p className="text-xs text-slate-400 mb-3">Japanese Edition</p>
            </div>
            <div>
              <div className="text-lg font-black text-white mb-3">€ 119,90</div>
              <button className="w-full bg-red-600 hover:bg-red-500 text-white text-xs font-bold py-2.5 rounded-xl transition shadow-md shadow-red-600/20">
                Preordina Ora
              </button>
            </div>
          </div>

          {/* Prodotto 3 */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between group hover:border-blue-500 transition shadow-xl">
            <div>
              <div className="relative bg-slate-950 rounded-xl h-48 mb-4 flex items-center justify-center border border-slate-800/60 overflow-hidden">
                <span className="absolute top-2 left-2 bg-blue-600 text-white text-[10px] font-black px-2.5 py-1 rounded-md uppercase">
                  Disponibile
                </span>
                <span className="text-slate-600 text-xs font-semibold">Accessori TCG</span>
              </div>
              <h4 className="font-bold text-sm text-white group-hover:text-blue-400 transition line-clamp-2 mb-1">
                Set 100 Toploader Ultra Pro
              </h4>
              <p className="text-xs text-slate-400 mb-3">Protezione carte</p>
            </div>
            <div>
              <div className="text-lg font-black text-white mb-3">€ 19,90</div>
              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold py-2.5 rounded-xl transition shadow-md shadow-blue-600/20">
                Aggiungi al Carrello
              </button>
            </div>
          </div>

          {/* Prodotto 4 */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between group hover:border-red-500 transition shadow-xl">
            <div>
              <div className="relative bg-slate-950 rounded-xl h-48 mb-4 flex items-center justify-center border border-slate-800/60 overflow-hidden">
                <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-black px-2.5 py-1 rounded-md uppercase">
                  Esclusivo
                </span>
                <span className="text-slate-600 text-xs font-semibold">Magic TG</span>
              </div>
              <h4 className="font-bold text-sm text-white group-hover:text-red-400 transition line-clamp-2 mb-1">
                Magic The Gathering - Collector Booster
              </h4>
              <p className="text-xs text-slate-400 mb-3">Edizione Speciale</p>
            </div>
            <div>
              <div className="text-lg font-black text-white mb-3">€ 28,90</div>
              <button className="w-full bg-red-600 hover:bg-red-500 text-white text-xs font-bold py-2.5 rounded-xl transition shadow-md shadow-red-600/20">
                Aggiungi al Carrello
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-slate-900/50 border-t border-b border-slate-800">
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

      {/* Footer Stile Store */}
      <footer className="py-12 border-t border-slate-800 bg-slate-950 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h5 className="font-black text-white text-sm uppercase tracking-wider mb-3">Planet Fun Rovato</h5>
            <p className="leading-relaxed mb-3">
              Il punto di riferimento per tutti gli appassionati di giochi di carte collezionabili e giochi da tavolo a Rovato (BS).
            </p>
            <p className="text-slate-500">© 2026 Planet Fun. Tutti i diritti riservati.</p>
          </div>
          <div>
            <h5 className="font-black text-white text-sm uppercase tracking-wider mb-3">Assistenza & Info</h5>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-blue-400 transition">Spedizioni e Consegne</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition">Metodi di Pagamento</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition">Termini e Condizioni</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-black text-white text-sm uppercase tracking-wider mb-3">Il Negozio Fisico</h5>
            <p className="mb-2">📍 Indirizzo a Rovato (BS)</p>
            <p className="mb-2">🏆 Organizzazione Tornei Ufficiali TCG</p>
            <p className="text-blue-400 font-bold">info@planetfun.it</p>
          </div>
        </div>
      </footer>
    </div>
  )
}