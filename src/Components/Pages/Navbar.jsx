import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../Assests/Images/logo.png'
const Navbar = ({ type, headText }) => {
    return (
        <div>
            <section className={type}>

                <nav>
                    <img src={logo} />
                    <div className="nav-link" id="navLink">
                        <i className="far fa-times" onclick="hideMenu()"></i>
                        <ul>
                            <li>
                                <NavLink to="/home">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/aboutUs">About us</NavLink>

                            </li>
                            <li>
                                <NavLink to="/course">Course</NavLink>

                            </li>
                            <li>
                                <NavLink to="/gallery">Gallery</NavLink>

                            </li>
                            <li>
                                <NavLink to="/contact">Contact</NavLink>

                            </li>
                        </ul>

                    </div>
                    <i className="far fa-bars" onclick="showMenu()"></i>
                </nav>
                <div className="text-box">
                    <h1> {headText}</h1>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <a href="" className="hero-btn">visit for more info</a>

                </div>
            </section>
        </div >
    )
}

export default Navbar
