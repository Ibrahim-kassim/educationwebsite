import React from 'react';
import CourseCard from '../CourseCard/CourseCard';
import { FaBagShopping } from 'react-icons/fa6';
import { FaBook, FaChalkboardTeacher, FaLaptopCode, FaMicroscope } from 'react-icons/fa';

const CoursesComponent = () => {
  const courses = [
    { title: "Brevet", subtitle: "Subtitle 1", iconSrc: FaBagShopping },
    { title: "Programming", subtitle: "Learn to code", iconSrc: FaLaptopCode },
    { title: "Science", subtitle: "Explore the universe", iconSrc: FaMicroscope },
    { title: "Mathematics", subtitle: "Numbers and equations", iconSrc: FaBook },
    { title: "Teaching", subtitle: "Education techniques", iconSrc: FaChalkboardTeacher },
  ];

  return (
    <div className=' lg:px-16 w-full flex items-center '>
      <div className='grid px-7 items-center justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full p-4'>
        {courses.map((course, index) => (
          <CourseCard 
            key={index} 
            title={course.title} 
            subtitle={course.subtitle} 
            iconSrc={course.iconSrc} 
          />
        ))}
      </div>
    </div>
  );
}

export default CoursesComponent;
