
import './Hero_Module.css';
import photo from '../../assets/background image.jpg'


export default function Hero(){
    return(
        <div id="header">
            <div className="container">   
                <div id='hero'>
                <img src={photo} alt='backgroundPhoto' />
                </div>
            </div>
        </div>
    )
}