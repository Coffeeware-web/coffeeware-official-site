import {
  AppWindow,
  Bell,
  Bot,
  BookOpen,
  Briefcase,
  Cable,
  CalendarCheck,
  ClipboardList,
  Cloud,
  Database,
  FileText,
  Gift,
  Globe,
  LayoutDashboard,
  LayoutPanelTop,
  PackageSearch,
  QrCode,
  Scale,
  Search,
  Server,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  SlidersHorizontal,
  Smartphone,
  Sparkles,
  Store,
  Tag,
  Ticket,
  Users,
  Wine,
  Wrench,
  Zap,
  type LucideIcon,
} from 'lucide-react'

export type SubService = {
  icon: LucideIcon
  title: string
  description: string
}

export type Pillar = {
  icon: LucideIcon
  kicker: string
  title: string
  blurb: string
  items: SubService[]
  flag?: boolean
}

export const PILLARS: Pillar[] = [
  {
    icon: Zap,
    kicker: 'Da dove si parte',
    title: 'Automatizzare il processo',
    blurb:
      'Analizziamo il vostro modo di lavorare e digitalizziamo tutte le azioni che vi rallentano. Non stravolgiamo il vostro modo di lavorare, ma lo rendiamo facile come bere una tazza di caffè.',
    items: [
      {
        icon: Store,
        title: 'Portale ordini B2B',
        description:
          'Rivenditori e distributori vedono il loro listino e ordinano da soli 24/7; l’ordine arriva già pronto da evadere.',
      },
      {
        icon: ClipboardList,
        title: 'Gestionale su misura',
        description:
          'Ordini, clienti, prodotti e stato dei lavori in un posto solo, con la logica del vostro processo: diciamo addio agli Excel sparsi.',
      },
      {
        icon: CalendarCheck,
        title: 'Gestione prenotazioni',
        description:
          'Disponibilità in tempo reale, conferme e promemoria automatici per visite, eventi, degustazioni, senza doppie prenotazioni.',
      },
      {
        icon: QrCode,
        title: 'E-label UE e etichetta digitale',
        description:
          'L’etichetta elettronica a norma dietro un QR: ingredienti e valori, multilingua, aggiornabile senza ristampare.',
      },
      {
        icon: LayoutDashboard,
        title: 'Dashboard e reportistica',
        description:
          'Vendite, magazzino e scadenze in una vista sintetica aggiornata da sola: «come andiamo?» in dieci secondi.',
      },
      {
        icon: PackageSearch,
        title: 'Magazzino, lotti e tracciabilità',
        description:
          'Sapere cosa c’è, dov’è e a quale lotto appartiene, per risalire in un attimo a un controllo o un richiamo.',
      },
      {
        icon: FileText,
        title: 'Automazione documenti',
        description:
          'DDT, listini, offerte e conferme generati in automatico dai dati già inseriti, senza ricompilare moduli.',
      },
      {
        icon: Scale,
        title: 'Adempimenti e accise',
        description:
          'Registri e scadenze normative, come il registro telematico delle distillerie, gestiti senza rincorse manuali.',
      },
      {
        icon: Cable,
        title: 'Integrazioni e API',
        description:
          'Colleghiamo i software che già avete e non si parlano, così un dato inserito una volta finisce dove serve.',
      },
      {
        icon: Database,
        title: 'Migrazione e import dati',
        description:
          'Portiamo dentro lo storico da vecchi Excel o gestionali abbandonati, pulito, senza reinserirlo a mano.',
      },
      {
        icon: Bell,
        title: 'Notifiche automatiche',
        description:
          'Conferme e promemoria via email o WhatsApp legati agli eventi: ordine ricevuto, spedito, in consegna. Niente più telefonate o email manuali.',
      },
      {
        icon: Users,
        title: 'CRM leggero',
        description:
          'Contatti, storico e stato della relazione in un archivio unico, per non perdere i follow-up.',
      },
      {
        icon: Briefcase,
        title: 'App per la rete vendita',
        description:
          'Gli agenti raccolgono ordini in fiera o dal cliente, anche offline, e finiscono dritti nel gestionale.',
      },
    ],
  },
  {
    icon: Sparkles,
    kicker: 'Il pezzo che vale di più',
    title: 'Capacità nuove che vendono',
    blurb:
      'Troviamo soluzioni ad-hoc per il vostro processo, anche se questo vuol dire costruire uno strumento che prima non esisteva. Il risultato? Un potente software per vendere, non solo per lavorare meglio.',
    flag: true,
    items: [
      {
        icon: Bot,
        title: 'Intelligenza Artificiale',
        description:
            'Strumenti che leggono, scrivono e ragionano sui dati per fare cose che prima richiedevano un umano: dalla generazione di testi, analisi e previsioni ai chatbot per l\'assistenza virtuale.',
      },
      {
        icon: SlidersHorizontal,
        title: 'Configuratore di prodotto',
        description:
          'Un editor guidato che porta il cliente finale dalla personalizzazione all’ordine e vi restituisce un file pronto per la produzione, senza rimpalli via email col grafico.',
      },
      {
        icon: ShoppingBag,
        title: 'E-commerce e vendita diretta',
        description:
          'Un negozio online attorno al vostro prodotto (catalogo, pagamenti, spedizioni) per vendere al cliente finale e tenervi il margine.',
      },
      {
        icon: AppWindow,
        title: 'Web app su misura',
        description:
          'Quando lo strumento che serve non esiste in commercio, lo costruiamo da zero sul vostro processo.',
      },
      {
        icon: Smartphone,
        title: 'App mobile',
        description:
          'Lo strumento in tasca al cliente o a chi lavora sul campo, come app sugli store o web app installabile.',
      },
      {
        icon: ShoppingCart,
        title: 'Area e-commerce B2B',
        description:
          'Login, listini dedicati per cliente, quantità minime e riordino: far comprare i clienti business, non solo ordinare.',
      },
      {
        icon: Wine,
        title: 'Wine club e abbonamenti',
        description:
          'Il meccanismo di ricavo ricorrente: iscrizione, pagamenti periodici, gestione membri e spedizioni.',
      },
      {
        icon: Gift,
        title: 'Fedeltà e gift card',
        description:
          'Punti, buoni regalo e premi che fanno tornare il cliente e alzano lo scontrino medio.',
      },
      {
        icon: BookOpen,
        title: 'Esperienze digitali e QR storytelling',
        description:
          'Un QR sulla bottiglia che apre la storia del prodotto e un modo per comprare o lasciare il contatto.',
      },
      {
        icon: Ticket,
        title: 'Vendita esperienze online',
        description:
          'Tour e degustazioni prenotabili e pagabili online, con posti e calendario gestiti.',
      },
    ],
  },
  {
    icon: LayoutPanelTop,
    kicker: 'Il fondamento',
    title: 'La base digitale affidabile',
    blurb:
      'Nessuna innovazione digitale si fa senza una degna base: la mettiamo in piedi e la manteniamo, così il vostro lavoro non si ferma mai.',
    items: [
      {
        icon: Globe,
        title: 'Sito e presenza online',
        description:
          'Il canale da cui arrivano richieste vere: contatti, ordini e prenotazioni. Non una brochure ferma.',
      },
      {
        icon: Server,
        title: 'Hosting, dominio ed email',
        description:
          'Dominio, hosting, caselle e le email di sistema, messi in piedi e gestiti da noi.',
      },
      {
        icon: Wrench,
        title: 'Manutenzione e continuità',
        description:
          'Dopo il lancio restiamo il riferimento per correzioni, aggiornamenti ed evoluzioni, a pacchetti di ore.',
      },
      {
        icon: Cloud,
        title: 'Infrastruttura e deploy',
        description:
          'Cloud, backup e rilasci automatici: aggiornamenti online in sicurezza e senza downtime.',
      },
      {
        icon: ShieldCheck,
        title: 'Sicurezza, performance e GDPR',
        description:
          'Audit, ottimizzazioni, backup e messa a norma su cookie e dati personali.',
      },
      {
        icon: Search,
        title: 'SEO tecnica e analytics',
        description:
          'La parte tecnica per farsi trovare su Google e capire da dove arrivano i visitatori.',
      },
    ],
  },
]

export type Service = {
  icon: LucideIcon
  title: string
  blurb: string
  detail: string
}

export const SERVICES: Service[] = [
  {
    icon: SlidersHorizontal,
    title: 'Configuratore di prodotto',
    blurb:
      'Fate scegliere al cliente, ricevete un file pronto per la produzione.',
    detail:
      'Un editor guidato che porta il cliente dalla personalizzazione all’ordine senza rimpalli via email. Voi ricevete specifiche pulite e un file pronto per la stampa o la produzione — niente più tre giri di correzioni con il grafico.',
  },
  {
    icon: CalendarCheck,
    title: 'Gestione prenotazioni',
    blurb:
      'Agenda, conferme e promemoria che si gestiscono da soli.',
    detail:
      'Un sistema di prenotazione con disponibilità in tempo reale, conferme automatiche e promemoria. Meno telefonate, nessuna doppia prenotazione, un calendario sempre allineato tra sala, cantina e ufficio.',
  },
  {
    icon: PackageSearch,
    title: 'Portale ordini B2B',
    blurb:
      'I vostri rivenditori ordinano da soli, 24 ore su 24.',
    detail:
      'Un’area riservata dove clienti e distributori vedono catalogo, listini dedicati e storico, e inviano l’ordine senza passare da voi. Gli ordini arrivano già strutturati, pronti da evadere, senza ricopiare nulla.',
  },
  {
    icon: Tag,
    title: 'E-label UE',
    blurb:
      'L’etichetta digitale a norma, con un QR sulla bottiglia.',
    detail:
      'La piattaforma per l’etichetta elettronica richiesta dal regolamento UE: ingredienti, valori nutrizionali e informazioni ambientali dietro un QR code. Conforme, multilingua e aggiornabile senza ristampare nulla.',
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce',
    blurb:
      'Vendere direttamente, senza lasciare il margine agli intermediari.',
    detail:
      'Un negozio online costruito attorno al vostro prodotto: catalogo, pagamenti, spedizioni e gestione ordini integrati. Pensato per vendere davvero al cliente finale e tenervi il margine, non solo per esserci.',
  },
  {
    icon: Globe,
    title: 'Presenza digitale',
    blurb:
      'Sito, dominio ed email da cui arrivano richieste vere.',
    detail:
      'La presenza online completa — sito, hosting, dominio ed email transazionali — costruita e mantenuta da chi l’ha fatta. Non una vetrina ferma: il canale da cui entrano contatti veri, veloce e sempre online.',
  },
]
