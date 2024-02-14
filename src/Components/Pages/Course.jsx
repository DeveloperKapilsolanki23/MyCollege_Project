import React from 'react'
import Navbar from './Navbar'
import Footer from '../Footer/Footer'
import CourseContent from '../CommomComponent/CourseContent'
import FacilitiesContent from '../CommomComponent/FacilitiesContent'

const Course = () => {
    return (
        <div>
            <Navbar
                type={"course_wrap"}
                headText="courses"
            />


            <CourseContent />


            <FacilitiesContent />
            <Footer />
        </div>
    )
}

export default Course
