import React from 'react'
import './index.css';
import { IMG_CDN_URL } from '../../constants';
export default function Cartcards({name,imageId,category,description
    ,}) {
  return (
    <div>
        
        <div className="card">
             
            <img id='img-id' src={IMG_CDN_URL+imageId
}/>
            <h2>{name}</h2>
            <div>{category}</div>
            <p>{description}</p>
        </div>
    </div>
  )
}
