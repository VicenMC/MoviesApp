import React from 'react';
import { NavLink } from 'react-router-dom';


import './Navbar.css';

export default function NavBar() {
    return (
        <header className="navbar">
            <div>
            
            </div>
            <nav>
            <div className="mainContainer">
                <ul className="list">
                    <li className="list-item">
                    <NavLink className="linkTo" exact to="/" >Home</NavLink>
                    </li>
                    <li className="list-item">
                    <NavLink className="linkTo" to="/favs" >Favorites</NavLink>
                    </li>
                    <li className="list-item">
                    <a className="linkTo" href="https://github.com/VicenMC" target="_blank">My Github</a>
                    </li>
                </ul>
                </div>
            </nav>
        </header>
    )
}