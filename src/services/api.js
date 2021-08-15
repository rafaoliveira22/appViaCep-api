//BIBLIOTECA AXIOS - REALIZA A CONEXÃO COM A API
import axios from 'axios';

/*
* URL BASE: https://viacep.com.br/ws/
* COMPLETA: https://viacep.com.br/ws/parametroCEP/json/
*/

const api = axios.create({
   baseURL: 'https://viacep.com.br/ws/'  
});

export default api;