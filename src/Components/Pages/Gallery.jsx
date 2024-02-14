import React from 'react'
import Navbar from './Navbar'
import Footer from '../Footer/Footer'

const Gallery = () => {
    return (
        <div>
            <Navbar
                type={"gallery_wrap"}
                headText="Gallery"
            />

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div class="gallery-image">
                            <div class="img-box">
                                <img src="https://picsum.photos/350/250?image=444" alt="" />
                                <div class="transparent-box">
                                    <div class="caption">
                                        <p>Library</p>
                                        <p class="opacity-low">Architect Design</p>
                                    </div>
                                </div>
                            </div>
                            <div class="img-box">
                                <img src="https://picsum.photos/350/250/?image=232" alt="" />
                                <div class="transparent-box">
                                    <div class="caption">
                                        <p>Night Sky</p>
                                        <p class="opacity-low">Cinematic</p>
                                    </div>
                                </div>
                            </div>
                            <div class="img-box">
                                <img src="https://picsum.photos/350/250/?image=431" alt="" />
                                <div class="transparent-box">
                                    <div class="caption">
                                        <p>Tea Talk</p>
                                        <p class="opacity-low">Composite</p>
                                    </div>
                                </div>
                            </div>
                            <div class="img-box">
                                <img src="https://picsum.photos/350/250?image=474" alt="" />
                                <div class="transparent-box">
                                    <div class="caption">
                                        <p>Road</p>
                                        <p class="opacity-low">Landscape</p>
                                    </div>
                                </div>
                            </div>
                            <div class="img-box">
                                <img src="https://picsum.photos/350/250?image=344" alt="" />
                                <div class="transparent-box">
                                    <div class="caption">
                                        <p>Sea</p>
                                        <p class="opacity-low">Cityscape</p>
                                    </div>
                                </div>
                            </div>
                            <div class="img-box">
                                <img src="https://picsum.photos/350/250?image=494" alt="" />
                                <div class="transparent-box">
                                    <div class="caption">
                                        <p>Vintage</p>
                                        <p class="opacity-low">Cinematic</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default Gallery
