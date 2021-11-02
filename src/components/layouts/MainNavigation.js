import React from 'react'
import { Link } from 'react-router-dom'

export default function MainNavigation() {
    return (
        <div>
            <h1>My Webpage</h1>
            <ul>
                <li><Link to="/">All Meetup</Link></li>
                <li><Link to="/NewMeetup">New Meetup</Link></li>
                <li><Link to="/Favourites">Favourite</Link></li>  
            </ul>          
        </div>
    )
}
