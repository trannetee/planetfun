import type { Metadata } from 'next'
import { CartProvider } from '@/components/cart-provider'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { FeaturedProducts } from '@/components/featured-products'
import { CatalogSection } from '@/components/catalog-section'
import { Features } from '@/components/features'
import { Reviews } from '@/components/reviews'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'TonerLandia - Toner e Cartucce Compatibili',
}

export default function Page() {
  return (
    <CartProvider>
      <div
        role="region"
        aria-label="Promozione spedizione"
        className="bg-accent px-4 py-2.5 text-center text-sm font-semibold text-accent-foreground"
      >
        Spedizione Gratuita per ordini sopra i 50€
      </div>
      <SiteHeader />
      <main>
        <Hero />
        <FeaturedProducts />
        <CatalogSection />
        <Features />
        <Reviews />
      </main>
      <SiteFooter />
    </CartProvider>
  )
}
