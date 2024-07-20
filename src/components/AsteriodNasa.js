import React, {useEffect, useState } from 'react';
import { getCurrentUser, login } from '../services/authService';
import { asteroid } from '../services/nasaService';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const AsteroidNasa = () => {
  const navigate = useNavigate();
  const [asteroids, setAsteroids] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const statusSession = await getCurrentUser()
      if(!statusSession){
        navigate('/');
      }
      try {
        const response = await asteroid()
        console.log(response)
        setAsteroids(response.data);
      } catch (err) {
        console.log(err)
      } finally {
        console.log('end process')
      }
    };

    fetchData();
  }, []);


  return (
    <div className="container">
      <h2 className='text-center'>ASTEROIDES CERCANOS A LA TIERRA</h2>
    <table className="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Fecha de Aproximación</th>
          <th>Tamaño estimado mínimo(metros)</th>
          <th>Tamaño estimado máximo(metros)</th>
        </tr>
      </thead>
      <tbody>
        {asteroids.map((asteroid) => (
          <tr key={asteroid.id}>
            <td>{asteroid.name}</td>
            <td>{asteroid.date}</td>
            <td>{asteroid.estimated_diameter.estimated_diameter_min}</td>
            <td>{asteroid.estimated_diameter.estimated_diameter_max}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};


export default AsteroidNasa;
