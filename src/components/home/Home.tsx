import Navbar from '../layout/Navbar';
import HeaderWallpaper from './HeaderWallpaper';
import Servizi from './Servizi.tsx';
import ChiSiamoCTA from "./ChiSiamoCTA.tsx";
import FAQ from "./FAQ.tsx";
import DivisorioCreativo from "./DivisorioCreativo.tsx";
import CTAContattaci from "./CTAContattaci.tsx";
import ContactForm from "./ContactForm.tsx";
import Footer from "../layout/Footer.tsx";
import ScrollToTop from "../layout/ScrollToTop.tsx";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from 'react-helmet-async';


export default function Home() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const el = document.querySelector(location.hash);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);
    
    return (
    <>
        <Helmet>
            <title>Siti web, Software e servizi digitali a Trento e Vicenza | Coffeeware Designs</title>
            <meta
                name="description"
                content="Coffeeware realizza siti web, branding e soluzioni digitali su misura per aziende e professionisti a Trento e Vicenza."
            />
            <link rel="canonical" href="https://www.coffeewaredesigns.com/" />
            <meta property="og:title" content="Coffeeware – Web Agency & Soluzioni Digitali" />
            <meta property="og:description" content="Realizziamo siti web, branding e soluzioni digitali personalizzate." />
            <meta property="og:url" content="https://www.coffeewaredesigns.com/" />
        </Helmet>
        <Navbar />
        <HeaderWallpaper />
        <Servizi />
        <CTAContattaci />
        <ChiSiamoCTA />
        <FAQ />
        <ContactForm title="Contattaci ora." subtitle="Non esitare a contattarci per qualsiasi domanda o richiesta di preventivo."/>
        <DivisorioCreativo />
        <Footer />
        <ScrollToTop />
    </>
  );
}
