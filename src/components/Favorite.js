import React, {useEffect, useState } from 'react';
import { listarFavorities } from '../services/favoriteService';
import { getCurrentUser } from '../services/authService';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Favorite = () => {
  const navigate = useNavigate();
  const [favorities, setfavorities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const statusSession = await getCurrentUser()
      if(!statusSession){
        navigate('/');
      }
      try {
        const response = await listarFavorities()
        console.log(response)
        setfavorities(response.data);
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
      <h2 className='text-center'>LISTA DE FAVORITOS</h2>
    <table className="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Fecha</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {favorities.map((favorite) => (
          <tr key={favorite.id}>
            <td>{favorite.title}</td>
            <td>{favorite.date}</td>
            <td>
              <a href={favorite.url} target="_blank" rel="noopener noreferrer">{favorite.url}</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};


export default Favorite;
