import axios from 'axios'
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'
const api_key = import.meta.env.VITE_WX_KEY

const get = name => {
  const request = axios.get(`${baseUrl}?q=${name}&APPID=${api_key}&units=metric`)
  return request.then(response => response.data)
}


export default { get }


