import { useState, useEffect } from 'react'
import { weatherApi } from './data/WeatherApi'
import "bootstrap/dist/css/bootstrap.css"

import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Weathers from './components/Weathers';
import Footer from './components/Footer';


function App() {
  const [showWeather, setShowWeather] = useState(false)
  const [weatherData, setWeatherData] = useState([])
  const [weatherDataDays, setWeatherDataDays] = useState([])

  const getWeatherUpdates = async (city) => {
    try {
      const data = await weatherApi(city)
      const getKey = data.list[0].dt_txt
      const keyNew = new Date((data.list[0].dt) * 1000).getDate()
      console.log(keyNew)
      const newList = data.list.filter((list) => list.dt_txt === getKey)
      const { temp } = newList[0].main
      const { humidity } = newList[0].main
      const weather = newList[0].weather[0].main
      const weatherDes = newList[0].weather[0].description
      const icon = newList[0].weather[0].icon
      const cityName = data.city.name
      // const countryCode = data.city.country
      setWeatherData({ temp, humidity, weather, weatherDes, icon, cityName })
      setWeatherDataDays(data)
      setShowWeather(!showWeather)
    }
    catch (error) { throw error }
  }
  useEffect(() => {
    getWeatherUpdates()
  }, [])
  return (
    <div style={{ alignItems: 'center' }}>
      <Navbar />
      <SearchBar getWeatherUpdates={getWeatherUpdates} />
      {showWeather && <Weathers weatherData={weatherData} weatherDataDays={weatherDataDays} />}
      {showWeather && <Footer />}
    </div>
  );
}

export default App;
