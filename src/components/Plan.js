import React from "react";
import "../hojas-estilos/Planes.css"

function Plan(props) {
    return (
        <div className="contenedor-plan">
            <img className="imagen-plan"
                src={require(`../imagenes/plan-${props.imagen}.jpg`)}
                alt="Foto plan basico"
            />

            <div className="contenedor-texto-plan">
                <p className="nombre-plan"> <strong>Plan {props.plan} </strong> </p>
                <p className="subtitulo-plan">Incluye:</p>
                <ul className="descripcion-plan">
                    <li>{props.beneficioUno}</li>
                    <li>{props.beneficioDos}</li>
                    <li>{props.beneficioTres}</li>
                    <li>{props.beneficioCuatro}</li>
                </ul>
                <p className="texto-valor">Valor Mes:</p>
                <p className="texto-precio"> <strong>$ {props.precio}</strong> </p>

            </div>

        </div>
    );

}

export default Plan;