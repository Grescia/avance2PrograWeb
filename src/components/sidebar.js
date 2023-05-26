'use client';
import styles from '../app/page.module.css'
import Link from 'next/link';
import { useState , useEffect } from 'react'
import { useRouter } from 'next/navigation';

export default function Sidebar(props) {
    const router = useRouter();
    const [usuarios, setUsuarios ] = useState([]);
    const [sesion , setSesion] = useState({});
    useEffect(() => {
        let savedItem = localStorage.getItem("sesion");
        if(savedItem == undefined){
            router.push('/')
        }
        setSesion(JSON.parse(savedItem))
    }, [])
    return (
        <div>
            <div className={`${styles.navBar} collapse show collapse-horizontal shadow-sm `} id="collapseWidthExample">
                <ul className="list-group list-group-flush">
                    <Link href="/dashboard"
                        className={props.name == 'dashboard' ? 'list-group-item list-group-item-action active' : 'list-group-item list-group-item-action'} 
                    >
                        Principal
                    </Link>
                    <Link href="/perfil"
                    className={props.name == 'perfil' ? 'list-group-item list-group-item-action active' : 'list-group-item list-group-item-action'} 
                    >
                        Perfil
                    </Link>
                    { (sesion.rol == 'docente' || sesion.rol == 'admin')  &&
                        <Link href="/horario"
                            className={props.name == 'horario' ? 'list-group-item list-group-item-action active' : 'list-group-item list-group-item-action'} 
                        >
                            Horarios
                        </Link>
                    }
                    { (sesion.rol == 'alumno' || sesion.rol == 'admin')  &&
                        <Link href="/recordatorio"
                            className={props.name == 'citas' ? 'list-group-item list-group-item-action active' : 'list-group-item list-group-item-action'} 
                        >
                            Citas
                        </Link>
                    }
                    { sesion.rol == 'alumno'  &&
                        <div>
                            <Link href="/universidades"
                                className={props.name == 'universidades' ? 'list-group-item list-group-item-action active' : 'list-group-item list-group-item-action'} 
                            >
                                Universidades
                            </Link>
                            <Link href="/cursos"
                                className={props.name == 'cursos' ? 'list-group-item list-group-item-action active' : 'list-group-item list-group-item-action'} 
                            >
                                Cursos
                            </Link>
                            <Link href="/carreras"
                                className={props.name == 'carreras' ? 'list-group-item list-group-item-action active' : 'list-group-item list-group-item-action'} 
                            >
                                Carreras
                            </Link>
                        </div>
                    }
                </ul>
            </div>
        </div>
    )
}