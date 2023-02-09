import '../../styles/Header/Header.css'
import '../../styles/About/About.css'
import Navbar from '../../components/Header/Navbar'
import logo from '../../assets/logo.png'

function About() {
	return <header className ='kasa-header'>
		<img src={logo} alt='Kasa' className='kasa-logo' />
		<Navbar />
		
				
	</header>
}

export default About
