import "bootstrap/dist/css/bootstrap.css"
import './index.scss'

const Weather = ({ weatherDataDays }) => {
    // console.log('weather weatherDataDays', weatherDataDays)
    const { icon } = weatherDataDays.list[0].weather[0]
    const { temp } = weatherDataDays.list[0].main
    const { humidity } = weatherDataDays.list[0].main
    const { description } = weatherDataDays.list[0].weather[0]
    const status = weatherDataDays.list[0].weather[0].main

    const newTemp = (temp - 273.15).toFixed(1)
    const link = `http://openweathermap.org/img/wn/${icon}@2x.png`
    // console.log('this is weather days', weatherDataDays)
    return (
        <div>
            <div className="weatherBar">
                <div className="weatherBarStyle">
                    <div className="weatherBar">
                        <div>
                            <h2>{weatherDataDays.city.name}</h2>
                            <div>
                                <img alt='' src={link} />
                            </div>
                            <div >
                                <h1>{newTemp}&deg;C</h1>
                            </div>
                        </div>
                        <div style={{ padding: '20px', margin: '20px' }}>
                            <h5>Humidity : {humidity} </h5>
                            <h5>Status:  {status} </h5>
                            <h5>Description : </h5>
                            <h6 style={{ paddingTop: '5px', paddingLeft: '5px' }}> {description}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Weather
