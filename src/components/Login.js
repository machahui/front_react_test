import React, { useState } from 'react';
import { login } from '../services/authService';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [validateForm, setValidateForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData)
      const response = await login(formData);
      console.log(response.data);
      navigate('/galery');
    } catch (error) {
      setValidateForm(true)
      console.error(error);
    }
    console.log('Form data submitted:', formData);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <br></br>
        <Col md={4}>
          <h1 className="text-center">Iniciar Sesión</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese su email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese su contraseña"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>
           
            <div>
              {validateForm?(

                <label className="text-danger">Error de usuario o contraseña</label>
              ):(
                <h1></h1>
              )}
            </div>

            <Button variant="primary" type="submit" className="mt-3">
              Iniciar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};


export default Login;
