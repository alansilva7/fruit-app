import axios from 'axios'

const api = axios.create({
  baseURL: 'https://www.fruityvice.com/api',
  headers: {
    'Access-Control-Allow-Origin': '*',
    Connection: 'keep-alive',
  }
})

export default api