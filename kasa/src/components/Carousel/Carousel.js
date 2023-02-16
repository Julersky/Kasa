import './Carousel.scss'
import {Carousel} from 'react-responsive-carousel'
import data from '../../datas/test_slider'
// import housings from '../../datas/logements'

function Slider() {
	return (
		<Carousel>
			{data.map(slide =>(
			<div key = {slide.id}>
				<img src={slide.pictures} alt='slide'/>
			</div>

			))}
		</Carousel>
	)
};

export default Slider
 