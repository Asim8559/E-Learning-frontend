import React from 'react';

function CourseCard({ course }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <span className="text-xs text-gray-500 uppercase">{course.category}</span>
        <h2 className="text-lg font-semibold mt-2">{course.title}</h2>
        <p className="text-sm text-gray-700">{course.description}</p>
        <p className="text-sm text-green-500 mt-2">{course.price}</p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">View More</button>
      </div>
    </div>
  );
}

export default CourseCard;
