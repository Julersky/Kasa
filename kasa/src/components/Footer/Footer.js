import '../../styles/Footer/Footer.css'
import logo_footer from '../../assets/logo_footer.png'


function Footer() {
	return (
        <footer className = 'footer'>
            <div className ='footer-items'>
                <img src={logo_footer} alt='Kasa' className='footer-kasa-logo' />
                <p className = 'footer-paragraph'>© 2020 Kasa. All rights reserved</p>
            </div>

        </footer>
    )
    
}

export default Footer


