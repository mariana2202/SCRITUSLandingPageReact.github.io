import "./inicio.css";

const Inicio = () => {
    return (
        <section className="row px-5 bg-light justify-content-center align-items-center mr-auto" id="inicio">
            <div className="row justify-content-center align-items-center">
                {/* <!-- Formulario --> */}
                <div className="col-lg-4 col-md-12 col-12 pb-4 mr-auto my-5">
                    <div className="caja-naranja rounded-circle d-flex align-content-center justify-content-center flex-wrap mx-auto d-block text-center">
                        <h2 className="text-azul-osc font-weight-bold">COMIENZA <br></br> TU REGISTRO</h2>
                        <form className="w-100">
                            <div className="form-group">
                                <input type="text" className="form-control h-50 w-50 mx-auto d-block" id="nombre" placeholder="Nombre" required></input>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control h-50 w-75 mx-auto d-block" id="apellido" placeholder="Apellidos" required></input>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control h-50 w-75 mx-auto d-block" id="correo" placeholder="Correo" required></input>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control h-50 w-50 mx-auto d-block" id="celular" placeholder="Celular" required></input>
                            </div>
                            <button type="submit" className="btn btn-azul btn-sm w-25 text-light">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
            {/* <!-- Invitación --> */}
            <div className="col-lg-8 col-md-12 col-12 pb-4">
                <h1 className="text-center display-3 font-weight-bold text-orange ml-auto">TU FORMACIÓN ES TU FUTURO</h1>
                <h2 className="text-center display-4 segoe text-azul-osc ml-auto">¡INSCRÍBETE AHORA!</h2>
                <br></br>
                <h2 className="text-center text-light ml-auto">Scritus es un curso corto virtual de redacción y ortografía, que busca enseñar de manera práctica a las personas, algunos tips para mejorar su comunicación.</h2>
            </div>
        </section>
    );
};

export default Inicio;