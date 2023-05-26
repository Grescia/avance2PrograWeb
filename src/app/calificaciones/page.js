'use client';
import React from "react";
import Lista from "@/components/Lista/Lista";
import './style.css'
import Button from 'react-bootstrap/Button';

const calificaciones = () => {
    return(
        <div className="contenedor">
            <div className="lista">
                <h2 className="titulo">Bienvenido al centro de calificaciones</h2>
                <hr></hr>
                <Lista nombre={"Mafer"} fecha={"21 de mayo"} puntaje={"3 estrellas"} comentario={"Buena asesoria"}/>
                <Lista nombre={"Artemisa Santiago"} fecha = {"13 de mayo"} puntaje={"4 estrellas"} comentario={"Buena asesoria"}></Lista>
            </div>
            <div>
                <Button variant="outline-secondary" className="boton">Volver a citas programadas</Button>
            </div>
        </div>
    )
}

export default calificaciones;