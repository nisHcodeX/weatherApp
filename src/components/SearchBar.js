import "bootstrap/dist/css/bootstrap.css"
import { useState } from 'react'
import {BsFillCaretRightFill} from 'react-icons/bs'


const SearchBar = ({ clearweatherData,getWeatherUpdates }) => {
    const [city, setCity] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()

        if (!city) {
            alert('Pleace enter a city')
            return
        }
        getWeatherUpdates(city)
        setCity('')
    }
    return (
        <div className="searchBarMain">
        <form onSubmit={onSubmit} className="serachBar serachBarRes">
            <input type="text"
            className="serachBarInput"
                placeholder="     Enter Your City"
                value={city}
                onChange={(e) => setCity(e.target.value)} />
                <button className="serachBarInputGo btn btn-primary"><h5> Go  <BsFillCaretRightFill/> </h5></button>
        </form>
        </div>
    )
}

export default SearchBar
