import React from 'react'
import Plan from "../components/Plan"

const Planes = () => {
    return (
        <div className='contenedor-principal'>

            <h1>ELIGE TÚ PLAN Y ENTRENA YA</h1>

            <Plan
                plan="Básico"
                beneficioUno="Acceso a todas las áreas del gimnasio"
                beneficioDos="Horario Restringido"
                beneficioTres="Selección de un horario fijo"
                beneficioCuatro="Toma de medidas corporales"
                precio="44.000"
                imagen="basico"
            />

            <Plan
                plan="Plata"
                beneficioUno="Acceso a todas las áreas del gimnasio"
                beneficioDos="Horario Libre"
                beneficioTres="Acceso a clases grupales y cardio"
                beneficioCuatro="Toma de medidas corporales"
                precio="60.000"
                imagen="plata"
            />

            <Plan
                plan="Oro"
                beneficioUno="Acceso a todas las áreas del gimnasio"
                beneficioDos="Horario Libre"
                beneficioTres="Acceso a clases grupales y cardio"
                beneficioCuatro="Entrenamiento personalizados"
                precio="82.000"
                imagen="oro"
            />
        </div>
    )
}

export default Planes
