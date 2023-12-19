import React from 'react'
import "./Card.css";



function Card({ data }) {
    const {
        image,
        follows,
        title,
        likes
    } = data

    return (
        <div className='card-container'>
            <div className='card-item-1'>
                <img
                    src={image}
                    alt='song'
                />
            </div>
            <div className='card-item-2 follows'>
                <p>{follows ? `${follows} Follows` : `${likes} Likes`}</p>
            </div>
            <div className='card-item-3 label'>
                <p>{title}</p>
            </div>
        </div>
    )
}

export default Card