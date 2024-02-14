import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../Assests/Images/logo.png'

const Footer = () => {
    return (
        <div>
            <section className="wrap-9">
                <footer className="footer_wrap">
                    <div className="container-fluid">
                        <div className="row" style={{ padding: "0 30px" }}>
                            <div className="col-md-5 col-12">
                                <a href=""> <img src={logo} alt="" /></a>
                                <p>Vega6 is a software company that endeavor on highly proficient, timely delivered and
                                    cost effective softwares.We understand that technology has to keep and be in
                                    complete consonance with the competitive strategies of our clients and businesses we
                                    service.
                                </p>
                                <a href="">READ MORE</a>
                            </div>
                            <div className="col-md-2 col-sm-6 col-12">
                                <h4>Sitemap</h4>
                                <ul>
                                    <li>
                                        <NavLink to="/home">Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/aboutus">About us</NavLink>

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
                            <div className="col-md-2 col-sm-6 col-12">
                                <h4>Company</h4>
                                <ul>
                                    <li>
                                        <NavLink to="/aboutus">About us</NavLink>
                                    </li>
                                    <li>
                                        <a href=""> Career </a>
                                    </li>
                                    <li>
                                        <NavLink to="/contact">Contact</NavLink>
                                    </li>
                                </ul>

                            </div>
                            <div className="col-md-3  col-12">
                                <h4>Reach out to us</h4>
                                <ul>
                                    <li><a className="" href="mailto:contact@vega6.com" target="_blank">contact@gmail.com</a></li>
                                    <li> <a className="" href="tel:01204554679">123456789</a></li>
                                </ul>
                                <div className="social-links">
                                    <a href=" "><i className="fab fa-facebook-f"></i></a>
                                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a href=" "><i className="fab fa-twitter"></i></a>
                                </div>
                            </div>

                        </div>

                    </div>
                </footer>
            </section>

        </div>
    )
}

export default Footer
