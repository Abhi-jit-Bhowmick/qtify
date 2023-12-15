import React from 'react'
import "./Cardgrid.css"
import Card from '../Card/Card';


function Cardgrid({ album_name, cardData }) {
    return (
        <div className='song-album-grid'>
            <div>
                <h3>{album_name}</h3>
            </div>
            <div className='card-grid-container'>
                {
                    cardData ? (
                        cardData.map((item) =>
                            <Card data={item} />
                        )
                    ) : (
                        ""
                    )
                }

            </div>

        </div>
    )
}

export default Cardgrid