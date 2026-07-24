import React, { useState, useRef } from 'react';
import styles from "./contactform.module.css";
import mobileStyles from "./mobilecontainer.module.css";
import PrivacyPolicy from "../layout/PrivacyPolicy.tsx";
// Fallback hardcoded: non sono dati sensibili (URL pubblico del backend), e
// tiene il sito funzionante a prescindere dalle variabili d'ambiente di build
// su Cloudflare. import.meta.env.VITE_API_BASE_URL, se impostata, ha comunque priorità.
const apiBase = import.meta.env.VITE_API_BASE_URL || "https://coffeeware-react.onrender.com";

function ContactForm({ title, subtitle }: { title: string; subtitle: string }) {
    const form = useRef<HTMLFormElement>(null);
    const [isChecked, setIsChecked] = useState(false); // stato per il consenso
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState<string | null>(null);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitMessage(null);
        setSubmitError(null);

        if (!isChecked) {
            alert("Devi accettare la privacy policy per inviare il form.");
            return;
        }

        if (form.current) {
            try {
                setIsSubmitting(true);
                const formData = new FormData(form.current);
                const payload = Object.fromEntries(formData.entries());

                const response = await fetch(`${apiBase}/api/email/send`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                });

                const result = await response.json();

                if (!response.ok || !result.ok) {
                    throw new Error(result.message || "Errore durante l'invio della richiesta.");
                }

                setSubmitMessage("Richiesta inviata con successo.");
                form.current.reset();
                setIsChecked(false);
            } catch (err) {
                const message = err instanceof Error ? err.message : "Errore durante l'invio della richiesta.";
                setSubmitError(message);
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <>
            <section id={"contact-form"} className={`${mobileStyles.mobileContainer}`}>
                <div className={"mt-5 text-center"}> <h3 className={styles.title}>{title}</h3>
                    <p className={`mb-5 ${styles.subtitle}`}>
                        {subtitle}
                    </p>
                </div>

                <div className={`${styles.formContatti} container`}>
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <div className={styles.contattiIconeDesktop}>
                                <a href="tel:3884994996"><img className={styles.iconaContatti} src="img/icona_whatsapp.png"
                                    alt="Telefono" /></a><br/>
                                <a href="tel:3884994996"><img className={styles.iconaContatti} src="img/phone.png" alt="Telefono" /></a><br/>
                                <a href="mailto:info@coffeewaredesigns.com"><img className={styles.iconaContatti} src="img/mail.png"
                                    alt="Email" /></a>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <form id="myForm" ref={form} onSubmit={sendEmail}>
                                <div className="form-group">
                                    <label htmlFor="name">Nome e Cognome</label>
                                    <input type="text" className="form-control" id="name" name="name"
                                        placeholder="Come ti chiami?" required />
                                </div>
                                <div className="form-group" style={{marginTop: "15px"}}>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" name="email"
                                        placeholder="In quale email vuoi essere contattato?" required />
                                </div>
                                <div className="row" style={{marginTop: "15px"}}>
                                    <div className="form-group">
                                        <label htmlFor="phone">Telefono</label>
                                        <div className="input-group">
                                            <input type="tel" className="form-control" id="phone" name="phone"
                                                placeholder="Inserire numero" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row" style={{marginTop: "15px"}}>
                                    <div className="col-sm">
                                        <div className="form-group">
                                            <label htmlFor="contatto">Preferenze di contatto</label>
                                            <select className="form-control" id="contatto" name="contatto" required>
                                                <option value="Whatsapp">Whatsapp</option>
                                                <option value="Email">E-mail</option>
                                                <option value="Telefono">Telefono</option>
                                                <option value="SMS">SMS</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group" style={{marginTop: "15px"}}>
                                    <label htmlFor="message">Messaggio</label>
                                    <textarea className="form-control"
                                              id="message"
                                              name="message"
                                              placeholder="Parlaci un po' della tua idea..." rows={4} required />
                                </div><br />
                                <div className="form-group form-check mb-4" style={{ marginTop: "15px" }}>
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="consenso"
                                        onChange={(e) => setIsChecked(e.target.checked)}
                                        required
                                    />
                                    <label className="form-check-label" htmlFor="consenso">
                                        Ho letto e accetto la <PrivacyPolicy />
                                    </label>
                                </div>
                                <div className="form-group cf-turnstile" data-sitekey="0x4AAAAAAClqoruuqTAm9epq"></div>
                                <button type="submit" className={`btn ${styles.btnContattaci}`} disabled={isSubmitting}>
                                    <b>{isSubmitting ? "Invio in corso..." : "Invia la richiesta!"}</b>
                                </button>
                                {submitMessage && (
                                    <p style={{ color: "#198754", marginTop: "12px" }}>{submitMessage}</p>
                                )}
                                {submitError && (
                                    <p style={{ color: "#dc3545", marginTop: "12px" }}>{submitError}</p>
                                )}
                            </form>
                        </div>
                        <div className={styles.contattiIconeMobile}>
                            <table style={{margin: "auto"}}>
                                <tbody>
                                    <tr>
                                        <td style={{padding: "10px", paddingRight: "20px"}}> <a
                                            href="https://api.whatsapp.com/send?phone=393884994996" style={{float: "right"}}><img
                                                className={styles.iconaContatti} src="img/icona_whatsapp.png" alt="Whatsapp" /></a>
                                        </td>
                                        <td style={{padding: "10px"}}> <a href="tel:3884994996"><img className={styles.iconaContatti}
                                                src="img/phone.png" alt="Telefono" /></a>
                                        </td>
                                        <td style={{padding: "10px", paddingLeft: "20px"}}> <a href="mailto:info@coffeewaredesigns.com"
                                            style={{float: "left", maxWidth: "100px"}}><img className={styles.iconaContatti} src="img/mail.png"
                                                alt="Email" /></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section><br /><br />
        </>
    );
}

export default ContactForm;
