import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useRouter } from 'next/navigation'
import './style.css'

const Carta = ({ nombreprof, especialidad, fecha,curso } ) => {

  const router = useRouter();

  return (
    <Card className="carta" style={{ width: '20rem' }}>
        <Card.Header className="profesor">
            <Card.Img className= "foto" scr="nombre"></Card.Img>
            <div>
                <h5>{nombreprof}</h5>
                <span>{especialidad}</span>
            </div>
        </Card.Header>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{fecha}</Card.Title>
        <Card.Text>
          <p>{curso}</p>
          <Card.Link>Enlace Zoom</Card.Link>
          <br></br>
        </Card.Text>
        <div className="calificacion">
            <Button variant="outline-secondary" className='boton' onClick={() => router.push('./calificar')}>Calificar</Button>
        </div>

      </Card.Body>
    </Card>
  );
}

export default Carta;