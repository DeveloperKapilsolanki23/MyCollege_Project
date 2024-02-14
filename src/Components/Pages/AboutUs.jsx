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
            <section class="about-us">

                <div class="row">
                    <div class="about-col">
                        <h1> We are the world larget university</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                            leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                        <a href="" class="hero-btn next-btn">explore</a>
                    </div>

                    <div class="about-col">
                        <img src={about} alt="" />
                    </div>

                </div>


            </section>

            <section class="footer">

                <h4> About us</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s. </p>

                <div class="icons">

                    <i class="fab fa-facebook-square"></i>
                    <i class="fab fa-twitter-square"></i>
                    <i class="fab fa-linkedin"></i>


                </div>

            </section>
            <Footer />
        </div>
    )
}

export default AboutUs
