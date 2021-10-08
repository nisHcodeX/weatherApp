import "bootstrap/dist/css/bootstrap.css"
import WeatherSlider from "./WeatherSlider";


const Weather = ({weatherData,weatherDataDays }) => {
    // console.log('weather weatherDataDays', weatherDataDays)
    const { temp, humidity, icon, weather, weatherDes, cityName} = weatherData
    const newtemp = (temp - 273.15).toFixed(1)
    const link = `http://openweathermap.org/img/wn/${icon}@2x.png`
    return (
        <div>
        <div className="weatherBar">
            <div className="weatherBarStyle">
                <div className="weatherBar">
                <div>
                    <h2>{cityName}</h2>
                    <div>
                        <img alt='' src={link} />
                    </div>
                    <div >
                        <h1>{newtemp}&deg;C</h1>
                    </div>
                    </div>
                <div style={{padding : '20px', margin : '20px'}}>
                    <h5>Humidity : {humidity} </h5>
                    <h5>Status:  {weather} </h5>
                    <h5>Description :</h5>
                    <h6 style={{paddingTop : '5px', paddingLeft : '5px'}}> {weatherDes}</h6>
                </div>
                </div>
            </div>
        </div>
        <WeatherSlider weathers={weatherData} link={link} weatherDataDays={weatherDataDays}/>
    </div>
    )
    
}

export default Weather
