import React, { useState } from 'react'
import "./Cardgrid.css"
import Card from '../Card/Card';
import Carosel from '../Carosel/Carosel';



function Cardgrid({ album_name, cardData, navId
    // disabled, handelClick, className 
}) {
    const [isCollapsed, setIsCollapsed] = useState(true)


    return (
        <div className='song-album-grid'>
            <div className='grid-navigation-headers'>
                <h3>{album_name}</h3>
                <h4
                    onClick={() => setIsCollapsed(!isCollapsed)}
                >
                    {isCollapsed ? "Show All" : "Collapsed"}
                </h4>
            </div>
            {/* <div className={`select-option  disabled-${disabled}`}>

                <option
                    onClick={(e) => handelClick(e)}
                    className={`genre-${className === "all" ? "all" : ""}`}
                    value="all">
                    All
                </option>
                <option
                    onClick={(e) => handelClick(e)}
                    className={`genre-${className === "rock" ? "rock" : ""}`}
                    value="rock"
                >
                    Rock
                </option>
                <option
                    onClick={(e) => handelClick(e)}
                    className={`genre-${className === "pop" ? "pop" : ""}`}
                    value="pop"

                >
                    Pop
                </option>
                <option
                    onClick={(e) => handelClick(e)}
                    className={`genre-${className === "jazz" ? "jazz" : ""}`}
                    value="jazz"
                >
                    Jazz
                </option>
                <option
                    onClick={(e) => handelClick(e)}
                    className={`genre-${className === "blues" ? "blues" : ""}`}
                    value="blues"
                >
                    Blues
                </option>

            </div> */}
            {
                isCollapsed ? (
                    <Carosel
                        data={cardData}
                        navId={navId}

                    />
                ) : (<div className='card-grid-container'>
                    {
                        cardData ? (
                            cardData.map((item) =>
                                <Card
                                    data={item}
                                    key={item.id}
                                />
                            )
                        ) : (
                            <div>No item shown</div>
                        )
                    }

                </div>)
            }


        </div>
    )
}

export default Cardgrid