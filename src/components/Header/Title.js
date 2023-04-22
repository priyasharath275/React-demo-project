import React from 'react'
import logo from '../assets/images/foodVilla.jpg'

export function Title() {
    return (
        <a href='/'>
            <img id='img-logo' src={logo} alt="My-logo" />
        </a>
    )
}
