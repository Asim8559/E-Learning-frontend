// src/pages/Home.jsx
import React from 'react';
import LandingsSection from '../components/LandingsSection.jsx';
import CourseList from '../components/CourseList.jsx';
import Categories from '../components/Categories.jsx';
import TestimonialSection from '../components/TestimonialSection.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {
  return (
    <div>
      <LandingsSection />
      
      <CourseList />
      <Categories />
      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default Home;
