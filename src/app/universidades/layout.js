'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import styles from '../page.module.css'
import Sidebar from '../../components/sidebar'
import { useRouter } from 'next/navigation';
import { useState , useEffect } from 'react'

export default function RootLayout({ children }) {
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
    const salir = () =>{
        localStorage.removeItem('sesion')
        setSesion({})
        router.push('/');
    }
    return (
        <div>
         
            <div className={`${styles.fullMain} d-flex`}>
                <Sidebar name="universidades" />
                {children}
            </div>


















            
        </div>
    )
}
