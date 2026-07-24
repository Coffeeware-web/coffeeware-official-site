import SiteHeader from '../landing/SiteHeader'
import SiteFooter from '../landing/SiteFooter'

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-xl font-bold text-cw-black md:text-2xl">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-pretty text-base leading-relaxed text-cw-gray">
        {children}
      </div>
    </section>
  )
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-cw-white">
      <SiteHeader />
      <main>
        {/* Header */}
        <section className="bg-cw-primary pt-32 pb-14 text-cw-white md:pt-40 md:pb-20">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            <h1 className="font-display text-4xl font-bold leading-tight md:text-5xl">
              Privacy policy
              <span className="text-cw-secondary">;</span>
            </h1>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-cw-white/75">
              Come trattiamo i dati che ci lasci quando ci contatti. In breve:
              li usiamo solo per risponderti, non li vendiamo e non ti iscriviamo
              a nessuna newsletter.
            </p>
            <p className="mt-4 text-sm text-cw-white/50">
              Ultimo aggiornamento: luglio 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <div className="mx-auto max-w-3xl px-5 pb-24 pt-10 md:px-8 md:pb-32">
          <Section title="Chi è il titolare del trattamento">
            <p>
              Il trattamento è svolto in contitolarità da Matteo Magnaguagno
              (P. IVA 04659400248) e Tommaso Parlato (P. IVA 04659390241), che
              operano sotto il nome commerciale Coffeeware, con sede a Trento
              (TN). Puoi contattarci per qualsiasi richiesta relativa ai tuoi
              dati all&apos;indirizzo{' '}
              <a
                href="mailto:info@coffeewaredesigns.com"
                className="font-medium text-cw-primary underline"
              >
                info@coffeewaredesigns.com
              </a>
              .
            </p>
          </Section>

          <Section title="Quali dati raccogliamo">
            <p>
              Raccogliamo solo i dati che ci fornisci volontariamente tramite il
              modulo di contatto del sito:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>nome e cognome;</li>
              <li>
                recapiti: numero di telefono e/o indirizzo e-mail, a seconda di
                come scegli di essere ricontattato;
              </li>
              <li>
                per la prenotazione di una call, il giorno e l&apos;orario che
                preferisci;
              </li>
              <li>l&apos;eventuale messaggio che ci scrivi.</li>
            </ul>
            <p>
              Per motivi tecnici e di sicurezza vengono inoltre trattati dati di
              navigazione come l&apos;indirizzo IP, necessari al funzionamento
              del sito e alla protezione anti-bot del modulo (vedi più avanti).
            </p>
          </Section>

          <Section title="Perché li trattiamo e su quale base giuridica">
            <p>
              Usiamo i tuoi dati esclusivamente per rispondere alla tua richiesta
              e per ricontattarti in merito. La base giuridica è l&apos;esecuzione
              di misure precontrattuali adottate su tua richiesta (art. 6.1.b
              GDPR) e, dove applicabile, il tuo consenso (art. 6.1.a GDPR),
              prestato inviando il modulo. Il trattamento dei dati tecnici per la
              sicurezza si fonda sul legittimo interesse a proteggere il sito da
              abusi (art. 6.1.f GDPR).
            </p>
          </Section>

          <Section title="A chi comunichiamo i dati">
            <p>
              Non vendiamo né cediamo i tuoi dati. Per far funzionare il modulo ci
              affidiamo ad alcuni fornitori che agiscono come responsabili del
              trattamento:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <strong className="font-medium text-cw-black">Resend</strong> —
                invio delle e-mail generate dal modulo (a noi e la conferma a te);
              </li>
              <li>
                <strong className="font-medium text-cw-black">
                  Cloudflare
                </strong>{' '}
                — hosting di sito e server, e servizio Turnstile che verifica in
                modo invisibile che a inviare il modulo sia una persona e non un
                bot;
              </li>
              <li>
                <strong className="font-medium text-cw-black">Google</strong> —
                le richieste ci arrivano e restano nella nostra casella di posta
                (Gmail); non le archiviamo in alcun database.
              </li>
            </ul>
            <p>
              Alcuni di questi fornitori possono trattare i dati anche al di fuori
              dell&apos;Unione Europea (ad es. negli Stati Uniti). In tal caso il
              trasferimento avviene con le garanzie previste dal GDPR, come le
              clausole contrattuali standard della Commissione Europea.
            </p>
          </Section>

          <Section title="Dove e per quanto tempo li conserviamo">
            <p>
              Le richieste restano nella nostra casella di posta elettronica: non
              usiamo alcun database. Conserviamo questi dati per il tempo
              necessario a gestire la tua richiesta e l&apos;eventuale rapporto che
              ne deriva, e comunque non oltre 24 mesi dall&apos;ultimo contatto,
              salvo obblighi di legge diversi. Trascorso tale periodo la
              corrispondenza viene eliminata.
            </p>
          </Section>

          <Section title="I tuoi diritti">
            <p>
              In qualsiasi momento puoi esercitare i diritti previsti dagli artt.
              15–22 del GDPR: accesso ai tuoi dati, rettifica, cancellazione,
              limitazione e opposizione al trattamento, portabilità, e revoca del
              consenso già prestato. Per farlo, scrivici a{' '}
              <a
                href="mailto:info@coffeewaredesigns.com"
                className="font-medium text-cw-primary underline"
              >
                info@coffeewaredesigns.com
              </a>
              . Hai inoltre il diritto di proporre reclamo all&apos;autorità di
              controllo (in Italia, il Garante per la protezione dei dati
              personali).
            </p>
          </Section>

          <Section title="Cookie e tecnologie simili">
            <p>
              Il sito non usa cookie di profilazione o di marketing. Il servizio
              Cloudflare Turnstile, attivo sul modulo di contatto, può impiegare
              tecnologie strettamente necessarie a distinguere gli utenti reali
              dai bot: non tracciano la tua navigazione a fini pubblicitari.
            </p>
          </Section>

          <Section title="Modifiche a questa informativa">
            <p>
              Possiamo aggiornare questa informativa nel tempo. La versione in
              vigore è sempre quella pubblicata su questa pagina, con la data di
              ultimo aggiornamento indicata in alto.
            </p>
          </Section>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
