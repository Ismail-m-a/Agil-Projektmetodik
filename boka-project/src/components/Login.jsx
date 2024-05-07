import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Card, Container } from 'react-bootstrap';
import '../css/Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email, 'Password:', password);
        // authentication här:
        navigate('/'); // Navigate till hem efter lyckad inlogning. obs inte färdig (återkommer)
    };

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <Card style={{ width: '20rem', boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
                <Card.Body>
                    <Card.Title className="text-center mb-4">Login</Card.Title>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100">
                            Log In
                        </Button>
                    </Form>
                    <div className="mt-3 text-center">
                        Don't have an account? <Link to="/register" onClick={() => console.log('Link to register clicked')}>Register here</Link>

                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Login;
