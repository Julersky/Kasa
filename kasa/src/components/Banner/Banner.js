import './Banner.scss'
import {useLocation} from 'react-router-dom'



function Banner() {
    const location = useLocation();
    if(location.pathname ==='/'){
        return (
            <div className ='banner'>
                <h2 className='banner-text'>Chez vous, partout et ailleurs</h2>
            </div>
            
        )

    }else{
        return(
            <div className ='banner banner-about'>  
            </div>
        )
    }
}

export default Banner

