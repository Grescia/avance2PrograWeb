'use client';
import Carta from '../../components/Card/Card.jsx'
import '../citaspasadas/style.css'
import Button from 'react-bootstrap/Button'
import React from 'react';
import {citas} from '../../api/citas.js';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'


const citaspasadas = () => {
    const fechaSistema = new Date();
    const [citasOriginal, setCitasOriginal] = useState(citas);
    const [citasFiltrado, setCitasFiltrado] = useState([]);

    const filtrarFecha = () =>{
        const citasFiltradas = citasOriginal.filter(elemento => (new Date(elemento.fecha) < fechaSistema));
        setCitasFiltrado(citasFiltradas)

      };

    useEffect(()=>{
        filtrarFecha()
    },[])

    const router = useRouter()
      const handleClick =()=>{
        router.push('/Cita')

      }

            return(
                    <div className='cuerpo'>
                        <div className='arriba'>
                            <h2 className='titulo'>Mis citas</h2>
                            <Button variant="outline-secondary" className='programar'>Programar una cita</Button>
                        </div>
                        <br></br>
                        <br></br>
                        <div>
                            <hr></hr> 
                        </div>
                        <div>
                            <h4 className='titulo'>Citas reservadas pasadas</h4>
                            <Button variant="outline-secondary" className='programar2' onClick={handleClick}>Ver citas futuras</Button>
                        </div>
                        <br></br>
                        <br></br>
                        <div className='cards'>
                            { citasFiltrado.length === 0 ? (
                                    <p>No hay citas pasadas</p>
                                ):
                                (citasFiltrado.map(elem => (
                                    <Carta nombreprof={elem.nombreprof} especialidad={elem.especialidad} fecha={elem.fecha} 
                                    curso={elem.curso}/>
                                )))
                            }
                        </div>
        
                    </div>
                )
            }


export default citaspasadas;