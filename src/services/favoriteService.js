import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Ajusta esta URL según sea necesario


const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,  // Asegúrate de incluir esta línea
});

export const createFavorite = (params) => {
  const token = localStorage.getItem('token');
  return axiosInstance.post(`${API_URL}/favorite`, params,{
    headers: { Authorization: `Bearer ${token}` }
  })
    .then(response => {
      return response;
    });
};

export const listarFavorities = () => {
  const token = localStorage.getItem('token');
  return axiosInstance.get(`${API_URL}/favorite`,{
    headers: { Authorization: `Bearer ${token}` }
  });
};