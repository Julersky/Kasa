import '../../styles/Header/Navbar.css'
import {Link} from 'react-router-dom'


function Navbar() {
	return (
        <nav className = 'navbar'>
            <ul className = 'navbar-list'>
                <li className = 'nav-link'>
                    <Link to="/">Accueil</Link>
                </li>
                <li className = 'nav-link'>
                    <Link to="/a-propos">A propos</Link>
                </li>

            </ul>
            
        </nav>
    )
}

export default Navbar
