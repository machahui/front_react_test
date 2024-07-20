import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Ajusta esta URL según sea necesario


const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,  // Asegúrate de incluir esta línea
});


export const signup = (user) => {
  return axiosInstance.post(`${API_URL}/users`, user);
};

export const login = (user) => {
  return axiosInstance.post(`${API_URL}/auth/login`, user)
    .then(response => {
      localStorage.setItem('token', response.data.token);
      return response;
    });
};

export const logout = () => {
  const token = localStorage.getItem('token');
  return axiosInstance.delete(`${API_URL}/users/sign_out`, {
    headers: { Authorization: `Bearer ${token}` }
  }).then(response => {
    localStorage.removeItem('token');
    return response;
  });
};

export const getCurrentUser = () => {
  return localStorage.getItem('token');
};
