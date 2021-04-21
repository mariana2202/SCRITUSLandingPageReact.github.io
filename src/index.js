import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';


// Components
import Menu from "./components/Menu";
import InicioSesion from "./components/Inicio Sesion"
import Inicio from "./components/Inicio";
import Nosotros from "./components/Nosotros";
import Contenido from "./components/Contenido";
import Beneficios from "./components/Beneficios";
import Testimonios from "./components/Testimonios";
import Cupon from "./components/Cupon";
import Footer from "./components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <>
    <Menu/>
    <InicioSesion/>
    <Inicio/>
    <Nosotros/>
    <Contenido/>
    <Beneficios/>
    <Testimonios/>
    <Cupon/>
    <Footer/>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
