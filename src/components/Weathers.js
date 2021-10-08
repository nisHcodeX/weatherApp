import React from 'react'
import Weather from './Weather';
import "bootstrap/dist/css/bootstrap.css"


const Weathers = ({weatherData,weatherDataDays}) => {
    return (
        <div >
            <Weather weatherData={weatherData} weatherDataDays={weatherDataDays} />
        </div>
    )
}

export default Weathers
