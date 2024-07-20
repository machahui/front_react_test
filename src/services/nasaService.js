import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Ajusta esta URL según sea necesario


const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,  // Asegúrate de incluir esta línea
});


export const apod = () => {
  const token = localStorage.getItem('token');
  return axiosInstance.get(`${API_URL}/nasa/apod`,{
    headers: { Authorization: `Bearer ${token}` }
  });
};

export const asteroid = () => {
  const token = localStorage.getItem('token');
  return axiosInstance.get(`${API_URL}/nasa/asteroid`,{
    headers: { Authorization: `Bearer ${token}` }
  });
};