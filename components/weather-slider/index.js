import './index.scss'


const WeatherSlider = ({ weatherDataDays }) => {
  // console.log('this is Weather Slider', weatherDataDays)
  // const { temp, humidity, weather, weatherDes} = weathers 
  //  const newtemp = (temp - 273.15).toFixed(1)
  // const date = new Date((weatherDataDays.list[0].dt) * 1000).getDay()
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  return (
    <div className="mainSlider">
      {
        weatherDataDays.list.map(
          (list) =>
            <div className='mainSliderDiv' key={list.dt}>
              <div>
                <h5 style={{ paddingLeft: '10px' }}>{days[new Date(list.dt * 1000).getDay()]}</h5>
                <img alt='' src={`http://openweathermap.org/img/wn/${list.weather[0].icon}@2x.png`} />
              </div>
              <div style={{ paddingLeft: '25px' }}>
                <h6>{((list.main.temp) - 273.5).toFixed(1)}&deg;C</h6>
                <h6>{list.main.humidity}</h6>
                <h6>{list.weather[0].main}</h6>
                <h6>{list.weather[0].description}</h6>
              </div>
            </div>
        )
      }
    </div>
  )
}
 
export default WeatherSlider
