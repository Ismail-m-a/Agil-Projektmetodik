import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/Footer.css';

const Footer = () => {
    return (
        <>
            {/* Main Footer */}
            <Container fluid style={{ backgroundColor: '#f8f9fa', padding: '20px 0' }}>
                <Row>
                    <Col md={4} className="text-center text-md-left">
                        <h5 className='footer-header'>StädaFint AB</h5>
                        <p>Erbjuder högkvalitativa städtjänster och renoveringstjänster.</p>
                    </Col>
                    <Col md={4} className="text-center">
                        <h5>Quick Links</h5>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li><a href="/">Hem</a></li>
                            <li><a href="/about">Om oss</a></li>
                            <li><a href="/#services">Services</a></li>
                            <li><a href="/kontakt">Kontakta oss</a></li>
                        </ul>
                    </Col>
                    <Col md={4} className="text-center text-md-right">
                        <h5>Kontakta oss</h5>
                        <p>Email: info@stadafint.se</p>
                        <p>Phone: +46 10 123 4567</p>
                    </Col>
                </Row>
            </Container>

            {/* Subfooter */}
            <Container fluid style={{ backgroundColor: '#343a40', color: '#f5f5f5', padding: '10px 0', width: '100vw', margin: '0', maxWidth: '100%' }}>
                <Row>
                    <Col md={12} className="text-center">
                        <p>© {new Date().getFullYear()} StädaFint AB - All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Footer;
