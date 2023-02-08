import '../../styles/Gallery/Gallery.css'
import Thumb from '../Gallery/Thumb'
import housings from '../../datas/logements'

function Gallery() {
	return (
	<section className='gallery'>
		<ul className='kasa-housing-list'>
		{housings.map(housing => (
		<Thumb
			key={housing.id}
			id={housing.id}
			cover={housing.cover}
			title={housing.title}
			/>
		))}
		</ul>

	</section>	

	)
}

export default Gallery

