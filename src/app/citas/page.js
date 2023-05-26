'use client';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './citas.css'
import 'animate.css';
import { useState , useEffect } from 'react'

import { Form } from "react-bootstrap";

import React from 'react'

import { useRouter } from 'next/navigation';

export default function Dashboard() {
    const [usuarios, setUsuarios ] = useState([]);
    const [sesion , setSesion] = useState({});
    const router = useRouter();

    const [grado , setGrado] = useState('')

    const [cursoSeleccionado , setCursoSeleccionado] = useState([])

    const [imagen , setImagen] = useState(undefined)


    const setData = ( dataSesion ) => {
        setImagen(dataSesion.imagen || '')
        if(dataSesion.rol == 'docente'){
            setGrado(dataSesion.grado)
        }else{
            setGrado('')
        }
    }

    const submitForm = (event) => {
        event.preventDefault();

        if( usuarios.find(e => e.user == usuario && e.id != sesion.id ) ){
            alert( 'Ese usuario ya existe' );
            return;
        }
        if( password != '' ){
            if(usuarios.find(e => e.user == usuario && e.password == password ) ){
                if(new_password != check_password){
                    alert( 'Las contraseñas no coinciden' );
                    return;
                }
            }else{
                alert( 'Contraseña incorrecta, no se pudo actualizar' );
                return;
            }
        }

        var u = usuarios;
        var indexSesion = u.findIndex(object => {
            return object.id === sesion.id;
        })
        var pwd = password != '' ? new_password : sesion.password;
        var newSesion = { 
            id : sesion.id , user : usuario , password: pwd, 
            nombres : nombres , apellidos : apellidos , 
            imagen: imagen,
            rol : rol , doc_tipo : doc_tipo , doc_numero : doc_numero,
            universidad : universidad, carrera : carrera, cursos : cursoSeleccionado,
            titulo: titulo, presentacion : presentacion, grado : (rol == 'docente' ? grado : '')
        }
        u.splice(indexSesion, 1, newSesion)
        localStorage.setItem('usuarios', JSON.stringify(u))
        localStorage.setItem('sesion', JSON.stringify(newSesion))
        location.reload();
    }
    
    const setObjItems = () => {
        const items = JSON.parse(localStorage.getItem('usuarios'));
        if (items) {
            setUsuarios(items);
        }else{
            var users = [
                { id : 1 , user : 'admin' , password: 'admin', nombres : 'Admin' , rol : 'admin', apellidos : '' , doc_tipo : '' , doc_numero : '' ,
                    universidad : '', carrera : '', cursos : '',
                    titulo: '', presentacion : '', 
                },
                { id : 2 , user : 'profesor' , password: 'profesor', nombres : 'Profesor Pruebas' , rol : 'docente', apellidos : '' , doc_tipo : '' , doc_numero : '',
                    universidad : '', carrera : '', cursos : '',
                    titulo: '', presentacion : '', 
                },
                { id : 3 , user : 'alumno1' , password: 'alumno1', nombres : 'Alumno 1' , rol : 'alumno', apellidos : 'Pruebas' , doc_tipo : '' , doc_numero : '',
                    universidad : '', carrera : '', cursos : '',
                    titulo: '', presentacion : '', 
                },
                { id : 4 , user : 'alumno2' , password: 'alumno2', nombres : 'Alumno 2' , rol : 'alumno', apellidos : 'Pruebas' , doc_tipo : '' , doc_numero : '' ,
                    universidad : '', carrera : '', cursos : '',
                    titulo: '', presentacion : '', 
                },
                { id : 5 , user : 'alumno3' , password: 'alumno3', nombres : 'Alumno 3' , rol : 'alumno', apellidos : 'Pruebas' , doc_tipo : '' , doc_numero : '',
                    universidad : '', carrera : '', cursos : '',
                    titulo: '', presentacion : '', 
                }
            ]
            localStorage.setItem('usuarios', JSON.stringify(users))
        }
    }

    useEffect(() => {
        let sesionGuardada = localStorage.getItem("sesion");
        if(sesionGuardada == undefined){
            router.push('/')
        }
        var objSesion = JSON.parse(sesionGuardada);
        setSesion(objSesion);
        setData(objSesion);

        
    }, []);
   
    return (
        <div className={`${styles.contenedor} col`}>
            <div>
                <form method="post" onSubmit={submitForm}>
                    <div className="d-flex justify-content-between">
                        <h4> Citas </h4>
                        <button className="btn btn-primary" type="submit"> Guardar </button> 
                    </div>
                    <hr></hr>

                    <div>

                       <div className="Contenedor">
                            <div className="col-auto d-flex align-items-center px-3">
                                <div className={styles.cardLetra}> {sesion.rol  == 'docente' ? '-' : 'JS'}  
                                </div>
                            </div>

                            <div className="cont">
                                <h6>Profesor Juan López</h6>
                                <p>Magister en Ingeniería de Software</p>
                            </div>
                       </div>
                        
                        <div className="Contenedor">
                            
                            <div className="contenedorsito">
                                <div className="text-center m-auto" style={{maxWidth: '350px', maxHeight : '350px'}}>
                                        <img src={imagen != '' && imagen != undefined ? imagen :'https://placehold.jp/200x200.png' } style={{maxWidth: `250px` , maxHeight: `250px` , objectFit :'contain'}} ></img>
                                </div>
                            </div>
                                
                            <div className="contenedorsito">
                                <p className="text-justify">Fusce condimentum mauris diam, in vestibulum sapien molestie nec. Donec non velit quam. Sed non facilisis felis. Proin vel egestas lacus, cursus efficitur lorem. Morbi consectetur sem in turpis varius suscipit. Vestibulum porta urna eget sem tempor ornare et sit amet ipsum. Quisque bibendum nunc id molestie dapibus. Quisque sit amet metus risus. Fusce nec ipsum quis augue luctus sagittis id consectetur nisl. Nunc mattis ipsum ac mauris gravida, id blandit nunc suscipit. Maecenas pharetra, nisi a aliquet fringilla, nisi lectus imperdiet purus, a tincidunt lectus erat id dolor. Nam mauris orci, fringilla ut lacus sit amet, maximus sodales libero. Praesent nulla ipsum, ultrices eget blandit aliquet, tincidunt a justo. Donec quis maximus purus. Nulla lacinia gravida arcu sed placerat. Donec pulvinar risus sit amet est eleifend, quis fringilla dui aliquet.</p>
                            </div>
                            
                            <div className="contenedorsito">
                                <div>
                                    <h6>Correo electrónico</h6>
                                    <p>jlopez1949@ulima.edu.pe</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="Contenedor">
                                <h6>Cursos</h6>
                            </div >

                            <div className="Contenedor">
                                <div className="button">
                                    <button class="d-flex btn btn-primary" type="button" value="Input">Ingeniería de Software</button>
                                </div>

                                <div className="button">
                                    <button class=" btn btn-primary" type="button" value="Input">Programación Web</button>
                                </div>

                                <div className="button">
                                    <button class="btn btn-primary" type="button" value="Input">Programación de Videojuegos</button>
                                </div>

                                <div className="button">
                                    <button class="btn btn-primary" type="button" value="Input">Programación Orientada a Objetos</button>
                                </div> 
                            </div>
                        </div>
                </div>
                   
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    <div className="Contenedor2">
                        <h6>Fechas y horarios disponibles</h6>
                        <hr></hr>
                        <div>
                            <div className="row align-items-start">
                                <div className="col-md-7 row row-gap-3 pe-4">                                    

                                    <div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <Form.Group controlId="dob">
                                                    <Form.Label>Ingrese una Fecha</Form.Label>
                                                    <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                                                </Form.Group>
                                            </div>
                                        </div>
                                    </div>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <h6>Elija la hora de la asesoría</h6>
                                    
                                    <div className="Contenedor">
                                        <div className="button">
                                            <button class="btn btn-primary" type="button" value="Input">8:00</button>
                                        </div>

                                        <div className="button">
                                            <button class="btn btn-primary" type="button" value="Input">9:00</button>
                                        </div>

                                        <div className="button">
                                            <button class="btn btn-primary" type="button" value="Input">10:00</button>
                                        </div>
                                    </div>

                                    <div>
                                        <ul> 
                                            <li>Las sesiones son de 30 minutos </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
