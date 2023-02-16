import './Banner.scss'
const Urlpath = window.location.pathname;

function Banner() {
    if(Urlpath ==='/'){
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

