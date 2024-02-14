import React from 'react'
import Navbar from './Navbar'
import Footer from '../Footer/Footer'
import { galleryData } from './DataJson'


const Gallery = () => {
    return (
        <div>
            <Navbar
                type={"gallery_wrap"}
                headText="Gallery"
            />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="gallery-image">
                            {
                                galleryData.length > 0 ?
                                    galleryData.map(
                                        (galleryData, index) => {
                                            return (
                                                <div className="img-box" key={index} >
                                                    <img src={galleryData.galleryUrl} alt="" />
                                                    <div className="transparent-box">
                                                        <div className="caption">
                                                            <p>{galleryData.galleryText}</p>
                                                            <p className="opacity-low">{galleryData.galleryPara}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    ) : ""
                            }

                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default Gallery
