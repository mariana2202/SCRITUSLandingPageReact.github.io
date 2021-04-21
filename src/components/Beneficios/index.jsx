import "./beneficios.css";

import conferencia from "../../assets/img/conferencia.png";
import maleta from "../../assets/img/maleta.png";
import libro from "../../assets/img/libro.png";
import redes from "../../assets/img/redes.png";

const Beneficios = () => {
    return (
        <section className="px-4 bg-azul-osc" id="beneficios">
            <div className="row">
                <div className="col-lg-12 col-md-6 col-12 mt-4 mx-auto">
                    <h1 className="font-weight-bold text-orange display-3 text-center">BENEFICIOS</h1>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12 pb-4 mt-4">
                        <img src={conferencia} className="img-fluid mx-auto d-block" alt="conferencia"></img>
                        <p className="text-center text-light mt-3 parrafo">Tendrás mayor seguridad a la hora de hablar y escribir.</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 pb-4 mt-4 ">
                        <img src={maleta} className="img-fluid mx-auto d-block" alt="maleta"></img>
                        <p className="text-center text-light mt-3 parrafo">Aumentarás tus oportunidades laborales.</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 pb-4 mt-4 ">
                        <img src={libro} className="img-fluid mx-auto d-block" alt="libro"></img>
                        <p className="text-center text-light mt-3 parrafo">Enriquecerás y reforzarás tu conocimiento.</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 pb-4 mt-4 ">
                        <img src={redes} className="img-fluid mx-auto d-block" alt="redes"></img>
                        <p className="text-center text-light mt-3 parrafo">Te comunicarás con mayor claridad en redes sociales.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Beneficios;