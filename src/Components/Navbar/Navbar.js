import React from 'react'
import "./Navbar.css"
import Searchbar from '../Searchbar/Searchbar'
import Button from '../Button/Button'

function Navbar() {
    return (
        <div className='navbar'>
            <h2>LOGO</h2>
            <Searchbar />
            <Button />
        </div>
    )
}

export default Navbar