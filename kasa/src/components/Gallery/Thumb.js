import './Thumb.scss'
import {Link} from 'react-router-dom'

function Thumb({ id, title, cover}) {
	return (
		<Link to={`/logement/${id}`} className='card'>
			<div className='background'>
				<img className ='card-image'src={cover} alt={title}/>
				<h3 className ='card-title'>{title}</h3>
			</div>			
		</Link>

	)
}

export default Thumb