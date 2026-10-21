'use client'

import { useMemo, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, SlidersHorizontal, X } from 'lucide-react'
import {
  catalogBrands,
  catalogProducts,
  tonerColors,
  type TonerColor,
} from '@/lib/catalog'
import { ProductCard } from '@/components/product-card'
import { cn } from '@/lib/utils'

const PAGE_SIZE = 9

const colorSwatch: Record<TonerColor, string> = {
  Nero: 'bg-neutral-900',
  Ciano: 'bg-cyan-500',
  Magenta: 'bg-fuchsia-600',
  Giallo: 'bg-yellow-400',
}

type SortKey = 'rilevanza' | 'prezzo-asc' | 'prezzo-desc'

function toggle<T>(list: T[], value: T) {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value]
}

export function CatalogSection() {
  const [brands, setBrands] = useState<string[]>([])
  const [colors, setColors] = useState<TonerColor[]>([])
  const [sort, setSort] = useState<SortKey>('rilevanza')
  const [page, setPage] = useState(1)
  const [filtersOpen, setFiltersOpen] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const filtered = useMemo(() => {
    const result = catalogProducts.filter(
      (p) =>
        (brands.length === 0 || brands.includes(p.brand)) &&
        (colors.length === 0 || colors.includes(p.color)),
    )
    if (sort === 'prezzo-asc') return [...result].sort((a, b) => a.price - b.price)
    if (sort === 'prezzo-desc') return [...result].sort((a, b) => b.price - a.price)
    return result
  }, [brands, colors, sort])

  const brandCounts = useMemo(
    () =>
      Object.fromEntries(
        catalogBrands.map((b) => [
          b,
          catalogProducts.filter(
            (p) => p.brand === b && (colors.length === 0 || colors.includes(p.color)),
          ).length,
        ]),
      ),
    [colors],
  )

  const colorCounts = useMemo(
    () =>
      Object.fromEntries(
        tonerColors.map((c) => [
          c,
          catalogProducts.filter(
            (p) => p.color === c && (brands.length === 0 || brands.includes(p.brand)),
          ).length,
        ]),
      ),
    [brands],
  )

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const pageItems = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)
  const activeFilters = brands.length + colors.length

  function updateBrands(brand: string) {
    setBrands((prev) => toggle(prev, brand))
    setPage(1)
  }

  function updateColors(color: TonerColor) {
    setColors((prev) => toggle(prev, color))
    setPage(1)
  }

  function resetFilters() {
    setBrands([])
    setColors([])
    setPage(1)
  }

  function goToPage(next: number) {
    setPage(next)
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="catalogo"
      ref={sectionRef}
      aria-labelledby="catalogo-title"
      className="scroll-mt-24 border-t border-border bg-secondary/40"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Catalogo</p>
          <h2
            id="catalogo-title"
            className="text-balance text-3xl font-extrabold tracking-tight text-primary sm:text-4xl"
          >
            Toner compatibili certificati
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Rigenerati e nuovi compatibili per HP, Brother, Canon ed Epson: stessa resa
            dell&apos;originale, fino al 60% in meno.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-8 lg:flex-row">
          <button
            type="button"
            onClick={() => setFiltersOpen((o) => !o)}
            aria-expanded={filtersOpen}
            aria-controls="catalog-filters"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border bg-card px-5 text-sm font-semibold text-foreground lg:hidden"
          >
            <SlidersHorizontal className="size-4" aria-hidden="true" />
            Filtri{activeFilters > 0 && ` (${activeFilters})`}
          </button>

          <aside
            id="catalog-filters"
            aria-label="Filtri catalogo"
            className={cn('w-full shrink-0 lg:block lg:w-64', filtersOpen ? 'block' : 'hidden')}
          >
            <div className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-5 lg:sticky lg:top-28">
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-base font-bold text-foreground">Filtri</h3>
                {activeFilters > 0 && (
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="text-xs font-semibold text-accent hover:underline"
                  >
                    Azzera
                  </button>
                )}
              </div>

              <fieldset className="flex flex-col gap-1">
                <legend className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Marca
                </legend>
                {catalogBrands.map((brand) => (
                  <label
                    key={brand}
                    className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 text-sm text-foreground hover:bg-secondary"
                  >
                    <input
                      type="checkbox"
                      checked={brands.includes(brand)}
                      onChange={() => updateBrands(brand)}
                      className="size-4 rounded accent-primary"
                    />
                    <span className="flex-1 font-medium">{brand}</span>
                    <span className="text-xs text-muted-foreground">{brandCounts[brand]}</span>
                  </label>
                ))}
              </fieldset>

              <hr className="border-border" />

              <fieldset className="flex flex-col gap-1">
                <legend className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Colore
                </legend>
                {tonerColors.map((color) => (
                  <label
                    key={color}
                    className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 text-sm text-foreground hover:bg-secondary"
                  >
                    <input
                      type="checkbox"
                      checked={colors.includes(color)}
                      onChange={() => updateColors(color)}
                      className="size-4 rounded accent-primary"
                    />
                    <span
                      className={cn('size-3.5 rounded-full ring-1 ring-border', colorSwatch[color])}
                      aria-hidden="true"
                    />
                    <span className="flex-1 font-medium">{color}</span>
                    <span className="text-xs text-muted-foreground">{colorCounts[color]}</span>
                  </label>
                ))}
              </fieldset>
            </div>
          </aside>

          <div className="flex min-w-0 flex-1 flex-col">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground" aria-live="polite">
                <span className="font-semibold text-foreground">{filtered.length}</span> prodotti
                {filtered.length > 0 &&
                  ` · pagina ${currentPage} di ${totalPages}`}
              </p>
              <label className="flex items-center gap-2 text-sm text-muted-foreground">
                Ordina per
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortKey)}
                  className="h-10 rounded-full border border-border bg-card px-4 text-sm font-medium text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="rilevanza">Rilevanza</option>
                  <option value="prezzo-asc">Prezzo crescente</option>
                  <option value="prezzo-desc">Prezzo decrescente</option>
                </select>
              </label>
            </div>

            {activeFilters > 0 && (
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Filtri attivi">
                {brands.map((b) => (
                  <li key={b}>
                    <button
                      type="button"
                      onClick={() => updateBrands(b)}
                      className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary hover:bg-primary/20"
                    >
                      {b}
                      <X className="size-3" aria-hidden="true" />
                      <span className="sr-only">Rimuovi filtro</span>
                    </button>
                  </li>
                ))}
                {colors.map((c) => (
                  <li key={c}>
                    <button
                      type="button"
                      onClick={() => updateColors(c)}
                      className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary hover:bg-primary/20"
                    >
                      <span className={cn('size-2.5 rounded-full', colorSwatch[c])} aria-hidden="true" />
                      {c}
                      <X className="size-3" aria-hidden="true" />
                      <span className="sr-only">Rimuovi filtro</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {pageItems.length > 0 ? (
              <ul className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {pageItems.map((product) => (
                  <li key={product.id}>
                    <ProductCard product={product} />
                  </li>
                ))}
              </ul>
            ) : (
              <div className="mt-6 flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border bg-card px-6 py-16 text-center">
                <p className="font-heading text-lg font-bold text-foreground">Nessun prodotto trovato</p>
                <p className="text-sm text-muted-foreground">Prova a modificare o azzerare i filtri.</p>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-2 inline-flex h-10 items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-accent"
                >
                  Azzera filtri
                </button>
              </div>
            )}

            {totalPages > 1 && (
              <nav aria-label="Paginazione catalogo" className="mt-10 flex justify-center">
                <ul className="flex items-center gap-2">
                  <li>
                    <button
                      type="button"
                      onClick={() => goToPage(currentPage - 1)}
                      disabled={currentPage === 1}
                      aria-label="Pagina precedente"
                      className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <ChevronLeft className="size-4" aria-hidden="true" />
                    </button>
                  </li>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                    <li key={n}>
                      <button
                        type="button"
                        onClick={() => goToPage(n)}
                        aria-current={n === currentPage ? 'page' : undefined}
                        aria-label={`Pagina ${n}`}
                        className={cn(
                          'inline-flex size-10 items-center justify-center rounded-full text-sm font-semibold transition-colors',
                          n === currentPage
                            ? 'bg-primary text-primary-foreground'
                            : 'border border-border bg-card text-foreground hover:bg-secondary',
                        )}
                      >
                        {n}
                      </button>
                    </li>
                  ))}
                  <li>
                    <button
                      type="button"
                      onClick={() => goToPage(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      aria-label="Pagina successiva"
                      className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <ChevronRight className="size-4" aria-hidden="true" />
                    </button>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
