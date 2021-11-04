import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import cssClasses from './MainNavigation.module.css'


export default function MainNavigation() {
    return (
        <div className={cssClasses.header}>
            <h1 className="h1">My Webpage</h1>
            <Navbar expand="lg">
                <Navbar.Brand> <Link className={cssClasses.nav+" navbar-brand"} to="/">Home</Link></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link><Link className={cssClasses.nav+" navbar-brand"} to="/AllMovies">All Movies</Link></Nav.Link>
                    <Nav.Link><Link className={cssClasses.nav+" navbar-brand"} to="/NewMovie">New Movie</Link></Nav.Link>
                    <Nav.Link><Link className={cssClasses.nav+" navbar-brand"} to="/Favourites">Favourites</Link></Nav.Link>                    
                </Nav>
            </Navbar>
        </div>
    )
}
