import React from 'react'
import Weather from '../weather';
import WeatherSlider from '../weather-slider'
import "bootstrap/dist/css/bootstrap.css"


const Weathers = ({ weatherData, weatherDataDays }) => {
    return (
        <div >
            <Weather weatherDataDays={weatherDataDays} />
            <WeatherSlider weatherDataDays={weatherDataDays} />
        </div>
    )
}

export default Weathers
