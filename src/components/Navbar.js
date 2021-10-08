import { BsFillCloudFill } from 'react-icons/bs'

const Navbar = () => {
    return (
        <nav className="navShadow">
            <div style={{ display: 'flex' }}>
                <h3> <BsFillCloudFill /> Weather App</h3>
            </div>
        </nav>
    )
}

export default Navbar
