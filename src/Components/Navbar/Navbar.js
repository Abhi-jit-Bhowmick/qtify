import React from 'react'
import "./Navbar.css"
import Searchbar from '../Searchbar/Searchbar'
import Button from '../Button/Button'

function Navbar() {
    return (
        <div className='navbar'>
            <img src='./logo.png' alt='logo' width="67px" height="34px" />
            <Searchbar />
            <Button >{"Give Feedback"}</Button>
        </div>
    )
}

export default Navbar