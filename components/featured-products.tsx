import { ArrowRight } from 'lucide-react'
import { featuredProducts } from '@/lib/catalog'
import { ProductCard } from '@/components/product-card'

export function FeaturedProducts() {
  return (
    <section id="prodotti" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">In evidenza</p>
          <h2 className="mt-2 text-balance text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
            I più acquistati del mese
          </h2>
          <p className="mt-2 max-w-xl text-muted-foreground">
            Scegli tra consumabili originali e compatibili certificati, con la stessa qualità di stampa.
          </p>
        </div>
        <a
          href="#catalogo"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent"
        >
          Vedi tutto il catalogo
          <ArrowRight className="size-4" aria-hidden="true" />
        </a>
      </div>

      <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProducts.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </section>
  )
}
