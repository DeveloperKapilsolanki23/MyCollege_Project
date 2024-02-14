import React from 'react'
import { data } from '../Pages/DataJson'

const CourseContent = () => {
    return (
        <div>
            <section className="course">

                <div className="container">
                    <h1> We Offer Courses</h1>
                    <p className="pt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                    <div className="row">
                        {
                            data.length > 0 ?
                                data.map(
                                    (curl, index) => {
                                        return (
                                            <div className="col-xl-4 col-md-6 col-12" key={index}>
                                                <div className="course-col">
                                                    <h3>{curl.head}  </h3>
                                                    <p>{curl.para} </p>
                                                </div>
                                            </div>
                                        )

                                    }
                                ) : ""
                        }


                    </div>
                </div>
            </section>

        </div>
    )
}

export default CourseContent
