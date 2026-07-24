import {
  SlidersHorizontal,
  CalendarCheck,
  PackageSearch,
  Tag,
  ShoppingBag,
  Globe,
  Workflow,
  Sparkles,
  Server,
  type LucideIcon,
} from 'lucide-react'

export type SubService = {
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

// Home "Cosa facciamo" (in breve) + pagina Servizi (completa) leggono da qui.
// Voci ordinate per rilevanza F&B: la home mostra le prime, la pagina Servizi tutte.
// Definizione estesa nel vault → 60 Coffeeware/Marketing/Definire i servizi di Coffeeware.
export const PILLARS: Pillar[] = [
  {
    icon: Workflow,
    kicker: 'Da dove si parte',
    title: 'Automatizzare il processo',
    blurb:
      'Togliamo il lavoro manuale dove perdete tempo o sbagliate. Non un pacchetto da adattare: i punti dolenti del vostro processo.',
    items: [
      {
        title: 'Portale ordini B2B',
        description:
          'Rivenditori e distributori vedono il loro listino e ordinano da soli 24/7; l’ordine arriva già pronto da evadere.',
      },
      {
        title: 'Gestionale su misura',
        description:
          'Ordini, clienti, prodotti e stato dei lavori in un posto solo, con la logica del vostro processo, al posto di Excel sparsi.',
      },
      {
        title: 'Gestione prenotazioni',
        description:
          'Disponibilità in tempo reale, conferme e promemoria automatici per visite, degustazioni ed eventi, senza doppie prenotazioni.',
      },
      {
        title: 'E-label UE e etichetta digitale',
        description:
          'L’etichetta elettronica a norma dietro un QR: ingredienti e valori, multilingua, aggiornabile senza ristampare.',
      },
      {
        title: 'Dashboard e reportistica',
        description:
          'Vendite, magazzino e scadenze in una vista sintetica aggiornata da sola: «come andiamo?» in dieci secondi.',
      },
      {
        title: 'Magazzino, lotti e tracciabilità',
        description:
          'Sapere cosa c’è, dov’è e a quale lotto appartiene, per risalire in un attimo a un controllo o un richiamo.',
      },
      {
        title: 'Automazione documenti',
        description:
          'DDT, listini, offerte e conferme generati in automatico dai dati già inseriti, senza ricompilare moduli.',
      },
      {
        title: 'Adempimenti e accise',
        description:
          'Registri e scadenze normative — es. il registro telematico delle distillerie — gestiti senza rincorse manuali.',
      },
      {
        title: 'Integrazioni e API',
        description:
          'Colleghiamo i software che già avete e non si parlano, così un dato inserito una volta finisce dove serve.',
      },
      {
        title: 'Migrazione e import dati',
        description:
          'Portiamo dentro lo storico da vecchi Excel o gestionali abbandonati, pulito, senza reinserirlo a mano.',
      },
      {
        title: 'Notifiche automatiche',
        description:
          'Conferme e promemoria via email o WhatsApp legati agli eventi — ordine ricevuto, spedito, in consegna — al posto delle telefonate.',
      },
      {
        title: 'CRM leggero',
        description:
          'Contatti, storico e stato della relazione in un archivio unico, per non perdere i follow-up.',
      },
      {
        title: 'App per la rete vendita',
        description:
          'Gli agenti raccolgono ordini in fiera o dal cliente, anche offline, e finiscono dritti nel gestionale.',
      },
    ],
  },
  {
    icon: Sparkles,
    kicker: 'Il pezzo che vale di più',
    title: 'Capacità nuove che fanno vendere',
    blurb:
      'Strumenti che oggi non potete avere, che arrivano fino al cliente finale: per esempio un configuratore con cui il cliente personalizza il prodotto da solo.',
    flag: true,
    items: [
      {
        title: 'Configuratore di prodotto',
        description:
          'Un editor guidato che porta il cliente finale dalla personalizzazione all’ordine e vi restituisce un file pronto per la produzione, senza rimpalli via email col grafico.',
      },
      {
        title: 'E-commerce e vendita diretta',
        description:
          'Un negozio online attorno al vostro prodotto — catalogo, pagamenti, spedizioni — per vendere al cliente finale e tenervi il margine.',
      },
      {
        title: 'Web app su misura',
        description:
          'Quando lo strumento che serve non esiste in commercio, lo costruiamo da zero sul vostro processo.',
      },
      {
        title: 'App mobile',
        description:
          'Lo strumento in tasca al cliente o a chi lavora sul campo, come app sugli store o web app installabile.',
      },
      {
        title: 'Area e-commerce B2B',
        description:
          'Login, listini dedicati per cliente, quantità minime e riordino: far comprare i clienti business, non solo ordinare.',
      },
      {
        title: 'Wine club e abbonamenti',
        description:
          'Il meccanismo di ricavo ricorrente: iscrizione, pagamenti periodici, gestione membri e spedizioni.',
      },
      {
        title: 'Fedeltà e gift card',
        description:
          'Punti, buoni regalo e premi che fanno tornare il cliente e alzano lo scontrino medio.',
      },
      {
        title: 'Esperienze digitali e QR storytelling',
        description:
          'Un QR sulla bottiglia che apre la storia del prodotto e un modo per comprare o lasciare il contatto.',
      },
      {
        title: 'Vendita esperienze online',
        description:
          'Tour e degustazioni prenotabili e pagabili online, con posti e calendario gestiti.',
      },
    ],
  },
  {
    icon: Server,
    kicker: 'Il fondamento',
    title: 'La base digitale affidabile',
    blurb:
      'L’infrastruttura sotto ai vostri strumenti, gestita da chi l’ha costruita. E dopo il lancio non spariamo.',
    items: [
      {
        title: 'Sito e presenza online',
        description:
          'Il canale da cui arrivano richieste vere — contatti, ordini, prenotazioni — non una brochure ferma.',
      },
      {
        title: 'Hosting, dominio ed email',
        description:
          'Dominio, hosting, caselle e le email di sistema, messi in piedi e gestiti da noi.',
      },
      {
        title: 'Manutenzione e continuità',
        description:
          'Dopo il lancio restiamo il riferimento per correzioni, aggiornamenti ed evoluzioni, a pacchetti di ore.',
      },
      {
        title: 'Infrastruttura e deploy',
        description:
          'Cloud, backup e rilasci automatici: aggiornamenti online in sicurezza e senza downtime.',
      },
      {
        title: 'Sicurezza, performance e GDPR',
        description:
          'Audit, ottimizzazioni, backup e messa a norma su cookie e dati personali.',
      },
      {
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
