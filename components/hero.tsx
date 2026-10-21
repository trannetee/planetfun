import { BadgeCheck, Star } from 'lucide-react'
import { CompatibilityFinder } from '@/components/compatibility-finder'

const brands = ['HP', 'Canon', 'Epson', 'Brother', 'Samsung', 'Kyocera', 'Xerox', 'Lexmark']

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.58_0.2_300/0.4),transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,oklch(1_0_0/0.04)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/0.04)_1px,transparent_1px)] bg-[size:48px_48px]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-sky">
            <BadgeCheck className="size-3.5" aria-hidden="true" />
            Oltre 15.000 consumabili sempre disponibili
          </span>
          <h1 className="mt-6 text-balance text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Il toner giusto, <span className="text-sky">al primo colpo.</span>
          </h1>
          <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-navy-foreground/75 sm:text-lg">
            Cartucce e toner originali e compatibili per tutte le principali marche di stampanti. Qualità certificata,
            prezzi chiari e consegna in 24/48h in tutta Italia.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-sky text-sky" />
              ))}
            </div>
            <p className="text-sm text-navy-foreground/75">
              <span className="font-semibold text-white">4,8/5</span> su oltre 9.200 recensioni verificate
            </p>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6">
            <p className="text-xs font-medium uppercase tracking-widest text-navy-foreground/50">
              Consumabili per le migliori marche
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {brands.map((brand) => (
                <li key={brand} className="font-heading text-base font-bold text-white/60">
                  {brand}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <CompatibilityFinder />
      </div>
    </section>
  )
}
