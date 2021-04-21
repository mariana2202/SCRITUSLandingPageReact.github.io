import "./contenido.css";

import video from "../../assets/video/Video introductorio.mp4";

const Contenido = () => {
    return (
        <section className="px-5 pb-4 bg-light" id="contenido">
            <div className="row">
                <div className="col-lg-12 col-md-6 col-12 mt-4 mx-auto my-4 ml-auto">
                    <h1 className="font-weight-bold text-azul-osc display-3 text-center">CONTENIDOS</h1>
                </div>
            </div>
            <div className="row">    
                <div className="col-lg-6 col-md-8 col-12 mx-auto pb-4 d-flex align-items-center justify-content-center">
                    <video width="500" height="285" controls>
                        <source src={video} type="video/mp4"></source>
                    </video>
                </div>
                <div className="col-lg-6 col-md-6 col-12 m-auto align-items-center justify-content-center">
                    <div className="text-center mb-3">
                        <h2 className="font-weight-bold text-orange text-center text-center-md mb-1 display-4">Ortografía</h2>
                        <h3 className="text-azul-osc">
                            – Acentuación. 
                            <br></br>
                            – Uso adecuado de la C, S y Z.
                        </h3>
                    </div>
                    <div className="text-center">
                        <h2 className="font-weight-bold text-orange text-center mb-1 display-4">Redacción</h2>
                        <h3 className="text-azul-osc mb-5">
                            – Estructura y conceptos básicos de la redacción.
                            <br></br>
                            – Signos de puntuación.
                        </h3>
                    </div>
                </div>    
            </div>
        </section>
    );
};

export default Contenido;