import './Navbar.scss'
import {Link} from 'react-router-dom'
const Urlpath = window.location.pathname;


function Navbar() {
	return (
        <nav className = 'navbar'>
            <ul className = 'navbar-list'>
                <li className = {Urlpath ==='/' ? 'nav-link-active':'nav-link'}>
                    <Link to="/">Accueil</Link>
                </li>
                <li className = {Urlpath ==='/a-propos' ? 'nav-link-active':'nav-link'}>
                    <Link to="/a-propos">A propos</Link>
                </li>

            </ul>
            
        </nav>
    )
}

export default Navbar
