'use client'

import { useState } from 'react'
import { ArrowLeft, Check, ChevronRight, RotateCcw, Search } from 'lucide-react'
import { printerCatalog } from '@/lib/catalog'
import { cn } from '@/lib/utils'

const steps = ['Marca', 'Serie', 'Modello'] as const

export function CompatibilityFinder() {
  const [brand, setBrand] = useState<string | null>(null)
  const [series, setSeries] = useState<string | null>(null)
  const [model, setModel] = useState<string | null>(null)

  const currentStep = !brand ? 0 : !series ? 1 : !model ? 2 : 3

  const options =
    currentStep === 0
      ? Object.keys(printerCatalog)
      : currentStep === 1
        ? Object.keys(printerCatalog[brand!])
        : currentStep === 2
          ? printerCatalog[brand!][series!]
          : []

  function select(value: string) {
    if (currentStep === 0) setBrand(value)
    else if (currentStep === 1) setSeries(value)
    else if (currentStep === 2) setModel(value)
  }

  function goBack() {
    if (currentStep === 3) setModel(null)
    else if (currentStep === 2) setSeries(null)
    else if (currentStep === 1) setBrand(null)
  }

  function reset() {
    setBrand(null)
    setSeries(null)
    setModel(null)
  }

  function goToStep(index: number) {
    if (index >= currentStep) return
    if (index === 0) reset()
    if (index === 1) {
      setSeries(null)
      setModel(null)
    }
    if (index === 2) setModel(null)
  }

  const selections = [brand, series, model]

  return (
    <div className="rounded-2xl bg-card p-5 text-card-foreground shadow-2xl shadow-navy/40 ring-1 ring-white/10 sm:p-7">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-primary">Trova il consumabile giusto</h2>
          <p className="mt-1 text-sm text-muted-foreground">Compatibilità garantita in 3 semplici passaggi</p>
        </div>
        {currentStep > 0 && (
          <button
            type="button"
            onClick={reset}
            className="flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
          >
            <RotateCcw className="size-3.5" aria-hidden="true" />
            Ricomincia
          </button>
        )}
      </div>

      <ol className="mt-6 grid grid-cols-3 gap-2" aria-label="Passaggi">
        {steps.map((label, i) => {
          const done = i < currentStep
          const active = i === currentStep
          return (
            <li key={label}>
              <button
                type="button"
                onClick={() => goToStep(i)}
                disabled={!done}
                aria-current={active ? 'step' : undefined}
                className={cn(
                  'flex w-full flex-col gap-2 text-left',
                  done ? 'cursor-pointer' : 'cursor-default',
                )}
              >
                <span
                  className={cn(
                    'h-1.5 w-full rounded-full transition-colors',
                    done ? 'bg-accent' : active ? 'bg-primary' : 'bg-border',
                  )}
                />
                <span className="flex items-center gap-1.5 text-xs font-semibold">
                  <span
                    className={cn(
                      'flex size-5 shrink-0 items-center justify-center rounded-full text-[10px]',
                      done
                        ? 'bg-accent text-accent-foreground'
                        : active
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground',
                    )}
                  >
                    {done ? <Check className="size-3" aria-hidden="true" /> : i + 1}
                  </span>
                  <span className={cn(active || done ? 'text-primary' : 'text-muted-foreground')}>{label}</span>
                </span>
                <span className="truncate pl-6.5 text-xs text-muted-foreground">{selections[i] ?? '—'}</span>
              </button>
            </li>
          )
        })}
      </ol>

      <div className="mt-6 min-h-56" aria-live="polite">
        {currentStep < 3 ? (
          <>
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-medium text-foreground">
                {currentStep === 0 && 'Seleziona la marca della stampante'}
                {currentStep === 1 && `Seleziona la serie ${brand}`}
                {currentStep === 2 && `Seleziona il modello ${series}`}
              </p>
              {currentStep > 0 && (
                <button
                  type="button"
                  onClick={goBack}
                  className="flex items-center gap-1 text-xs font-medium text-accent hover:underline"
                >
                  <ArrowLeft className="size-3.5" aria-hidden="true" />
                  Indietro
                </button>
              )}
            </div>
            <ul
              className={cn('grid gap-2', currentStep === 0 ? 'grid-cols-2 sm:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2')}
            >
              {options.map((option) => (
                <li key={option}>
                  <button
                    type="button"
                    onClick={() => select(option)}
                    className="group flex w-full items-center justify-between gap-2 rounded-xl border border-border bg-card px-4 py-3 text-left text-sm font-medium text-foreground transition-all hover:border-accent hover:bg-secondary focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
                  >
                    <span className="truncate">{option}</span>
                    <ChevronRight
                      className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-accent"
                      aria-hidden="true"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center rounded-xl bg-secondary p-6 text-center">
            <span className="flex size-12 items-center justify-center rounded-full bg-success text-white">
              <Check className="size-6" aria-hidden="true" />
            </span>
            <p className="mt-4 text-sm text-muted-foreground">Abbiamo trovato i consumabili per</p>
            <p className="mt-1 font-heading text-lg font-bold text-primary">
              {brand} {model}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">12 prodotti compatibili, di cui 5 originali</p>
            <div className="mt-5 flex w-full flex-col gap-2 sm:flex-row">
              <a
                href="#prodotti"
                className="flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Search className="size-4" aria-hidden="true" />
                Vedi i prodotti
              </a>
              <button
                type="button"
                onClick={goBack}
                className="h-11 rounded-full border border-border bg-card px-5 text-sm font-semibold text-primary transition-colors hover:bg-muted"
              >
                Cambia modello
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
