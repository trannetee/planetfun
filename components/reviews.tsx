import { BadgeCheck, Quote, Star } from 'lucide-react'

const reviews = [
  {
    name: 'Giulia Marchetti',
    role: 'Studio di architettura, Milano',
    initials: 'GM',
    rating: 5,
    date: '12 ottobre 2026',
    text: 'Il configuratore mi ha trovato il toner giusto per la nostra plotter in pochi secondi. Ordinato alle 15, arrivato il mattino dopo. Ormai compriamo solo qui.',
    product: 'Toner HP 59A Nero',
  },
  {
    name: 'Marco Bellini',
    role: 'Libero professionista, Torino',
    initials: 'MB',
    rating: 5,
    date: '3 ottobre 2026',
    text: 'Ho provato le cartucce compatibili con un po’ di scetticismo: qualità di stampa identica all’originale e ho risparmiato quasi la metà. Ottimo rapporto qualità-prezzo.',
    product: 'Multipack Epson 603XL',
  },
  {
    name: 'Francesca Riva',
    role: 'Ufficio amministrativo, Bologna',
    initials: 'FR',
    rating: 4,
    date: '27 settembre 2026',
    text: 'Avevo un dubbio sul modello del tamburo e l’assistenza mi ha risposto in chat in due minuti. Gentilissimi e competenti, consegna puntuale.',
    product: 'Tamburo Brother DR-2400',
  },
]

const summary = { average: '4,9', total: '12.480', recommend: '97%' }

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={`${rating} stelle su 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={i < rating ? 'size-4 fill-accent text-accent' : 'size-4 fill-border text-border'}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export function Reviews() {
  return (
    <section id="recensioni" className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Recensioni</p>
            <h2 className="mt-2 text-balance text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
              Scelti da migliaia di uffici e professionisti
            </h2>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              Recensioni verificate di clienti che hanno acquistato e ricevuto i nostri prodotti.
            </p>
          </div>

          <dl className="flex items-center gap-6 rounded-2xl bg-navy px-6 py-5 text-navy-foreground sm:gap-10">
            <div>
              <dt className="sr-only">Valutazione media</dt>
              <dd className="flex items-baseline gap-1">
                <span className="font-heading text-3xl font-extrabold">{summary.average}</span>
                <span className="text-sm text-navy-foreground/70">/5</span>
              </dd>
              <div className="mt-1 flex gap-0.5" aria-hidden="true">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="size-3.5 fill-sky text-sky" />
                ))}
              </div>
            </div>
            <div className="h-10 w-px bg-navy-foreground/20" aria-hidden="true" />
            <div>
              <dt className="text-xs text-navy-foreground/70">Recensioni</dt>
              <dd className="font-heading text-xl font-bold">{summary.total}</dd>
            </div>
            <div>
              <dt className="text-xs text-navy-foreground/70">Consigliano</dt>
              <dd className="font-heading text-xl font-bold">{summary.recommend}</dd>
            </div>
          </dl>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <li key={review.name}>
              <figure className="relative flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-lg hover:shadow-primary/5">
                <div className="flex items-center justify-between gap-4">
                  <Stars rating={review.rating} />
                  <Quote className="size-7 fill-secondary text-secondary" aria-hidden="true" />
                </div>
                <blockquote className="mt-5 flex-1 text-pretty leading-relaxed text-foreground">
                  <p>{`“${review.text}”`}</p>
                </blockquote>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
                  <p className="inline-flex w-fit rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                    {review.product}
                  </p>
                  <time className="text-xs text-muted-foreground">{review.date}</time>
                </div>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-5">
                  <span
                    className="flex size-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-sky"
                    aria-hidden="true"
                  >
                    {review.initials}
                  </span>
                  <div className="min-w-0">
                    <p className="flex items-center gap-1 text-sm font-semibold text-primary">
                      {review.name}
                      <BadgeCheck className="size-4 text-accent" aria-label="Acquisto verificato" />
                    </p>
                    <p className="truncate text-xs text-muted-foreground">{review.role}</p>
                  </div>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
