import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../css/Kontakt.css'; 

const Kontakt = () => {
  return (
    <>
      <Container id='kontakt-header' className="kontakt-container">
        <Row className="justify-content-md-center">
          <Col md={12}>
            <h3 className="header-title" >Kontakt oss</h3>
          </Col>
          <Col md={6} className="kontakt-info">
            <p>
              Vill du veta mer om våra tjänster eller har andra frågor? <br /> 
              Fyll i formuläret eller kontakta oss direkt via telefon eller e-post.
            </p>
            {/* plats för mer */}
          </Col>
          <Col md={6}>
            <Form className="kontakt-form">
              <Form.Group className="mb-3">
                <Form.Label>Namn</Form.Label>
                <Form.Control type="text" placeholder="Ange ditt namn" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>E-post</Form.Label>
                <Form.Control type="email" placeholder="Ange din e-post" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Telefon</Form.Label>
                <Form.Control type="text" placeholder="Ange ditt telefonnummer" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Meddelande</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Skriv ditt meddelande här" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Skicka Meddelande
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Kontakt;
