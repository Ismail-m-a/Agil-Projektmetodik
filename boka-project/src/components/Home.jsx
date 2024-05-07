// Importerar nödvändiga komponenter, React-biblioteket
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Service from './Service';
import Boka from './Boka';
import '../css/Home.css';  
import Toast from 'react-bootstrap/Toast';

// Importerar 'useEffect' från React för att hantera sido-effekter.
import { useEffect } from 'react';

// Definierar en funktionskomponent 'Home'.
const Home = () => {
   // useEffect-hook för att hantera scrollning när en hash finns i URL:en.
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const section = document.getElementById(hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  // Komponenten returnerar JSX för rendering
  return (
    <>
      {/* Hero Section med Background video */}
      <div className="hero-section">
      <video autoPlay muted loop className="background-video">
          <source src="/images/cleaning11.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Container>
          <Row className="my-5">
            <Col md={12} className="text-center">
              <h1 className='lead'>Välkommen till StädaFint AB</h1>
              <p className="lead">
                Vi erbjuder en väldsklass service till våra kunder!
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        {/* återkommer */}
        {/* <Row>
          <Col md={12}>
            <Toast>
              <Toast.Header>
                <img src="kontor.jpg" className="rounded me-2" alt="" />
                <strong className="me-auto">Omdöme #1</strong>
                <small>11 mins ago</small>
              </Toast.Header>
              <Toast.Body>Har anlitat flera gånger och jag har aldrig blivit missnöjd, proffsigt och kunniga personal. Rekommendrar verkligen.</Toast.Body>
            </Toast>
          </Col>
        </Row> */}

        {/* Services Section */}
        <Row className="service.row my-5">
          <Col md={12}>
          <Service/>
         
          
          </Col>
        </Row>
        
      </Container>
    
    </>
  );
}

export default Home;
