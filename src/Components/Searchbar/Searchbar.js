import React from 'react'
import "./Searchbar.css";
import { ReactComponent as SearchIcon } from './searchicon.svg'

function Searchbar() {
    return (
        <form className='form'>
            <input
                placeholder='Search a album of your choice'
            />
            <button>
                <SearchIcon />
            </button>
        </form>
    )
}

export default Searchbar