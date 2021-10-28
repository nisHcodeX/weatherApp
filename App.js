import { useState} from 'react'
import { weatherApi } from './data/WeatherApi'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css"

import './App.scss';
import Navbar from './components/navbar';
import SearchBar from './components/searchbar';
import Weathers from './components/weathers';
import Footer from './components/footer';
import ContactUs from './components/contactUs';


function App() {
  const [showWeather, setShowWeather] = useState(false)
  // const [weatherData, setWeatherData] = useState([])
  const [weatherDataDays, setWeatherDataDays] = useState([])

  const getWeatherUpdates = async (city) => {
    try {
      const data = await weatherApi(city)
      setWeatherDataDays(data)
      setShowWeather(!showWeather)
    }
    catch (error) { throw error }
  }

  return (
    <Router>
    <div style={{ alignItems: 'center' }}>
      <Navbar />
      <Route path='/' exact>
      <SearchBar getWeatherUpdates={getWeatherUpdates} />
      {showWeather && <Weathers weatherDataDays={weatherDataDays} />}
      </Route>
       <Route path='/contactUs' component={ContactUs}/>
       <Footer />
    </div>
    </Router>
  );
}

export default App;
