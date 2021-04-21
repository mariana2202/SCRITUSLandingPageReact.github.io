import "./iniciosesion.css";

const InicioSesion = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    {/* <!-- Modal --> */}
                    <div className="modal fade text-azul-osc" id="modalTest" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h2 className="modal-title" id="exampleModalLabel">Iniciar Sesión</h2>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form id="formulario">
                                        <div className="form-group" >
                                            <label>Correo electrónico</label>
                                            <input type="email" className="form-control" id="ingresoEmail" aria-describedby="emailHelp" required></input>
                                            <small id="emailHelp" className="form-text text-muted">Ingrese su correo.</small>
                                        </div>
                                        <div className="form-group">
                                            <label>Contraseña</label>
                                            <input type="password" className="form-control" id="ingresoClave" required></input>
                                            <small id="aviso" className="form-text text-muted">Ingrese su contraseña.</small>
                                        </div>
                                        <div className="form-group form-check">
                                            <input type="checkbox" className="form-check-input" id="chequeoDatos"></input>
                                            <label className="form-check-label">Recordarme</label>
                                        </div>
                                        <button type="submit" className="btn btn-azul text-light">Entrar</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InicioSesion;