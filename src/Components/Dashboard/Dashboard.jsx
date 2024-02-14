import React from 'react'
import Navbar from '../Pages/Navbar'


import Footer from '../Footer/Footer'
import { data, facilitiesData, imageData } from '../Pages/DataJson'
import CourseContent from '../CommomComponent/CourseContent'
import FacilitiesContent from '../CommomComponent/FacilitiesContent'



const Dashboard = () => {
    return (
        <div>
            <Navbar
                type="header"
                headText="IIT biggest university"
            />


            <CourseContent />

            <section className="campus">

                <div className="container">
                    <h1 className='mb-3'> Our Global Campus</h1>

                    <div className="row">
                        {
                            imageData.length > 0 ?
                                imageData.map(
                                    (imageData, index) => {
                                        return (
                                            <div className="col-xl-4 col-md-6 col-12" key={index}>
                                                <div className="campus-col">
                                                    <img
                                                        src={imageData.imageUrl}
                                                        alt="" />
                                                    <div className="layer">
                                                        <h3>{imageData.imageText}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                ) : "not found"
                        }


                    </div>
                </div>

            </section >



            <FacilitiesContent />


            <section className="testimonials">

                <div className="container">
                    <h1> What Our Student Says </h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                    <div className="row">

                        <div className="col-md-6 col-12 mb-3">
                            <div className="testimonials-col">

                                <img src="../../Assests/Images/user1.jpg" alt="" />

                                <div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                        the
                                        industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                                        has
                                        survived not only five centuries, but also the leap .
                                    </p>
                                    <h3>Sanjay Rohit</h3>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="far fa-star"></i>



                                </div>

                            </div>
                        </div>

                        <div className="col-md-6 col-12">
                            <div className="testimonials-col">

                                <img src="../../Assests/Images/user2.jpg" alt="" />
                                <div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                        the
                                        industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                                        has
                                        survived not only five centuries, but also the leap .
                                    </p>
                                    <h3>Ankit Rawat</h3>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="far fa-star"></i>

                                </div>

                            </div>
                        </div>


                    </div>
                </div>

            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="cta">

                            <h1>Enroll for our various online course any where form the world</h1>
                            <a href="" className="hero-btn cta_color">contact us</a>

                        </div>
                    </div>
                </div>
            </section>


            <section className="footer">

                <h4>Home </h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s. </p>

                <div className="icons">

                    <i className="fab fa-facebook-square"></i>
                    <i className="fab fa-twitter-square"></i>
                    <i className="fab fa-linkedin"></i>


                </div>

            </section>
            <Footer />
        </div >
    )
}

export default Dashboard
