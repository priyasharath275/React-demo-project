
import './index.css';
import { IMG_CDN_URL } from '../../../constants';
const Card = ({name,cuisines,avgRating,cloudinaryImageId,children}) => {

    return (
      
        <div className="card">
             
            <img id='img-id' src={IMG_CDN_URL+cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{cuisines?.join(',')}</h3>
            <p>{avgRating} Rating</p>
        {children}
        </div>

    );
}

export default Card