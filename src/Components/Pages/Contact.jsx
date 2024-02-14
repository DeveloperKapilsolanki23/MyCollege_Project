import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from './Navbar'

const Contact = () => {
    return (
        <div>
            <Navbar
                type="contact_wrap" />
            <section className="location">

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221243.77871268144!2d77.97584048314972!3d29.95257576712705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909470eb8ee57c9%3A0x4e449176a640f5f3!2sHaridwar%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1628054494962!5m2!1sen!2sin"
                    width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy"></iframe>

            </section>

            <section className="contact-us">

                <div className="container">
                    <div className="row">
                        <div className="contact-col">

                            <div>

                                <i className="fa-solid fa-house"></i>

                                <span>

                                    <h5> abc road, xyz building</h5>
                                    <p> haridwar, uttrakhand</p>

                                </span>

                            </div>

                            <div>

                                <i className="fa-solid fa-phone"></i>

                                <span>

                                    <h5> +91 91111111111</h5>
                                    <p> monday to saturday , 10am to 5p</p>

                                </span>

                            </div>
                            <div>

                                <i className="fa-solid fa-envelope"></i>

                                <span>

                                    <h5> developerkapilkumar@gmail.com</h5>
                                    <p> email us for query</p>

                                </span>
                            </div>


                        </div>
                        <div className="contact-col">

                            <form>

                                <input type="text" placeholder="Enter your name" name="" required />
                                <input type="email" placeholder="Enter your email" name="" required />
                                <input type="" placeholder="Enter your subject" name="" required />
                                <textarea name="" cols="" rows="8" placeholder="Message" required></textarea>
                                <button type="submit" className="hero-btn next-btn"> send</button>



                            </form>


                        </div>
                        <section className="footer">

                            <h4> Contact </h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s. </p>

                            <div className="icons">

                                <i className="fab fa-facebook-square"></i>
                                <i className="fab fa-twitter-square"></i>
                                <i className="fab fa-linkedin"></i>


                            </div>

                        </section>
                    </div>
                </div>
            </section>
            <Footer />
        </div>

    )
}

export default Contact
