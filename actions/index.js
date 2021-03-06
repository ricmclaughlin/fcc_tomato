export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}`
  const request = axios.get(url)
  
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}