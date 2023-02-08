import '../../styles/Gallery/Thumb.css'
import {Link} from 'react-router-dom'

function Thumb({ id, title, cover}) {
	return (
		<Link to={`/logement/${id}`}>
			<div className='card'>
				<img className ='card-image'src={cover} alt={title}/>
				<h2 className ='card-title'>{title}</h2>
			</div>
			
		</Link>

	)
}

export default Thumb