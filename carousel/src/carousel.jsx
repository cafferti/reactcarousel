import React, { useState } from 'react';
import './index.css'; // Import your CSS for styling

const CrewCarousel = ({ crewmembers }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? crewmembers.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === crewmembers.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <button className="carousel-button" onClick={prevSlide}>
        Previous
      </button>
      <div className="carousel-content">
        <h3>{crewmembers[currentIndex].Role}</h3>
        <p>{crewmembers[currentIndex].Name}</p>
        <p>{crewmembers[currentIndex].About}</p>
      </div>
      <button className="carousel-button" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default CrewCarousel;
