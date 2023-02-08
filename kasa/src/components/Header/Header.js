import '../../styles/Header/Header.css'
import Navbar from './Navbar'
import logo from '../../assets/logo.png'

function Header() {
	return <header className ='kasa-header'>
		<img src={logo} alt='Kasa' className='kasa-logo' />
		<Navbar />
		
				
	</header>
}

export default Header


