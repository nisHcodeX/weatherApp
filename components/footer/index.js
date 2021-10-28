import {Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css"
import './index.scss'

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <h6>Weather App</h6>
                <Link to="/contactUs"><button className="btn btn-primary mb-2">contact Us</button></Link>
                {/* <button className="btn btn-primary mb-1">Cuntact Us</button> */}
            </div>
        </div>
    )
}

export default Footer
