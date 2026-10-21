import { Headset, ShieldCheck, Truck } from 'lucide-react'

const features = [
  {
    icon: Truck,
    title: 'Spedizione rapida in 24/48h',
    description:
      'Ordini entro le 16:00 e ricevi il giorno lavorativo successivo. Spedizione gratuita per ordini sopra i 49€.',
    stat: '98%',
    statLabel: 'consegne puntuali',
  },
  {
    icon: ShieldCheck,
    title: 'Garanzia 100%',
    description:
      'Ogni consumabile, originale o compatibile, è testato e garantito. Se non funziona, lo sostituiamo o ti rimborsiamo.',
    stat: '2 anni',
    statLabel: 'di garanzia',
  },
  {
    icon: Headset,
    title: 'Assistenza dedicata',
    description:
      'Un team di tecnici esperti ti aiuta a scegliere il prodotto giusto via telefono, chat o email, dal lunedì al sabato.',
    stat: '< 5 min',
    statLabel: 'tempo medio di risposta',
  },
]

export function Features() {
  return (
    <section id="vantaggi" className="border-y border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Perché sceglierci</p>
          <h2 className="mt-2 text-balance text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
            Stampa senza pensieri, dall&apos;ordine alla consegna
          </h2>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {features.map(({ icon: Icon, title, description, stat, statLabel }) => (
            <li key={title} className="flex flex-col rounded-2xl border border-border bg-card p-7">
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-sky">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-lg font-bold text-primary">{title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
              <div className="mt-6 flex items-baseline gap-2 border-t border-border pt-5">
                <span className="font-heading text-2xl font-extrabold text-accent">{stat}</span>
                <span className="text-xs text-muted-foreground">{statLabel}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
