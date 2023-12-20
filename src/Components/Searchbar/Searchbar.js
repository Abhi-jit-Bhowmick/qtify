import React, { useState } from 'react'
import "./Searchbar.css";
import { ReactComponent as SearchIcon } from './searchicon.svg'




function Searchbar({ filterMenuSuggestionArrayFunction }) {
    const [inputfield, setInputField] = useState("");
    const [menu, setmenu] = useState([]);

    const handleInputChange = (e) => {
        const input = e.target.value;
        setInputField(input)
        setmenu(filterMenuSuggestionArrayFunction(inputfield))
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
                    menu?.map(item => (
                        <Menu data={item} />
                    ))
                }
            </div>
        </div>
    )
}


const Menu = ({ data }) => {
    const {
        image,
        follows,
        title,
        description,
        songs
    } = data

    return (
        console.log(data),
        <div className='searchbar-suggestion-flex-container'>
            <div className='suggestion-image'>
                <img src={image} alt={title} />
            </div>
            <div className='suggestion-text'>
                <p>{title}</p>
                <p className='description'>{`${description.slice(0, 50)}...`}</p>
            </div>
            <div className='suggestion-follows'>
                {follows} Follows
            </div>
        </div>
    )
}

export default Searchbar