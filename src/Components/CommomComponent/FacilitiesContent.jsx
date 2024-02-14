import React from 'react'
import { facilitiesData } from '../Pages/DataJson'

const FacilitiesContent = () => {
    return (
        <div>
            <section className="facilities">

                <div className="container">
                    <h1>Our Facilities</h1>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>


                    <div className="row">
                        {
                            facilitiesData.length > 0 ?
                                facilitiesData.map(
                                    (facilitiesData, index) => {
                                        return (
                                            <div className="col-xl-4 col-md-6 col-12">
                                                <div className="facilities-col" key={index}>

                                                    <img src={facilitiesData.facUrl} />

                                                    <h3>{facilitiesData.facHead} </h3>
                                                    <p>{facilitiesData.facText}</p>

                                                </div>
                                            </div>
                                        )
                                    }
                                ) : "no-facilities"

                        }




                    </div>
                </div>
            </section >

        </div>
    )
}

export default FacilitiesContent
