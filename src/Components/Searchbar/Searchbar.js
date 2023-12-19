import React, { useState } from 'react'
import "./Searchbar.css";
import { ReactComponent as SearchIcon } from './searchicon.svg'
const arr = [1, 2, 3,]




function Searchbar() {
    const [inputfield, setInputField] = useState("");

    const handleInputChange = (e) => {
        const input = e.target.value;
        setInputField(input)
    }

    return (
        <div className="searchbar-container">
            <form className='form' >
                <input
                    placeholder='Search a album of your choice'
                    onChange={(e) => handleInputChange(e)}
                />
                <button>
                    <SearchIcon />
                </button>
            </form>
            <div
                className={` ${inputfield ? "searchbar-suggestion-container" : "not-display"}`}
            >
                {
                    arr.map(item => (
                        <Menu />
                    ))
                }
            </div>
        </div>
    )
}


const Menu = () => {

    return (
        <div className='searchbar-suggestion-flex-container'>
            <div className='suggestion-image'>
                <img src='https://images.pexels.com/photos/462331/pexels-photo-462331.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800' alt='name' />
            </div>
            <div className='suggestion-text'>
                <p>Album Name</p>
                <p> Somethis about tge album..</p>
            </div>
            <div className='suggestion-follows'>
                100 Follows
            </div>
        </div>
    )
}

export default Searchbar