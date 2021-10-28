import "bootstrap/dist/css/bootstrap.css"
import { useState } from 'react'
import { BsFillCaretRightFill } from 'react-icons/bs'
import './index.scss'

const SearchBar = ({ clearweatherData, getWeatherUpdates }) => {
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
        <div className= "mt-3 d-flex justify-content-center 2fr">
            <form onSubmit={onSubmit}>
            <div className="input-group p-3">
                    <input className="form-control" type="text" 
                    placeholder="Enter Your City" 
                    value={city}
                    onChange={(e) => setCity(e.target.value)} 
                    />
                    <div className="input-group-append">
                        <button className="input-group-text">
                            Go<BsFillCaretRightFill />
                        </button>
                    </div>
                </div>

            </form>
       </div>
    )
}

export default SearchBar
