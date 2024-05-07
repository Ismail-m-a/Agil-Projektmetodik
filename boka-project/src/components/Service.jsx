// Importerar React-biblioteket, andra nödvädiga paket och komponenter.
import React from 'react';
import serviceData from './Service.json';
import { Card, Button } from 'react-bootstrap';
import '../css/Service.css';


// Importerar bildfiler från en lokal folder (images).
import flyttImage from '../../images/flyttstad.jpeg';
import storstadImage from '../../images/storstadning.jpeg';
import windowsImage from '../../images/windows.jpg';
import kontorImage from '../../images/kontorstad.jpg';
import hemstadImage from '../../images/hemstad2.jpg';
import storalokalerImage from '../../images/kontor2.jpg';

// Skapar ett objekt för att associera bildfilnamn med deras motsvarande importerade bilder.
const images = {
    'flyttstad.jpeg': flyttImage,
    'storstadning.jpeg': storstadImage,
    'windows.jpg': windowsImage,
    'kontorstad.jpg': kontorImage,
    'hemstad2.jpg': hemstadImage,
    'kontor2.jpg': storalokalerImage
};

// Definierar en funktionskomponent med namnet 'Service'.
const Service = () => {
    
    // Komponenten returnerar JSX för rendering.
  return (
    <>
        <div className="header">
            <h2 id='services'>Vi erbjuder olika städtjänster</h2>
        </div>
        <div className="content-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: '20px' }}>
            {serviceData.map((service) => (
                <Card className="service-card" key={service.id} style={{ width: '30%', marginBottom: '20px' }}>
                    <Card.Img variant="top" src={images[service.image]} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                    <Card.Body>
                        <Card.Title>{service.name}</Card.Title>
                        <Card.Text>
                            {service.description}
                            <br />
                            Pris fr: {service.price}
                        </Card.Text>
                        {/* <Link to={`/boka/${service.id}`}>
                            <Button variant="primary">Boka tjänst</Button>
                        </Link> */}
                    </Card.Body>
                </Card>
            ))}
        </div>
    </>
  );
}

export default Service;
