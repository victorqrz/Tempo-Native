import axios from 'axios';
//https://api.hgbrasil.com/weather?key=b037621d&lat=-23.682&lon=-46.875

export const key = 'b037621d';

const api = axios.create({
  baseURL: 'https://api.hgbrasil.com'
})

export default api;