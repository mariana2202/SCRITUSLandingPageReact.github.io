import "./menu.css";

import logo from "../../assets/img/logo.png";
import menu from "../../assets/img/menu (1).png";

const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky-top bg-light" id="fondo-menu">
            <img src={logo} className="img-fluid navbar-brand" alt="Img Responsive"></img>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav">
                    <span className="navbar-toggler-icon"><img className="img-fluid" src={menu} alt="Img Responsive"></img></span>
                </button>
            <div className="collapse navbar-collapse" id="main_nav">
                <ul className="navbar-nav ml-auto py-1 px-2 bg-light">
                    <li className="nav-item"><a className="nav-link" href="#inicio">Inicio</a></li>
                    <li className="nav-item"><a className="nav-link" href="#nosotros">Nosotros</a></li>
                    <li className="nav-item"><a className="nav-link" href="#contenido">Contenido</a></li>
                    <li className="nav-item"><a className="nav-link" href="#beneficios">Beneficios</a></li>
                    <li className="nav-item"><a className="nav-link" href="#testimonios">Testimonios</a></li>
                    <li className="nav-item"><button className="nav-link" data-toggle="modal" data-target="#modalTest">Iniciar sesión</button></li>
                </ul>
            </div>
        </nav>
    );
};

export default Menu;