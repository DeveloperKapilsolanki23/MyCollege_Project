import React from 'react'
import about from '../../Assests/Images/about.jpg'
import Footer from '../Footer/Footer'
import Navbar from './Navbar'
// import abouts from '../../Assests/abouts.jpg'

const AboutUs = () => {
    return (
        <div>
            <Navbar

                type="Abouts_wrap"
                headText="About Us"
            />
            <section className="about-us">

                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="about-col">
                            <h1> We are the world larget university</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                                leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                            <a href="" className="hero-btn next-btn">explore</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="about-col">
                            <img src={about} alt="" />
                        </div>
                    </div>

                </div>


            </section>

            <section className="footer">

                <h4> About us</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s. </p>

                <div className="icons">

                    <i className="fab fa-facebook-square"></i>
                    <i className="fab fa-twitter-square"></i>
                    <i className="fab fa-linkedin"></i>


                </div>

            </section>
            <Footer />
        </div>
    )
}

export default AboutUs
