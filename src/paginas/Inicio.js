import React from 'react'
import Carousel from '../components/Carousel.js'

const Inicio = () => {
    return (
        <div>
            <h1>Bienvenido(a) al Gimnasio EnForma</h1>

            <div className="logo">
                <img src={require("../imagenes/logo.png")} className="d-block w-100" alt="..." />
            </div>

            <Carousel />
        </div>
    )
}

export default Inicio
