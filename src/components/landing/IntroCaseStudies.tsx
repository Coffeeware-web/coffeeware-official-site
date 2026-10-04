import Reveal from "./Reveal.tsx";
import {Link} from "react-router-dom";


export default function IntroCaseStudies() {
    return (
        <section id="case-studies" className="scroll-mt-24 bg-cw-white py-30 md:py-28">
            <Reveal>
                <h2 className="mb-12 text-center font-display font-bold text-4xl leading-[1.1] text-cw-black md:text-5xl">
                    Siamo in bella compagnia<span className={"text-cw-secondary"}>;</span>
                </h2>
            </Reveal>

            <Reveal>
                <div className={"mx-auto grid max-w-6xl grid-cols-1 gap-5 px-5 md:grid-cols-3 md:px-8"}>
                    <div className={"col-span-1 rounded-3xl p-4 border-1 border-cw-black/15 bg-white transition-colors hover:border-cw-secondary"}>
                        <img src={"/img/case-studies/esempio-azienda.webp"} alt={"Azienda 1"} className={"rounded-2xl"}/>
                        <h3 className={"pt-2 font-bold text-xl"}>Azienda 1</h3>
                        <p className={"pt-1"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className={"col-span-1 rounded-3xl p-4 border-1 border-cw-black/15 bg-white transition-colors hover:border-cw-secondary"}>
                        <img src={"/img/case-studies/esempio-azienda.webp"} alt={"Azienda 2"} className={"rounded-2xl"}/>
                        <h3 className={"pt-2 font-bold text-xl"}>Azienda 2</h3>
                        <p className={"pt-1"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className={"col-span-1 rounded-3xl p-4 border-1 border-cw-black/15 bg-white transition-colors hover:border-cw-secondary"}>
                        <img src={"/img/case-studies/esempio-azienda.webp"} alt={"Azienda 3"} className={"rounded-2xl"}/>
                        <h3 className={"pt-2 font-bold text-xl"}>Azienda 3</h3>
                        <p className={"pt-1"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    <div
                        className={"col-span-1 rounded-t-3xl p-6  border-1-solid border-cw-black/15"}
                        style={{backgroundImage: "linear-gradient(to bottom, #FFFFFF, #F3DCAF)"}}>
                    </div>
                    <div
                        className={"col-span-1 hidden rounded-t-3xl p-6 border-1-solid border-cw-black/15 md:block"}
                        style={{backgroundImage: "linear-gradient(to bottom, #FFFFFF, #F3DCAF)"}}>
                    </div>
                    <div
                        className={"col-span-1 hidden rounded-t-3xl p-6  border-1-solid border-cw-black/15 md:block"}
                        style={{backgroundImage: "linear-gradient(to bottom, #FFFFFF, #F3DCAF)"}}>
                    </div>
                </div>
            </Reveal>
            <Reveal delay={0.2} className="mt-10 flex justify-center">
                <Link to="/case-studies"
                      className="group inline-flex items-center gap-2 rounded-full border border-cw-black/15 bg-white/60 px-5 py-2 text-sm font-semibold text-cw-black transition-colors hover:border-cw-black/30"
                >
                    Scopri i risultati
                </Link>
            </Reveal>
        </section>
    );
}