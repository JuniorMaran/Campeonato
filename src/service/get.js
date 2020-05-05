import axios from 'axios';

const key = 'live_8afb8332da116a3118c0a022a4baf1';

const getCampeonato = axios.create({
  url: 'https://api.api-futebol.com.br/v1/campeonatos',
  headers: {
      'Authorization': `Bearer ${key}`
  }
});

export default getCampeonato;

