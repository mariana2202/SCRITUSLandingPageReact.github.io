import "./testimonios.css";

const Testimonios = () => {
    return (
        <section className="px-5 bg-light" id="testimonios">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 mr-auto my-5">
                    <h1 className="font-weight-bold text-orange text-center display-3">TESTIMONIOS</h1>
                </div>
                <div id="carousel-testimonio" className="carousel slide col-lg-12 col-md-12 col-sm-12 text-center pb-5" data-ride="carousel">
                    <div className="carousel-inner parrafo text-azul-osc font-weight-bold">
                        <div className="carousel-item active">
                            <p>Antes no sabía lo importante que es acentuar las palabras, cambian totalmente el significado de una oración. Pero con SCRITUS ya no tengo más ese problema.</p>
                            <br></br>
                            <h4 className="font-weight-bold">- David Aristizábal.</h4>
                        </div>
                        <div className="carousel-item">
                            <p>Tengo mil ideas en la cabeza todo el tiempo, pero gracias a este curso aprendí a ordenarlas y poder escribirlas de manera que todos entiendan aquello que quiero transmitir como escritor. no tengo más ese problema.</p>
                            <br></br>
                            <h4 className="font-weight-bold">- Victor Henao.</h4>
                        </div>
                        <div className="carousel-item">
                            <p>Escribir bien ha cambiado mi vida, antes no conseguía empleo por la manera en que digitaba mis documentos; pero en estos momentos soy de las secretarias más ágiles en la empresa. Todo esto se lo debo a Scritus.</p>
                            <br></br>
                            <h4 className="font-weight-bold">- Carolina Vásquez.</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonios;