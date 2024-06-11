import React from 'react';
import CourseCard from './CourseCard.jsx';

const courses = [
  { id: 1, title: 'Course 1', rating: 5.0, instructor: 'John Smith', lectures: 50, duration: 190, price: 100, monthlyPrice: 15 },
  { id: 2, title: 'Course 2', rating: 4.8, instructor: 'Jane Doe', lectures: 40, duration: 150, price: 80, monthlyPrice: 12 },
  { id: 3, title: 'Course 3', rating: 4.5, instructor: 'Alice Johnson', lectures: 30, duration: 120, price: 60, monthlyPrice: 10 },
  // Add more courses as needed
];

const CourseList = () => {
  return (
    <div className="flex justify-center items-center h-full bg-gray-100 w-100%">
      <div>
        <h1 className="text-center text-3xl font-bold py-4">Our Best Courses</h1>
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap -mx-4">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
