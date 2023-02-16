import './Header.scss'
import Navbar from './Navbar'
import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'

function Header() {
	return <header className ='kasa-header'>
		<Link to ="/">
			<img src={logo} alt='Kasa' className='kasa-logo' />
		</Link>
		<Navbar />
		
				
	</header>
}

export default Header


