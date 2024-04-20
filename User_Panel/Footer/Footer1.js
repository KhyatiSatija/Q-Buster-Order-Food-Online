import React from 'react'
import veges from '../../ASSETS/veges.png'
import './Footer1.css'
const Footer1 = () => {
    return (
        <div className='footer1'>
            <div className='left'>
                <img src={veges} alt='veges' />
            </div>
            <div className='right'>
                <h1>Fresh Food & Fresh Food.
                </h1>
                <p>We order Food anytime & deliver fresh.
                We order Food anytime & deliver fresh.
                </p>
            </div>
        </div>
    )
}

export default Footer1