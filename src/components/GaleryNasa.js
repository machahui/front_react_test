import React, {useEffect, useState } from 'react';
import { apod } from '../services/nasaService';
import { createFavorite } from '../services/favoriteService';
import { getCurrentUser } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import AsteroidNasa from './AsteriodNasa';
import DynamicButton from './DynamicButton';

const GaleryNasa = (onClick) => {
  const navigate = useNavigate();
  const [galeries, setGaleries] = useState([]);
  const [dataOut, setDataOut] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      const statusSession = await getCurrentUser()
      if(!statusSession){
        navigate('/');
      }
      try {
        const response = await apod()
        console.log(response)
        setGaleries(response.data);
      } catch (err) {
        console.log(err)
      } finally {
        console.log('end process')
      }
    };

    fetchData();
  }, []);

  const handleButtonClick = async (params) => {
    console.log('Botón clickeado con parámetro:', params);
    try {
      let data = {
        user_id: 1,
        date: params.date,
        title: params.title,
        url: params.url
      }
      const response = await createFavorite(data)
      console.log(response)
    } catch (err) {
      console.log(err)
    } finally {
      console.log('end process')
    }
  };

  const handleButtonClick2 = async (params) => {
    navigate('/favorite');
  };

  return (
    <div className="container">
    <h2 className='text-center'>GALERIA NASA</h2>
    <div className='d-flex justify-content-end'>
      <DynamicButton
              text='Ir a favoritos'
              onClick={handleButtonClick2}
              param={false} 
              className='btn btn-primary'
            />
            <br/>
    </div>
    <div className="row">
      {galeries.map((galery, index) => (
        <div className="col-md-4" key={index}>
          <div className="card mb-4 shadow-sm">
            <img src={galery.url} className="card-img-top" alt={`Foto ${index + 1}`} />
            <div className="card-body">
            <DynamicButton
              text='Agregar a Favoritos'
              onClick={handleButtonClick}
              param={galery} // Puedes pasar cualquier parámetro aquí
            />
              <p className="card-text">{galery.explanation}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    <AsteroidNasa></AsteroidNasa>

  </div>
  );
};


export default GaleryNasa;
