import React from 'react'
import "./Card.css";
import Tooltip from '@mui/material/Tooltip';



function Card({ data }) {
    const {
        image,
        follows,
        title,
        likes,
        songs
    } = data

    return (
        console.log("FROM CARD::", data),
        < Tooltip
            title={`${songs ? songs.length : ""} Songs`}
            arrow
            placement="top"
            disableHoverListener={songs ? false : true}
        >
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
        </Tooltip >
    )
}

export default Card