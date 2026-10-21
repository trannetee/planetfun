'use client'

import { useState } from 'react'
import { Menu, Phone, Search, ShoppingCart, Truck, User, X } from 'lucide-react'
import { Logo } from '@/components/logo'
import { useCart } from '@/components/cart-provider'

const navLinks = [
  { label: 'Toner', href: '#prodotti' },
  { label: 'Cartucce', href: '#prodotti' },
  { label: 'Tamburi', href: '#prodotti' },
  { label: 'Carta', href: '#prodotti' },
  { label: 'Offerte', href: '#prodotti' },
  { label: 'Recensioni', href: '#recensioni' },
  { label: 'Assistenza', href: '#vantaggi' },
]

function SearchBar({ id }: { id: string }) {
  return (
    <form role="search" className="relative w-full" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor={id} className="sr-only">
        Cerca toner o cartucce
      </label>
      <Search
        className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
        aria-hidden="true"
      />
      <input
        id={id}
        type="search"
        placeholder="Cerca per codice, modello o stampante (es. HP 59A)"
        className="h-11 w-full rounded-full border border-border bg-muted pl-10 pr-24 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:bg-card focus:outline-none focus:ring-2 focus:ring-accent/30"
      />
      <button
        type="submit"
        className="absolute right-1.5 top-1/2 h-8 -translate-y-1/2 rounded-full bg-primary px-4 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Cerca
      </button>
    </form>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const { count } = useCart()

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="bg-navy text-navy-foreground">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 text-xs sm:px-6">
          <p className="flex items-center gap-2">
            <Truck className="size-3.5 text-sky" aria-hidden="true" />
            Spedizione gratuita sopra i 49€ — consegna in 24/48h
          </p>
          <a href="tel:+390212345678" className="hidden items-center gap-1.5 hover:text-sky sm:flex">
            <Phone className="size-3.5" aria-hidden="true" />
            02 1234 5678
          </a>
        </div>
      </div>

      <div className="mx-auto flex h-18 max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:gap-8">
        <a href="#" className="flex shrink-0 items-center gap-2" aria-label="TonerLandia, torna alla home">
  <Logo wordmarkClassName="text-primary" accentClassName="text-accent" />
        </a>

        <div className="hidden flex-1 md:block">
          <SearchBar id="search-desktop" />
        </div>

        <div className="ml-auto flex items-center gap-1 md:ml-0">
          <a
            href="#"
            className="hidden size-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted sm:flex"
            aria-label="Il mio account"
          >
            <User className="size-5" aria-hidden="true" />
          </a>
          <a
            href="#"
            className="relative flex size-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted"
            aria-label={`Carrello, ${count} articoli`}
          >
            <ShoppingCart className="size-5" aria-hidden="true" />
            <span
              className="absolute -right-0.5 -top-0.5 flex size-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground"
              aria-hidden="true"
            >
              {count}
            </span>
          </a>
          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted lg:hidden"
            aria-label={open ? 'Chiudi menu' : 'Apri menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav aria-label="Categorie principali" className="hidden border-t border-border lg:block">
        <ul className="mx-auto flex max-w-7xl items-center gap-1 px-4 sm:px-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="inline-flex h-11 items-center px-3 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="px-4 pb-3 md:hidden">
        <SearchBar id="search-mobile" />
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Menu mobile" className="border-t border-border lg:hidden">
          <ul className="flex flex-col px-4 py-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-sm font-medium text-foreground hover:bg-muted"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
