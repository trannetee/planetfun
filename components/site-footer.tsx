import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { Logo } from '@/components/logo'

const linkGroups = [
  {
    title: 'Prodotti',
    links: ['Toner laser', 'Cartucce inkjet', 'Tamburi e fotoconduttori', 'Flaconi EcoTank', 'Carta per stampanti'],
  },
  {
    title: 'Link utili',
    links: ['Come trovare il codice', 'Spedizioni e consegne', 'Resi e rimborsi', 'Garanzia', 'Domande frequenti'],
  },
  {
    title: 'Azienda',
    links: ['Chi siamo', 'Area aziende e P.IVA', 'Riciclo consumabili', 'Privacy policy', 'Termini e condizioni'],
  },
]

const paymentMethods = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay', 'Google Pay', 'Bonifico', 'Satispay']

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:py-16">
        <div className="lg:col-span-4">
          <a href="#" className="flex items-center gap-2" aria-label="TonerLandia, torna alla home">
  <Logo wordmarkClassName="text-white" accentClassName="text-sky" />
          </a>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-foreground/65">
            Dal 2009 il punto di riferimento per toner e cartucce di qualità, per privati, professionisti e aziende in
            tutta Italia.
          </p>

          <address className="mt-6 flex flex-col gap-3 text-sm not-italic text-navy-foreground/80">
            <a href="tel:+390212345678" className="flex items-center gap-3 hover:text-sky">
              <Phone className="size-4 text-sky" aria-hidden="true" />
              02 1234 5678
            </a>
            <a href="mailto:assistenza@tonerlandia.it" className="flex items-center gap-3 hover:text-sky">
              <Mail className="size-4 text-sky" aria-hidden="true" />
              assistenza@tonerlandia.it
            </a>
            <p className="flex items-center gap-3">
              <MapPin className="size-4 text-sky" aria-hidden="true" />
              Via della Stampa 24, 20121 Milano
            </p>
            <p className="flex items-center gap-3">
              <Clock className="size-4 text-sky" aria-hidden="true" />
              Lun–Sab, 8:30–19:00
            </p>
          </address>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
          {linkGroups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="text-sm font-bold text-white">{group.title}</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-navy-foreground/65 transition-colors hover:text-sky">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-navy-foreground/50">
              Pagamenti sicuri accettati
            </h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {paymentMethods.map((method) => (
                <li
                  key={method}
                  className="rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white"
                >
                  {method}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-xs text-navy-foreground/50">
            © 2026 TonerLandia S.r.l. — P.IVA 01234567890. Tutti i marchi citati appartengono ai rispettivi proprietari.
          </p>
        </div>
      </div>
    </footer>
  )
}
