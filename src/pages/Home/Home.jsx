import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import boy from "../../assets/boy.jpeg"
import c1 from "../../assets/crousel.jpeg"
import c2 from "../../assets/crousel2.jpeg"
import c3 from "../../assets/crouse5.jpeg"
import c4 from "../../assets/crouse3.jpeg"
import Time from '../../components/Time/Time'
import Courses from '../../components/Courses/Courses'
import FinalNews from '../../components/FinalNews/FinalNews'

const Home = () => {
    const images = [
        boy,
        c1,
        c2,
        c3
    ];

    return (
        <div className='w-full h-full flex flex-col '>
            <Carousel images={images}/>
            <div className='w-full'>
                <Time/>
            </div>
            <div className='w-full'>
                <Courses/>
            </div>
            <div className='w-full'>
                <FinalNews/>
            </div>
        </div>
    )
}

export default Home