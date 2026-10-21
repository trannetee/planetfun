'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Check, ShoppingCart } from 'lucide-react'
import type { Product } from '@/lib/catalog'
import { useCart } from '@/components/cart-provider'
import { cn } from '@/lib/utils'

const priceFormatter = new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' })

const stockInfo = {
  disponibile: { label: 'Disponibile', dot: 'bg-success', text: 'text-success' },
  ultimi: { label: 'Ultimi pezzi', dot: 'bg-amber-500', text: 'text-amber-600' },
  esaurito: { label: 'Esaurito', dot: 'bg-muted-foreground', text: 'text-muted-foreground' },
} as const

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)
  const stock = stockInfo[product.stock]
  const soldOut = product.stock === 'esaurito'

  function handleAdd() {
    addItem()
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-xl hover:shadow-primary/5">
      <div className="relative aspect-[4/3] overflow-hidden bg-white">
        <Image
          src={product.image || '/placeholder.svg'}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
        />
        <span
          className={cn(
            'absolute left-4 top-4 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide',
            product.type === 'Originale' ? 'bg-primary text-primary-foreground' : 'bg-sky/30 text-primary',
          )}
        >
          {product.type}
        </span>
        {product.oldPrice && (
          <span className="absolute right-4 top-4 rounded-full bg-accent px-2.5 py-1 text-[11px] font-bold text-accent-foreground">
            -{Math.round((1 - product.price / product.oldPrice) * 100)}%
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col border-t border-border p-5">
        <p className="text-xs font-medium text-muted-foreground">
          {product.brand} · Cod. {product.code}
        </p>
        <h3 className="mt-1 text-base font-bold leading-snug text-foreground">{product.name}</h3>
        <dl className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
          {product.oem && (
            <div className="flex gap-1">
              <dt>OEM:</dt>
              <dd className="font-semibold text-foreground">{product.oem}</dd>
            </div>
          )}
          <div className="flex gap-1">
            <dt>Resa:</dt>
            <dd className="font-semibold text-foreground">{product.yield}</dd>
          </div>
        </dl>

        <p className={cn('mt-3 flex items-center gap-1.5 text-xs font-semibold', stock.text)}>
          <span className={cn('size-2 rounded-full', stock.dot)} aria-hidden="true" />
          {stock.label}
        </p>

        <div className="mt-auto flex items-end justify-between gap-3 pt-5">
          <div>
            {product.oldPrice && (
              <p className="text-xs text-muted-foreground line-through">
                <span className="sr-only">Prezzo precedente: </span>
                {priceFormatter.format(product.oldPrice)}
              </p>
            )}
            <p className="font-heading text-2xl font-extrabold text-primary">
              <span className="sr-only">Prezzo: </span>
              {priceFormatter.format(product.price)}
            </p>
            <p className="text-[11px] text-muted-foreground">IVA inclusa</p>
          </div>
          <button
            type="button"
            onClick={handleAdd}
            disabled={soldOut}
            className={cn(
              'inline-flex h-10 items-center gap-2 rounded-full px-4 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground',
              added ? 'bg-success text-white' : 'bg-primary text-primary-foreground hover:bg-accent',
            )}
          >
            {added ? (
              <Check className="size-4" aria-hidden="true" />
            ) : (
              <ShoppingCart className="size-4" aria-hidden="true" />
            )}
            {soldOut ? 'Avvisami' : added ? 'Aggiunto' : 'Aggiungi'}
          </button>
        </div>
      </div>
    </article>
  )
}
