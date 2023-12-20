import React from 'react'
import "./Navbar.css"
import Searchbar from '../Searchbar/Searchbar'
import Button from '../Button/Button'

function Navbar({ filterMenuSuggestionArrayFunction }) {
    return (
        <div className='navbar'>
            <img src='./logo.png' alt='logo' width="67px" height="34px" />
            <Searchbar
                filterMenuSuggestionArrayFunction={filterMenuSuggestionArrayFunction}
            />
            <Button >{"Give Feedback"}</Button>
        </div>
    )
}

export default Navbar;