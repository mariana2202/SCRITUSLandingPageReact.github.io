import "./nosotros.css";

import conexion from "../../assets/img/conexion.png";

const Nosotros = () => {
    return (
        <section className="px-5 pb-4 bg-azul-osc" id="nosotros">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-12 pb-4 mx-auto">
                    <div className="my-4">
                        <h1 className="font-weight-bold text-orange display-3 text-center">NOSOTROS</h1>
                    </div>
                    <div className="text-light parrafo">
                        <p className="align">Si se habla de redes sociales, lo primero que se viene a la mente es escribir de manera rápida y cómoda, pues en este medio es una característica común; que a su vez hace que la escritura se vea afectada por olvidar puntuar palabras, provocando así la desaparición de algunos caracteres; y que al final sea difícil la comprensión e incluso la lectura del mensaje. Por esta misma razón es que se ve la necesidad de recordar y regresar a esas buenas prácticas ortográficas, para que dentro de todo este mundo cibernético siga existiendo una comunicación asertiva.</p>
                    </div> 
                </div>
                <div className="col-lg-6 col-md-6 col-12 d-flex align-items-center justify-content-center">
                    <img src={conexion} alt="nosotros" className="img-fluid mx-auto d-block" id="img-nosotros"></img>
                </div>
            </div>
            <div className="row">
                <div className="col text-center text-light mt-3">
                    <h4 className="segoe">“Impacto social: desde pequeños hasta grandes, el lenguaje es esencial.”</h4>
                </div>
            </div>
        </section>
    );
};

export default Nosotros;