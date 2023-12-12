import React from 'react'
import "./Herosection.css"

function Herosection() {
    return (
        <div className='hs-container'>
            <div className='hs-heading-text'>
                <p>100 Thousand Songs, ad-free</p>
                <p>Over thousands podcast episodes</p>
            </div>
            <div className='hs-img-frame'>
                <img src='hero.png' alt='hero_image' />
            </div>

        </div>
    )
}

export default Herosection