const express = require('express');
const { Resend } = require('resend');
const rateLimit = require('express-rate-limit');
const router = express.Router();
require('dotenv').config();
const ContactLeadNotificationEmail = require('../emails/contactLeadNotification');
const ContactUserConfirmationEmail = require('../emails/contactUserConfirmation');

const resend = new Resend(process.env.RESEND_API_KEY);
const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET_KEY;

// --- helpers ---

// Ripulisce una stringa: toglie caratteri di controllo, taglia gli spazi e la lunghezza.
const clean = (v, max = 500) =>
  typeof v === 'string'
    ? v.replace(/[\u0000-\u001F\u007F]/g, ' ').trim().slice(0, max)
    : '';

const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

// Verifica il token Cloudflare Turnstile lato server.
// Se la secret non è impostata (dev), salta la verifica ma avvisa.
async function verifyTurnstile(token, ip) {
  if (!TURNSTILE_SECRET) {
    console.warn(
      '[turnstile] TURNSTILE_SECRET_KEY non impostata: verifica anti-bot saltata (solo dev).',
    );
    return true;
  }
  if (!token) return false;

  const body = new URLSearchParams();
  body.append('secret', TURNSTILE_SECRET);
  body.append('response', token);
  if (ip) body.append('remoteip', ip);

  try {
    const r = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      { method: 'POST', body },
    );
    const data = await r.json();
    return !!data.success;
  } catch (e) {
    console.error('[turnstile] errore verifica', e);
    return false;
  }
}

// Anti-flood: max 5 invii ogni 10 minuti per IP.
const sendLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    ok: false,
    message: 'Troppe richieste. Riprova tra qualche minuto.',
  },
});

router.get('/', (req, res) =>
  res.json({ ok: true, message: 'Email API base route' }),
);

router.post('/send', sendLimiter, async (req, res) => {
  try {
    const body = req.body || {};

    // Honeypot: campo nascosto che un umano non compila. Se pieno, è un bot:
    // rispondiamo ok senza fare nulla, così non capisce di essere stato scartato.
    if (clean(body.website)) {
      return res.json({ ok: true, message: 'ok' });
    }

    const type = body.type === 'email' ? 'email' : 'call';
    const nome = clean(body.nome, 100);
    const cognome = clean(body.cognome, 100);
    const telefono = clean(body.telefono, 40);
    const email = clean(body.email, 160).toLowerCase();
    const data = clean(body.data, 40);
    const ora = clean(body.ora, 20);
    const messaggio = clean(body.messaggio, 4000);
    const token = clean(body['cf-turnstile-response'], 4000);

    // Validazione per flusso.
    if (!nome || !cognome) {
      return res
        .status(400)
        .json({ ok: false, message: 'Nome e cognome sono obbligatori.' });
    }
    if (type === 'call' && !telefono) {
      return res.status(400).json({
        ok: false,
        message: 'Il telefono è obbligatorio per la chiamata.',
      });
    }
    if (type === 'email') {
      if (!email || !isEmail(email)) {
        return res
          .status(400)
          .json({ ok: false, message: 'Email non valida.' });
      }
      if (!messaggio) {
        return res
          .status(400)
          .json({ ok: false, message: 'Il messaggio è obbligatorio.' });
      }
    }

    // Anti-bot Turnstile.
    const okTurnstile = await verifyTurnstile(token, req.ip);
    if (!okTurnstile) {
      return res.status(400).json({
        ok: false,
        message: 'Verifica anti-bot non superata. Riprova.',
      });
    }

    const name = `${nome} ${cognome}`.trim();
    const toEmail = process.env.CONTACT_TO_EMAIL || 'info@coffeewaredesigns.com';
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || 'Coffeeware <onboarding@resend.dev>';
    const contattoLabel = type === 'call' ? 'Chiamata' : 'Email';

    // Riepilogo per la notifica interna.
    const summaryLines = [];
    if (type === 'call') {
      if (data) summaryLines.push(`Giorno preferito: ${data}`);
      if (ora) summaryLines.push(`Orario preferito: ${ora}`);
      summaryLines.push('Ha chiesto di essere richiamato.');
    } else if (messaggio) {
      summaryLines.push(messaggio);
    }
    const summary = summaryLines.join('\n');

    const textToUs = [
      'Nuova richiesta dal sito',
      '',
      `Tipo: ${contattoLabel}`,
      `Nome: ${name}`,
      email ? `Email: ${email}` : null,
      telefono ? `Telefono: ${telefono}` : null,
      data ? `Giorno: ${data}` : null,
      ora ? `Orario: ${ora}` : null,
      messaggio ? '' : null,
      messaggio ? 'Messaggio:' : null,
      messaggio || null,
    ]
      .filter((l) => l !== null)
      .join('\n');

    const { data: dataToUs, error: errorToUs } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email || undefined,
      subject: `Nuova richiesta (${contattoLabel}) - ${name}`,
      text: textToUs,
      react: ContactLeadNotificationEmail({
        name,
        email: email || '—',
        phone: telefono || '—',
        contatto: contattoLabel,
        message: summary || '—',
      }),
    });

    if (errorToUs) {
      console.error(errorToUs);
      return res
        .status(502)
        .json({ ok: false, message: 'Invio non riuscito. Riprova più tardi.' });
    }

    // Conferma all'utente solo se ha lasciato un'email (flusso "email").
    let confirmId;
    if (email) {
      const { data: dataToUser, error: errorToUser } =
        await resend.emails.send({
          from: fromEmail,
          to: [email],
          subject: 'Abbiamo ricevuto la tua richiesta',
          text: [
            `Ciao ${nome},`,
            '',
            'grazie per averci scritto: ti rispondiamo entro 24 ore.',
            '',
            'Coffeeware',
          ].join('\n'),
          react: ContactUserConfirmationEmail({
            name: nome,
            message: summary || 'La tua richiesta è stata ricevuta.',
          }),
        });
      // Un errore sulla conferma non deve far fallire la richiesta.
      if (errorToUser) console.error(errorToUser);
      else confirmId = dataToUser?.id;
    }

    return res.json({
      ok: true,
      message: 'Richiesta inviata con successo',
      id: confirmId || dataToUs?.id,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ ok: false, message: 'Errore interno. Riprova più tardi.' });
  }
});

module.exports = router;
