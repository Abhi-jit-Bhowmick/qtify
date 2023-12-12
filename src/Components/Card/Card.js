import React from 'react'
import "./Card.css";

function Card() {
    return (
        <div className='card-container'>
            <div className='card-content'>
                <div className='card-img'>
                    <img src='https://im.indiatimes.in/content/2023/Jun/watercolor-world-music-day-backg_6491e3a387e85.jpg' alt='song' />
                </div>
                <div className='card-followeres-container'>


                    <div className='card-followers'>
                        <p >100 Follows</p>
                    </div>
                </div>
            </div>
            <div className='card-lable'>
                <span>new songs this</span>
            </div>

        </div>
    )
}

export default Card