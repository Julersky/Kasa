import './Housing.scss'
// import { useState } from 'react'
import {useParams} from 'react-router-dom'
// import Carousel from '../../components/Carousel/Carousel'
import housings from '../../datas/logements'
import Collapse from '../../components/Collapse/Collapse'
import Rating from '../../components/Rating/Rating'


function Housing() {
	const housing_id = useParams().id
	console.log(housing_id)

	const focusedHousing = housings.filter(housing => housing.id === housing_id) 
	
	console.log(focusedHousing)
	console.log(focusedHousing[0])


	return(
		<div className = 'housing-main'>
			<div className = 'housing-carousel'></div>
			<div className='housing-info'>
				<div className = 'housing-description'>
					<h1 className='housing-description-title'>{focusedHousing[0].title}</h1>
					<p className='housing-description-location'>{focusedHousing[0].location}</p>
					<section className='housing-description-tags'>
						{focusedHousing[0].tags.map((tag, index) => {
							return(
								<span className='tags'key={index}>{tag}</span>
							)

						})}
					</section>
				</div>
				<div className='housing-host'>
					<section className='housing-host-id'>
						<h1 className='housing-host-id-name'>{focusedHousing[0].host.name}</h1>
						<img className='housing-host-id-picture' src={focusedHousing[0].host.picture} alt='Propriétaire'/>
					</section>
					<section className='housing-host-stars'>
						<Rating hostRate={focusedHousing[0].rating}/>
					</section>
				</div>

			</div>
			<div className='housing-collapse'>
				<section>
				<Collapse title='Description' content={focusedHousing[0].description}/>
				</section>
				<section>
				<Collapse title='Équipements' content={focusedHousing[0].equipments}/>
				</section>

			</div>
		</div>


	)
}

export default Housing
