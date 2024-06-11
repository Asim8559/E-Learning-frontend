import React from 'react';
import { FaPaintBrush, FaCode, FaBook, FaLaptopCode, FaDumbbell, FaBullhorn, FaPencilRuler, FaBriefcase, FaProjectDiagram } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const categories = [
  { name: 'UI/UX Design Courses', courses: 25, icon: <FaPencilRuler /> },
  { name: 'Art & Design', courses: 25, icon: <FaPaintBrush /> },
  { name: 'Computer Science', courses: 10, icon: <FaCode /> },
  { name: 'History & Archeologic', courses: 15, icon: <FaBook /> },
  { name: 'Software Engineering', courses: 30, icon: <FaLaptopCode /> },
  { name: 'Information Software', courses: 60, icon: <FaProjectDiagram /> },
  { name: 'Health & Fitness', courses: 10, icon: <FaDumbbell /> },
  { name: 'Marketing', courses: 30, icon: <FaBullhorn /> },
  { name: 'Graphic Design', courses: 80, icon: <FaPencilRuler /> },
  { name: 'Business Administration', courses: 17, icon: <FaBriefcase /> },
  { name: 'Web Management', courses: 17, icon: <FaProjectDiagram /> },
];

const courses = [
  {
    id: 1,
    title: 'Introducing to Programming with WordPress',
    instructor: 'John Smith',
    lectures: 50,
    hours: 190,
    price: 100,
    monthlyPrice: 15,
  },
  // Add more courses as needed
];

const Courses = () => {
  const navigate = useNavigate();

  const handleEnrollClick = (id) => {
    navigate(`/course/${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8">Browse Our Online Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {categories.map((category, index) => (
          <div key={index} className="border rounded-lg p-6 text-center bg-white shadow-md">
            <div className="text-4xl text-teal-500 mb-4">{category.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
            <p className="text-gray-500">{category.courses} Courses</p>
          </div>
        ))}
      </div>
      <h2 className="text-3xl font-bold mb-8">Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div key={index} className="border rounded-lg p-6 bg-white shadow-md">
            <div className="flex justify-center mb-4">
              <FaLaptopCode className="text-4xl text-teal-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
            <div className="flex items-center justify-center mb-2">
              <div className="flex items-center">
                <div className="flex items-center">
                  <div className="flex items-center justify-center text-teal-500 mr-2">
                    ★★★★★
                  </div>
                  <span className="text-gray-500">(5.0)</span>
                </div>
              </div>
            </div>
            <p className="text-gray-500 mb-4">by {course.instructor}</p>
            <p className="text-gray-500 mb-4">{course.lectures} lectures ({course.hours} hrs)</p>
            <p className="text-teal-500 mb-4">${course.price} All Course / ${course.monthlyPrice} per month</p>
            <button onClick={() => handleEnrollClick(course.id)} className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">ENROLL NOW!</button>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <nav className="inline-flex space-x-2">
          <button className="border rounded px-3 py-1 hover:bg-gray-200">&lt;</button>
          <button className="border rounded px-3 py-1 bg-teal-500 text-white">1</button>
          <button className="border rounded px-3 py-1 hover:bg-gray-200">2</button>
          <button className="border rounded px-3 py-1 hover:bg-gray-200">3</button>
          <button className="border rounded px-3 py-1 hover:bg-gray-200">4</button>
          <button className="border rounded px-3 py-1 hover:bg-gray-200">5</button>
          <button className="border rounded px-3 py-1 hover:bg-gray-200">&gt;</button>
        </nav>
      </div>
    </div>
  );
};

export default Courses;
