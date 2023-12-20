import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";

import "./Button.css"

function Button({ children }) {
    const [isClickFeedback, setIsClickedFeedback] = useState("false")
    return (

        <div div className='button-container' >
            <button
                className='button'
                onClick={() => { setIsClickedFeedback(true) }}
            >
                {children}
            </button>
            <div
                className={
                    `button-click-form 
                    button-click-form-${isClickFeedback ? "not-clicked" : "clicked"} `
                }
            >
                <div className='feedback-head'>
                    <p>Feedback</p>
                    <IoMdClose
                        className='feedback-form-close-icon'
                        onClick={() => setIsClickedFeedback(false)}
                    />
                </div>
                <form >
                    <input type='text' placeholder='Full Name' />
                    <input type='text' placeholder='Email ID' />
                    <input type='text' placeholder='Subject' />
                    <input className="description" type='text' placeholder='Description' />
                    <input className='feedback-button' type='button' value="Submit Feedback" />

                </form>
            </div>
        </div>

    )
}

export default Button


// < div className = 'button-container' >
//         <button className='button'>{children}</button>
//         <div className='button-click-form'>
//             <div className='feedback-head'>
//                 <h4>Feedback</h4>
//                 <p>ICON</p>
//             </div>
//             <form>
//                 <input type='text' placeholder='Full Name' />
//                 <input type='text' placeholder='Email ID' />
//                 <input type='text' placeholder='Subject' />
//                 <input className="description" type='text' placeholder='Description' />

//             </form>
//         </div>
//     </ >