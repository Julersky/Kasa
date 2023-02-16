import '../../styles/dist/main.scss'
import './Rating.scss'
import fullStar from '../../assets/etoile-pleine.png'
import emptyStar from '../../assets/etoile-vide.png'


const Rating = ({hostRate}) => {
    //Construction d'un Array de 5 éléments qu'on rempli avec les étoiles
    const fullStars = Array(5).fill(<img src={fullStar} alt='Full star' className='redStar'/>)
    const emptyStars = Array(5).fill(<img src={emptyStar} alt='Empty Star' className='greyStar'/>)
    return (
            <div className='stars-container'>
                {fullStars.slice(5-hostRate).map((fullStar, index) => {
                return (<span className ='stars' key={index}>{fullStar}</span>)
                })}
                {emptyStars.slice(hostRate).map((emptyStar, index) => {
                return (<span className ='stars' key={index}>{emptyStar}</span>)
                })}
            </div>
    );
};

export default Rating;