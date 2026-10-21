export type PrinterCatalog = Record<string, Record<string, string[]>>

export const printerCatalog: PrinterCatalog = {
  HP: {
    LaserJet: ['LaserJet Pro M404dn', 'LaserJet Pro MFP M428fdw', 'LaserJet M110we'],
    OfficeJet: ['OfficeJet Pro 9010', 'OfficeJet Pro 8022e', 'OfficeJet 6950'],
    DeskJet: ['DeskJet 2720e', 'DeskJet Plus 4120', 'DeskJet 3760'],
  },
  Canon: {
    PIXMA: ['PIXMA TS5350', 'PIXMA MG3650S', 'PIXMA G650'],
    'i-SENSYS': ['i-SENSYS MF445dw', 'i-SENSYS LBP623Cdw', 'i-SENSYS MF264dw'],
    MAXIFY: ['MAXIFY MB2750', 'MAXIFY GX7050'],
  },
  Epson: {
    EcoTank: ['EcoTank ET-2850', 'EcoTank ET-4850', 'EcoTank ET-15000'],
    Expression: ['Expression Home XP-2200', 'Expression Premium XP-6100'],
    WorkForce: ['WorkForce WF-2930', 'WorkForce Pro WF-4820'],
  },
  Brother: {
    'HL-L': ['HL-L2350DW', 'HL-L3270CDW', 'HL-L5100DN'],
    'MFC-L': ['MFC-L2710DW', 'MFC-L3750CDW', 'MFC-L8690CDW'],
    'DCP-J': ['DCP-J1050DW', 'DCP-J1140DW'],
  },
  Samsung: {
    Xpress: ['Xpress M2026', 'Xpress M2070', 'Xpress C480W'],
    ProXpress: ['ProXpress M4020ND', 'ProXpress M3375FD'],
  },
}

export type Product = {
  id: string
  name: string
  code: string
  brand: string
  image: string
  price: number
  oldPrice?: number
  type: 'Originale' | 'Compatibile'
  stock: 'disponibile' | 'ultimi' | 'esaurito'
  yield: string
  oem?: string
}

export const tonerColors = ['Nero', 'Ciano', 'Magenta', 'Giallo'] as const
export type TonerColor = (typeof tonerColors)[number]

export const catalogBrands = ['HP', 'Brother', 'Canon', 'Epson'] as const

export type CatalogProduct = Product & {
  color: TonerColor
  oem: string
  compatibleWith: string
}

const colorImages: Record<TonerColor, string> = {
  Nero: '/products/toner-black.png',
  Ciano: '/products/toner-cyan.png',
  Magenta: '/products/toner-magenta.png',
  Giallo: '/products/toner-yellow.png',
}

type CatalogSeed = Omit<CatalogProduct, 'image' | 'type' | 'name'> & { line: string }

const catalogSeeds: CatalogSeed[] = [
  { id: 'c-hp-cf259a', line: 'HP 59A', brand: 'HP', color: 'Nero', code: 'TNX-H59A', oem: 'CF259A', yield: '3.000 pagine', price: 34.9, oldPrice: 42.9, stock: 'disponibile', compatibleWith: 'LaserJet Pro M404, MFP M428' },
  { id: 'c-hp-w2070a', line: 'HP 117A', brand: 'HP', color: 'Nero', code: 'TNX-H117K', oem: 'W2070A', yield: '1.000 pagine', price: 22.9, stock: 'disponibile', compatibleWith: 'Color Laser 150, MFP 178/179' },
  { id: 'c-hp-w2211a', line: 'HP 207A', brand: 'HP', color: 'Ciano', code: 'TNX-H207C', oem: 'W2211A', yield: '1.250 pagine', price: 29.9, stock: 'disponibile', compatibleWith: 'Color LaserJet Pro M255, MFP M282/M283' },
  { id: 'c-hp-w2213a', line: 'HP 207A', brand: 'HP', color: 'Magenta', code: 'TNX-H207M', oem: 'W2213A', yield: '1.250 pagine', price: 29.9, stock: 'ultimi', compatibleWith: 'Color LaserJet Pro M255, MFP M282/M283' },
  { id: 'c-hp-w2212a', line: 'HP 207A', brand: 'HP', color: 'Giallo', code: 'TNX-H207Y', oem: 'W2212A', yield: '1.250 pagine', price: 29.9, stock: 'disponibile', compatibleWith: 'Color LaserJet Pro M255, MFP M282/M283' },
  { id: 'c-br-tn2420', line: 'Brother TN-2420', brand: 'Brother', color: 'Nero', code: 'TNX-B2420', oem: 'TN-2420', yield: '3.000 pagine', price: 24.5, oldPrice: 31.0, stock: 'disponibile', compatibleWith: 'HL-L2350DW, MFC-L2710DW, DCP-L2530DW' },
  { id: 'c-br-tn247bk', line: 'Brother TN-247', brand: 'Brother', color: 'Nero', code: 'TNX-B247K', oem: 'TN-247BK', yield: '3.000 pagine', price: 27.9, stock: 'disponibile', compatibleWith: 'HL-L3270CDW, MFC-L3750CDW' },
  { id: 'c-br-tn247c', line: 'Brother TN-247', brand: 'Brother', color: 'Ciano', code: 'TNX-B247C', oem: 'TN-247C', yield: '2.300 pagine', price: 31.9, stock: 'disponibile', compatibleWith: 'HL-L3270CDW, MFC-L3750CDW' },
  { id: 'c-br-tn247m', line: 'Brother TN-247', brand: 'Brother', color: 'Magenta', code: 'TNX-B247M', oem: 'TN-247M', yield: '2.300 pagine', price: 31.9, stock: 'esaurito', compatibleWith: 'HL-L3270CDW, MFC-L3750CDW' },
  { id: 'c-br-tn247y', line: 'Brother TN-247', brand: 'Brother', color: 'Giallo', code: 'TNX-B247Y', oem: 'TN-247Y', yield: '2.300 pagine', price: 31.9, stock: 'disponibile', compatibleWith: 'HL-L3270CDW, MFC-L3750CDW' },
  { id: 'c-ca-057', line: 'Canon 057', brand: 'Canon', color: 'Nero', code: 'TNX-C057K', oem: '3009C002', yield: '3.100 pagine', price: 39.9, oldPrice: 49.9, stock: 'disponibile', compatibleWith: 'i-SENSYS LBP223dw, MF445dw' },
  { id: 'c-ca-055bk', line: 'Canon 055', brand: 'Canon', color: 'Nero', code: 'TNX-C055K', oem: '3016C002', yield: '2.300 pagine', price: 36.9, stock: 'disponibile', compatibleWith: 'i-SENSYS LBP663Cdw, MF742Cdw' },
  { id: 'c-ca-055c', line: 'Canon 055', brand: 'Canon', color: 'Ciano', code: 'TNX-C055C', oem: '3015C002', yield: '2.100 pagine', price: 38.9, stock: 'ultimi', compatibleWith: 'i-SENSYS LBP663Cdw, MF742Cdw' },
  { id: 'c-ca-055m', line: 'Canon 055', brand: 'Canon', color: 'Magenta', code: 'TNX-C055M', oem: '3014C002', yield: '2.100 pagine', price: 38.9, stock: 'disponibile', compatibleWith: 'i-SENSYS LBP663Cdw, MF742Cdw' },
  { id: 'c-ca-055y', line: 'Canon 055', brand: 'Canon', color: 'Giallo', code: 'TNX-C055Y', oem: '3013C002', yield: '2.100 pagine', price: 38.9, stock: 'disponibile', compatibleWith: 'i-SENSYS LBP663Cdw, MF742Cdw' },
  { id: 'c-ep-s050614', line: 'Epson C1700', brand: 'Epson', color: 'Nero', code: 'TNX-E0614', oem: 'C13S050614', yield: '2.000 pagine', price: 26.9, stock: 'disponibile', compatibleWith: 'AcuLaser C1700, C1750N, CX17NF' },
  { id: 'c-ep-s050613', line: 'Epson C1700', brand: 'Epson', color: 'Ciano', code: 'TNX-E0613', oem: 'C13S050613', yield: '1.400 pagine', price: 28.9, stock: 'disponibile', compatibleWith: 'AcuLaser C1700, C1750N, CX17NF' },
  { id: 'c-ep-s050612', line: 'Epson C1700', brand: 'Epson', color: 'Magenta', code: 'TNX-E0612', oem: 'C13S050612', yield: '1.400 pagine', price: 28.9, oldPrice: 34.9, stock: 'disponibile', compatibleWith: 'AcuLaser C1700, C1750N, CX17NF' },
  { id: 'c-ep-s050611', line: 'Epson C1700', brand: 'Epson', color: 'Giallo', code: 'TNX-E0611', oem: 'C13S050611', yield: '1.400 pagine', price: 28.9, stock: 'ultimi', compatibleWith: 'AcuLaser C1700, C1750N, CX17NF' },
  { id: 'c-ep-s050750', line: 'Epson M300', brand: 'Epson', color: 'Nero', code: 'TNX-E0750', oem: 'C13S050690', yield: '10.000 pagine', price: 44.9, stock: 'disponibile', compatibleWith: 'WorkForce AL-M300, AL-MX300' },
]

export const catalogProducts: CatalogProduct[] = catalogSeeds.map(({ line, ...seed }) => ({
  ...seed,
  name: `Toner compatibile ${line} ${seed.color}`,
  image: colorImages[seed.color],
  type: 'Compatibile',
}))

export const featuredProducts: Product[] = [
  {
    id: 'hp-59a',
    name: 'Toner HP 59A Nero',
    code: 'CF259A',
    brand: 'HP',
    image: '/products/toner-black.png',
    price: 89.9,
    oldPrice: 104.0,
    type: 'Originale',
    stock: 'disponibile',
    yield: '3.000 pagine',
  },
  {
    id: 'epson-604-mp',
    name: 'Multipack Epson 604 CMYK',
    code: 'C13T10G64010',
    brand: 'Epson',
    image: '/products/ink-multipack.png',
    price: 34.5,
    type: 'Compatibile',
    stock: 'disponibile',
    yield: '4 x 300 pagine',
  },
  {
    id: 'brother-tn247c',
    name: 'Toner Brother TN-247 Ciano',
    code: 'TN247C',
    brand: 'Brother',
    image: '/products/toner-cyan.png',
    price: 71.2,
    type: 'Originale',
    stock: 'ultimi',
    yield: '2.300 pagine',
  },
  {
    id: 'canon-pg560',
    name: 'Cartuccia Canon PG-560XL Nero',
    code: '3712C001',
    brand: 'Canon',
    image: '/products/ink-black.png',
    price: 14.9,
    oldPrice: 19.9,
    type: 'Compatibile',
    stock: 'disponibile',
    yield: '400 pagine',
  },
  {
    id: 'brother-dr2400',
    name: 'Tamburo Brother DR-2400',
    code: 'DR2400',
    brand: 'Brother',
    image: '/products/drum-unit.png',
    price: 24.9,
    type: 'Compatibile',
    stock: 'disponibile',
    yield: '12.000 pagine',
  },
  {
    id: 'epson-104',
    name: 'Flaconi Epson 104 EcoTank',
    code: 'C13T00P640',
    brand: 'Epson',
    image: '/products/ink-bottles.png',
    price: 39.9,
    type: 'Originale',
    stock: 'esaurito',
    yield: '7.500 pagine',
  },
]
